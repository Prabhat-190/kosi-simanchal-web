import React from 'react';

export default function Services() {
  const services = [
    {
      icon: 'uil-building',
      title: 'Building Construction',
      desc: 'Development of residential apartments, flats, commercial malls, hospitals, and industrial sheds.'
    },
    {
      icon: 'uil-constructor',
      title: 'Civil Engineering',
      desc: 'Construction and maintenance of roads, highways, bridges, tunnels, canals, and dams.'
    },
    {
      icon: 'uil-cog',
      title: 'Turnkey Projects',
      desc: 'End-to-end execution of civil, mechanical, and electrical erection and commissioning projects.'
    },
    {
      icon: 'uil-cube',
      title: 'Manufacturing & Trading',
      desc: 'Supply of premium building materials including bricks, sand, cement, steel, and tubular structures.'
    },
    {
      icon: 'uil-file-contract',
      title: 'Govt Contracting',
      desc: 'Registered Class 3 contractor executing state and central government rural works and civil contracts.'
    },
    {
      icon: 'uil-estate',
      title: 'Real Estate',
      desc: 'Promoters, colonizers of estates, and farm land developers acting as agents for purchasing and selling.'
    }
  ];

  return (
    <section className="wrapper bg-light wrapper-border" id="services">
      <div className="container py-14 py-md-16">
        <div className="row text-center" data-cues="slideInUp">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2 className="fs-16 text-uppercase text-main mb-3 oswald fw-bold tracking-wider">Our Expertise</h2>
            <h3 className="display-4 mb-10 px-xl-10 oswald" style={{ color: '#0f172a' }}>
              Comprehensive <span className="text-main">Construction Solutions</span>
            </h3>
          </div>
        </div>
        
        <div className="row gx-md-8 gy-8 text-center" data-cues="zoomIn" data-group="services">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              {/* Using Buildify's custom card-border styles */}
              <div className="card shadow-lg card-border-bottom border-soft-primary h-100">
                <div className="card-body">
                  <div className="icon btn btn-circle btn-lg btn-soft-primary disabled mb-4">
                    <i className={`uil ${service.icon} fs-30 text-main`}></i>
                  </div>
                  <h4 className="oswald fw-bold mb-3">{service.title}</h4>
                  <p className="roboto text-muted mb-0">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}