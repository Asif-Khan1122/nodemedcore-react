import { useState } from "react";
import "./services.css";

const servicesData = [
  {
    number: "01",
    title: "Charge entry & coding",
    description:
      "CPT, ICD-10, and modifier coding done by coders who work your specialty, not a general template.",
  },
  {
    number: "02",
    title: "Claims submission & scrubbing",
    description:
      "Every claim runs through payer-specific edits before it ever leaves the building.",
  },
  {
    number: "03",
    title: "Denial management & appeals",
    description:
      "We trace the denial reason, fix the root cause, and file the appeal — not just resubmit and hope.",
  },
  {
    number: "04",
    title: "Payment posting & reconciliation",
    description:
      "Remits matched line-by-line to charges. Shortfalls and underpayments get flagged, not buried.",
  },
  {
    number: "05",
    title: "Credentialing & enrollment",
    description:
      "Payer enrollment and re-credentialing tracked so providers stay in-network without the paper chase.",
  },
  {
    number: "06",
    title: "Reporting & analytics",
    description:
      "A/R aging, denial trends, and collection rate — in plain numbers, sent weekly.",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className='services' id='services'>
      <div className='container'>
        <div className='services_inner'>
          <div className='services_header'>
            <span className='services_tag'>SERVICES</span>
            <h2 className='services_title'>
              Full revenue cycle, or just the part that’s stalling
            </h2>
            <p className='services_description'>
              Bring on the full billing operation, or hand off one broken piece
              of it. Everything is priced and scoped per practice.
            </p>
          </div>

          <div className='services_grid'>
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={`services_card ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className='card_number'>{service.number}</div>
                <h3 className='card_title'>{service.title}</h3>
                <p className='card_description'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
