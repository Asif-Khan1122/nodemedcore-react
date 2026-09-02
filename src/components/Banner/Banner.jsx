// import { useState, useEffect } from "react";
// import "./banner.css";

// const initialRows = [
//   { id: 1, mid: "Scrub", end: "Payer", status: "paid", progress: 6 },
//   { id: 2, mid: "Submit", end: "Remit", status: "review", progress: 12 },
//   { id: 3, mid: "Appeal", end: "Payer", status: "denied", progress: 24 },
// ];

// const ArrowIcon = () => (
//   <svg
//     width='9'
//     height='8'
//     viewBox='0 0 9 8'
//     fill='none'
//     xmlns='http://www.w3.org/2000/svg'
//   >
//     <path
//       d='M8.35355 4.03556C8.54882 3.8403 8.54882 3.52372 8.35355 3.32845L5.17157 0.146473C4.97631 -0.0487893 4.65973 -0.0487893 4.46447 0.146473C4.2692 0.341735 4.2692 0.658318 4.46447 0.85358L7.29289 3.68201L4.46447 6.51043C4.2692 6.7057 4.2692 7.02228 4.46447 7.21754C4.65973 7.4128 4.97631 7.4128 5.17157 7.21754L8.35355 4.03556ZM0 3.68201V4.18201H8V3.68201V3.18201H0V3.68201Z'
//       fill='#0B3A62'
//     />
//   </svg>
// );

// const STATUS_LABEL = {
//   paid: "Paid",
//   review: "In review",
//   denied: (
//     <>
//       Denied <ArrowIcon /> appeal
//     </>
//   ),
// };

// const ClaimTrackerCard = () => {
//   const [rows, setRows] = useState(initialRows);

//   useEffect(() => {
//     const durations = {
//       1: 1000,
//       2: 2000,
//       3: 3000,
//     };

//     const intervals = Object.entries(durations).map(([id, duration]) =>
//       setInterval(() => {
//         setRows((prev) =>
//           prev.map((row) => {
//             if (row.id !== Number(id)) {
//               return row;
//             }

//             let next = row.progress + (Math.random() * 4 - 1);

//             if (next > 90) {
//               next = 15 + Math.random() * 10;
//             }

//             if (next < 8) {
//               next = 8;
//             }

//             return {
//               ...row,
//               progress: next,
//             };
//           }),
//         );
//       }, duration),
//     );

//     return () => {
//       intervals.forEach(clearInterval);
//     };
//   }, []);

//   return (
//     <div className='tracker-card'>
//       <div className='tracker-card__header'>
//         <span className='tracker-card__title'>Claim tracker - Live view</span>

//         <span className='tracker-card__live'>
//           <span className='tracker-card__live-dot' />
//           Streaming
//         </span>
//       </div>

//       <div className='tracker-card__rows'>
//         {rows.map((row) => (
//           <div className='tracker-row' key={row.id}>
//             <div className='tracker-row__labels'>
//               <span>Practice</span>
//               <span>{row.mid}</span>
//               <span>{row.end}</span>
//             </div>

//             <div className='tracker-row__track'>
//               <span className='tracker-row__line' />

//               <span className='tracker-row__ring' style={{ left: "0%" }} />

//               <span className='tracker-row__ring' style={{ left: "50%" }} />

//               <span className='tracker-row__ring' style={{ left: "100%" }} />

//               <span
//                 className={`tracker-row__node tracker-row__node--${row.status}`}
//                 style={{
//                   left: `${row.progress}%`,
//                   transitionDuration: `${row.id * 1.5}s`,
//                 }}
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className='tracker-card__legend'>
//         <span>
//           <i className='legend-dot legend-dot--paid' />
//           {STATUS_LABEL.paid}
//         </span>

//         <span>
//           <i className='legend-dot legend-dot--review' />
//           {STATUS_LABEL.review}
//         </span>

//         <span>
//           <i className='legend-dot legend-dot--denied' />
//           {STATUS_LABEL.denied}
//         </span>
//       </div>
//     </div>
//   );
// };

// const Banner = () => {
//   return (
//     <section className='banner'>
//       <div className='banner_container'>
//         <div className='banner_inner'>
//           <div className='banner__content'>
//             <span className='banner_eyebrow'>
//               <i className='banner_eyebrow-dot' />
//               Medical billing &amp; revenue cycle management
//             </span>

//             <h2 className='banner__heading'>
//               Every claim follows a <br /> path.
//               <br />
//               We keep it moving to <br />
//               <span className='banner__accent'>paid</span>.
//             </h2>

//             <p className='banner_desc'>
//               Nodemedcore handles coding, submission, and denial management for
//               independent practices — so claims go out clean, payers respond
//               faster, and nothing sits stuck in a queue.
//             </p>

