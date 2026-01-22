export default function About() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="sectionTitle">About Digital Star Chain</h1>
        <p className="sectionSub">
          We are a compact, execution-focused team that builds clear marketing systems for sustainable growth.
        </p>

        <div className="grid2">
          <div className="card cardPad">
            <div className="featureTitle">Our mission</div>
            <p className="featureDesc">
              Deliver corporate-grade marketing with measurable outcomes — built around clarity, discipline and speed.
            </p>
          </div>
          <div className="card cardPad">
            <div className="featureTitle">How we work</div>
            <p className="featureDesc">
              Audit → strategy → launch → measure → iterate. Every decision is tied to KPIs.
            </p>
          </div>
        </div>

        <div className="grid3">
          <div className="card cardPad">
            <div className="featureTitle">Strategy</div>
            <p className="featureDesc">Positioning, messaging, channel mix, KPI definition.</p>
          </div>
          <div className="card cardPad">
            <div className="featureTitle">Execution</div>
            <p className="featureDesc">Campaigns, creatives, landing pages, lifecycle flows.</p>
          </div>
          <div className="card cardPad">
            <div className="featureTitle">Optimization</div>
            <p className="featureDesc">Testing, reporting, iteration and continuous improvement.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
