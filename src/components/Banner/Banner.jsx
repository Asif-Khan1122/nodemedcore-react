import { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Banner.css";
import { Helmet } from "react-helmet-async";

const initialRows = [
  { id: 1, mid: "Scrub", end: "Payer", status: "paid", progress: 0 },
  { id: 2, mid: "Submit", end: "Remit", status: "review", progress: 0 },
  { id: 3, mid: "Appeal", end: "Payer", status: "denied", progress: 0 },
];

const ArrowIcon = () => <FaArrowRight className='arrow_icon' />;

const STATUS_LABEL = {
  paid: "Paid",
  review: "In review",
  denied: (
    <>
      Denied <ArrowIcon /> appeal
    </>
  ),
};

const SPEEDS = {
  1: 0.03,
  2: 0.025,
  3: 0.02,
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
    <>
      <Helmet>
        <title>NodeMedCore | Healthcare Solutions</title>
        <meta
          name='description'
          content='NodeMedCore provides cutting-edge solutions for medical technologies...'
        />
        <meta property='og:title' content='NodeMedCore' />
        <meta
          property='og:description'
          content='Healthcare and technology solutions.'
        />
        <meta property='og:type' content='website' />
      </Helmet>

      <section className='banner' id='banner'>
        <div className='banner_container'>
          <div className='banner_inner'>
            <div className='banner__content'>
              <span className='banner_eyebrow'>
                <i className='banner_eyebrow-dot' />
                Medical billing &amp; revenue cycle management
              </span>

              <h1 className='banner__heading'>
                Every claim follows a <br /> path.
                <br />
                We keep it moving to <br />
                <span className='banner__accent'>paid</span>.
              </h1>

              <p className='banner_desc'>
                Nodemedcore handles coding, submission, and denial management
                for independent practices — so claims go out clean, payers
                respond faster, and nothing sits stuck in a queue.
              </p>

              <div className='banner__actions'>
                <a href='#consult' className='btn btn--primary banner_btn'>
                  Book free billing audit
                </a>
                <a href='#howitworks' className='btn btn--link'>
                  See how a claim moves <FaArrowRight className='arrow_icon' />
                </a>
              </div>
            </div>

            <div className='banner_visual'>
              <ClaimTrackerCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
