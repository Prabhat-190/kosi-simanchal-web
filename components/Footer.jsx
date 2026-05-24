import React from 'react';

export default function Footer() {
  return (
    <footer className="pt-5 pb-3 text-white" style={{ backgroundColor: '#1a237e' }}>
      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-lg-5 mb-4">
            <h4 className="mb-4 text-white fw-bold">KOSI SIMANCHAL</h4>
            <p className="small text-light opacity-75 pe-lg-4">
              Delivering high-quality, cost-effective infrastructure projects, commercial complexes, and specialized civil works across India.
            </p>
            <div className="mt-4 p-3 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
              <strong className="d-block mb-1">CIN: U45309BR2022PTC060438</strong>
              <strong className="d-block mb-1">GSTIN: 10AAJCK8645D1ZP</strong>
              <strong className="d-block">IEC: AAJCK8645D</strong>
            </div>
          </div>
          
          <div className="col-lg-7 mb-4">
            <h5 className="mb-4 text-white fw-bold border-bottom border-danger pb-2 d-inline-block">Contact Details</h5>
            <div className="row">
              <div className="col-md-6 mb-4">
                <h6 className="text-danger fw-bold mb-3">Principal Office</h6>
                <p className="mb-2 text-light small">
                  <i className="fas fa-map-marker-alt me-2 text-danger"></i> Nala Road, Rajiv Nagar, Near Green Field School, Patliputra Colony, Patna, Bihar - 800013
                </p>
                <p className="mb-2 text-light small">
                  <i className="fas fa-envelope me-2 text-danger"></i> support@kosisimanchal.com
                </p>
                <p className="mb-2 text-light small">
                  <i className="fas fa-phone me-2 text-danger"></i> +91 9523792670
                </p>
              </div>

              <div className="col-md-6 mb-4">
                <h6 className="text-danger fw-bold mb-3">Registered Office</h6>
                <p className="mb-2 text-light small">
                  <i className="fas fa-map-marker-alt me-2 text-danger"></i> Chandra Commercial Complex, Ward No. 09, Araria, Pin - 854311
                </p>
                <p className="mb-2 text-light small">
                  <i className="fas fa-envelope me-2 text-danger"></i> drmararia@gmail.com
                </p>
                <p className="mb-2 text-light small">
                  <i className="fas fa-phone me-2 text-danger"></i> +91 9234459897, 8789196019
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
        <div className="text-center small text-light opacity-75 mt-3">
          &copy; {new Date().getFullYear()} Kosi Simanchal Manufacturing & Construction Pvt. Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}