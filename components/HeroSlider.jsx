"use client";
import React from 'react';

export default function HeroSlider() {
  return (
    <div style={{ position: 'relative', backgroundColor: '#0f172a' }}>
      <div 
        className="d-flex align-items-center text-center" 
        style={{ 
          minHeight: '85vh', 
          background: 'linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.85)), url("/img/banner/11.jpg") center/cover no-repeat' 
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h6 className="text-uppercase mb-3 fw-bold" style={{ letterSpacing: '3px', color: '#ffb300' }}>
                <i className="fas fa-hard-hat me-2"></i> Excellence in Engineering
              </h6>
              <h1 className="display-3 text-white fw-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                WE BUILD NOT JUST HOMES,<br />WE BUILD YOUR DREAMS
              </h1>
              <p className="lead text-light mb-5 px-lg-5">
                A premier infrastructure and development firm delivering high-quality, cost-effective projects across India.
              </p>
              <a href="#masterdata" className="btn btn-lg fw-bold px-5 me-3" style={{ backgroundColor: '#ffb300', color: '#0f172a' }}>View Credentials</a>
              <a href="#contact" className="btn btn-outline-light btn-lg fw-bold px-5">Get a Quote</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}