//             <div className='banner__actions'>
//               <button href='#consult' className='btn btn--primary'>
//                 Book free billing audit
//               </button>
//               <a href='#how-it-works' className='btn btn--link'>
//                 See how a claim moves →
//               </a>
//             </div>
//           </div>

//           <div className='banner_visual'>
//             <ClaimTrackerCard />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;
import { useState, useEffect, useRef } from "react";
import "./banner.css";

const initialRows = [
  { id: 1, mid: "Scrub", end: "Payer", status: "paid", progress: 0 },
  { id: 2, mid: "Submit", end: "Remit", status: "review", progress: 0 },
  { id: 3, mid: "Appeal", end: "Payer", status: "denied", progress: 0 },
];

const ArrowIcon = () => (
  <svg
    width='9'
    height='8'
    viewBox='0 0 9 8'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M8.35355 4.03556C8.54882 3.8403 8.54882 3.52372 8.35355 3.32845L5.17157 0.146473C4.97631 -0.0487893 4.65973 -0.0487893 4.46447 0.146473C4.2692 0.341735 4.2692 0.658318 4.46447 0.85358L7.29289 3.68201L4.46447 6.51043C4.2692 6.7057 4.2692 7.02228 4.46447 7.21754C4.65973 7.4128 4.97631 7.4128 5.17157 7.21754L8.35355 4.03556ZM0 3.68201V4.18201H8V3.68201V3.18201H0V3.68201Z'
      fill='#0B3A62'
    />
  </svg>
);

const STATUS_LABEL = {
  paid: "Paid",
  review: "In review",
  denied: (
    <>
      Denied <ArrowIcon /> appeal
    </>
  ),
};

// row.id = 1 -> fastest, 2 -> medium, 3 -> slowest (% progress per millisecond)
const SPEEDS = {
  1: 0.035,
  2: 0.022,
  3: 0.014,
};

const ClaimTrackerCard = () => {
  const [rows, setRows] = useState(initialRows);
  const lastTimeRef = useRef(null);
  const frameIdRef = useRef(null);

  useEffect(() => {
    const tick = (now) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = now;
      }

      const delta = now - lastTimeRef.current;
      lastTimeRef.current = now;

      setRows((prev) =>
        prev.map((row) => {
          const speed = SPEEDS[row.id];
          let next = row.progress + speed * delta;

          // pura line traverse karke wapis start (0) se loop
          if (next >= 100) {
            next = next % 100;
          }

          return {
            ...row,
            progress: next,
          };
        }),
      );

      frameIdRef.current = requestAnimationFrame(tick);
    };

    frameIdRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
    };
  }, []);

  return (
    <div className='tracker-card'>
      <div className='tracker-card__header'>
        <span className='tracker-card__title'>Claim tracker - Live view</span>

        <span className='tracker-card__live'>
          <span className='tracker-card__live-dot' />
          Streaming
        </span>
      </div>

      <div className='tracker-card__rows'>
        {rows.map((row) => (
          <div className='tracker-row' key={row.id}>
            <div className='tracker-row__labels'>
              <span>Practice</span>
              <span>{row.mid}</span>
              <span>{row.end}</span>
            </div>

            <div className='tracker-row__track'>
              <span className='tracker-row__line' />

              <span className='tracker-row__ring' style={{ left: "0%" }} />

              <span className='tracker-row__ring' style={{ left: "50%" }} />

              <span className='tracker-row__ring' style={{ left: "100%" }} />

              <span
                className={`tracker-row__node tracker-row__node--${row.status}`}
                style={{
                  left: `${row.progress}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className='tracker-card__legend'>
        <span>
          <i className='legend-dot legend-dot--paid' />
          {STATUS_LABEL.paid}
        </span>

        <span>
          <i className='legend-dot legend-dot--review' />
          {STATUS_LABEL.review}
        </span>

        <span>
          <i className='legend-dot legend-dot--denied' />
          {STATUS_LABEL.denied}
        </span>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <section className='banner'>
      <div className='banner_container'>
        <div className='banner_inner'>
          <div className='banner__content'>
            <span className='banner_eyebrow'>
              <i className='banner_eyebrow-dot' />
              Medical billing &amp; revenue cycle management
            </span>

            <h2 className='banner__heading'>
              Every claim follows a <br /> path.
              <br />
              We keep it moving to <br />
              <span className='banner__accent'>paid</span>.
            </h2>

            <p className='banner_desc'>
              Nodemedcore handles coding, submission, and denial management for
              independent practices — so claims go out clean, payers respond
              faster, and nothing sits stuck in a queue.
            </p>

            <div className='banner__actions'>
              <button href='#consult' className='btn btn--primary'>
                Book free billing audit
              </button>
              <a href='#how-it-works' className='btn btn--link'>
                See how a claim moves →
              </a>
            </div>
          </div>

          <div className='banner_visual'>
            <ClaimTrackerCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;