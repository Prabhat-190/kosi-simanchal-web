import React from 'react';

export default function AboutInfo() {
  return (
    <div className="py-5 bg-light">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h6 className="text-danger fw-bold text-uppercase mb-2">About The Company</h6>
            <h2 className="mb-4 fw-bold" style={{ color: '#1a237e' }}>Kosi Simanchal Manufacturing & Construction Pvt. Ltd.</h2>
            <p className="text-muted mb-4">
              Established in 2022, we are a premier infrastructure and development firm registered in Bihar. We specialize in executing turnkey projects, including the construction of apartments, commercial complexes, hospitals, and civil engineering works such as roads, bridges, and dams.
            </p>
            
            <div className="bg-white p-4 rounded shadow-sm border-start border-danger border-4 mb-4">
              <ul className="list-unstyled mb-0">
                <li className="mb-3"><i className="fas fa-check-circle text-success me-3"></i> <strong>Startup India Recognized</strong> (DIPP188656)</li>
                <li className="mb-3"><i className="fas fa-check-circle text-success me-3"></i> <strong>Class 3 Rural Works Contractor</strong></li>
                <li className="mb-3"><i className="fas fa-check-circle text-success me-3"></i> <strong>MSME Udyam Registered</strong> (BR-26-0068725)</li>
                <li><i className="fas fa-check-circle text-success me-3"></i> <strong>GeM & IREPS Verified Vendor</strong></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 px-lg-5">
            <div className="rounded shadow-lg overflow-hidden d-flex align-items-center justify-content-center" style={{ height: '450px', backgroundColor: '#e9ecef', border: '2px dashed #ccc' }}>
              <div className="text-center text-muted">
                <i className="fas fa-image fa-3x mb-2"></i>
                <p>Save an image as <strong>about-site.jpg</strong> inside your <strong>public/img</strong> folder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}