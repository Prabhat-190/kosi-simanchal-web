"use client";
import React from 'react';
import Link from 'next/link';

export default function HeroSlider() {
  return (
    <div 
      style={{ 
        position: 'relative', 
        backgroundColor: '#0f172a', 
        minHeight: '85vh', 
        display: 'flex', 
        alignItems: 'center',
        /* 100% STABLE DIRECT FETCH: Bypasses Vercel's slow Next.js image processing */
        backgroundImage: "url('/mainbg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      
      {/* LAYER 2: The Dark Gradient Overlay */}
      <div 
        style={{ 
          position: 'absolute', 
          top: 0, left: 0, right: 0, bottom: 0, 
          background: 'linear-gradient(rgba(15, 23, 42, 0.70), rgba(15, 23, 42, 0.85))', 
          zIndex: 1 
        }} 
      />

      {/* LAYER 3: The Content */}
      <div className="container text-center" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h6 className="text-uppercase mb-3 fw-bold" style={{ letterSpacing: '3px', color: '#ffb300' }}>
              <i className="fas fa-hard-hat me-2"></i> Excellence in Engineering
            </h6>
            <h1 className="display-3 text-white fw-bold mb-4" style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.6)' }}>
              WE DON'T JUST BUILD HOMES,<br />WE BUILD <span style={{color: '#ffb300'}}>YOUR DREAMS</span>
            </h1>
            <p className="lead text-light mb-5 px-lg-5">
              Delivering premier turnkey infrastructure, civil engineering, and international trading solutions across India.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link href="#projects" className="btn btn-lg fw-bold px-5" style={{ backgroundColor: '#ffb300', color: '#0f172a' }}>Explore Projects</Link>
              <Link href="#contact" className="btn btn-outline-light btn-lg fw-bold px-5">Global Trade & IEC</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}