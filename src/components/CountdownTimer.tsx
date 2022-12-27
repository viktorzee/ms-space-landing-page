import React from "react";

function calculateTimeLeft() {
  const year = new Date("2023-01-31");
  const difference = +new Date(`${year}-10-1`) - +new Date();
  let timeLeft: any = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    return (
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="flex justify-between mt-8 p-4">
      <div className="text-center bg-gray-600 rounded-full p-4">
        <span className="text-5xl text-white font-bold block p-2 md:p-1">
          {timerComponents.length ? (
            timerComponents
          ) : (
            <span className="text-5xl text-red-800">Time's up!</span>
          )}
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
