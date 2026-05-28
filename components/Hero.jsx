import React from 'react';
import Image from 'next/image';
import NextLink from './NextLink';

export default function Hero() {
  return (
    <section className="hero-slider" style={{ backgroundColor: '#0f172a' }}>
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
        
        {/* Animated Background Images - Optimized for Mobile & Laptop Parity */}
        <div className="carousel-inner">
          
          {/* Slide 1: Replaced with your local banner image to fix the broken Vercel link */}
          <div className="carousel-item active" style={{ position: 'relative', height: '100vh', minHeight: '600px' }}>
            <Image 
              src="/img/banner/11.jpg" 
              alt="Civil Engineering" 
              fill
              priority
              unoptimized={true} 
              style={{ objectFit: 'cover' }}
              className="animated-bg-img"
            />
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.6)' }}></div>
          </div>

          {/* Slide 2: Modern Building */}
          <div className="carousel-item" style={{ position: 'relative', height: '100vh', minHeight: '600px' }}>
            <Image 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80" 
              alt="Modern Building" 
              fill
              unoptimized={true}
              style={{ objectFit: 'cover' }}
              className="animated-bg-img"
            />
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.6)' }}></div>
          </div>

          {/* Slide 3: Heavy Machinery */}
          <div className="carousel-item" style={{ position: 'relative', height: '100vh', minHeight: '600px' }}>
            <Image 
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1600&q=80" 
              alt="Heavy Machinery" 
              fill
              unoptimized={true}
              style={{ objectFit: 'cover' }}
              className="animated-bg-img"
            />
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.6)' }}></div>
          </div>
        </div>

        {/* Content Overlay - Centered Vertically and Horizontally */}
        <div className="carousel-caption w-100 text-center start-0 pb-0" style={{ bottom: '50%', transform: 'translateY(50%)' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 px-3 px-md-0">
                
                {/* Premium Pill Badge */}
                <h6 className="text-uppercase mb-3 mb-md-4 animate__animated animate__fadeInDown oswald fw-bold" style={{ letterSpacing: '4px', color: '#ffffff' }}>
                  <span className="badge bg-dark border border-warning text-warning rounded-pill px-3 py-2 fs-6">
                    <i className="fas fa-certificate me-2"></i>Class 3 Govt. Contractor
                  </span>
                </h6>
                
                {/* Responsive Heading: Scaled down slightly to prevent mobile clipping */}
                <h1 className="display-4 text-white mb-3 mb-md-4 animate__animated animate__zoomIn oswald fw-bold lh-sm" style={{ textShadow: '2px 4px 10px rgba(0,0,0,0.8)' }}>
                  WE DON'T JUST BUILD HOMES,<br />WE BUILD <span className="text-gradient-gold" style={{ color: '#ffb300' }}>YOUR DREAMS</span>
                </h1>
                
                {/* Refined Subtext */}
                <p className="lead text-light mb-4 mb-md-5 animate__animated animate__fadeInUp roboto px-1 px-md-5" style={{ opacity: '0.9', fontWeight: '300' }}>
                  Delivering premier turnkey infrastructure, civil engineering, and international trading solutions across India.
                </p>
                
                {/* Production Mobile Buttons: Stack on mobile (flex-column), inline on laptop (flex-md-row) */}
                <div className="animate__animated animate__fadeInUp animate__delay-1s mt-3 d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
                  <a href="#services" className="btn btn-lg fw-bold shadow-lg w-100 w-md-auto" style={{ backgroundColor: '#ffb300', color: '#0f172a' }}>
                    Explore Projects
                  </a>
                  <a href="#export-import" className="btn btn-outline-light btn-lg fw-bold shadow-lg w-100 w-md-auto">
                    Global Trade & IEC
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Custom Navigation Arrows */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" style={{ width: '2rem', height: '2rem' }}></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" style={{ width: '2rem', height: '2rem' }}></span>
        </button>

      </div>
    </section>
  );
}