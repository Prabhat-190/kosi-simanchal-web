"use client";

import React from 'react';
import Image from 'next/image'; 

export default function RailwayProjects() {
  return (
    <section className="wrapper bg-light" id="railway-division" style={{ padding: '6rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="row text-center mb-10">
          <div className="col-lg-8 offset-lg-2">
            <h2 className="fs-16 text-uppercase mb-3" style={{ color: '#ffb300', fontWeight: '700', letterSpacing: '2px' }}>Railway Division</h2>
            <h3 className="display-4 oswald" style={{ fontWeight: '600' }}>Infrastructure Projects</h3>
          </div>
        </div>

        {/* 3-Card Premium Grid */}
        <div className="row g-4 justify-content-center">
          
          {/* Card 1: Bridge Construction */}
          <div className="col-md-6 col-lg-4">
            <div 
              className="card border-0 h-100" 
              style={{ 
                borderRadius: '12px', 
                overflow: 'hidden', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
              }}
            >
              <div style={{ height: '260px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                <Image 
                  src="/img/projects/bridge.jpeg" // ⚠️ Make sure this exactly matches your filename case!
                  alt="Bridge Construction" 
                  fill
                  unoptimized={true} // 👉 BYPASSING VERCEL OPTIMIZATION FOR INSTANT LOAD
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover', filter: 'contrast(1.05) saturate(1.1)' }} 
                />
              </div>
              <div className="card-body text-center p-4">
                <h4 className="mb-2 fw-bold text-dark oswald">Bridge Construction</h4>
                <p className="small mb-0" style={{ color: '#555', fontWeight: '500' }}>Jawahar Nagar, Gaya, Bihar</p>
              </div>
            </div>
          </div>

          {/* Card 2: Track Construction */}
          <div className="col-md-6 col-lg-4">
            <div 
              className="card border-0 h-100" 
              style={{ 
                borderRadius: '12px', 
                overflow: 'hidden', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
              }}
            >
              <div style={{ height: '260px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                <Image 
                  src="/img/projects/track.jpeg" 
                  alt="Track Construction" 
                  fill
                  unoptimized={true} // 👉 BYPASSING VERCEL OPTIMIZATION
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover', filter: 'contrast(1.05) saturate(1.1)' }} 
                />
              </div>
              <div className="card-body text-center p-4">
                <h4 className="mb-2 fw-bold text-dark oswald">Track Construction</h4>
                <p className="small mb-0" style={{ color: '#555', fontWeight: '500' }}>Modern Transit Operations</p>
              </div>
            </div>
          </div>

          {/* Card 3: Forecourt Fountain */}
          <div className="col-md-6 col-lg-4">
            <div 
              className="card border-0 h-100" 
              style={{ 
                borderRadius: '12px', 
                overflow: 'hidden', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
              }}
            >
              <div style={{ height: '260px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                <Image 
                  src="/img/projects/fountain.jpeg" 
                  alt="Forecourt Fountain" 
                  fill
                  unoptimized={true} // 👉 BYPASSING VERCEL OPTIMIZATION
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover', filter: 'contrast(1.05) saturate(1.1)' }} 
                />
              </div>
              <div className="card-body text-center p-4">
                <h4 className="mb-2 fw-bold text-dark oswald">Forecourt Fountain</h4>
                <p className="small mb-0" style={{ color: '#555', fontWeight: '500' }}>Station Beautification</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}