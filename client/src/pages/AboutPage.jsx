import React from "react";
import "../CSS/About.css";
import { motion } from "framer-motion";
import { useEffect } from "react";

const AboutPage = () => {
  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, []);

  // --- Grid setup ---
  // const topLeftGrid = {
  //   startX: "0%",
  //   startY: "0%",
  //   width: "50%",
  //   height: "35%",
  //   numHorizontalLines: 4,
  //   numVerticalLines: 20,
  // };

  // const bottomRightGrid = {
  //   startX: "50%",
  //   startY: "60%",
  //   width: "50%",
  //   height: "50%",
  //   numHorizontalLines: 4,
  //   numVerticalLines: 20,
  // };

  // const textDelay = 1.5;

  // --- Variants ---
  // const lineVariants = {
  //   hidden: { opacity: 0, scale: 0.8 },
  //   visible: {
  //     opacity: 0.5,
  //     scale: 1,
  //     transition: { duration: 0.5, ease: "easeOut" },
  //   },
  // };

  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.03,
  //       when: "beforeChildren",
  //       opacity: { delay: 0.2, duration: 2.0, ease: "easeInOut" },
  //     },
  //   },
  // };

  const headingVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const paragraphVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.4 },
    },
  };

  const glowTextVariant = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.8 },
    },
  };

  const layoutVariant = {
    hidden: { opacity: 0.25 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <>
      <div
        id="about"
        className=" flex mt-[100px] flex-col gap-20 relative overflow-hidden"
      >
        {/* --- Top Text Section --- */}
        <div className="w-[85%] h-[auto] md:h-[40vh] p-[10px]  mx-auto">
          <motion.p
            className="about-part-title  text-[2rem] md:text-[3rem] text-white "
            variants={headingVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            Our Company
          </motion.p>

          <motion.p
            className="about-part1-desc text-[1rem] md:text-[1.5rem] text-[#C8C1C1] text-left"
            variants={paragraphVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            Vedapixel Tech Solutions Pvt. Ltd. is a professional IT services
            company specializing in the development of reliable and scalable
            digital solutions. Supported by a skilled in-house team, we deliver
            web and mobile applications with a strong focus on quality and
            on-time delivery. We follow clear processes, communicate
            transparently, and ensure every project is delivered smoothly,
            helping businesses achieve real and measurable results.
          </motion.p>

          <motion.p
            className="about-part-title mt-4 md:mt-1  text-[1.4rem] md:text-[3rem] text-[#BBABEB] text-end"
            variants={glowTextVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            style={{
              textShadow: "0px 0px 15px rgba(187,171,235,0.8)",
            }}
          >
            We deliver Impact
          </motion.p>
        </div>

        {/* --- Background + Boxes Section --- */}
        <motion.div
          id="layout"
          className="w-[90%]  lg:w-[90%] 2xl:w-[66%] [@media(min-width:2000px)]:w-[73%] mx-auto flex flex-col items-center  "
          variants={layoutVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* --- Info Cards --- */}

          {/* Our Mission */}
          <div className="w-full flex    justify-end">
            <div
              className="
        about-card flex flex-col gap-2 sm:gap-3 lg:gap-4
         w-[32.5%]  h-[15vh] md:w-[32vw] lg:w-[29vw] 2xl:w-[22vw]
         min-h-[16vh] sm:min-h-[20vh] md:h-[22vh] lg:h-fit 2xl:h-[42vh]
        [@media(min-width:300px)_and_(max-width:410px)]:h-[2vh]
        px-4 sm:px-6 md:px-7 py-3 sm:py-5 
        transition-all duration-300  [@media(min-width:2500px)]:w-[24vw] [@media(min-width:2000px)]:h-[38vh]
      "
            >
              <p className="about-card-title font-semibold [@media(min-width:300px)_and_(max-width:410px)]:text-[0.8rem] text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] 2xl:text-[1.8rem] [@media(min-width:2500px)]:text-[3rem] text-[#F8F9FA] leading-tight">
                Our Mission
              </p>
              <p className="mt-1 sm:mt-2 md:mt-3 [@media(min-width:300px)_and_(max-width:410px)]:text-[7px] text-[7px] md:text-[1.1rem] lg:text-[1.25rem] 2xl:text-[1.35rem] [@media(min-width:2000px)]:text-[2.4rem] text-[#C8C1C1] leading-relaxed sm:leading-normal md:leading-relaxed">
                Vedapixel uses tech to bring clarity, speed, and reliability to
                outdated sectors, building ecosystems where innovation can
                thrive.
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div className="w-full flex justify-center">
            <div
              className="
       about-card flex flex-col gap-2 sm:gap-3 lg:gap-4
         w-[32.5%]  h-[15vh] md:w-[32vw] lg:w-[29vw] 2xl:w-[22vw]
         min-h-[16vh] sm:min-h-[20vh] md:h-[22vh] lg:h-fit 2xl:h-[42vh]
        [@media(min-width:300px)_and_(max-width:410px)]
        px-4 sm:px-6 md:px-7 py-3 sm:py-5 
        transition-all duration-300  [@media(min-width:2500px)]:w-[24vw] [@media(min-width:2000px)]:h-[38vh]
      "
            >
              <p className="about-card-title font-semibold [@media(min-width:300px)_and_(max-width:410px)]:text-[0.8rem] text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] 2xl:text-[1.8rem] [@media(min-width:2000px)]:text-[3rem] text-[#F8F9FA] leading-tight">
                Our Vision
              </p>
              <p className="mt-1 sm:mt-2 md:mt-3 [@media(min-width:300px)_and_(max-width:410px)]:text-[7px text-[7px] md:text-[1.1rem] lg:text-[1.25rem] 2xl:text-[1.35rem] [@media(min-width:2000px)]:text-[2.4rem] text-[#C8C1C1] leading-relaxed sm:leading-normal md:leading-relaxed">
                We redefine how businesses use tech by creating integrated
                platforms that simplify workflows and unlock new growth.
              </p>
            </div>
          </div>

          {/* Our Story */}
          <div className="w-full flex justify-start">
            <div
              className="
      about-card flex flex-col gap-2 sm:gap-3 lg:gap-4
         w-[32.5%]  h-[15vh] md:w-[32vw] lg:w-[29vw] 2xl:w-[22vw]
         min-h-[16vh] sm:min-h-[20vh] md:h-[22vh] lg:h-fit 2xl:h-[42vh]
        [@media(min-width:300px)_and_(max-width:410px)]
        px-4 sm:px-6 md:px-7 py-3 sm:py-5 
        transition-all duration-300   [@media(min-width:2500px)]:w-[24vw] [@media(min-width:2000px)]:h-[38vh]
      "
            >
              <p className="about-card-title font-semibold [@media(min-width:300px)_and_(max-width:410px)]:text-[0.8rem] text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] 2xl:text-[1.8rem] [@media(min-width:2000px)]:text-[3rem] text-[#F8F9FA] leading-tight">
                Our Story
              </p>
              <p className="mt-1 sm:mt-2 md:mt-3 [@media(min-width:300px)_and_(max-width:410px)]:text-[7px text-[7px] md:text-[1.1rem] lg:text-[1.25rem] 2xl:text-[1.35rem] [@media(min-width:2000px)]:text-[2.4rem] text-[#C8C1C1] leading-relaxed sm:leading-normal md:leading-relaxed">
                Vedapixel Tech Solutions Pvt. Ltd. builds intelligent, scalable
                digital platforms that solve real-world business challenges.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutPage;
