export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "system-ui" }}>
      <h1>Digital Star Chain</h1>
      <p>Site is live ✅</p>
    </main>
  );
}

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
            <Link className="btn" href="/services">See all services →</Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="ctaBox">
            <div>
              <h3 style={{ margin: 0, fontSize: 22, letterSpacing: "-0.2px" }}>
                Want a plan tailored to your business?
              </h3>
              <p className="sectionSub" style={{ marginTop: 8 }}>
                Share your goals and we’ll reply with a clear proposal and next steps.
              </p>
            </div>
            <Link className="btn btnPrimary" href="/contact">Get started</Link>
          </div>
        </div>
      </section>
    </>
  );
}
