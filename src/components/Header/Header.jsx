import { useState, useEffect, useRef } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#howitworks", label: "How it works" },
    { href: "#whyus", label: "Why us" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className='header' ref={headerRef}>
      <div className='container'>
        <div className='header_inner'>
          <button
            type='button'
            className='menu-toggle'
            onClick={toggleMenu}
            aria-label='Toggle menu'
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <a href='#banner' className='logo'>
            <img src='/logo.png' alt='Company logo' />
          </a>

          <div className='header_right'>
            <nav className='nav' aria-label='Main navigation'>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <a href='#consult' className='btn_consult'>
            Book a Consult
          </a>
        </div>
        {/* mobile nav */}
        <nav
          className={`mobile-nav ${menuOpen ? "active" : ""}`}
          aria-label='Mobile navigation'
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href='#consult' className='mobile-consult' onClick={closeMenu}>
            Book a Consult
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
