import "./Footer.css";

const footerData = {
  services: [
    { label: "Coding & charge entry", href: "#" },
    { label: "Claims & scrubbing", href: "#" },
    { label: "Denials & appeals", href: "#" },
    { label: "Credentialing", href: "#" },
  ],
  company: [
    { label: "Why Nodemedcore", href: "#" },
    { label: "How it works", href: "#" },
    { label: "Contact", href: "#" },
  ],
  contact: [
    { label: "hello@nodemedcore.com", href: "mailto:hello@nodemedcore.com" },
    { label: "Book a consult call", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-grid'>
          <div className='footer-brand'>
            <div className='footer-logo-wrap'>
              <img src='./logo.png' alt='Nodemedcore Logo' />
            </div>
            <p className='footer-description'>
              Medical billing and revenue cycle management for independent
              practices.
            </p>
          </div>

          <div className='footer-links-grid'>
            <div className='footer-column'>
              <h3 className='footer-heading'>Services</h3>
              <ul className='footer-list'>
                {footerData.services.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className='footer-link'>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className='footer-column'>
              <h3 className='footer-heading'>Company</h3>
              <ul className='footer-list'>
                {footerData.company.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className='footer-link'>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className='footer-column'>
              <h3 className='footer-heading'>Contact</h3>
              <ul className='footer-list'>
                {footerData.contact.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className='footer-link'>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='footer-bottom'>
          <p>© 2026 Nodemedcore. All rights reserved.</p>
          <p>HIPAA-aligned handling on every claim.</p>
        </div>
      </div>
    </footer>
  );
}
