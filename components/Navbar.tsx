import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/why", label: "Why Us" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container">
        <div className="navInner">
          <Link href="/" className="brand" aria-label="Digital Star Chain home">
            <span className="logo" aria-hidden="true" />
            <span>Digital Star Chain</span>
          </Link>

          <nav className="navLinks" aria-label="Main navigation">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
            <Link className="btn btnPrimary" href="/contact">
              Get a quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
