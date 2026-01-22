export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="sectionTitle">Services</h1>
        <p className="sectionSub">
          A focused set of services designed to improve acquisition, conversion and retention.
        </p>

        <div className="grid2">
          <div className="card cardPad">
            <div className="featureTitle">SEO & Content</div>
            <p className="featureDesc">
              Technical audits, on-page optimization, content planning and publishing systems.
            </p>
          </div>
          <div className="card cardPad">
            <div className="featureTitle">Paid Search & Social</div>
            <p className="featureDesc">
              Performance campaigns with structured testing, creative iteration and budget control.
            </p>
          </div>
          <div className="card cardPad">
            <div className="featureTitle">Email Marketing</div>
            <p className="featureDesc">
              Newsletters, automations and segmentation to grow retention and customer value.
            </p>
          </div>
          <div className="card cardPad">
            <div className="featureTitle">Analytics & Reporting</div>
            <p className="featureDesc">
              Tracking, dashboards, and KPI reporting to keep decisions grounded in data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
