import React from "react";
import "../CSS/Contact.css";
import "../CSS/Body.css";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    contact: "+91",
    idea: "",
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isFilled, setIsFilled] = useState(false);

  // 🧩 Update on change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Check if all are filled
  useEffect(() => {
    const allFilled = Object.values(formData).every((val) => val.trim() !== "");
    setIsFilled(allFilled);
  }, [formData]);
  return (
    <>
      <div
        className="
          w-full 
          flex flex-col-reverse   md:flex-row 
          justify-center items-center md:items-start
          mt-[10vh] md:mt-[11vh]
          [@media(min-width:2000px)]:mt-[100px]
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
            onSubmit={(e) => e.preventDefault()}
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
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
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
              <div className="w-[46%] md:w-[47%] lg:w-[32vw] 2xl:w-[32vw] relative">
                <PhoneInput
                  country={"in"} // 🇮🇳 default India
                  value={formData.contact}
                  onChange={(value, country) => {
                    const dialCode = `+${country.dialCode}`;
                    if (!value.startsWith(dialCode)) value = dialCode;
                    setFormData({ ...formData, contact: value });
                  }}
                  enableSearch={false}
                  countryCodeEditable={false}
                  inputProps={{
                    name: "contact",
                    required: true,
                  }}
                  placeholder="Contact no. *"
                  inputStyle={{
                    width: "100%",
                    background: "transparent",
                    border: "1px solid #989BA1",
                    borderRadius:
                      windowWidth < 640
                        ? "5px"
                        : windowWidth <= 1024
                        ? "10px"
                        : "10px",
                    color: "#818181",
                    fontSize: "clamp(0.8rem, 1vw, 1rem)",
                    height:
                      windowWidth <= 410
                        ? "5.6vh"
                        : windowWidth < 640
                        ? "4.2vh"
                        : windowWidth <= 1024
                        ? "3vh"
                        : "6vh",
                    paddingLeft: "50px",
                  }}
                  buttonStyle={{
                    border: "none",
                    background: "transparent",
                    borderRight: "1px solid #989BA1",
                  }}
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Id *"
                value={formData.email}
                onChange={handleChange}
                className="
                  border border-[#989BA1]
                  text-[#818181]
                  bg-transparent
                  p-[clamp(6px,1vw,10px)]
                  rounded-[clamp(4px,1vw,10px)]
                  w-[46%] sm:w-[44%] md:w-[47%]  2xl:w-[33vw]
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
              name="idea"
              value={formData.idea}
              onChange={handleChange}
            ></textarea>
          </form>

          {/* ✅ Button */}
          {/* this too  */}
          <div className="relative flex justify-center">
            <button
              className={`${
                isFilled ? "active-btn" : "rotating-btn"
              } w-[clamp(200px,60vw,300px)] h-[clamp(40px,5vh,60px)]
     md:w-[40vw] text-white 2xl:w-[24vw] md:h-[clamp(40px,4vh,60px)]
     lg:h-[clamp(50px,5vh,60px)] 2xl:h-[clamp(40px,8vh,60px)]
     mx-auto mt-[clamp(10px,2vw,20px)]
     text-[clamp(0.9rem,1.5vw,1.3rem)] md:text-[clamp(0.9rem,2.8vw,1.3rem)] 
     2xl:text-[1.4rem] popins font-medium rounded-[8px]`}
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
