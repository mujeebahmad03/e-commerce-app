import { useState, useEffect, useCallback, useMemo } from "react";

const CountdownTimer = () => {
  const targetDate = useMemo(() => new Date("2024-02-31T00:00:00"), []);

  const calculateTimeLeft = useCallback(() => {
    const difference = targetDate - new Date();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="countdown-box">
      <p className="countdown-desc">Hurry Up! Offer ends in:</p>
      <div className="countdown">
        <div className="countdown-content">
          <p className="display-number">{timeLeft.days}</p>
          <p className="display-text">Days</p>
        </div>

        <div className="countdown-content">
          <p className="display-number">{timeLeft.hours}</p>
          <p className="display-text">Hours</p>
        </div>

        <div className="countdown-content">
          <p className="display-number">{timeLeft.minutes}</p>
          <p className="display-text">Min</p>
        </div>

        <div className="countdown-content">
          <p className="display-number">{timeLeft.seconds}</p>
          <p className="display-text">Sec</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
