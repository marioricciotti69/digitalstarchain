import Link from "next/link";

export default function Navbar() {
  return (
    <header style={{ borderBottom: "1px solid #e6e8ec", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ fontWeight: 800, textDecoration: "none", color: "#0b1220" }}>
          Digital Star Chain
        </Link>

        <nav style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <Link href="/about" style={{ color: "#556070", textDecoration: "none" }}>About</Link>
          <Link href="/services" style={{ color: "#556070", textDecoration: "none" }}>Services</Link>
          <Link href="/why" style={{ color: "#556070", textDecoration: "none" }}>Why Us</Link>
          <Link href="/contact" style={{ color: "#556070", textDecoration: "none" }}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
       </div>
      </div>
    </header>
  );
}
