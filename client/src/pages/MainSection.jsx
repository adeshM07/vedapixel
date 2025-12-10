import React from "react";
import Body from "./Body";
import Contact from "./Contact";
import AboutPage from "./AboutPage";
import { motion } from "framer-motion";
import Industries from "./Industries";
import ScrollNodes from "./ScrollNodes";

const MainSection = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Body></Body>
        <Industries></Industries>
        <div className="w-screen  mt-[70px]    md:mt-[70px] lg:mt-[100px] 2xl:mt-[140px] [@media(min-width:2000px)]:mt-[150px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mx-[40px]  md:w-[72%] md:mx-auto flex flex-col gap-7"
          >
            <p
              className=" md:pl-0 text-[2.4rem] leading-12 md:text-[3.5rem]  font-bold industry-title text-transparent bg-gradient-to-b from-[#BBABEB] md:leading-16 to-[#6A6185] bg-clip-text inline-block"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Want to explore the possibilities?
            </p>
            <ScrollNodes></ScrollNodes>
          </motion.div>
        </div>
        <Contact></Contact>
      </div>
    </>
  );
};

export default MainSection;
