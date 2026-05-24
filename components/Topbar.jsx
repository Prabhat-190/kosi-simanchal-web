import React from 'react';
import NextLink from './NextLink';

export default function Topbar() {
  return (
    <div className="bg-dark text-white d-none d-lg-block" style={{ fontSize: '13px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container">
        <div className="row align-items-center py-2">
          
          {/* Left Side: Contact & Official Info */}
          <div className="col-lg-7 d-flex align-items-center roboto">
            <span className="me-4 d-flex align-items-center">
              <i className="uil uil-file-info-alt text-main fs-16 me-1"></i> 
              <span className="opacity-75 me-1">GST -</span> <strong className="text-white">10AAJCK8645D1ZP</strong>
            </span>
            <span className="me-4 d-flex align-items-center">
              <i className="uil uil-envelope text-main fs-16 me-1"></i> 
              <span className="opacity-75 me-1">Email -</span> 
              <a href="mailto:kosisimanchalpatna@gmail.com" className="text-white text-decoration-none hover">kosisimanchalpatna@gmail.com</a>
            </span>
            <span className="d-flex align-items-center">
              <i className="uil uil-phone-volume text-main fs-16 me-1"></i> 
              <span className="opacity-75 me-1">Phone -</span> 
              <a href="tel:+919234459897" className="text-white text-decoration-none hover">9234459897</a>
            </span>
          </div>

          {/* Right Side: Action Links */}
          <div className="col-lg-5 d-flex justify-content-end oswald">
            <ul className="list-inline mb-0 d-flex align-items-center gap-4">
              <li className="list-inline-item m-0">
                <NextLink href="#credentials" title="Company Master Data" className="text-white text-decoration-none" style={{ transition: 'color 0.3s' }} />
              </li>
              <li className="list-inline-item m-0">
                <NextLink href="#payment" title="Make a Payment" className="text-white text-decoration-none" />
              </li>
              <li className="list-inline-item m-0">
                <NextLink href="#contact" title="Hire Us" className="text-white text-decoration-none" />
              </li>
              <li className="list-inline-item m-0">
                <NextLink href="#feedback" title="Feedback" className="text-main fw-bold text-decoration-none animate-pulse" />
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}