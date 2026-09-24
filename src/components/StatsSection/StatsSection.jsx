import "./StatsSection.css";

const stats = [
  {
    value: "95%+",
    description:
      "Target first-pass clean claim rate — coded and scrubbed before submission",
    note: "These are the operating targets Nodemedcare is built around, not a track record — ask us how we get there for your specialty.",
  },
  {
    value: "24 hrs",
    description: "Standard turnaround from encounter to claim submission",
  },
  {
    value: "5 days",
    description:
      "Target turnaround to file an appeal after a denial is received",
  },
];

function StatsSection() {
  return (
    <section className='stats_section' id='stats'>
      <div className='container'>
        <div className='stats_inner'>
          {stats.map((stat, index) => (
            <div className='stat_item' key={index}>
              <h3>{stat.value}</h3>
              <p>{stat.description}</p>
              {stat.note && <small>{stat.note}</small>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
