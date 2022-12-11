import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaAsterisk } from "react-icons/fa";
import { motion } from "framer-motion";
import gsap from "gsap";
import SplitTextToChars from "../hooks/SplitTextToChars";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"
const Home = () => {
  const wavyTextRef = useRef();
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
      <div className="absolute h-screen select-none">
        <Particles
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            
            delay: 5,
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },

            particles: {
              number: {
                value: 380,
                density: {
                  enable: true,
                  value_area: 6000,
                },
              },
              color: {
                value: "#00f2fe",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.2,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "grab",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 140,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </div>

      <div className="flex flex-col h-full  justify-center items-center">
        <div className="text-4xl md:text-6xl">
          <span className="home-head px-4 home-head-1 ">Develop.</span>
          <span className="home-head px-4 home-head-2  " style={{}}>
            Present.{" "}
          </span>
          <span className="home-head px-4 home-head-3 " style={{}}>
            Conquer.{" "}
          </span>
        </div>
        <motion.div
          animate={{
            width: window.screen.width / 1.7,
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
          }}
          className="flex w-full items-center mt-4"
        >
          <div className="md:w-full w-[2px] h-[1px] bg-white"></div>
          <div
            className="w-full grow mx-2 text-sm text-center "
            style={{ fontFamily: "Zen Dots, cursive" }}
            ref={wavyTextRef}
          >
            A 24-HOUR HYBRID HACKATHON
          </div>
          <div className="md:w-full w-[2px] h-[1px] bg-white"></div>
        </motion.div>
        <div className="" style={{ color: "#888" }}>
          Our aim is to provide a platform for the participants as they work in
          synergy to devise ingenious solutions to tackle various real life
          problems.
        </div>
        <div class="mt-20 relative mx-auto h-10 w-40 flex justify-center items-center">
          <div class=" home-registerNow i h-10 w-40 bg-purple-600 items-center rounded-xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
          <a class="text-center text-black font-semibold z-10 pointer-events-none">
            Register Now !
          </a>
          <span class="items-center justify-center  absolute flex h-6 w-6 top-0 right-0 transform translate-x-2.5 -translate-y-2.5">
            <FaAsterisk className="animate-spi text-xl" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
