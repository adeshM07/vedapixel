import React from "react";
import { motion } from "framer-motion";
import "../CSS/Industries.css";
import pic1 from "../assets/realEstate.png";
import pic2 from "../assets/healthCare.png";
import pic3 from "../assets/ecommerce.png";
import pic4 from "../assets/fintech.png";
import pic5 from "../assets/socialNetworking.png";
import pic6 from "../assets/elearning.png";
import pic7 from "../assets/entertainment.png";
import pic8 from "../assets/logistics.png";
import pic9 from "../assets/sports.png";
import pic10 from "../assets/media.png";
import pic11 from "../assets/onDemandServices.png";

const Industries = () => {
  const industries = [
    { img: pic1, name: "Real estate & property" },
    { img: pic2, name: "Health care & wellness" },
    { img: pic3, name: "E-commerce" },
    { img: pic4, name: "Fintech" },
    { img: pic5, name: "Social Networking" },
    { img: pic6, name: "E-Learning" },
    { img: pic7, name: "Entertainment" },
    { img: pic8, name: "Logistics & Transport" },
    { img: pic9, name: "Sports & fitness" },
    { img: pic10, name: "Media & news" },
    { img: pic11, name: "On-demand services" },
  ];

  return (
    <div className="mt-25  ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-fit mt-[20vh]  md:mt-0 md:w-[80vw] lg:w-[85vw] 2xl:w-[72vw] flex flex-col   md:flex-row flex-wrap 2xl:h-[96vh]   gap-[20px] mx-auto"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="2xl:w-[23vw]   md:w-[35vw] md:h-[22vh] lg:w-[27vw] lg:h-[28vh] 2xl:h-[22vh]"
        >
          <p
            className="text-[4rem]  leading-16 md:text-[3.8rem] 2xl:text-[4rem] pt-0 md:pt-10 2xl:pt-0 font-bold industry-title text-transparent bg-gradient-to-b from-[#BBABEB] md:leading-14 2xl:leading-16 to-[#6A6185] bg-clip-text inline-block"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Industries <br /> we focus
          </p>
        </motion.div>

        {/* Animated Cards */}
        {industries.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="w-[80vw]  h-[20vh] md:w-[35vw] md:h-[22vh] lg:w-[27vw] lg:h-[28vh]  2xl:w-[23vw] 2xl:h-[22vh] border border-white rounded-[10px] flex flex-col gap-[20px] md:gap-[12px] justify-center pl-7 hover:bg-[#FFFFFF0A] transition-all duration-500"
          >
            <motion.img
              src={item.img}
              alt={item.name}
              className=" w-[17vw] h-[8vh] md:w-[10vw] md:h-[7vh] lg:w-[6vw] lg:h-[9vh] 2xl:w-[5vw] 2xl:h-[10vh]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.p
              className="text-[1.8rem] md:text-[2rem] 2xl:text-[1.75rem] industry-title"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              {item.name}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Industries;
