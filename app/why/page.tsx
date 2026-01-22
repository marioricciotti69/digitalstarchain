import Link from "next/link";

export default function WhyUs() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="sectionTitle">Why Us</h1>
          <p className="sectionSub">
            Digital Star Chain is built for teams that want clarity, disciplined execution, and measurable outcomes —
            without noise, jargon, or guesswork.
          </p>

          <div className="grid3">
            <div className="card cardPad">
              <div className="featureTitle">Clarity first</div>
              <p className="featureDesc">
                We align on objectives, KPIs, and priorities before execution. Everyone knows what success looks like.
              </p>
            </div>

            <div className="card cardPad">
              <div className="featureTitle">Corporate discipline</div>
              <p className="featureDesc">
                Structured planning, consistent delivery, and documentation. You get a process — not random actions.
              </p>
            </div>

            <div className="card cardPad">
              <div className="featureTitle">Measurable execution</div>
              <p className="featureDesc">
                Tracking, reporting, and iterative optimization. Decisions are guided by performance, not opinions.
              </p>
            </div>
          </div>

          <div className="grid2">
            <div className="card cardPad">
              <div className="featureTitle">A predictable process</div>
              <p className="featureDesc" style={{ marginTop: 10 }}>
                We follow a simple framework designed to reduce uncertainty and deliver progress quickly.
              </p>
              <ol className="small" style={{ marginTop: 10, paddingLeft: 18 }}>
                <li>
                  <strong>Audit:</strong> channels, messaging, tracking, and performance gaps.
                </li>
                <li>
                  <strong>Roadmap:</strong> priorities, KPIs, and an execution calendar.
                </li>
                <li>
                  <strong>Launch:</strong> campaigns, assets, and conversion paths.
                </li>
                <li>
                  <strong>Measure:</strong> dashboards and reporting with clear insights.
                </li>
                <li>
                  <strong>Iterate:</strong> structured testing and optimization cycles.
                </li>
              </ol>
            </div>

            <div className="card cardPad">
              <div className="featureTitle">What you receive</div>
              <p className="featureDesc" style={{ marginTop: 10 }}>
                Clear deliverables that make progress visible and easy to communicate internally.
              </p>
              <ul className="small" style={{ marginTop: 10, paddingLeft: 18 }}>
                <li>Growth roadmap with priorities and timelines</li>
                <li>KPI framework and reporting cadence</li>
                <li>Execution plan and deliverables</li>
                <li>Optimization notes and next-step recommendations</li>
              </ul>

              <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <span className="badge">Audit</span>
                <span className="badge">Roadmap</span>
                <span className="badge">Execution</span>
                <span className="badge">Reporting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="ctaBox">
            <div>
              <h3 style={{ margin: 0, fontSize: 22, letterSpacing: "-0.2px" }}>
                Ready for a clear growth plan?
              </h3>
              <p className="sectionSub" style={{ marginTop: 8 }}>
                Tell us your goals and we’ll respond with next steps and a tailored proposal.
              </p>
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link className="btn" href="/services">
                View services
              </Link>
              <Link className="btn btnPrimary" href="/contact">
                Request a proposal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
