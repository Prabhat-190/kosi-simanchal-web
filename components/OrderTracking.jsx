"use client"; 

import React from 'react';

export default function OrderTracking() {
  return (
    <section className="wrapper bg-dark position-relative" id="orders">
      
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dot primary opacity-50" style={{ zIndex: 0 }}></div>
      
      <div className="container py-14 py-md-16 position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center">
          
          <div className="col-lg-6 mb-8 mb-lg-0" data-cue="slideInLeft">
            <h2 className="fs-16 text-uppercase mb-3 oswald fw-bold tracking-wider" style={{ color: '#ffb300' }}>
              <i className="fas fa-truck-loading me-2"></i> Logistics & Supply
            </h2>
            <h3 className="display-4 oswald text-white mb-4">
              Track Your <span className="text-gradient-gold">Shipment</span>
            </h3>
            <p className="lead text-light opacity-75 roboto mb-5 pe-lg-5">
              Enter your Waybill, Consignment, or Order ID to get real-time GPS tracking of your heavy machinery, raw materials, or export containers.
            </p>

           
            <div className="glass-card p-4 p-md-5 shadow-lg animate-float">
              <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-floating mb-4 position-relative">
                  <input 
                    type="text" 
                    className="form-control bg-transparent text-white border-0 border-bottom border-warning rounded-0 px-0" 
                    id="orderId" 
                    placeholder="Order ID" 
                    style={{ boxShadow: 'none' }}
                  />
                  <label htmlFor="orderId" className="text-light opacity-50 px-0">Enter Tracking ID (e.g., KS-100293)</label>
                </div>
                <button className="btn btn-premium btn-premium-gold w-100 fw-bold mt-2">
                  <i className="fas fa-satellite-dish me-2"></i> Locate Order
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1" data-cue="slideInRight">
             <div className="position-relative rounded-4 shadow-lg overflow-hidden">
                {/* Auto-fetching a logistics warehouse image from Unsplash */}
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?w=800&q=80" 
                  alt="Warehouse Logistics" 
                  className="w-100" 
                  style={{ height: '450px', objectFit: 'cover' }} 
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-4" style={{ background: 'linear-gradient(transparent, #0f172a)' }}>
                  <div className="d-flex align-items-center text-white">
                    <i className="fas fa-shield-alt fa-2x text-warning me-3"></i>
                    <h6 className="mb-0 oswald tracking-wider">SECURE SUPPLY CHAIN ROUTING</h6>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}