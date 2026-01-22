import Link from "next/link";

export default function About() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="sectionTitle">About Digital Star Chain</h1>
          <p className="sectionSub">
            Digital Star Chain is a corporate-grade growth partner for digital channels, focused on
            clarity, execution, and measurable results.
          </p>

          <div className="grid2">
            <div className="card cardPad">
              <div className="featureTitle">What we believe</div>
              <p className="featureDesc">
                Growth is not a
Name="featureTitle">Execution</div>
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
