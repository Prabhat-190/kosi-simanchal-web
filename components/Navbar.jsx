"use client";

import { Fragment, useRef, useState, useEffect } from 'react';
import NextLink from './NextLink';

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to trigger the sleek glass effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerContent = (
    <Fragment>
      <div className="navbar-brand d-flex align-items-center">
        <a 
          href="/" 
          className="text-decoration-none d-flex align-items-center"
        >
          {/* Dynamic Logo Size: Shrinks when scrolled to save space on mobile */}
          <div 
            className="shadow-sm" 
            style={{ 
              width: isScrolled ? '45px' : '55px', 
              height: isScrolled ? '45px' : '55px', 
              borderRadius: '8px', 
              overflow: 'hidden', 
              border: '2px solid #ffb300',
              transition: 'all 0.3s ease'
            }}
          >
            <img 
              src="/img/company-logo.png" 
              alt="Kosi Simanchal Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          
          <div className="ms-2 ms-md-3 lh-sm">
            {/* Dynamic Text Size: Adjusts smoothly on scroll */}
            <span className={`fw-bold oswald ${isScrolled ? 'text-dark fs-5' : 'text-white fs-4'}`} style={{ letterSpacing: '1px', transition: 'all 0.3s ease' }}>
              KOSI SIMANCHAL
            </span><br/>
            <span className="fw-bold text-main" style={{ fontSize: isScrolled ? '10px' : '12px', transition: 'all 0.3s ease' }}>
              CONSTRUCTION PVT. LTD.
            </span>
          </div>
        </a>
      </div>

      {/* MOBILE HAMBURGER MENU BUTTON (Was missing before) */}
      <button 
        className="navbar-toggler ms-auto" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
        style={{ border: 'none', outline: 'none' }}
      >
        <span className="navbar-toggler-icon" style={{ filter: isScrolled ? 'none' : 'invert(1)' }}></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav align-items-lg-center oswald mt-3 mt-lg-0">
          <li className="nav-item"><NextLink href="/" title="Home" className={`nav-link fw-bold px-3 ${isScrolled ? 'text-dark' : 'text-white'}`} /></li>
          <li className="nav-item"><NextLink href="#about" title="About Us" className={`nav-link fw-bold px-3 ${isScrolled ? 'text-dark' : 'text-white'}`} /></li>
          <li className="nav-item"><NextLink href="#services" title="Services" className={`nav-link fw-bold px-3 ${isScrolled ? 'text-dark' : 'text-white'}`} /></li>
          <li className="nav-item"><NextLink href="#credentials" title="Master Data" className={`nav-link fw-bold px-3 ${isScrolled ? 'text-dark' : 'text-white'}`} /></li>
          <li className="nav-item mt-2 mt-lg-0">
            <NextLink href="#contact" title="Get a Quote" className="btn btn-premium btn-premium-gold ms-lg-4 px-4 py-2 text-dark w-100 w-lg-auto" />
          </li>
        </ul>
      </div>
    </Fragment>
  );

  return (
    <div 
      className={`absolute-header w-100 ${isScrolled ? 'fixed-top shadow-sm' : ''}`} 
      style={{ 
        transition: 'all 0.3s ease', 
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent', 
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        zIndex: 1050
      }}
    >
      {/* Dynamic padding: py-3 when at top, py-1 when scrolled to make it super sleek */}
      <nav ref={navbarRef} className={`navbar navbar-expand-lg ${isScrolled ? 'py-1' : 'py-3'}`} style={{ transition: 'all 0.3s ease' }}>
        <div className="container flex-wrap flex-lg-nowrap align-items-center">
          {headerContent}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;