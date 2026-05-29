"use client";
import React from 'react';

export default function PaymentContact() {
  return (
    <section className="py-5" id="payment">
      <div className="container py-5">
        <div className="row g-5">
       
          {/* Trust Certificates Section */}
          <div className="col-lg-7">
            <h6 className="fw-bold text-uppercase" style={{ color: '#ffb300' }}>Accreditations</h6>
            <h2 className="fw-bold mb-4" style={{ color: '#0f172a' }}>Trust & Certifications</h2>
            <p className="text-muted mb-4 pe-lg-4">
              We operate with complete transparency and hold recognized certifications from premier government authorities, ensuring uncompromising quality and compliance.
            </p>

            <div className="row g-3">
              {/* 1. Incorporation */}
              <div className="col-6 col-md-4">
                <div className="card border-0 shadow-sm h-100 rounded-3 overflow-hidden bg-light">
                  <div className="position-relative" style={{ height: '120px', backgroundColor: '#e2e8f0' }}>
                    <img 
                      src="/img/projects/incorporation-certificate.jpg" 
                      alt="Certificate of Incorporation" 
                      className="w-100 h-100" 
                      style={{ objectFit: 'cover' }} 
                      onError={(e) => { e.target.style.display = 'none'; }} 
                    />
                  </div>
                  <div className="card-body p-2 text-center d-flex align-items-center justify-content-center">
                    <h6 className="mb-0 fw-bold oswald text-dark" style={{ fontSize: '13px' }}>MCA Incorporated</h6>
                  </div>
                </div>
              </div>

              {/* 2. MCA Active */}
              <div className="col-6 col-md-4">
                <div className="card border-0 shadow-sm h-100 rounded-3 overflow-hidden bg-light">
                  <div className="position-relative" style={{ height: '120px', backgroundColor: '#e2e8f0' }}>
                    <img 
                      src="/img/projects/mca-master-data.jpg" 
                      alt="MCA Master Data" 
                      className="w-100 h-100" 
                      style={{ objectFit: 'cover' }} 
                      onError={(e) => { e.target.style.display = 'none'; }} 
                    />
                  </div>
                  <div className="card-body p-2 text-center d-flex align-items-center justify-content-center">
                    <h6 className="mb-0 fw-bold oswald text-dark" style={{ fontSize: '13px' }}>Active MCA Status</h6>
                  </div>
                </div>
              </div>

              {/* 3. GST */}
              <div className="col-6 col-md-4">
                <div className="card border-0 shadow-sm h-100 rounded-3 overflow-hidden bg-light">
                  <div className="position-relative" style={{ height: '120px', backgroundColor: '#e2e8f0' }}>
                    <img 
                      src="/img/projects/gst-certificate.jpg" 
                      alt="GST Registration" 
                      className="w-100 h-100" 
                      style={{ objectFit: 'cover' }} 
                      onError={(e) => { e.target.style.display = 'none'; }} 
                    />
                  </div>
                  <div className="card-body p-2 text-center">
                    <h6 className="mb-0 fw-bold oswald text-dark" style={{ fontSize: '13px' }}>GST Registered</h6>
                    <span className="d-block small text-muted" style={{ fontSize: '10px' }}>10AAJCK8645D1ZP</span>
                  </div>
                </div>
              </div>

              {/* 4. Startup India */}
              <div className="col-6 col-md-4">
                <div className="card border-0 shadow-sm h-100 rounded-3 overflow-hidden bg-light">
                  <div className="position-relative" style={{ height: '120px', backgroundColor: '#e2e8f0' }}>
                    <img 
                      src="/img/projects/startup-india-certificate.jpg" 
                      alt="Startup India" 
                      className="w-100 h-100" 
                      style={{ objectFit: 'cover' }} 
                      onError={(e) => { e.target.style.display = 'none'; }} 
                    />
                  </div>
                  <div className="card-body p-2 text-center">
                    <h6 className="mb-0 fw-bold oswald text-dark" style={{ fontSize: '13px' }}>Startup India</h6>
                    <span className="d-block small text-muted" style={{ fontSize: '10px' }}>DIPP188656</span>
                  </div>
                </div>
              </div>

              {/* 5. IEC / Trade */}
              <div className="col-6 col-md-4">
                <div className="card border-0 shadow-sm h-100 rounded-3 overflow-hidden bg-light">
                  <div className="position-relative" style={{ height: '120px', backgroundColor: '#e2e8f0' }}>
                    <img 
                      src="/img/projects/iec-certificate.jpg" 
                      alt="Importer Exporter Code" 
                      className="w-100 h-100" 
                      style={{ objectFit: 'cover' }} 
                      onError={(e) => { e.target.style.display = 'none'; }} 
                    />
                  </div>
                  <div className="card-body p-2 text-center">
                    <h6 className="mb-0 fw-bold oswald text-dark" style={{ fontSize: '13px' }}>DGFT IEC</h6>
                    <span className="d-block small text-muted" style={{ fontSize: '10px' }}>AAJCK8645D</span>
                  </div>
                </div>
              </div>

              {/* 6. PWD / Contractor */}
              <div className="col-6 col-md-4">
                <div className="card border-0 shadow-sm h-100 rounded-3 overflow-hidden bg-light">
                  <div className="position-relative" style={{ height: '120px', backgroundColor: '#e2e8f0' }}>
                    <img 
                      src="/img/projects/pwd-license.jpg" 
                      alt="PWD License" 
                      className="w-100 h-100" 
                      style={{ objectFit: 'cover' }} 
                      onError={(e) => { e.target.style.display = 'none'; }} 
                    />
                  </div>
                  <div className="card-body p-2 text-center d-flex align-items-center justify-content-center">
                    <h6 className="mb-0 fw-bold oswald text-dark" style={{ fontSize: '13px' }}>Class 3 Contractor</h6>
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
                <p className="text-muted ms-4 mb-0 small">+91 9523792670, +91 9234459897<br/>+91 8789196019, +91 8368796711</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}