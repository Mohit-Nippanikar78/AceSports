import React from "react";
import { motion } from "framer-motion";
const Sidebar = () => {
  let box = "absolute top-0 right-0 h-scren w-full z-50";
  return (
    <>
      <motion.div
        className={box}
        style={{background:"white", width: "100%", height: "100vh", transformOrigin: "top" }}
        initial={{
          scaleY: 0,
        }}
        animate={{
          scaleY: 1,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={box}
        style={{
          background: "green",
          width: "100%",
          height: "100vh",
          transformOrigin: "top",
        }}
        initial={{
          scaleY: 0,
        }}
        animate={{
          scaleY: 1,
        }}
        transition={{
          delay: 0.4,
          duration: 2,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={box}
        style={{
          background: "red",
          width: "100%",
          height: "100vh",
          transformOrigin: "top",
        }}
        initial={{
          scaleY: 0,
        }}
        animate={{
          scaleY: 1,
        }}
        transition={{
          delay: 0.8,
          duration: 2,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

export default Sidebar;
