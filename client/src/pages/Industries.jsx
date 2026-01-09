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
    <div className="md:mt-45  w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-fit mt-[20vh] md:mt-0 md:w-[80vw] lg:w-[85vw] 2xl:w-[72vw] flex flex-col md:flex-row flex-wrap 2xl:h-[96vh] gap-x-[20px] gap-y-[20px] [@media(min-width:2000px)]:gap-[30px] mx-auto"
      >
        {/* Heading with smooth upward animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="2xl:w-[23vw] [@media(min-width:2000px)]:h-[19vh] md:w-[35vw] md:h-[22vh] lg:w-[27vw] lg:h-[24vh] 2xl:h-[22vh] flex md:place-items-center"
        >
          <p
            className="md:pl-0 text-[2.4rem]  mb-5 md:mb-0 md:text-[3.5rem] [@media(min-width:900px)_and_(max-width:1100px)]:text-[3rem] font-bold industry-title text-transparent bg-gradient-to-b from-[#BBABEB] to-[#6A6185] bg-clip-text inline-block leading-tight"
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
            className="w-[80vw] border-2 border-white [@media(min-width:300px)]:h-[24vh] h-[20vh] md:w-[35vw]  md:h-[22vh] lg:w-[27vw] lg:h-[17vh] xl:w-[27vw] xl:h-[28vh] 2xl:w-[23vw] 2xl:h-[22vh] [@media(min-width:2000px)]:h-[19vh]  rounded-[10px] flex flex-col gap-[20px] md:gap-[12px] justify-evenly py-4 [@media(min-width:300px)_and_(max-width:410px)]:px-3 px-5 md:px-5 transition-all duration-500"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-[13vw] h-[40%] md:w-[10vw] [@media(min-width:900px)_and_(max-width:1000px)]:w-[7vw] md:h-[7vh] lg:w-[7vw] lg:h-[8vh] xl:h-[45%] 2xl:w-[5vw] 2xl:h-[10vh] [@media(min-width:2000px)]:h-[7vh] [@media(min-width:2000px)]:w-[7vh]"
            />
            <p className="[@media(min-width:300px)_and_(max-width:410px)]:text-[1.7rem] text-[1.8rem] md:text-[2rem] [@media(min-width:900px)_and_(max-width:1000px)]:text-[1rem] 2xl:text-[1.75rem] [@media(min-width:2000px)]:text-[2.7rem] lg:leading-9 industry-title">
              {item.name}   
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Industries;
