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
        <div className='footer_grid'>
          <div className='footer_brand'>
            <div className='footer_logo_wrap'>
              <img src='./logo.png' alt='Nodemedcore Logo' />
            </div>
            <p className='footer_description'>
              Medical billing and revenue cycle management for independent
              practices.
            </p>
          </div>

          <div className='footer_links_grid'>
            <div className='footer_column'>
              <h3 className='footer_heading'>Services</h3>
              <ul className='footer_list'>
                {footerData.services.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className='footer_link'>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className='footer_column'>
              <h3 className='footer_heading'>Company</h3>
              <ul className='footer_list'>
                {footerData.company.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className='footer_link'>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className='footer_column'>
              <h3 className='footer_heading'>Contact</h3>
              <ul className='footer_list'>
                {footerData.contact.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className='footer_link'>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='footer_bottom'>
          <p>© 2026 Nodemedcore. All rights reserved.</p>
          <p>HIPAA-aligned handling on every claim.</p>
        </div>
      </div>
    </footer>
  );
}
