import React from 'react';

export default function CompanyStats() {
  return (
    <section className="wrapper bg-dark angled lower-start">
      <div className="container py-14 py-md-16">
        <div className="row mb-10 text-center" data-cue="fadeIn">
          <div className="col-xl-10 mx-auto">
            <h2 className="display-4 oswald mb-5 text-white">
              Built on <span className="text-main">Trust</span> and <span className="text-main">Excellence</span>.
            </h2>
            <p className="lead text-light opacity-75 roboto px-lg-10">
              As a recognized Startup India entity and Class 3 Rural Works Contractor, we strictly adhere to government standards and quality control.
            </p>
          </div>
        </div>
        
        <div className="row g-6 text-center" data-cues="fadeIn" data-duration="800">
          
          <div className="col-md-3">
            <div className="counter-wrapper">
              <i className="uil uil-calendar-alt text-main fs-40 mb-3 d-block"></i>
              <h3 className="counter counter-lg text-white oswald">2022</h3>
              <p className="roboto text-light opacity-75 text-uppercase fs-14 fw-bold">Year Established</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="counter-wrapper">
              <i className="uil uil-award text-main fs-40 mb-3 d-block"></i>
              <h3 className="counter counter-lg text-white oswald">100%</h3>
              <p className="roboto text-light opacity-75 text-uppercase fs-14 fw-bold">Quality Commitment</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="counter-wrapper">
              <i className="uil uil-hard-hat text-main fs-40 mb-3 d-block"></i>
              <h3 className="counter counter-lg text-white oswald">Class 3</h3>
              <p className="roboto text-light opacity-75 text-uppercase fs-14 fw-bold">Govt Contractor</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="counter-wrapper">
              <i className="uil uil-building text-main fs-40 mb-3 d-block"></i>
              <h3 className="counter counter-lg text-white oswald">U45309</h3>
              <p className="roboto text-light opacity-75 text-uppercase fs-14 fw-bold">CIN Prefix</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}