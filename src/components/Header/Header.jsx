import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#howitworks", label: "How it works" },
    { href: "#whyus", label: "Why us" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className='header'>
      <div className='container'>
        <div className='header_inner'>
          <button
            type='button'
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label='Toggle navigation menu'
            aria-expanded={menuOpen}
          >
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </button>

          <a href='#banner' className='logo'>
            <img src='/logo.svg' alt='NodeMedCore Logo' />
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

          <a href='#contact' className='btn_consult btn btn--gradient'>
            Book a Consult
          </a>
        </div>

        {/* Mobile Navigation */}
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

          <a href='#contact' className='mobile-consult' onClick={closeMenu}>
            Book a Consult
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
