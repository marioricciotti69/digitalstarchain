export default function WhyUs() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="sectionTitle">Why Us</h1>
        <p className="sectionSub">
          We combine corporate standards with startup speed: clear plans, fast execution, and measurable results.
        </p>

        <div className="grid3">
          <div className="card cardPad">
            <div className="featureTitle">Clear strategy</div>
            <p className="featureDesc">We define objectives, KPIs, and the channel roadmap before spending a euro.</p>
          </div>
          <div className="card cardPad">
            <div className="featureTitle">Disciplined execution</div>
            <p className="featureDesc">We ship, test, learn and iterate weekly — not quarterly.</p>
          </div>
          <div className="card cardPad">
            <div className="featureTitle">Transparent reporting</div>
            <p className="featureDesc">Dashboards and plain-English updates so you always know what’s happening.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
