import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerGrid">
          <div>
            <div className="brand">
              <span className="logo" aria-hidden="true" />
              <span>Digital Star Chain</span>
            </div>
            <p className="small" style={{ marginTop: 8, maxWidth: 520 }}>
              Digital Star Chain is a corporate-grade growth partner for digital channels, focused on clarity,
              execution, and measurable results.
            </p>
          </div>

          <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/services">Services</Link>
            <Link href="/why">Why Us</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className="small" style={{ marginTop: 18 }}>
          © {new Date().getFullYear()} Digital Star Chain. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
