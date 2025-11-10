import React from "react";
import "../CSS/Contact.css";
import "../CSS/Body.css"
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div
        className="
          w-full 
          flex flex-col-reverse   md:flex-row 
          justify-center items-center md:items-start
          mt-[10vh] md:mt-[11vh]
          gap-[5vw] md:gap-0
          px-[4vw]
        "
      >
        {/* ✅ Contact Form Section */}
        <div
          className="
            w-full border-2 border-white sm:w-[90%] md:w-[80%] 2xl:w-[72vw]
            p-[clamp(20px,3vw,40px)]
            2xl:px-[36px] 2xl:py-[43px]
            rounded-[1.3rem]
            flex flex-col 
            gap-[clamp(14px,2vw,22px)]
            h-auto
          "
          style={{
            background:
              "linear-gradient(139.47deg, rgba(50, 58, 68) -45.69%, rgba(16, 24, 32) 54.7%)",
            backdropFilter: "blur(10px) saturate(180%)",
            WebkitBackdropFilter: "blur(10px) saturate(180%)",
            border: "2px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
          }}
        >
          <p
            className="
              contact-box-title 
              text-[#C8C1C1] 
              text-[clamp(0.9rem,2vw,1.5rem)] 
              text-left md:text-left
              2xl:text-[1.4rem]
              popins
            "
          >
            Find Your Way Forward, we're here to support.
          </p>

          <form
            className="
              w-full 
              flex flex-col 
              gap-[clamp(18px,3vw,28px)]
              h-auto
            "
          >
            {/* ✅ Flex-wrap inputs (same layout) */}
            <div
              className="
                flex flex-wrap 
                justify-between  
                gap-x-[1.4rem]
                gap-y-[1rem]
              "
            >
              <input
                type="text"
                placeholder="Name *"
                className="
                  border border-[#989BA1]
                  text-[#818181]
                  bg-transparent
                  p-[clamp(6px,1vw,10px)]
                  rounded-[clamp(4px,1vw,10px)]
                  w-[46%]  md:w-[47%] 2xl:w-[32vw]
                  md:h-[clamp(35px,4vh,55px)]
                  lg:w-[32vw]
                  lg:h-[clamp(35px,7vh,55px)]
                  2xl:h-[clamp(35px,6vh,55px)]
                "
              />
              <input
                type="text"
                placeholder="Company Name *"
                className="
                  border border-[#989BA1]
                  text-[#818181]
                  bg-transparent
                  p-[clamp(6px,1vw,10px)]
                  rounded-[clamp(4px,1vw,10px)]
                  w-[46%] sm:w-[44%] md:w-[47%] 2xl:w-[33vw]

                  lg:w-[32vw]
                  lg:h-[clamp(35px,7vh,55px)]
                  md:h-[clamp(35px,4vh,55px)]
                  2xl:h-[clamp(35px,6vh,55px)]
                "
              />
              <input
                type="email"
                placeholder="Email Id *"
                className="
                  border border-[#989BA1]
                  text-[#818181]
                  bg-transparent
                  p-[clamp(6px,1vw,10px)]
                  rounded-[clamp(4px,1vw,10px)]
                  w-[46%] sm:w-[44%] md:w-[47%] 2xl:w-[32vw]
                  lg:w-[32vw]
                  lg:h-[clamp(35px,7vh,55px)]
                  md:h-[clamp(35px,4vh,55px)]
                  2xl:h-[clamp(35px,6vh,55px)]
                "
              />
              <input
                type="text"
                placeholder="Contact no. *"
                className="
                  border border-[#989BA1]
                  text-[#818181]
                  bg-transparent
                  p-[clamp(6px,1vw,10px)]
                  rounded-[clamp(4px,1vw,10px)]
                  w-[46%] sm:w-[44%] md:w-[47%] 2xl:w-[33vw]

                  lg:w-[32vw]
                  lg:h-[clamp(35px,7vh,55px)]
                  md:h-[clamp(35px,4vh,55px)]
                  2xl:h-[clamp(35px,6vh,55px)]
                "
              />
            </div>

            {/* ✅ Textarea (auto responsive) */}
            <textarea
              className="
                w-full 
                rounded-[clamp(6px,1vw,10px)] 
                bg-transparent 
                border border-[#989BA1] 
                p-[clamp(8px,1vw,12px)] 
                text-[#818181] 
                h-[clamp(100px,5vh,160px)]
                resize-none
              "
              placeholder="Project Idea *"
            ></textarea>
          </form>

          {/* ✅ Button */}
          {/* this too  */}
          <div className="relative flex   justify-center">
            <button
              className="
            rotating-btn
              border border-[#B1A2DF]
              rounded-[8px]
              text-white
              font-medium
              w-[clamp(200px,60vw,300px)]
              h-[clamp(40px,5vh,60px)]
              md:w-[40vw]
              2xl:w-[24vw] 
              md:h-[clamp(40px,4vh,60px)]
              lg:h-[clamp(50px,5vh,60px)]
              2xl:h-[clamp(40px,8vh,60px)]         
              mx-auto
              mt-[clamp(10px,2vw,20px)]
              hover:bg-[#B1A2DF]/10 
              transition
              text-[clamp(0.9rem,1.5vw,1.3rem)]
              md:text-[clamp(0.9rem,2.8vw,1.3rem)]
              2xl:text-[1.4rem]
              popins
            "
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
