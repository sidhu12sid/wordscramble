import React, { useEffect, useState } from "react";

const Timer = ({ seconds, onComplete, reset, status }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  
  const resetTime = () => {
      setTimeLeft(seconds);
  }
  
  useEffect(() => {
    resetTime();
    console.log(reset);
  },[reset]);

  useEffect(() => {   
    if (timeLeft <= 0 && status != '0') {
      onComplete();
      return;
    }
    
    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    },1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const foramtTime = (time) => {
    const m = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const s = (time % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };
  return (
    <>
    <div className="text-lg font-bold text-black">
      Timer : {foramtTime(timeLeft)}
    </div>
    </>
  );
};

export default Timer;
