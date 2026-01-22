import Link from "next/link";

export default function About() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="sectionTitle">About Digital Star Chain</h1>
          <p className="sectionSub">
            Digital Star Chain is a corporate-grade growth partner for digital channels, focused on clarity,
            execution, and measurable results.
          </p>

          <div className="grid2">
            <div className="card cardPad">
              <div className="featureTitle">What we believe</div>
              <p className="featureDesc" style={{ marginTop: 10 }}>
                Growth is not a collection of tactics. It’s a system. We align strategy, execution and
                measurement so every activity supports business objectives.
              </p>
              <p className="featureDesc" style={{ marginTop: 10 }}>
                Our work prioritizes clarity over noise: clear targets, clear KPIs, clear accountability.
              </p>
            </div>

            <div className="card cardPad">
              <div className="featureTitle">What you can expect</div>
              <p className="featureDesc" style={{ marginTop: 10 }}>
                A structured process, fast delivery, and transparent communication. You will always know what’s
                happening and why.
              </p>
              <ul className="small" style={{ marginTop: 10, paddingLeft: 18 }}>
                <li>Clear roadmap and priorities</li>
                <li>Weekly iteration and optimization</li>
                <li>Reporting tied to KPIs</li>
              </ul>
            </div>
          </div>

          <div className="grid3">
            <div className="card cardPad">
              <div className="featureTitle">Strategy</div>
              <p className="featureDesc">
                Objectives, positioning, channel mix and KPIs. Every decision is tied to a measurable goal.
              </p>
            </div>
            <div className="card cardPad">
              <div className="featureTitle">Execution</div>
              <p className="featureDesc">
                Campaigns, creative, landing pages and lifecycle flows delivered with speed and discipline.
              </p>
            </div>
            <div className="card cardPad">
              <div className="featureTitle">Optimization</div>
              <p className="featureDesc">
                Tracking, testing and iteration. Growth comes from continuous improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="ctaBox">
            <div>
              <h3 style={{ margin: 0, fontSize: 22, letterSpacing: "-0.2px" }}>How we work</h3>
              <p className="sectionSub" style={{ marginTop: 8 }}>
                Audit → strategy → launch → measure → iterate. Simple, structured, and measurable.
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
