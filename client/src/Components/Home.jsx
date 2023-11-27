import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaAsterisk } from "react-icons/fa";
import { motion } from "framer-motion";
import gsap from "gsap";
import SplitTextToChars from "../hooks/SplitTextToChars";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useInView } from "react-intersection-observer";
const Home = ({ inView, reff }) => {
  useEffect(() => {
    console.log(inView);

    return () => {};
  }, [inView]);

  const wavyTextRef = useRef();
  const particleRef = useRef();
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  useEffect(() => {
    if (!wavyTextRef.current) return;
    const chars = SplitTextToChars(wavyTextRef.current);

    gsap.set(wavyTextRef.current, { perspective: 400 });

    gsap.from(chars, {
      duration: 0.2,
      opacity: 0,
      scale: 1,
      delay: 2,
      y: -40,
      rotationX: -90,
      transformOrigin: "0% 50% -50",
      ease: "inOut",
      stagger: 0.025,
    });
  }, []);
  return (
    <>
      <div className="absolute top-0  z-10 select-none"></div>

      <div
        ref={reff}
        className="flex flex-col h-full relative -top-16 justify-center items-center"
      >
        <div className="text-4xl  md:text-6xl w-full  flex  justify-center flex-col md:flex-row">
          <span className="home-head px-4 home-head-1 text-left ">Play.</span>
          <span className="home-head px-4 home-head-2  " style={{}}>
            Chase.
          </span>
          <span className="home-head px-4 home-head-3 " style={{}}>
            Conquer.
          </span>
        </div>

        <motion.div
          animate={{
            width:
              window.screen.width > 768
                ? window.screen.width / 1.8
                : window.screen.width,
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
          }}
          className="flex relative w-full items-center mt-4"
        >
          <div className="md:w-full w-[2px] z-20 h-[1px] hidden md:block  bg-white"></div>
          <div
            className="w-full grow flex z-20 flex-row justify-center md:mx-2 text-xs text-center "
            style={{ fontFamily: "Zen Dots, cursive" }}
            ref={wavyTextRef}
          >
            A 2-DAY MEGA SPORT EVENT
          </div>
          <div className="md:w-full z-20 w-[2px] h-[1px] hidden md:block  bg-white"></div>
        </motion.div>
        <div className="hidden md:block " style={{ color: "#888" }}>
          Our aim is to provide a platform for the participants as they work in
          synergy to devise ingenious solutions to tackle various real life
          problems.
        </div>
        <div className="absolute md:block bottom-16  z-20">
          <div class="mt-20 relative mx-auto h-10 w-32 md:w-40 flex justify-center items-center">
            <div
              onClick={() => {
                window.open("https://forms.gle/UaUyWKsVZi45Jyx28", "_blank");
              }}
              class=" home-registerNow i h-10 w-32 md:w-40 bg-purple-600 items-center rounded-xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"
            ></div>
            <a class="text-center text-black text-base z-20 font-semibold pointer-events-none">
              Register Now !
            </a>
            <span class="items-center justify-center  absolute flex h-6 w-6 top-0 right-0 transform translate-x-2.5 -translate-y-2.5">
              <FaAsterisk className="animate-spi text-xl" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
