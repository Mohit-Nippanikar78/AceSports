import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import PagersText from "../Elements/PagersText";

const About = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.7,
  });
  return (
    <div class="min-h-[90vh] 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div
        ref={ref}
        class=" flex flex-col-reverse lg:flex-row justify-between gap-8"
      >
        <div class="w-full lg:w-5/12 flex flex-col justify-around">
          <div>
            <PagersText
              inView={inView}
              text="whoweare"
              mColor="#f83600"
              dColor="#c62b00"
            />
            <p class="text-center font-normal text-sm lg:text-base leading-6 text-gray-600 dark:text-white">
              S.B.M. Polytechnic has created a name for itself by maintaining
              high standard of discipline and performance. The Polytechnic
              believes in organising need-based programmes and assisting
              in-service personnel in education and training activities. The
              Polytechnic is being managed by the duly constituted Managing
              Council.{" "}
            </p>
          </div>
          <div class="w-full  flex flex-col justify-center">
            <PagersText
              inView={inView}
              text="objective"
              mColor="#00f2fe"
              dColor="#00c1cb"
            />
            <p class="font-normal text-center text-sm lg:text-base leading-6 text-gray-600 dark:text-white">
              S.B.M. Polytechnic aims at upgrading and updating qualification
              skills and knowledge of technicians already working in the
              industry through Continuing Education Programmes and Part Time
              Diploma{" "}
            </p>
          </div>
        </div>
        <div class="w-full h-[50vh] lg:w-8/12 relative ">
          <motion.img
            initial={{ x: 500, opacity: 1 }}
            animate={{
              x: inView && "0",
              opacity: inView && "1",
              transition: {
                duration: 5,
                ease: "easeInOut",
              },
            }}
            class="absolute  w-full h-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
