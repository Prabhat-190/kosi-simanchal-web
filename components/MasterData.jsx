import React from 'react';

export default function MasterData() {
  const portalLinks = [
    { icon: 'fas fa-user-circle', title: 'Client Portal', desc: 'Login to view your project updates, blueprints, and daily site reports.', link: '#user-login' },
    { icon: 'fas fa-credit-card', title: 'Make a Payment', desc: 'Secure online payment gateway for vendors, contractors, and clients.', link: '#payment' },
    { icon: 'fas fa-box-open', title: 'Order Tracking', desc: 'Track your material supply, heavy machinery, and manufacturing orders.', link: '#orders' },
    { icon: 'fas fa-briefcase', title: 'Careers', desc: 'Join Kosi Simanchal. We are always looking for elite engineers and architects.', link: '#careers' },
    { icon: 'fas fa-info-circle', title: 'About The Company', desc: 'Learn more about our directors, history, and official certifications.', link: '#about' },
    { icon: 'fas fa-headset', title: 'Support Helpdesk', desc: '24/7 customer service and project support for ongoing constructions.', link: '#contact' }
  ];

  return (
    <div className="container py-14 py-md-16" id="credentials">
      
      {/* Section Header */}
      <div className="row text-center mb-8" data-cues="slideInUp">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h2 className="fs-16 text-uppercase mb-3 oswald fw-bold tracking-wider" style={{ color: '#ffb300' }}>
            <i className="fas fa-sitemap me-2"></i> Information Center
          </h2>
          <h3 className="display-4 oswald" style={{ color: '#0f172a' }}>
            Corporate <span className="text-gradient-gold">Master Data</span>
          </h3>
        </div>
      </div>

      {/* Advanced Premium Tabs */}
      {/* Advanced Premium Tabs */}
      <ul className="nav nav-pills justify-content-center mb-10" id="masterDataTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button 
            className="nav-link active btn-premium fw-bold" 
            id="portals-tab" 
            data-bs-toggle="pill" 
            data-bs-target="#portals" 
            type="button" 
            role="tab" 
            aria-selected="true" 
            style={{ padding: '0.8rem 2rem' }}
          >
            <i className="fas fa-laptop-house me-2"></i> Quick Portals
          </button>
        </li>
        <li className="nav-item ms-3" role="presentation">
          <button 
            className="nav-link btn-premium fw-bold" 
            id="credentials-tab" 
            data-bs-toggle="pill" 
            data-bs-target="#official" 
            type="button" 
            role="tab" 
            aria-selected="false" 
            tabIndex="-1" 
            style={{ padding: '0.8rem 2rem' }}
          >
            <i className="fas fa-file-contract me-2"></i> Official Credentials
          </button>
        </li>
      </ul>

      {/* Tab Content Area */}
      <div className="tab-content" id="masterDataTabContent">
        
        {/* TAB 1: CORPORATE PORTALS */}
        <div className="tab-pane fade show active" id="portals" role="tabpanel" aria-labelledby="portals-tab">
          <div className="row gx-md-6 gy-6 text-center" data-cues="fadeIn">
            {portalLinks.map((item, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card shadow-lg card-border-bottom h-100 animate-float" style={{ animationDelay: `${index * 0.15}s`, borderRadius: '15px' }}>
                  <div className="card-body p-5 d-flex flex-column">
                    <div className="icon btn btn-circle btn-lg mb-4 mx-auto shadow-sm" style={{ backgroundColor: 'rgba(255, 179, 0, 0.1)', color: '#ffb300' }}>
                      <i className={`${item.icon} fs-30`}></i>
                    </div>
                    <h4 className="oswald fw-bold mb-3">{item.title}</h4>
                    <p className="roboto text-muted mb-4 flex-grow-1" style={{ fontSize: '0.95rem' }}>{item.desc}</p>
                    <a href={item.link} className="btn btn-sm text-dark fw-bold mt-auto hover" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                      Access Portal <i className="fas fa-arrow-right ms-2" style={{ color: '#ffb300' }}></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TAB 2: OFFICIAL CREDENTIALS (Your older code, visually upgraded!) */}
        <div className="tab-pane fade" id="official" role="tabpanel" aria-labelledby="credentials-tab">
          <div className="row g-4 animate__animated animate__fadeIn">
            
            {/* Registration Cards */}
            <div className="col-lg-8">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card h-100 border-0 shadow-lg p-4 animate-float" style={{ borderLeft: '4px solid #0f172a', borderRadius: '15px' }}>
                    <p className="text-muted small mb-1 oswald text-uppercase tracking-wider">Company Identification Number (CIN)</p>
                    <h5 className="fw-bold text-dark">U45309BR2022PTC060438</h5>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card h-100 border-0 shadow-lg p-4 animate-float" style={{ animationDelay: '0.1s', borderLeft: '4px solid #ffb300', borderRadius: '15px' }}>
                    <p className="text-muted small mb-1 oswald text-uppercase tracking-wider">Goods & Services Tax (GSTIN)</p>
                    <h5 className="fw-bold text-dark">10AAJCK8645D1ZP</h5>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card h-100 border-0 shadow-lg p-4 animate-float" style={{ animationDelay: '0.2s', borderLeft: '4px solid #0f172a', borderRadius: '15px' }}>
                    <p className="text-muted small mb-1 oswald text-uppercase tracking-wider">Importer-Exporter Code (IEC)</p>
                    <h5 className="fw-bold text-dark">AAJCK8645D</h5>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card h-100 border-0 shadow-lg p-4 animate-float" style={{ animationDelay: '0.3s', borderLeft: '4px solid #ffb300', borderRadius: '15px' }}>
                    <p className="text-muted small mb-1 oswald text-uppercase tracking-wider">MSME Udyam Registration</p>
                    <h5 className="fw-bold text-dark">UDYAM-BR-26-0068725</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Board of Directors */}
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-lg p-5 bg-dark text-white animate-float" style={{ backgroundColor: '#0f172a', borderRadius: '15px' }}>
                <h5 className="fw-bold mb-4 oswald fs-24" style={{ color: '#ffb300' }}>
                  <i className="fas fa-users-cog me-2"></i> Board of Directors
                </h5>
                <ul className="list-unstyled roboto">
                  <li className="mb-4 border-bottom pb-3" style={{ borderColor: 'rgba(255,255,255,0.1) !important' }}>
                    <div className="d-flex align-items-center">
                      <div className="btn-circle btn-sm bg-white text-dark me-3"><i className="fas fa-user-tie"></i></div>
                      <span className="fs-18 fw-bold tracking-wider text-uppercase">Anil Kumar Niraj</span>
                    </div>
                  </li>
                  <li className="mb-4 border-bottom pb-3" style={{ borderColor: 'rgba(255,255,255,0.1) !important' }}>
                    <div className="d-flex align-items-center">
                      <div className="btn-circle btn-sm bg-white text-dark me-3"><i className="fas fa-user-tie"></i></div>
                      <span className="fs-18 fw-bold tracking-wider text-uppercase">Abhilasha Devi</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="btn-circle btn-sm bg-white text-dark me-3"><i className="fas fa-user-tie"></i></div>
                      <span className="fs-18 fw-bold tracking-wider text-uppercase">Nilesh Kumar</span>
                    </div>
                  </li>
                </ul>
              </div> 
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}