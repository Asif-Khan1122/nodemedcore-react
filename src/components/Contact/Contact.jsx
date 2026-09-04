import "./Contact.css";

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <div className='container'>
        <div className='contact_inner'>
          <p className='contact_tag'>Get started</p>
          <h2 className='contact_title'>Ready to stop chasing claims? </h2>
          <p className='contact_description'>
            Send us 90 days of your last billing cycle. We’ll show you where
            claims are stalling and what fixing would take - no cost, no
            commitment.
          </p>
          <a href='#' className='contact_btn'>
            Book free billing audit
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
