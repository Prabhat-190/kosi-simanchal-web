import React from 'react';

export default function PaymentContact() {
  return (
    <section className="py-5" id="payment">
      <div className="container py-5">
        <div className="row g-5">
          
          {/* Payment Section */}
          <div className="card shadow-lg border-0" style={{ borderRadius: '15px' }}>
  <div className="card-body p-4 p-md-5 bg-white">
    
    <div className="d-flex align-items-center mb-5 border-bottom pb-3">
      <i className="fas fa-building fa-2x me-3" style={{ color: '#ffb300' }}></i>
      <h4 className="oswald fw-bold mb-0 text-dark">Official Company Account</h4>
    </div>

    <ul className="list-unstyled roboto mb-0">
      <li className="mb-4">
        <span className="text-muted small d-block text-uppercase fw-bold" style={{ letterSpacing: '1px' }}>Account Name</span>
        <strong className="fs-16 text-dark">KOSI SIMANCHAL MANUFACTURING AND CONSTRUCTION PVT LTD</strong>
      </li>
      <li className="mb-4">
        <span className="text-muted small d-block text-uppercase fw-bold" style={{ letterSpacing: '1px' }}>Account Number</span>
        <strong className="fs-22 oswald text-dark" style={{ letterSpacing: '2px' }}>20100036967114</strong>
      </li>
      <li className="mb-4">
        <span className="text-muted small d-block text-uppercase fw-bold" style={{ letterSpacing: '1px' }}>IFSC Code</span>
        <strong className="fs-22 oswald text-dark" style={{ letterSpacing: '2px' }}>BDBL0001098</strong>
      </li>
      <li>
        <span className="text-muted small d-block text-uppercase fw-bold" style={{ letterSpacing: '1px' }}>Bank Name</span>
        <strong className="fs-16 text-dark">Bandhan Bank</strong>
      </li>
    </ul>

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