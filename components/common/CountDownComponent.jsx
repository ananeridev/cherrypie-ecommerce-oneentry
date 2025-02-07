"use client";

import { useEffect, useState } from "react";
import Countdown from "react-countdown";

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition

export default function CountDownComponent({
  labelParentClass = "countdown-word fw-bold text-uppercase text-secondary",
  isLabel = true,
}) {
  const [showCountdown, setShowCountdown] = useState(false);
  useEffect(() => {
    setShowCountdown(true);
  }, []);

  const now = new Date();

  // Step 2: Calculate the timestamp for one year from now
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(now.getFullYear() + 1);

  // Step 3: Generate a random timestamp between now and one year from now
  const randomTimestamp =
    Math.random() * (oneYearFromNow.getTime() - now.getTime()) + now.getTime();

  // Step 4: Create a new Date object using the random timestamp
  const randomDate = new Date(randomTimestamp);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <>
          {showCountdown ? (
            <>
              <div className="day countdown-unit">
                <span className="countdown-num d-block">{days}</span>
                {isLabel && <span className={labelParentClass}>Days</span>}
              </div>

              <div className="hour countdown-unit">
                <span className="countdown-num d-block">{hours}</span>
                {isLabel && <span className={labelParentClass}>Hours</span>}
              </div>

              <div className="min countdown-unit">
                <span className="countdown-num d-block">{minutes}</span>
                {isLabel && <span className={labelParentClass}>Mins</span>}
              </div>

              <div className="sec countdown-unit">
                <span className="countdown-num d-block">{seconds}</span>
                {isLabel && <span className={labelParentClass}>Sec</span>}
              </div>
            </>
          ) : (
            ""
          )}
        </>
      );
    }
  };
  return <Countdown date={randomDate} renderer={renderer} />;
}
