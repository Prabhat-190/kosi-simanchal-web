import FigureImage from './FigureImage';

const About = () => {
  return (
    <div className="container py-10 py-md-14" id="about">
      <div className="row gx-lg-8 align-items-center">
        <div className="col-lg-6 order-lg-2">
          <FigureImage src="/img/about-site.jpg" width={600} height={700} className="rounded shadow-lg" />
        </div>
        <div className="col-lg-6 order-lg-1 mt-5 mt-lg-0">
          <h3 className="fs-15 py-2 px-3 d-inline rounded-pill oswald fw-bold" style={{ backgroundColor: '#e2e8f0', color: '#ffb300' }}>
            About The Company
          </h3>
          <h2 className="mb-4 mt-4 fs-40 fw-bold oswald" style={{ color: '#0f172a' }}>
            Kosi Simanchal Manufacturing & Construction Pvt. Ltd.
          </h2>
          <p className="mb-4 text-justify roboto fs-18 text-muted">
            Established in 2022, we are a premier infrastructure and development firm registered in Bihar. We specialize in executing turnkey projects, including the construction of apartments, commercial complexes, hospitals, and civil engineering works such as roads, bridges, and dams.
          </p>
          <div className="bg-light p-4 rounded border-start border-4 shadow-sm mb-5" style={{ borderColor: '#ffb300' }}>
            <h5 className="oswald fw-bold mb-3">Official Accreditations:</h5>
            <ul className="list-unstyled mb-0 roboto text-muted">
              <li className="mb-2"><i className="uil uil-check-circle fs-20 me-2 text-success"></i> <strong>Class 3 Rural Works Contractor</strong> (Reg No: 3230398)</li>
              <li className="mb-2"><i className="uil uil-check-circle fs-20 me-2 text-success"></i> <strong>Startup India Recognized</strong> (DIPP188656)</li>
              <li className="mb-2"><i className="uil uil-check-circle fs-20 me-2 text-success"></i> <strong>MSME Udyam Registered</strong> (BR-26-0068725)</li>
              <li><i className="uil uil-check-circle fs-20 me-2 text-success"></i> <strong>GeM & IREPS Verified Vendor</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
