import React from 'react';
import NextLink from './NextLink';

export default function Hero() {
  return (
    <section className="hero-slider">
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
        
        {/* Animated Ken Burns Background Images */}
        <div className="carousel-inner">
          {/* Slide 1: Civil Engineering */}
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1541881451972-ba824fa9343d?w=1600&q=80" className="animated-bg-img" alt="Civil Engineering" />
          </div>
          {/* Slide 2: Modern Building */}
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80" className="animated-bg-img" alt="Modern Building" />
          </div>
          {/* Slide 3: Heavy Machinery */}
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1600&q=80" className="animated-bg-img" alt="Heavy Machinery" />
          </div>
        </div>

        {/* Advanced Premium Content Overlay */}
        <div className="carousel-caption w-100 text-center start-0 pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                
                {/* Premium Pill Badge */}
                <h6 className="text-uppercase mb-4 animate__animated animate__fadeInDown oswald fw-bold" style={{ letterSpacing: '6px', color: '#ffffff', opacity: '0.9' }}>
                  <span className="badge bg-dark border border-warning text-warning rounded-pill px-3 py-2 fs-14">
                    <i className="fas fa-certificate me-2"></i>Class 3 Govt. Contractor
                  </span>
                </h6>
                
                {/* Gradient Gold Heading */}
                <h1 className="display-1 text-white mb-4 animate__animated animate__zoomIn oswald fw-bold lh-sm" style={{ textShadow: '2px 4px 10px rgba(0,0,0,0.8)' }}>
                  WE DON'T JUST BUILD HOMES,<br />WE BUILD <span className="text-gradient-gold">YOUR DREAMS</span>
                </h1>
                
                {/* Refined Subtext */}
                <p className="fs-20 text-light mb-5 animate__animated animate__fadeInUp roboto px-lg-5" style={{ opacity: '0.8', fontWeight: '300' }}>
                  Delivering premier turnkey infrastructure, civil engineering, and international trading solutions across India.
                </p>
                
                {/* Advanced Floating Buttons */}
                <div className="animate__animated animate__fadeInUp animate__delay-1s mt-4">
                  <a href="#services" className="btn btn-premium btn-premium-gold fw-bold me-2 me-md-4 mb-3 mb-md-0 shadow-lg">
                    Explore Projects
                  </a>
                  <a href="#export-import" className="btn btn-premium btn-premium-glass fw-bold shadow-lg">
                    Global Trade & IEC
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Custom Navigation Arrows */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" style={{ width: '3rem', height: '3rem' }}></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" style={{ width: '3rem', height: '3rem' }}></span>
        </button>

      </div>
    </section>
  );
}