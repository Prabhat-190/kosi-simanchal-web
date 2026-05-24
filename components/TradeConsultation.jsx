"use client";

import React, { useState } from 'react';

export default function TradeConsultation() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="wrapper bg-dark position-relative" id="trade-consultation" style={{ borderTop: '2px solid #ffb300' }}>
      <div className="container py-14 py-md-16">
        
        <div className="row text-center mb-10" data-cue="fadeIn">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2 className="fs-16 text-uppercase mb-3 oswald fw-bold tracking-wider" style={{ color: '#ffb300' }}>
              <i className="fas fa-file-signature me-2"></i> Official Procurement
            </h2>
            <h3 className="display-4 oswald text-white">
              Trade Division <span className="text-gradient-gold">Consultation</span>
            </h3>
            <p className="lead text-light opacity-75 roboto mt-3 px-lg-10">
              Submit your B2B requirements for heavy machinery import, raw material export, or large-scale turnkey procurement. Our logistics directors will contact you within 24 hours.
            </p>
          </div>
        </div>

        <div className="row justify-content-center" data-cue="zoomIn">
          <div className="col-lg-10 col-xl-8">
            <div className="glass-card p-4 p-md-5 shadow-lg">
              
              {submitted ? (
                <div className="text-center py-8 animate__animated animate__zoomIn">
                  <i className="fas fa-check-circle fa-4x text-success mb-4"></i>
                  <h3 className="oswald text-white mb-2">Request Received</h3>
                  <p className="text-light opacity-75 roboto">Your procurement request has been routed to our Trade Division. A logistics specialist will email you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline-light mt-4 rounded-pill px-5">Submit Another Request</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="animate__animated animate__fadeIn">
                  <div className="row g-4">
                    
                    <div className="col-md-6">
                      <div className="form-floating position-relative">
                        <input type="text" className="form-control bg-transparent text-white border-0 border-bottom border-warning rounded-0 px-0" id="contactName" placeholder="Name" required style={{ boxShadow: 'none' }} />
                        <label htmlFor="contactName" className="text-light opacity-50 px-0">Representative Name *</label>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="form-floating position-relative">
                        <input type="text" className="form-control bg-transparent text-white border-0 border-bottom border-warning rounded-0 px-0" id="orgName" placeholder="Company" required style={{ boxShadow: 'none' }} />
                        <label htmlFor="orgName" className="text-light opacity-50 px-0">Company / Organization *</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating position-relative">
                      <input type="email" className="form-control bg-transparent text-white border-0 border-bottom border-warning rounded-0 px-0" id="tradeEmail" placeholder="name@kosisimanchal.com" required style={{ boxShadow: 'none' }} />
                        <label htmlFor="tradeEmail" className="text-light opacity-50 px-0">Corporate Email *</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating position-relative">
                        <input type="tel" className="form-control bg-transparent text-white border-0 border-bottom border-warning rounded-0 px-0" id="tradePhone" placeholder="Phone" required style={{ boxShadow: 'none' }} />
                        <label htmlFor="tradePhone" className="text-light opacity-50 px-0">Phone Number *</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <select className="form-select bg-transparent text-light border-0 border-bottom border-warning rounded-0 px-0 py-3 mb-2" required style={{ boxShadow: 'none' }}>
                        <option value="" className="text-dark">Select Requirement Category...</option>
                        <option value="import-machinery" className="text-dark">Import: Heavy Construction Machinery</option>
                        <option value="export-materials" className="text-dark">Export: Raw Building Materials</option>
                        <option value="turnkey-supply" className="text-dark">Domestic Turnkey Supply Chain</option>
                        <option value="other" className="text-dark">Other Logistics Inquiry</option>
                      </select>
                    </div>

                    <div className="col-12 mb-4">
                      <div className="form-floating position-relative">
                        <textarea className="form-control bg-transparent text-white border-0 border-bottom border-warning rounded-0 px-0" id="tradeDetails" placeholder="Details" style={{ height: '100px', boxShadow: 'none' }} required></textarea>
                        <label htmlFor="tradeDetails" className="text-light opacity-50 px-0">Estimated Tonnage, Volume, or Budget details...</label>
                      </div>
                    </div>

                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-premium btn-premium-gold fw-bold shadow-lg px-5 py-3 w-100">
                        Submit Official Inquiry <i className="fas fa-paper-plane ms-2"></i>
                      </button>
                    </div>

                  </div>
                </form>
              )}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}