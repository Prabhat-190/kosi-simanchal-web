"use client";
import React from 'react';

export default function PaymentContact() {
  return (
    <section className="py-5" id="payment">
      <div className="container py-5">
        <div className="row g-5">
       
          {/* Trust Certificates Section (Replaces Payment) */}
          <div className="col-lg-6">
            <h6 className="fw-bold text-uppercase" style={{ color: '#ffb300' }}>Accreditations</h6>
            <h2 className="fw-bold mb-4" style={{ color: '#0f172a' }}>Trust & Certifications</h2>
            <p className="text-muted mb-4 pe-lg-4">
              We are a recognized Class 3 construction entity committed to uncompromising quality, complete transparency, and international standards.
            </p>

            <div className="row g-4">
              {/* Certificate 1: ISO */}
              <div className="col-6">
                <div className="card border-0 shadow-sm h-100 rounded-3 overflow-hidden bg-light">
                  <img 
                    src="/img/projects/iso-certificate.jpg" 
                    alt="ISO Certification" 
                    className="w-100" 
                    style={{ height: '140px', objectFit: 'cover' }} 
                    onError={(e) => { e.target.style.display = 'none'; }} 
                  />
                  <div className="card-body p-3 text-center">
                    <h6 className="mb-0 fw-bold oswald text-dark" style={{ fontSize: '14px' }}>ISO 9001:2015</h6>
                  </div>
                </div>
              </div>

              {/* Certificate 2: MSME */}
              <div className="col-6">
                <div className="card border-0 shadow-sm h-100 rounded-3 overflow-hidden bg-light">
                  <img 
                    src="/img/projects/msme-certificate.jpg" 
                    alt="MSME Registration" 
                    className="w-100" 
                    style={{ height: '140px', objectFit: 'cover' }} 
                    onError={(e) => { e.target.style.display = 'none'; }} 
                  />
                  <div className="card-body p-3 text-center">
                    <h6 className="mb-0 fw-bold oswald text-dark" style={{ fontSize: '14px' }}>MSME Registered</h6>
                  </div>
                </div>
              </div>

              {/* Certificate 3: PWD Class 3 */}
              <div className="col-6">
                <div className="card border-0 shadow-sm h-100 rounded-3 overflow-hidden bg-light">
                  <img 
                    src="/img/projects/pwd-license.jpg" 
                    alt="PWD License" 
                    className="w-100" 
                    style={{ height: '140px', objectFit: 'cover' }} 
                    onError={(e) => { e.target.style.display = 'none'; }} 
                  />
                  <div className="card-body p-3 text-center">
                    <h6 className="mb-0 fw-bold oswald text-dark" style={{ fontSize: '14px' }}>Class 3 Contractor</h6>
                  </div>
                </div>
              </div>

              {/* Certificate 4: GST */}
              <div className="col-6">
                <div className="card border-0 shadow-sm h-100 rounded-3 overflow-hidden bg-light">
                  <img 
                    src="/img/projects/gst-certificate.jpg" 
                    alt="GST Certificate" 
                    className="w-100" 
                    style={{ height: '140px', objectFit: 'cover' }} 
                    onError={(e) => { e.target.style.display = 'none'; }} 
                  />
                  <div className="card-body p-3 text-center">
                    <h6 className="mb-0 fw-bold oswald text-dark" style={{ fontSize: '14px' }}>GST Compliant</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="col-lg-6" id="contact">
            <h6 className="fw-bold text-uppercase" style={{ color: '#ffb300' }}>Get in Touch</h6>
            <h2 className="fw-bold mb-4" style={{ color: '#0f172a' }}>Contact Us</h2>
            
            <div className="mb-4">
              <h5 className="fw-bold"><i className="fas fa-building me-2" style={{ color: '#ffb300' }}></i> Principal Office</h5>
              <p className="text-muted ms-4">Nala Road, Rajiv Nagar, Near Green Field School, Patliputra, Patna, Bihar - 800024</p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold"><i className="fas fa-map-marker-alt me-2" style={{ color: '#ffb300' }}></i> Registered Office</h5>
              <p className="text-muted ms-4">Chandra Commercial Complex, Ward No. 09, Araria, Bihar - 854311</p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold"><i className="fas fa-envelope me-2" style={{ color: '#ffb300' }}></i> Email Address</h5>
              <p className="text-muted ms-4 mb-0">support@kosisimanchal.com</p>
              <p className="text-muted ms-4">drmararia@gmail.com</p>
            </div>

            <div>
              <h5 className="fw-bold"><i className="fas fa-phone-alt me-2" style={{ color: '#ffb300' }}></i> Phone Numbers</h5>
              <p className="text-muted ms-4 mb-0">+91 9523792670, +91 9234459897</p>
              <p className="text-muted ms-4">+91 8789196019, +91 8368796711</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}