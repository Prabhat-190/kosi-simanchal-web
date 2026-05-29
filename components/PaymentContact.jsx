"use client";
import React from 'react';

export default function PaymentContact() {
  return (
    <section className="py-5" id="payment">
      <div className="container py-5">
        <div className="row g-5">
       
          {/* Trust Certificates Section (Only 3 High-Quality Images) */}
          <div className="col-lg-7">
            <h6 className="fw-bold text-uppercase" style={{ color: '#ffb300' }}>Accreditations</h6>
            <h2 className="fw-bold mb-4" style={{ color: '#0f172a' }}>Trust & Certifications</h2>
            <p className="text-muted mb-4 pe-lg-4">
              We operate with complete transparency and hold recognized certifications from premier government authorities, ensuring uncompromising quality and compliance.
            </p>

            <div className="row g-4">
              
              {/* 1. GST Certificate */}
              <div className="col-12 col-md-4">
                <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden bg-white border">
                  <div className="position-relative p-2" style={{ height: '220px', backgroundColor: '#f8fafc' }}>
                    <img 
                      src="/img/projects/gst-certificate.jpg" 
                      alt="GST Registration" 
                      className="w-100 h-100" 
                      style={{ objectFit: 'contain' }} 
                    />
                  </div>
                  <div className="card-body p-3 text-center border-top">
                    <h6 className="mb-0 fw-bold oswald text-dark" style={{ fontSize: '14px' }}>GST Registered</h6>
                    <span className="d-block small text-muted mt-1" style={{ fontSize: '11px' }}>10AAJCK8645D1ZP</span>
                  </div>
                </div>
              </div>

              {/* 2. Startup India */}
              <div className="col-12 col-md-4">
                <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden bg-white border">
                  <div className="position-relative p-2" style={{ height: '220px', backgroundColor: '#f8fafc' }}>
                    <img 
                      src="/img/projects/startup-india-certificate.jpg" 
                      alt="Startup India" 
                      className="w-100 h-100" 
                      style={{ objectFit: 'contain' }} 
                    />
                  </div>
                  <div className="card-body p-3 text-center border-top">
                    <h6 className="mb-0 fw-bold oswald text-dark" style={{ fontSize: '14px' }}>Startup India</h6>
                    <span className="d-block small text-muted mt-1" style={{ fontSize: '11px' }}>DIPP188656</span>
                  </div>
                </div>
              </div>

              {/* 3. IEC / Trade */}
              <div className="col-12 col-md-4">
                <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden bg-white border">
                  <div className="position-relative p-2" style={{ height: '220px', backgroundColor: '#f8fafc' }}>
                    <img 
                      src="/img/projects/iec-certificate.jpg" 
                      alt="Importer Exporter Code" 
                      className="w-100 h-100" 
                      style={{ objectFit: 'contain' }} 
                    />
                  </div>
                  <div className="card-body p-3 text-center border-top">
                    <h6 className="mb-0 fw-bold oswald text-dark" style={{ fontSize: '14px' }}>DGFT IEC</h6>
                    <span className="d-block small text-muted mt-1" style={{ fontSize: '11px' }}>AAJCK8645D</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Section */}
          <div className="col-lg-5" id="contact">
            <div className="p-4 p-md-5 bg-white shadow-sm rounded-4 border">
              <h6 className="fw-bold text-uppercase" style={{ color: '#ffb300' }}>Get in Touch</h6>
              <h2 className="fw-bold mb-4" style={{ color: '#0f172a' }}>Contact Us</h2>
              
              <div className="mb-4">
                <h6 className="fw-bold"><i className="fas fa-building me-2" style={{ color: '#ffb300' }}></i> Principal Office</h6>
                <p className="text-muted ms-4 mb-0 small">Nala Road, Rajiv Nagar, Near Green Field School, Patliputra, Patna, Bihar - 800024</p>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold"><i className="fas fa-map-marker-alt me-2" style={{ color: '#ffb300' }}></i> Registered Office</h6>
                <p className="text-muted ms-4 mb-0 small">Chandra Commercial Complex, Ward No. 09, Araria, Bihar - 854311</p>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold"><i className="fas fa-envelope me-2" style={{ color: '#ffb300' }}></i> Email Address</h6>
                <p className="text-muted ms-4 mb-0 small">support@kosisimanchal.com<br/>drmararia@gmail.com</p>
              </div>

              <div>
                <h6 className="fw-bold"><i className="fas fa-phone-alt me-2" style={{ color: '#ffb300' }}></i> Phone Numbers</h6>
                <p className="text-muted ms-4 mb-0 small">+91 9234459897<br/>+91 8789196019, +91 8368796711</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}