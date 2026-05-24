import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// --- SECURITY SYSTEM 1: IN-MEMORY RATE LIMITER ---
const rateLimitMap = new Map();

// --- SECURITY SYSTEM 2: INPUT SANITIZATION ---
const sanitizeInput = (str) => {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[tag] || tag));
};

export async function POST(request) {
  try {
    // --- SECURITY SYSTEM 3: STRICT ORIGIN VERIFICATION (CORS) ---
    const origin = request.headers.get('origin');
    
    // Officially locked to your production domain
    const allowedOrigins = process.env.NODE_ENV === 'production'
      ? ['https://kosisimanchal.com', 'https://www.kosisimanchal.com'] 
      : ['http://localhost:3000'];

    if (origin && !allowedOrigins.includes(origin)) {
      console.warn(`🛑 SECURITY ALERT: Blocked unauthorized request from: ${origin}`);
      return NextResponse.json({ error: "Unauthorized Domain Connection" }, { status: 403 });
    }

    // --- SECURITY SYSTEM 4: IP SPAM PROTECTION ---
    const ip = request.headers.get('x-forwarded-for') || 'unknown-ip';
    const limit = 5; 
    const windowMs = 15 * 60 * 1000; // 15 minutes

    if (rateLimitMap.has(ip)) {
      const data = rateLimitMap.get(ip);
      if (Date.now() - data.time < windowMs) {
        if (data.count >= limit) {
          console.warn(`🛑 RATE LIMIT: Blocked spam attempt from IP: ${ip}`);
          return NextResponse.json({ error: "Too many requests. Please wait 15 minutes before submitting again." }, { status: 429 });
        }
        data.count++;
      } else {
        rateLimitMap.set(ip, { count: 1, time: Date.now() }); 
      }
    } else {
      rateLimitMap.set(ip, { count: 1, time: Date.now() });
    }

    // --- PROCEED WITH SECURE DATA PROCESSING ---
    const body = await request.json();

    const safeData = {
      contactName: sanitizeInput(body.contactName),
      orgName: sanitizeInput(body.orgName),
      tradeEmail: sanitizeInput(body.tradeEmail),
      tradePhone: sanitizeInput(body.tradePhone),
      category: sanitizeInput(body.category),
      tradeDetails: sanitizeInput(body.tradeDetails),
    };

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SMTP_HOST,
      port: 465,
      secure: true, 
      auth: {
        user: process.env.COMPANY_RECEIVING_EMAIL,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.COMPANY_RECEIVING_EMAIL, 
      to: process.env.COMPANY_RECEIVING_EMAIL,   
      replyTo: safeData.tradeEmail,                  
      subject: `🚨 Official Trade Inquiry from ${safeData.orgName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 2px solid #0f172a; border-radius: 10px; max-width: 600px;">
          <h2 style="color: #ffb300; text-transform: uppercase; margin-bottom: 0;">Kosi Simanchal</h2>
          <p style="color: #666; margin-top: 0;">Trade Division Consultation Request</p>
          <hr style="border-top: 1px solid #eee; margin: 20px 0;" />
          
          <p><strong>Representative:</strong> ${safeData.contactName}</p>
          <p><strong>Organization:</strong> ${safeData.orgName}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeData.tradeEmail}">${safeData.tradeEmail}</a></p>
          <p><strong>Phone:</strong> ${safeData.tradePhone}</p>
          <p><strong>Category:</strong> ${safeData.category}</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin-top: 0;"><strong>Requirements & Details:</strong></p>
            <p style="white-space: pre-wrap;">${safeData.tradeDetails}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent securely to headquarters." },
      { status: 200 }
    );

  } catch (error) {
    console.error("🔴 Backend Processing Error:", error);
    return NextResponse.json(
      { error: "Server failed to process request securely." },
      { status: 500 }
    );
  }
}