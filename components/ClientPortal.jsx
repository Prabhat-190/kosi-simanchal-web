"use client";

import React, { useState } from 'react';

export default function ClientPortal() {
  // We use a 'view' state to manage the 4 different screens: 'login', 'register', 'forgot', 'sent'
  const [view, setView] = useState('login');
  const [recoveryEmail, setRecoveryEmail] = useState('');

  // Mock function to simulate sending the reset email
  const handleResetSubmit = (e) => {
    e.preventDefault();
    if (recoveryEmail) {
      setView('sent');
    }
  };

  return (
    <section className="wrapper position-relative" id="user-login" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      
      {/* Heavy Dark Glass Overlay for contrast */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(15, 23, 42, 0.88)', zIndex: 0 }}></div>
      
      <div className="container py-14 py-md-16 position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center gx-lg-8">
          
          {/* Left Side: Features & Trust Signals */}
          <div className="col-lg-6 text-white mb-8 mb-lg-0" data-cue="slideInLeft">
            <h2 className="fs-16 text-uppercase mb-3 oswald fw-bold tracking-wider" style={{ color: '#ffb300' }}>
              <i className="fas fa-shield-alt me-2"></i> Encrypted Access
            </h2>
            <h3 className="display-4 oswald mb-4">
              Client <span className="text-gradient-gold">Dashboard</span>
            </h3>
            <p className="lead opacity-75 roboto mb-5 pe-lg-5">
              Access your personalized corporate portal to monitor turnkey projects in real-time, approve material requisitions, and view architectural blueprints securely.
            </p>

            <div className="d-flex flex-column gap-4 roboto">
              <div className="d-flex align-items-center">
                <div className="btn-circle btn-sm shadow-sm me-3" style={{ backgroundColor: 'rgba(255, 179, 0, 0.15)', color: '#ffb300' }}>
                  <i className="fas fa-camera"></i>
                </div>
                <div>
                  <h6 className="mb-0 text-white oswald tracking-wider">Live Site Feeds</h6>
                  <small className="opacity-50">View daily photographic progress reports.</small>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="btn-circle btn-sm shadow-sm me-3" style={{ backgroundColor: 'rgba(255, 179, 0, 0.15)', color: '#ffb300' }}>
                  <i className="fas fa-drafting-compass"></i>
                </div>
                <div>
                  <h6 className="mb-0 text-white oswald tracking-wider">Blueprint Approvals</h6>
                  <small className="opacity-50">Review and digitally sign CAD/CAM layouts.</small>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Premium Glass Dynamic Form */}
          <div className="col-lg-6 col-xl-5 offset-xl-1" data-cue="slideInRight">
            <div className="glass-card p-4 p-md-5 shadow-lg animate-float" style={{ borderTop: '4px solid #ffb300', borderRadius: '15px' }}>
              
              <div className="text-center mb-4">
              <div className="mx-auto mb-4 d-flex align-items-center justify-content-center shadow-lg animate-pulse" style={{ width: '70px', height: '70px', borderRadius: '15px', background: 'linear-gradient(145deg, #0f172a, #1e293b)', border: '2px solid #ffb300' }}>
              <i className="fas fa-user-shield fs-1" style={{ color: '#ffb300' }}></i>
                </div>
                <h4 className="oswald text-white mb-0">
                  {view === 'login' && 'Authorized Login'}
                  {view === 'register' && 'Partner Registration'}
                  {view === 'forgot' && 'Password Recovery'}
                  {view === 'sent' && 'Check Your Inbox'}
                </h4>
              </div>

              {/* Show Tabs ONLY if we are in Login or Register views */}
              {(view === 'login' || view === 'register') && (
                <div className="d-flex mb-5 border-bottom" style={{ borderColor: 'rgba(255,255,255,0.2) !important' }}>
                  <button 
                    className={`btn w-50 rounded-0 oswald tracking-wider ${view === 'login' ? 'text-warning border-bottom border-warning' : 'text-light opacity-50'}`}
                    style={{ borderBottomWidth: '2px', borderBottomStyle: 'solid', borderColor: view === 'login' ? '#ffb300' : 'transparent', boxShadow: 'none' }}
                    onClick={() => setView('login')}
                  >
                    SIGN IN
                  </button>
                  <button 
                    className={`btn w-50 rounded-0 oswald tracking-wider ${view === 'register' ? 'text-warning border-bottom border-warning' : 'text-light opacity-50'}`}
                    style={{ borderBottomWidth: '2px', borderBottomStyle: 'solid', borderColor: view === 'register' ? '#ffb300' : 'transparent', boxShadow: 'none' }}
                    onClick={() => setView('register')}
                  >
                    CREATE ACCOUNT
                  </button>
                </div>
              )}

              {/* -----------------------------------------------------------
                  VIEW: FORGOT PASSWORD (The New Flow)
                  ----------------------------------------------------------- */}
              {view === 'forgot' && (
                <form onSubmit={handleResetSubmit} className="animate__animated animate__fadeIn">
                  <p className="text-light opacity-75 roboto small text-center mb-4">
                    Enter your registered corporate email address and we will send you a secure link to reset your passkey.
                  </p>
                  
                  <div className="form-floating mb-5 position-relative">
                    <input 
                      type="email" 
                      className="form-control bg-transparent text-white border-0 border-bottom rounded-0 px-0" 
                      id="resetEmail" 
                      placeholder="name@company.com" 
                      style={{ borderColor: 'rgba(255,255,255,0.2)', boxShadow: 'none' }}
                      value={recoveryEmail}
                      onChange={(e) => setRecoveryEmail(e.target.value)}
                      required
                    />
                    <label htmlFor="resetEmail" className="text-light opacity-50 px-0"><i className="fas fa-envelope me-2"></i> Corporate Email</label>
                  </div>

                  <button type="submit" className="btn btn-premium btn-premium-gold w-100 fw-bold shadow-lg mb-4">
                    Send Reset Link <i className="fas fa-paper-plane ms-2"></i>
                  </button>

                  <div className="text-center">
                    <button type="button" onClick={() => setView('login')} className="btn btn-link text-decoration-none text-light opacity-75 small p-0 m-0 border-0">
                      <i className="fas fa-arrow-left me-2"></i> Back to Sign In
                    </button>
                  </div>
                </form>
              )}

              {/* -----------------------------------------------------------
                  VIEW: SUCCESS / INBOX (After clicking send reset)
                  ----------------------------------------------------------- */}
              {view === 'sent' && (
                <div className="text-center animate__animated animate__zoomIn">
                  <div className="mb-4">
                    <i className="fas fa-envelope-open-text fa-4x text-warning"></i>
                  </div>
                  <p className="text-light opacity-75 roboto mb-5">
                    A secure reset link has been sent to <strong className="text-white">{recoveryEmail}</strong>. Please check your spam folder if it doesn't arrive within 5 minutes.
                  </p>
                  <button type="button" onClick={() => setView('login')} className="btn btn-outline-light rounded-pill px-4 py-2 fw-bold w-100 border-2">
                    Return to Login
                  </button>
                </div>
              )}

              {/* -----------------------------------------------------------
                  VIEW: LOGIN OR REGISTER
                  ----------------------------------------------------------- */}
              {(view === 'login' || view === 'register') && (
                <form onSubmit={(e) => e.preventDefault()} className="animate__animated animate__fadeIn">
                  
                  {/* Fields for Create Account ONLY */}
                  {view === 'register' && (
                    <>
                      <div className="form-floating mb-4 position-relative">
                        <input type="text" className="form-control bg-transparent text-white border-0 border-bottom rounded-0 px-0" id="fullName" placeholder="Full Name" style={{ borderColor: 'rgba(255,255,255,0.2)', boxShadow: 'none' }} />
                        <label htmlFor="fullName" className="text-light opacity-50 px-0"><i className="fas fa-user me-2"></i> Full Name</label>
                      </div>
                      <div className="form-floating mb-4 position-relative">
                        <input type="text" className="form-control bg-transparent text-white border-0 border-bottom rounded-0 px-0" id="companyName" placeholder="Company Name" style={{ borderColor: 'rgba(255,255,255,0.2)', boxShadow: 'none' }} />
                        <label htmlFor="companyName" className="text-light opacity-50 px-0"><i className="fas fa-building me-2"></i> Organization / Company</label>
                      </div>
                      <div className="mb-4">
                        <select className="form-select bg-transparent text-light border-0 border-bottom rounded-0 px-0" style={{ borderColor: 'rgba(255,255,255,0.2)', boxShadow: 'none' }}>
                          <option value="" className="text-dark">Select Account Type...</option>
                          <option value="client" className="text-dark">Project Client</option>
                          <option value="vendor" className="text-dark">Material Vendor</option>
                          <option value="contractor" className="text-dark">Sub-Contractor</option>
                        </select>
                      </div>
                    </>
                  )}

                  {/* Common Fields for Both Login & Register */}
                  <div className="form-floating mb-4 position-relative">
                    <input type="email" className="form-control bg-transparent text-white border-0 border-bottom rounded-0 px-0" id="email" placeholder="name@company.com" style={{ borderColor: 'rgba(255,255,255,0.2)', boxShadow: 'none' }} />
                    <label htmlFor="email" className="text-light opacity-50 px-0"><i className="fas fa-envelope me-2"></i> Corporate Email</label>
                  </div>
                  
                  <div className="form-floating mb-4 position-relative">
                    <input type="password" className="form-control bg-transparent text-white border-0 border-bottom rounded-0 px-0" id="password" placeholder="Password" style={{ borderColor: 'rgba(255,255,255,0.2)', boxShadow: 'none' }} />
                    <label htmlFor="password" className="text-light opacity-50 px-0"><i className="fas fa-lock me-2"></i> Security Passkey</label>
                  </div>

                  {view === 'login' ? (
                    <div className="d-flex justify-content-between align-items-center mb-5 small roboto">
                      <div className="form-check">
                        <input className="form-check-input bg-transparent border-secondary" type="checkbox" id="rememberMe" />
                        <label className="form-check-label text-light opacity-75" htmlFor="rememberMe">Remember me</label>
                      </div>
                      {/* THIS IS THE FIX: Changes the state to 'forgot' instead of jumping */}
                      <button type="button" onClick={() => setView('forgot')} className="btn btn-link text-decoration-none p-0 m-0 border-0 shadow-none" style={{ color: '#ffb300' }}>
                        Forgot Passkey?
                      </button>
                    </div>
                  ) : (
                    <div className="mb-5 small roboto text-light opacity-75">
                      By creating an account, you agree to our <a href="#" style={{ color: '#ffb300' }}>Vendor Terms & Conditions</a>.
                    </div>
                  )}

                  <button className="btn btn-premium btn-premium-gold w-100 fw-bold shadow-lg">
                    {view === 'login' ? (
                      <>Authenticate Access <i className="fas fa-sign-in-alt ms-2"></i></>
                    ) : (
                      <>Submit Registration <i className="fas fa-user-plus ms-2"></i></>
                    )}
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}