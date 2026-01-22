export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="sectionTitle">Services</h1>
        <p className="sectionSub">
          A focused set of services designed to support sustainable, measurable digital growth.
        </p>

        <div className="grid2">
          <div className="card cardPad">
            <div className="featureTitle">Growth Strategy</div>
            <p className="featureDesc" style={{ marginTop: 10 }}>
              Strategic definition of objectives, channels and KPIs to guide all execution.
            </p>
            <ul className="small" style={{ marginTop: 10, paddingLeft: 18 }}>
              <li>Market and audience analysis</li>
              <li>Channel mix definition</li>
              <li>KPI framework and roadmap</li>
            </ul>
            <p className="small" style={{ marginTop: 10 }}>
              <strong>Outcome:</strong> A clear, measurable growth plan.
            </p>
          </div>

          <div className="card cardPad">
            <div className="featureTitle">Acquisition & Performance</div>
            <p className="featureDesc" style={{ marginTop: 10 }}>
              Campaign execution focused on efficient and scalable demand acquisition.
            </p>
            <ul className="small" style={{ marginTop: 10, paddingLeft: 18 }}>
              <li>SEO and content systems</li>
              <li>Paid search and paid social</li>
              <li>Landing pages and conversion paths</li>
            </ul>
            <p className="small" style={{ marginTop: 10 }}>
              <strong>Outcome:</strong> Predictable acquisition with controlled costs.
            </p>
          </div>

          <div className="card cardPad">
            <div className="featureTitle">Lifecycle & Retention</div>
            <p className="featureDesc" style={{ marginTop: 10 }}>
              Programs that convert users into customers and maximize lifetime value.
            </p>
            <ul className="small" style={{ marginTop: 10, paddingLeft: 18 }}>
              <li>Email marketing and automations</li>
              <li>Segmentation and personalization</li>
              <li>Retention and reactivation flows</li>
            </ul>
            <p className="small" style={{ marginTop: 10 }}>
              <strong>Outcome:</strong> Higher retention and long-term revenue.
            </p>
          </div>

          <div className="card cardPad">
            <div className="featureTitle">Analytics & Optimization</div>
            <p className="featureDesc" style={{ marginTop: 10 }}>
              Measurement, insights and continuous optimization across the funnel.
            </p>
            <ul className="small" style={{ marginTop: 10, paddingLeft: 18 }}>
              <li>Tracking and analytics setup</li>
              <li>Dashboards and reporting</li>
              <li>Testing and optimization cycles</li>
            </ul>
            <p className="small" style={{ marginTop: 10 }}>
              <strong>Outcome:</strong> Data-driven decisions and performance clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
