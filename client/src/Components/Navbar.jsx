import React, { useEffect, useState } from "react";
import IconMenu from "../assets/images/iconmenu.png";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import "../App.css";
import plusPng from "../assets/images/plusTransparent.png";
import { useNavigate } from "react-router-dom";
const Navbar = ({}) => {
  let navigate = useNavigate();
  const [menuIconHover, setMenuIconHover] = useState(false);
  const [windowScrollY, setWindowScrollY] = useState(0);
  const menuIconVarient = {
    animate: {
      rotate: 360,
      transition: { type: "tween", duration: 2, repeat: Infinity },
    },
  };
  const props = useSpring({
    clipPath: menuIconHover ? `circle(${150}% at 0 0)` : `circle(${0}% at 0 0)`,
    transition: "10ms ",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  });
  useEffect(() => {
    const handleScroll = (event) => {
      setWindowScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full"
      style={{
        // background: "linear-gradient(to right,  transparent 80% , black 90%)",
        boxShadow: windowScrollY > 50 && "inset 0 -1px 0 0 hsla(0,0%,100%,.1)",
      }}
    >
      <div
        className="  overflow-visible flex justify-between items-center w-full px-4 mb-2 pt-1"
        style={{
          backdropFilter: windowScrollY > 50 && "saturate(180%) blur(5px)",
          boxShadow:
            windowScrollY > 50 && ".2s ease 0s,background-color .2s ease 0s",
        }}
      >
        <div
          className="cursor-pointer text-4xl extra-bold  home-head"
          onClick={() => {
            navigate("/");
          }}
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            className="w-24 md:w-32"
            viewBox="0 0 284 65"
          >
            <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" />
          </svg> */}
          {window.innerWidth < 768 ? "ACE" : "ACE 2023"}
        </div>
        <div
          className="relative"
          onMouseOver={() => {
            setMenuIconHover(true);
          }}
          onMouseLeave={() => {
            setMenuIconHover(false);
          }}
        >
          <animated.div
            className="absolute w-4 h-4 duration-700 bg-white z-40  "
            style={props}
          ></animated.div>
          <div
            className="absolute z-50  top-1/2 w-4 h-4  left-1/2  	"
            style={{ transform: "translate(-50%,-50%)" }}
          >
            <img src={plusPng} className="" />
          </div>
          <div
            className="absolute z-30  top-1/2 w-4 h-4  left-1/2  	"
            style={{ transform: "translate(-50%,-50%)", background: "#273C65" }}
          ></div>
          <motion.div
            variants={menuIconVarient}
            initial="initial"
            animate="animate"
          >
            <img
              src={IconMenu}
              className="w-12 md:w-16 cursor-pointer rounded-full"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
// {
//   rotate: menuIconHover ? -180 : 360,
// }
