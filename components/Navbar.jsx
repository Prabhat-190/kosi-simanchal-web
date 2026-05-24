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
              {/* WARNING: This link will expire in 24 hours! */}
              <img 
                src="https://prod-drive-download.titan.email/40356033751552/100?response-content-disposition=inline%3B+filename%3D%22WhatsApp+Image+2026-05-14+at+08.56.34.jpeg%22&response-content-type=image%2Fjpeg&response-cache-control=public%2C+max-age%3D86400%2C+immutable&response-content-encoding=gzip&Policy=eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6Imh0dHBzOi8vcHJvZC1kcml2ZS1kb3dubG9hZC50aXRhbi5lbWFpbC80MDM1NjAzMzc1MTU1Mi8xMDA~cmVzcG9uc2UtY29udGVudC1kaXNwb3NpdGlvbj1pbmxpbmUlM0IrZmlsZW5hbWUlM0QlMjJXaGF0c0FwcCtJbWFnZSsyMDI2LTA1LTE0K2F0KzA4LjU2LjM0LmpwZWclMjImcmVzcG9uc2UtY29udGVudC10eXBlPWltYWdlJTJGanBlZyZyZXNwb25zZS1jYWNoZS1jb250cm9sPXB1YmxpYyUyQyttYXgtYWdlJTNEODY0MDAlMkMraW1tdXRhYmxlJnJlc3BvbnNlLWNvbnRlbnQtZW5jb2Rpbmc9Z3ppcCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc3OTYwMjk1N319fV19&Signature=RRTfFAQiNLDa2ysIKhpiZ0Tty~HEgk1F~w1Ru9VxqzBAeEXRHD8xuaD5dTjiRi5GKmS3QiQMGRCVMUYrHh2E7sqWVWqhrt3wjCL9W68ypMpXDKbz7UQMEIaRccuASawJbCXgwKFmE7PeEI~68rJazrnkUxz2KideHixdr~2N~niigOTebJGYDiNehOijPvbTq0ltf4nPuqJASwltiEK7A48wnehAPvDZqg244nArz6gE0Wvpqkxi~JoqxbRWL62qluVADdDbiBIISJnRdOabMdsXzhfSdcvC9cAdTmuz665QjxQxHhrT3Ux3Lt620lVnZ4AcigGz7XxDr0oCuL7-HA__&Key-Pair-Id=K3CSIJDLI589NB" 
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