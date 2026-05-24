import React from 'react';

export default function Careers() {
  const jobs = [
    { title: "Senior Civil Engineer", location: "Patna, Bihar", type: "Full-Time", icon: "fas fa-hard-hat" },
    { title: "Project Manager (Turnkey)", location: "Site Locations", type: "Full-Time", icon: "fas fa-clipboard-check" },
    { title: "Supply Chain Executive", location: "Patna HQ", type: "Full-Time", icon: "fas fa-dolly-flatbed" }
  ];

  return (
    <section className="wrapper bg-light wrapper-border" id="careers">
      <div className="container py-14 py-md-16">
        
        <div className="row text-center mb-10" data-cue="fadeIn">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2 className="fs-16 text-uppercase mb-3 oswald fw-bold tracking-wider" style={{ color: '#ffb300' }}>
              <i className="fas fa-user-tie me-2"></i> Join Our Team
            </h2>
            <h3 className="display-4 oswald" style={{ color: '#0f172a' }}>
              Build Your <span className="text-gradient-gold">Career</span> With Us
            </h3>
            <p className="lead text-muted roboto mt-3 px-lg-10">
              We are always looking for driven professionals, engineers, and architects to lead our next generation of infrastructure projects.
            </p>
          </div>
        </div>

        <div className="row g-6" data-cues="zoomIn">
          {jobs.map((job, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card shadow-lg card-border-bottom h-100 hover-lift" style={{ borderRadius: '12px' }}>
                <div className="card-body p-5">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="btn-circle btn-sm shadow-sm" style={{ backgroundColor: 'rgba(255, 179, 0, 0.1)', color: '#ffb300' }}>
                      <i className={`${job.icon} fs-20`}></i>
                    </div>
                    <span className="badge bg-dark text-white rounded-pill px-3 py-1 roboto fw-normal">{job.type}</span>
                  </div>
                  <h4 className="oswald fw-bold mb-2">{job.title}</h4>
                  <p className="roboto text-muted small mb-4">
                    <i className="fas fa-map-marker-alt me-2" style={{ color: '#ffb300' }}></i>{job.location}
                  </p>
                  <a href={`mailto:kosisimanchalpatna@gmail.com?subject=Application: ${job.title}`} className="btn btn-sm w-100 fw-bold" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', color: '#0f172a' }}>
                    Apply Now <i className="fas fa-arrow-right ms-2" style={{ color: '#ffb300' }}></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}