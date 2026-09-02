import "./HowItWorksSection.css";

const steps = [
  {
    stage: "STAGE 1",
    title: "Encounter captured",
    description:
      "Visit notes and charges come in directly from your EHR or intake sheet.",
  },
  {
    stage: "STAGE 2",
    title: "Coded & scrubbed",
    description:
      "CPT/ICD-10 coding applied, eligibility checked, payer edits run.",
  },
  {
    stage: "STAGE 3",
    title: "Submitted",
    description:
      "Claim sent electronically to the payer, typically within 24 hours.",
  },
  {
    stage: "STAGE 4",
    title: "Adjudicated",
    description:
      "Payer approves, denies, or returns the claim for more information.",
  },
  {
    stage: "STAGE 5",
    title: "Posted & reconciled",
    description:
      "Payment posted against the charge; balance is billed or appealed.",
  },
];

function ProcessTimeline({ steps }) {
  return (
    <div className='timeline_row'>
      {steps.map((step, index) => (
        <div className='timeline_item' key={index}>
          <div className='marker_row'>
            <span className='circle_dot' />
            <span className='dashed_line' />
          </div>
          <p className='stage_label'>{step.stage}</p>
          <h3 className='step_title'>{step.title}</h3>
          <p className='step_description'>{step.description}</p>
        </div>
      ))}
    </div>
  );
}

function HowItWorksSection() {
  return (
    <section className='howitworks' id='howitworks'>
      <div className='container'>
        <div className='howitworks_inner'>
          <div className='howitworks_header'>
            <p className='howitworks_tag'>HOW IT WORKS</p>
            <h2 className='howitworks_title'>
              What happens between a visit and a payment
            </h2>
            <p className='howitworks_description'>
              Five stages, the same five stages every claim goes through. We
              just make sure none of them stall.
            </p>
          </div>

          <ProcessTimeline steps={steps} />
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
