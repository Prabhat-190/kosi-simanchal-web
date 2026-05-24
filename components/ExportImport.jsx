import React from 'react';

export default function ExportImport() {
  return (
    <section className="wrapper position-relative" id="export-import" style={{ backgroundColor: '#0f172a' }}>
      <div className="container py-14 py-md-16">
        <div className="row align-items-center gx-lg-8">
          
          <div className="col-lg-6 mb-8 mb-lg-0" data-cue="slideInLeft">
            <div className="position-relative rounded-4 shadow-lg overflow-hidden animate-float" style={{ height: '550px' }}>
              <img 
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80" 
                alt="Global Shipping and Logistics" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.75' }} 
              />
             
              <div className="position-absolute top-50 start-50 translate-middle text-center glass-card p-4 w-75" style={{ borderTop: '4px solid #ffb300', borderRadius: '15px' }}>
                <i className="fas fa-ship fa-3x mb-3 animate-pulse" style={{ color: '#ffb300' }}></i>
                <h4 className="oswald text-white mb-1">Authorized Exporter</h4>
                <p className="small text-light opacity-75 mb-0 tracking-wider text-uppercase">Govt. of India Recognized</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-cue="slideInRight">
            <h6 className="text-uppercase fw-bold oswald mb-2" style={{ color: '#ffb300', letterSpacing: '3px' }}>
              <i className="fas fa-globe-americas me-2"></i> Global Supply Chain
            </h6>
            <h2 className="display-4 oswald fw-bold mb-4 text-white">
              Export & Import <span className="text-gradient-gold">Division</span>
            </h2>
            <p className="lead text-light opacity-75 roboto mb-6 pe-lg-5">
              Beyond domestic infrastructure, Kosi Simanchal is an authorized Government of India trading entity. We specialize in the import and export of premium building materials, heavy machinery, and industrial commodities.
            </p>

            <div className="row gy-5 mb-7">
              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <div className="btn-circle btn-sm shadow-sm me-3" style={{ backgroundColor: 'rgba(255, 179, 0, 0.15)', color: '#ffb300' }}>
                    <i className="fas fa-file-contract fs-20"></i>
                  </div>
                  <div>
                    <h6 className="oswald mb-1 text-white fs-18">Official IEC Holder</h6>
                    <p className="text-light opacity-50 small mb-0">License: AAJCK8645D</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <div className="btn-circle btn-sm shadow-sm me-3" style={{ backgroundColor: 'rgba(255, 179, 0, 0.15)', color: '#ffb300' }}>
                    <i className="fas fa-cubes fs-20"></i>
                  </div>
                  <div>
                    <h6 className="oswald mb-1 text-white fs-18">Material Sourcing</h6>
                    <p className="text-light opacity-50 small mb-0">Global procurement</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <div className="btn-circle btn-sm shadow-sm me-3" style={{ backgroundColor: 'rgba(255, 179, 0, 0.15)', color: '#ffb300' }}>
                    <i className="fas fa-truck-moving fs-20"></i>
                  </div>
                  <div>
                    <h6 className="oswald mb-1 text-white fs-18">Heavy Machinery</h6>
                    <p className="text-light opacity-50 small mb-0">Importing advanced tech</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <div className="btn-circle btn-sm shadow-sm me-3" style={{ backgroundColor: 'rgba(255, 179, 0, 0.15)', color: '#ffb300' }}>
                    <i className="fas fa-check-double fs-20"></i>
                  </div>
                  <div>
                    <h6 className="oswald mb-1 text-white fs-18">Customs Clearance</h6>
                    <p className="text-light opacity-50 small mb-0">End-to-end logistics</p>
                  </div>
                </div>
              </div>
            </div>

            
            <a href="#trade-consultation" className="btn-industrial mt-2">
              <div className="icon-wrapper">
                <i className="fas fa-file-signature animate-pulse"></i>
              </div>
              <div className="text-wrapper">
                <span className="title">Consult Trade Division</span>
                <span className="subtitle">Request Procurement & Logistics Quote</span>
              </div>
              <i className="fas fa-chevron-right ms-2 me-4 fs-5" style={{ opacity: '0.4' }}></i>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}