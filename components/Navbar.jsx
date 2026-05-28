"use client";

import { Fragment, useRef, useState, useEffect } from 'react';
import NextLink from './NextLink';

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect when the user scrolls down to trigger the glass effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
      <div className="navbar-brand w-100 d-flex align-items-center">
        <a 
          href="https://titan.securelinks.cloud/share/Y2VudHJhbDo0MDM1NjAzMzc1MTU1MjoxNTI5NTMyNjY0NzU1MzgyMzQy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-decoration-none"
        >
          <div className="d-flex align-items-center">
            
            <div className="shadow-sm" style={{ width: '65px', height: '65px', borderRadius: '8px', overflow: 'hidden', border: '2px solid #ffb300' }}>
              {/* Permanent Local Image Link */}
              <img 
                src="/img/company-logo.png" 
                alt="Kosi Simanchal Logo" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            
            <div className="ms-3 lh-sm">
              <span className={`fw-bold fs-24 oswald ${isScrolled ? 'text-dark' : 'text-white'}`} style={{ letterSpacing: '1px' }}>KOSI SIMANCHAL</span><br/>
              <span className="fs-12 fw-bold text-main">CONSTRUCTION PVT. LTD.</span>
            </div>
          </div>
        </a>
      </div>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav align-items-lg-center oswald">
          <li className="nav-item"><NextLink href="/" title="Home" className={`nav-link fw-bold px-3 ${isScrolled ? 'text-dark' : 'text-white'}`} /></li>
          <li className="nav-item"><NextLink href="#about" title="About Us" className={`nav-link fw-bold px-3 ${isScrolled ? 'text-dark' : 'text-white'}`} /></li>
          <li className="nav-item"><NextLink href="#services" title="Services" className={`nav-link fw-bold px-3 ${isScrolled ? 'text-dark' : 'text-white'}`} /></li>
          <li className="nav-item"><NextLink href="#credentials" title="Master Data" className={`nav-link fw-bold px-3 ${isScrolled ? 'text-dark' : 'text-white'}`} /></li>
          <li className="nav-item">
            <NextLink href="#contact" title="Get a Quote" className="btn btn-premium btn-premium-gold ms-lg-4 px-4 py-2 text-dark" />
          </li>
        </ul>
      </div>
    </Fragment>
  );

  return (
    <div className={`absolute-header ${isScrolled ? 'is-sticky fixed-top' : ''}`}>
      <nav ref={navbarRef} className="navbar navbar-expand-lg center-nav glass-nav py-3">
        <div className="container flex-lg-row flex-nowrap align-items-center">
          {headerContent}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;