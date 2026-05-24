"use client";

import React from 'react';

export default function RailwayProjects() {
  return (
    <section className="wrapper bg-light position-relative" id="railway-division" style={{ paddingBottom: '6rem', paddingTop: '6rem' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="row text-center mb-10" data-cue="fadeIn">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2 className="fs-16 text-uppercase mb-3 oswald fw-bold tracking-wider" style={{ color: '#ffb300' }}>
              <i className="fas fa-train me-2"></i> Government Contracts
            </h2>
            <h3 className="display-4 oswald text-dark">
              Railway Infrastructure <span className="text-gradient-gold">Division</span>
            </h3>
            <p className="lead text-muted roboto mt-3 px-lg-10">
              Executing high-scale infrastructure projects for the Indian Railways. From heavy earthworks to structural bridge engineering, we deliver vital transport networks.
            </p>
          </div>
        </div>

        <div className="row gy-5 justify-content-center">
          
          {/* Card 1: Major Bridges */}
          <div className="col-lg-4 col-md-6" data-cue="slideInUp">
            <div className="card shadow-lg border-0 h-100" style={{ borderRadius: '15px', overflow: 'hidden' }}>
              <div style={{ height: '250px', width: '100%', overflow: 'hidden', backgroundColor: '#e9ecef' }}>
                {/* Titan Email Link - Bridge */}
                <img 
                  src="https://prod-drive-download.titan.email/40356033751552/101?response-content-disposition=inline%3B+filename%3D%22Bridge.jpeg%22&response-content-type=image%2Fjpeg&response-cache-control=public%2C+max-age%3D86400%2C+immutable&response-content-encoding=gzip&Policy=eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6Imh0dHBzOi8vcHJvZC1kcml2ZS1kb3dubG9hZC50aXRhbi5lbWFpbC80MDM1NjAzMzc1MTU1Mi8xMDE~cmVzcG9uc2UtY29udGVudC1kaXNwb3NpdGlvbj1pbmxpbmUlM0IrZmlsZW5hbWUlM0QlMjJCcmlkZ2UuanBlZyUyMiZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZqcGVnJnJlc3BvbnNlLWNhY2hlLWNvbnRyb2w9cHVibGljJTJDK21heC1hZ2UlM0Q4NjQwMCUyQytpbW11dGFibGUmcmVzcG9uc2UtY29udGVudC1lbmNvZGluZz1nemlwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzc5NjA4NTI0fX19XX0_&Signature=You4E6HsxqcGYH-zxUbvdgZy28I4dX~hmZe8TlFm2DF7NEhl2k0n2b~j24B7K9kmXzfHayxe4SvhJqdlhfjdM2mgnG1Hyp4O3TTkFEZhihUQzSsmeYAqedHYHdtdzZ6q2jqiNepVPDbD19nP8p-UyPceoduXVUhv1xDL2tSiDhg88K51vW8hSSpWACqrXVosDorwSLx9dRGYMwV-wlrAlZaorNsymNz5TkFPZbLyPyOoYvxmbphif1uXktmZ6dcrW-xWG4wG3PtgYNZM0nX6c9IUGBr~raWDwcF2WBUmFbGN3h9VDQUx3I6ElfdPmAFUHRr3KkplGkxEUmIqVPvqfw__&Key-Pair-Id=K3CSIJDLI589NB" 
                  alt="Railway Bridge Construction in Gaya" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div className="bg-dark p-3 text-center border-bottom" style={{ borderColor: '#ffb300 !important', borderBottomWidth: '4px', borderBottomStyle: 'solid' }}>
                <h4 className="oswald text-white mb-0">Bridge Construction</h4>
              </div>
              <div className="card-body p-4 bg-white">
                <p className="small fw-bold text-dark mb-3"><i className="fas fa-map-marker-alt text-warning me-1"></i> Jawahar Nagar, Gaya, Bihar</p>
                <ul className="list-unstyled roboto small text-muted mb-0">
                  <li className="mb-2"><i className="fas fa-check text-warning me-2"></i> Heavy structural steel framework</li>
                  <li className="mb-2"><i className="fas fa-check text-warning me-2"></i> Pier and abutment casting</li>
                  <li><i className="fas fa-check text-warning me-2"></i> High-load bearing engineering</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Station Upgrades */}
          <div className="col-lg-4 col-md-6" data-cue="slideInUp" data-delay="100">
            <div className="card shadow-lg border-0 h-100" style={{ borderRadius: '15px', overflow: 'hidden' }}>
              <div style={{ height: '250px', width: '100%', overflow: 'hidden', backgroundColor: '#e9ecef' }}>
                {/* Titan Email Link - Water Station */}
                <img 
                  src="https://prod-drive-download.titan.email/40356033751552/102?response-content-disposition=inline%3B+filename%3D%22Water.jpeg%22&response-content-type=image%2Fjpeg&response-cache-control=public%2C+max-age%3D86400%2C+immutable&response-content-encoding=gzip&Policy=eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6Imh0dHBzOi8vcHJvZC1kcml2ZS1kb3dubG9hZC50aXRhbi5lbWFpbC80MDM1NjAzMzc1MTU1Mi8xMDI~cmVzcG9uc2UtY29udGVudC1kaXNwb3NpdGlvbj1pbmxpbmUlM0IrZmlsZW5hbWUlM0QlMjJXYXRlci5qcGVnJTIyJnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRmpwZWcmcmVzcG9uc2UtY2FjaGUtY29udHJvbD1wdWJsaWMlMkMrbWF4LWFnZSUzRDg2NDAwJTJDK2ltbXV0YWJsZSZyZXNwb25zZS1jb250ZW50LWVuY29kaW5nPWd6aXAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzk2MDg0ODh9fX1dfQ__&Signature=Hs6J6WvkPrCk-L2NI~kK~vWZW9ab5twmVkfHbpwi5~ahNLw3dsM~A8YiID-KUikNaej-gQIAE2zT0DKpwGA4kF-PeEBT9zvdBXIZKS2fv~mMZQpi~WKTxESwv-UEARXdSsrwFHQAy3eZPVRiNm0SJO0lC0jgE5raFBeSo2wpv9FlKEn6i7c3ZEf1iC9n8RGBw1nVmUL5Bbcl-mHGQQ0FPL2qLwdEKVnUlgZlJA-e41FX9nVFNbwlclSuWYMkYrZBhXAE5bl8yu6Goj5hzKu9wK0Ucg-9rpeyzPDVXlT~XOeyxW5zqYNWuUr2H6mB-rrq0fr3FqkxPv5jmdUVf1unGg__&Key-Pair-Id=K3CSIJDLI589NB" 
                  alt="Passenger Amenities at Saraigarh Junction" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div className="bg-dark p-3 text-center border-bottom" style={{ borderColor: '#ffb300 !important', borderBottomWidth: '4px', borderBottomStyle: 'solid' }}>
                <h4 className="oswald text-white mb-0">Station Upgrades</h4>
              </div>
              <div className="card-body p-4 bg-white">
                <p className="small fw-bold text-dark mb-3"><i className="fas fa-map-marker-alt text-warning me-1"></i> Saraigarh Junction, Bihar</p>
                <ul className="list-unstyled roboto small text-muted mb-0">
                  <li className="mb-2"><i className="fas fa-check text-warning me-2"></i> Public utility and water installations</li>
                  <li className="mb-2"><i className="fas fa-check text-warning me-2"></i> Platform infrastructure enhancements</li>
                  <li><i className="fas fa-check text-warning me-2"></i> Station beautification works</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3: Track Laying */}
          <div className="col-lg-4 col-md-6" data-cue="slideInUp" data-delay="200">
            <div className="card shadow-lg border-0 h-100" style={{ borderRadius: '15px', overflow: 'hidden' }}>
              <div style={{ height: '250px', width: '100%', overflow: 'hidden', backgroundColor: '#e9ecef' }}>
                {/* Permanent Public CDN Link - Track */}
                <img 
                  src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2000&auto=format&fit=crop" 
                  alt="Modern Automated Track Laying Operation" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div className="bg-dark p-3 text-center border-bottom" style={{ borderColor: '#ffb300 !important', borderBottomWidth: '4px', borderBottomStyle: 'solid' }}>
                <h4 className="oswald text-white mb-0">Track Construction</h4>
              </div>
              <div className="card-body p-4 bg-white">
                <p className="small fw-bold text-dark mb-3"><i className="fas fa-tools text-warning me-1"></i> Modern NTC Operations</p>
                <ul className="list-unstyled roboto small text-muted mb-0">
                  <li className="mb-2"><i className="fas fa-check text-warning me-2"></i> Broad gauge track linking & laying</li>
                  <li className="mb-2"><i className="fas fa-check text-warning me-2"></i> Sleeper renewal & welding</li>
                  <li><i className="fas fa-check text-warning me-2"></i> High-speed deployment methods</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}