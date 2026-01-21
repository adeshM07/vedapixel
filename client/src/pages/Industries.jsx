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
import SectionWrapper from "../components/common/SectionWrapper";

const Industries = () => {
  const industries = [
    { img: pic1, name: "Real estate & property" },
    { img: pic2, name: "Health care & wellness" },
    { img: pic3, name: "E-commerce" },
    { img: pic4, name: "Fintech & Banking" },
    { img: pic5, name: "Social Networking" },
    { img: pic6, name: "E-Learning" },
    { img: pic7, name: "Entertainment" },
    { img: pic8, name: "Logistics & Transport" },
    { img: pic9, name: "Sports & fitness" },
    { img: pic10, name: "Media & news" },
    { img: pic11, name: "On-demand services" },
  ];

  return (
    <div className="md:mt-45  w-full px-4 md:px-15 lg:px-15 xl:px-30 2xl:px-40">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full  mt-[20vh] md:mt-0  flex flex-col md:flex-row flex-wrap place-items-center   sm:justify-between gap-y-10 [@media(min-width:2000px)]:gap-[30px] "
      >
        {/* Heading with smooth upward animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="[@media(min-width:300px)]:h-[24vh] h-[20vh] md:w-[200px]  md:h-[100px] lg:w-[280px] lg:h-[100px] xl:w-[32%] xl:h-[163px] 2xl:h-[163px]  flex md:place-items-center"
        >
          <p
            className="md:pl-0 text-[3.5rem] sm:text-[3rem]  mb-5 md:mb-0 md:text-[2.7rem] lg:text-[3.5rem] [@media(min-width:900px)_and_(max-width:1100px)]:text-[3rem] font-bold industry-title text-transparent bg-gradient-to-b from-[#BBABEB] to-[#6A6185] bg-clip-text inline-block leading-tight"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Industries <br /> we focus
          </p>
        </motion.div>

        {/* Cards */}
        {industries.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.15 }}
            className="w-[90%] border-2 border-white  [@media(min-width:300px)]:h-[24vh] h-[20vh] md:w-[200px]  md:h-[100px] lg:w-[280px] lg:h-[100px] xl:w-[32%] xl:h-[163px]  2xl:h-[163px]  [@media(min-width:2000px)]:h-[19vh]  rounded-[10px] flex flex-col lg:flex-row gap-[20px] md:gap-[12px] justify-evenly lg:place-items-center py-4 [@media(min-width:300px)_and_(max-width:410px)]:px-3 px-5 md:px-5 transition-all duration-500"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[70px] lg:h-[80px] object-contain"
            />
            <p className="[@media(min-width:300px)_and_(max-width:410px)]:text-[1.7rem] text-[1.8rem] md:text-[1.5rem] [@media(min-width:900px)_and_(max-width:1000px)]:text-[1rem]  xl:text-[1.75rem] [@media(min-width:2000px)]:text-[2.7rem] lg:leading-leading font-garotaSans font-normal text-[#F8F9FA]">
              {item.name}   
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Industries;
