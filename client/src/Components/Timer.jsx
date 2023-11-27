import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Process = () => {
  const [onDay, setOnDay] = useState(new Date("March 17, 2023 01:00:00"));
  const [timer, setTimer] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  let timerInterval;
  useEffect(() => {
    let now;
    timerInterval = setInterval(() => {
      now = new Date().getTime();

      let diff = onDay.getTime() - now;
      let tempDays = Math.floor(diff / (24 * 60 * 60 * 1000));
      let tempHours = Math.floor(
        (diff % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      let tempMins = Math.floor((diff % (60 * 60 * 1000)) / (1000 * 60));
      let tempSecs = Math.floor((diff % (60 * 1000)) / 1000);
      if (diff < 0) {
        clearInterval(timerInterval);
      } else {
        setTimer({
          days: tempDays,
          hours: tempHours,
          mins: tempMins,
          secs: tempSecs,
        });
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [timer]);

  let delays = 2;
  return (
    <div className="w-full min-h-[40vh] flex flex-col ">
      <div>
        <p class="text-center text-gray-300 uppercase text-sm font-bold m-auto">
          Time left until closing registration
        </p>
        <div class="flex items-center justify-center space-x-4 mt-4">
          <div class="flex flex-col items-center md:px-4">
            <span class="text-3xl md:text-4xl lg:text-5xl text-gray-200">
              {timer.days}
            </span>
            <span class="text-gray-400 mt-2">Days</span>
          </div>
          <motion.span
            class="w-[1px] h-24 bg-gray-400"
            transition={{
              duration: 10,
            }}
            initial={{ height: 0 }}
            animate={{ height: "5rem" }}
          ></motion.span>
          <div class="flex flex-col items-center md:px-4">
            <span class="text-3xl md:text-4xl lg:text-5xl text-gray-200">
              {timer.hours}
            </span>
            <span class="text-gray-400 mt-2">Hours</span>
          </div>
          <motion.span
            class="w-[1px] h-24 bg-gray-400"
            transition={{
              duration: 10,
            }}
            initial={{ height: 0 }}
            animate={{ height: "5rem" }}
          ></motion.span>
          <div class="flex flex-col items-center md:px-4">
            <span class="text-3xl md:text-4xl lg:text-5xl text-gray-200">
              {timer.mins}
            </span>
            <span class="text-gray-400 mt-2">Minutes</span>
          </div>
          <motion.span
            class="w-[1px] h-24 bg-gray-400"
            transition={{
              duration: 10,
            }}
            initial={{ height: 0 }}
            animate={{ height: "5rem" }}
          ></motion.span>
          <div class="flex flex-col items-center md:px-4">
            <span class="text-3xl md:text-4xl lg:text-5xl text-gray-200">
              {timer.secs}
            </span>
            <span class="text-gray-400 mt-2">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
