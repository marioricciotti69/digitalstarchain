import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="heroGrid">
            <div>
              <span className="badge">Corporate-grade digital growth</span>

              <h1 className="h1">A growth partner for modern digital channels</h1>

              <p className="pLead">
                Digital Star Chain is a corporate-grade growth partner for digital channels, focused on clarity,
                execution, and measurable results.
              </p>

              <div className="actions">
                <Link className="btn btnPrimary" href="/contact">
                  Request a proposal
                </Link>
                <Link className="btn" href="/services">
                  View services
                </Link>
              </div>

              <div className="kpis">
                <div className="kpi">
                  <div className="kpiVal">Strategy-first</div>
                  <div className="kpiLab">Clear objectives and KPIs.</div>
                </div>
                <div className="kpi">
                  <div className="kpiVal">Execution-ready</div>
                  <div className="kpiLab">Fast delivery and iteration.</div>
                </div>
                <div className="kpi">
                  <div className="kpiVal">Transparent</div>
                  <div className="kpiLab">Plain-English reporting.</div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="cardPad">
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800 }}>What we deliver</h3>
                <p className="featureDesc" style={{ marginTop: 10 }}>
                  A complete growth system: acquisition, conversion, and retention — built to be measurable.
                </p>

                <div className="grid2" style={{ marginTop: 14 }}>
                  <div className="card cardPad" style={{ boxShadow: "none" }}>
                    <div className="featureTitle">SEO + Content</div>
                    <p className="featureDesc">Visibility that compounds over time.</p>
                  </div>
                  <div className="card cardPad" style={{ boxShadow: "none" }}>
                    <div className="featureTitle">Paid Media</div>
                    <p className="featureDesc">Efficient spend with clear attribution.</p>
                  </div>
                  <div className="card cardPad" style={{ boxShadow: "none" }}>
                    <div className="featureTitle">Lifecycle</div>
                    <p className="featureDesc">Email flows that convert and retain.</p>
                  </div>
                  <div className="card cardPad" style={{ boxShadow: "none" }}>
                    <div className="featureTitle">Analytics</div>
                    <p className="featureDesc">Tracking, reporting, optimization.</p>
                  </div>
                </div>

                <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <span className="badge">Audit</span>
                  <span className="badge">Roadmap</span>
                  <span className="badge">Campaigns</span>
                  <span className="badge">Reporting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Services built for modern buyer journeys</h2>
          <p className="sectionSub">
            From first impression to repeat purchase, we create cohesive experiences across channels.
          </p>

          <div className="grid3">
            <div className="card cardPad">
              <div className="featureTitle">SEO & Content Strategy</div>
              <p className="featureDesc">
                Technical SEO, on-page optimization and content planning designed to rank and convert.
              </p>
            </div>
            <div className="card cardPad">
              <div className="featureTitle">Performance Marketing</div>
              <p className="featureDesc">
                Paid search and social with creative testing, landing optimization and cost control.
              </p>
            </div>
            <div className="card cardPad">
              <div className="featureTitle">Email & Lifecycle</div>
              <p className="featureDesc">
                Automations, segmentation and campaigns that increase retention and LTV.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 16 }}>
            <Link className="btn" href="/services">
              See all services →
            </Link>
          </div>
        </div>
