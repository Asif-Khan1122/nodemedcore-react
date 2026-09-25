import { useState, useEffect, useRef } from "react";
import "./Banner.css";
import { Helmet } from "react-helmet-async";

const initialRows = [
  {
    id: 1,
    mid: "Scrub",
    end: "Payer",
    status: "paid",
    speed: 0.02,
    progress: 0,
  },
  {
    id: 2,
    mid: "Submit",
    end: "Remit",
    status: "review",
    speed: 0.015,
    progress: 35,
  },
  {
    id: 3,
    mid: "Appeal",
    end: "Payer",
    status: "denied",
    speed: 0.01,
    progress: 70,
  },
];

const STATUS_LABEL = {
  paid: "Paid",
  review: "In review",
  denied: (
    <>
      Denied{" "}
      <span>
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
      </span>{" "}
      appeal
    </>
  ),
};

const ClaimTrackerCard = () => {
  const [rows, setRows] = useState(initialRows);
  const lastTimeRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const tick = (now) => {
      if (lastTimeRef.current !== null) {
        const delta = Math.min(now - lastTimeRef.current, 64); // Frame cap to prevent jump after tab switch

        setRows((prev) =>
          prev.map((row) => {
            let nextProgress = row.progress + row.speed * delta;
            if (nextProgress >= 100) {
              nextProgress = 0;
            }
            return { ...row, progress: nextProgress };
          }),
        );
      }
      lastTimeRef.current = now;
      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className='tracker-card'>
      <div className='tracker-card__header'>
        <span className='tracker-card__title'>Claim tracker - Live view</span>

        <span className='tracker-card__live'>
          <i className='banner_eyebrow-dot' />
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
        <title>NodeMedCore | Medical Billing & Revenue Cycle Management</title>

        <meta
          name='description'
          content='NodeMedCore handles coding, submission, and denial management for independent practices — so claims go out clean, payers respond faster, and nothing sits stuck in a queue.'
        />

        <meta
          property='og:title'
          content='NodeMedCore | Medical Billing & Revenue Cycle Management'
        />

        <meta
          property='og:description'
          content='NodeMedCore handles coding, submission, and denial management for independent practices.'
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://nodemedcore.com/' />
        <meta
          property='og:image'
          content='https://nodemedcore.com/og-image.png'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='NodeMedCore | Medical Billing & Revenue Cycle Management'
        />
        <meta
          name='twitter:description'
          content='NodeMedCore handles coding, submission, and denial management for independent practices.'
        />
        <meta
          name='twitter:image'
          content='https://nodemedcore.com/og-image.png'
        />
      </Helmet>

      <section className='banner' id='banner'>
        <div className='container'>
          <div className='banner_inner'>
            <div className='banner__content'>
              <span className='banner_eyebrow'>
                <i className='banner_eyebrow-dot' />
                Medical billing & revenue cycle management
              </span>

              <h1 className='banner__heading'>
                Every claim follows a <br /> path.
                <br />
                We keep it moving to <br />
                <span className='banner__accent'>paid</span>
                <span id='dot'>.</span>
              </h1>

              <p className='banner_desc'>
                Nodemedcore handles coding, submission, and denial management
                for independent practices — so claims go out clean, payers
                respond faster, and nothing sits stuck in a queue.
              </p>

              <div className='banner__actions'>
                <a href='#contact' className='btn btn--primary btn--gradient'>
                  Book free billing audit
                </a>
                <a href='#howitworks' className='btn btn--link'>
                  See how a claim moves{" "}
                  <span>
                    <svg
                      width='9'
                      height='8'
                      viewBox='0 0 9 8'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.35355 4.03556C8.54882 3.8403 8.54882 3.52372 8.35355 3.32845L5.17157 0.146473C4.97631 -0.0487893 4.65973 -0.0487893 4.46447 0.146473C4.2692 0.341735 4.2692 0.658318 4.46447 0.85358L7.29289 3.68201L4.46447 6.51043C4.2692 6.7057 4.2692 7.02228 4.46447 7.21754C4.65973 7.4128 4.97631 7.4128 5.17157 7.21754L8.35355 4.03556ZM0 3.68201V4.18201H8V3.68201V3.18201H0V3.68201Z'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
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
