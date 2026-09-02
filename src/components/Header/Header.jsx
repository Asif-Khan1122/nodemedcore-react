import { useState, useEffect, useRef } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#howitworks", label: "How it works" },
    { href: "#why-us", label: "Why us" },
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

          <a href='#home' className='logo'>
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
