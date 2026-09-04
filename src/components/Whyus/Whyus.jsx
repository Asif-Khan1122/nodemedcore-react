import "./Whyus.css";

const Whyus = () => {
  const features = [
    {
      title: "Specialty-aware coding",
      description:
        "Coders assigned by specialty, not rotated across every claim type that comes in.",
    },
    {
      title: "A dedicated account manager",
      description:
        "One person who knows your payer mix and answers the phone — not a support ticket.",
    },
    {
      title: "Weekly reporting, not monthly",
      description:
        "You see A/R aging and denial trends before they become a quarter-end surprise.",
    },
    {
      title: "Transparent, flat pricing",
      description:
        "A percentage of collections or a flat monthly fee — agreed before we start, no surprise add-ons.",
    },
  ];

  const badges = [
    "HIPAA-Aligned Workflows",
    "Encrypted Data Transfer",
    "Access-Controlled Records",
    "Full Audit Trail",
  ];

  return (
    <section className='whyus' id='whyus'>
      <div className='container'>
        <div className='whyus_inner'>
          <div className='whyus_header'>
            <p className='whyus_tag'>why nodemedcore</p>
            <h2 className='whyus_title'>
              Built to be accountable to one practice at a time
            </h2>
            <p className='whyus_description'>
              No offshore ticket queue, no black-box reporting. You know who's
              working your claims and what they're doing with them.
            </p>
          </div>

          <div className='whyus_content'>
            <div className='whyus_list'>
              {features.map((item, index) => (
                <div className='whyus_item' key={index}>
                  <span className='whyus_arrow'>
                    <svg
                      width='11'
                      height='8'
                      viewBox='0 0 12 8'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M11.3536 4.03544C11.5488 3.84018 11.5488 3.52359 11.3536 3.32833L8.17157 0.146351C7.97631 -0.0489113 7.65973 -0.0489113 7.46447 0.146351C7.2692 0.341613 7.2692 0.658195 7.46447 0.853458L10.2929 3.68188L7.46447 6.51031C7.2692 6.70557 7.2692 7.02216 7.46447 7.21742C7.65973 7.41268 7.97631 7.41268 8.17157 7.21742L11.3536 4.03544ZM0 3.68188V4.18188H11V3.68188V3.18188H0V3.68188Z'
                        fill='#0DDABB'
                      />
                    </svg>
                  </span>
                  <div className='whyus_item_text'>
                    <h3 className='whyus_item_title'>{item.title}</h3>
                    <p className='whyus_item_description'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className='whyus_card'>
              <p className='whyus_card_label'>compliance & handling</p>

              {/* Badges Container - all badges in one parent */}
              <div className='whyus_badges'>
                {badges.map((badge, index) => (
                  <span className='whyus_badge' key={index}>
                    {badge}
                  </span>
                ))}
              </div>

              <p className='whyus_card_caption'>
                Every claim, note, and remit that passes through Nodemedcore is
                logged — so you can see exactly who touched what, and when.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
