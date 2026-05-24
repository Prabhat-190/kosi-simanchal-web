"use client";

import React from 'react';

export default function RailwayProjects() {
  return (
    <section className="wrapper bg-light position-relative" id="railway-division" style={{ paddingBottom: '6rem', paddingTop: '6rem' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="row text-center mb-10" data-cue="fadeIn">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2 className="fs-16 text-uppercase mb-3 oswald fw-bold tracking-wider" style={{ color: '#ffb300' }}>
              <i className="fas fa-train me-2"></i> Government Contracts
            </h2>
            <h3 className="display-4 oswald text-dark">
              Railway Infrastructure <span className="text-gradient-gold">Division</span>
            </h3>
            <p className="lead text-muted roboto mt-3 px-lg-10">
              Executing high-scale infrastructure projects for the Indian Railways. From heavy earthworks to structural bridge engineering, we deliver vital transport networks.
            </p>
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <div className="row gy-5">
          
          {/* Card 1: Track Linking */}
          <div className="col-lg-4 col-md-6" data-cue="slideInUp">
            <div className="card shadow-lg border-0 h-100" style={{ borderRadius: '15px', overflow: 'hidden' }}>
              <div className="bg-dark p-4 text-center border-bottom" style={{ borderColor: '#ffb300 !important', borderBottomWidth: '4px', borderBottomStyle: 'solid' }}>
                <i className="fas fa-route fa-3x mb-3" style={{ color: '#ffb300' }}></i>
                <h4 className="oswald text-white mb-0">Track Linking & Laying</h4>
              </div>
              <div className="card-body p-4 bg-white">
                <ul className="list-unstyled roboto small text-muted mb-0">
                  <li className="mb-2"><i className="fas fa-check text-warning me-2"></i> Broad gauge track installation</li>
                  <li className="mb-2"><i className="fas fa-check text-warning me-2"></i> Ballast supply and profiling</li>
                  <li><i className="fas fa-check text-warning me-2"></i> Sleeper renewal & welding</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Earthworks */}
          <div className="col-lg-4 col-md-6" data-cue="slideInUp" data-delay="100">
            <div className="card shadow-lg border-0 h-100" style={{ borderRadius: '15px', overflow: 'hidden' }}>
              <div className="bg-dark p-4 text-center border-bottom" style={{ borderColor: '#ffb300 !important', borderBottomWidth: '4px', borderBottomStyle: 'solid' }}>
                <i className="fas fa-mountain fa-3x mb-3" style={{ color: '#ffb300' }}></i>
                <h4 className="oswald text-white mb-0">Heavy Earthworks</h4>
              </div>
              <div className="card-body p-4 bg-white">
                <ul className="list-unstyled roboto small text-muted mb-0">
                  <li className="mb-2"><i className="fas fa-check text-warning me-2"></i> Embankment construction</li>
                  <li className="mb-2"><i className="fas fa-check text-warning me-2"></i> Cutting and ground leveling</li>
                  <li><i className="fas fa-check text-warning me-2"></i> Soil consolidation & testing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3: Major Bridges */}
          <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0" data-cue="slideInUp" data-delay="200">
            <div className="card shadow-lg border-0 h-100" style={{ borderRadius: '15px', overflow: 'hidden' }}>
              <div className="bg-dark p-4 text-center border-bottom" style={{ borderColor: '#ffb300 !important', borderBottomWidth: '4px', borderBottomStyle: 'solid' }}>
                <i className="fas fa-bridge-water fa-3x mb-3" style={{ color: '#ffb300' }}></i>
                <h4 className="oswald text-white mb-0">Bridge Construction</h4>
              </div>
              <div className="card-body p-4 bg-white">
                <ul className="list-unstyled roboto small text-muted mb-0">
                  <li className="mb-2"><i className="fas fa-check text-warning me-2"></i> Minor and Major bridge works</li>
                  <li className="mb-2"><i className="fas fa-check text-warning me-2"></i> RCC Box pushing techniques</li>
                  <li><i className="fas fa-check text-warning me-2"></i> Pier and abutment casting</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}