"use client";
import React, { useState, useEffect } from "react";

const Countdown = () => {
  // 90 days in milliseconds
  const initialTime = 90 * 24 * 60 * 60 * 1000;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1000) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-6 mt-28">
      <span className="flex flex-col items-center mx-2 p-2  transform transition-all hover:scale-110  duration-300 ease-in-out cursor-pointer">
        <h2 className="text-heading2-regular font-bold text-gray-900">{days}</h2>
        <h2 className="text-heading2-semibold font-semibold text-gray-600">DAYS</h2>
      </span>
      <span className="flex flex-col items-center mx-2 p-2  transform transition-all hover:scale-110  duration-300 ease-in-out cursor-pointer">
        <h2 className="text-heading2-regular font-bold text-gray-900">{hours}</h2>
        <h2 className="text-heading2-semibold font-semibold text-gray-600">HOURS</h2>
      </span>
      <span className="flex flex-col items-center mx-2 p-2  transform transition-all hover:scale-110  duration-300 ease-in-out cursor-pointer">
        <h2 className="text-heading2-regular font-bold text-gray-900">{minutes}</h2>
        <h2 className="text-heading2-semibold font-semibold text-gray-600">MINUTES</h2>
      </span>
      <span className="flex flex-col items-center mx-2 p-2  transform transition-all hover:scale-110  duration-300 ease-in-out cursor-pointer">
        <h2 className="text-heading2-regular font-bold text-gray-900">{seconds}</h2>
        <h2 className="text-heading2-semibold font-semibold text-gray-600">SECONDS</h2>
      </span>
    </div>
  );
};

export default Countdown;
