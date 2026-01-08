import React from "react";
// import "../CSS/Contact.css";
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

  const handleSubmit = async () => {
    const { isValid, missingFields } = validateFields();

    if (!isValid) {
      
      return;
    }

    const formBody = new FormData();
    formBody.append("name", formData.name);
    formBody.append("company", formData.company); // optional
    formBody.append("email", formData.email);
    formBody.append("contact", formData.contact);
    formBody.append("idea", formData.idea);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbz3tUTCcuf5qTDG6aY3R064C_KhcSSJ-gRcwuU-DT94eG3o42uel64EZF7hsknE_-9j/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: formBody,
        }
      );

      alert("Form submitted successfully!");

      setFormData({
        name: "",
        company: "",
        email: "",
        contact: "+91",
        idea: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isFilled, setIsFilled] = useState(false);

  const [errors, setErrors] = useState({});

  // 🧩 Update on change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    // ✅ remove red border as soon as the field has value
    setErrors((prev) => ({ ...prev, [name]: false }));
  };
  const validateFields = () => {
    const e = {};
    const missing = [];

    if (!formData.name.trim()) {
      e.name = true;
      missing.push("Name");
    }

    if (!formData.email.trim()) {
      e.email = true;
      missing.push("Email");
    }

    // PhoneInput always has +91 → check length
    if (formData.contact.length <= 3) {
      e.contact = true;
      missing.push("Contact Number");
    }

    if (!formData.idea.trim()) {
      e.idea = true;
      missing.push("Project Idea");
    }

    setErrors(e);

    return {
      isValid: missing.length === 0,
      missingFields: missing,
    };
  };

  useEffect(() => {
    const { name, email, contact, idea } = formData;
    const allFilled =
      name.trim() !== "" &&
      email.trim() !== "" &&
      contact.trim() !== "" &&
      idea.trim() !== "";

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
                flex flex-col md:flex-row flex-wrap 
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
                className={`
                  ${errors.name ? "border-red-500" : "border-[#989BA1]"}
                  border border-[#989BA1]
                  text-[#818181]
                  bg-transparent
                  p-[clamp(6px,1vw,10px)]
                  rounded-[clamp(4px,1vw,10px)]
                  w-[100%]  md:w-[47%] 2xl:w-[32vw]
                  md:h-[clamp(35px,4vh,55px)]
                  lg:w-[32vw]
                  lg:h-[clamp(35px,7vh,55px)]
                  2xl:h-[clamp(35px,6vh,55px)]
                `}
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
                  w-[100%] sm:w-[44%] md:w-[47%] 2xl:w-[33vw]
                  lg:w-[32vw]
                  lg:h-[clamp(35px,7vh,55px)]
                  md:h-[clamp(35px,4vh,55px)]
                  2xl:h-[clamp(35px,6vh,55px)]
                "
              />
              <div
                className={`
                  w-full md:w-[47%] lg:w-[32vw] 2xl:w-[32vw]
                  rounded-[10px]
                  ${
                    errors.contact
                      ? "border-2 border-red-500"
                      : "border border-[#989BA1]"
                  }
                `}
              >
                <PhoneInput
                  country={"in"}
                  value={formData.contact}
                  onChange={(value, country) => {
                    const dialCode = `+${country.dialCode}`;
                    if (!value.startsWith(dialCode)) value = dialCode;

                    setFormData({ ...formData, contact: value });

                    // remove error when user types
                    setErrors((prev) => ({ ...prev, contact: false }));
                  }}
                  countryCodeEditable={false}
                  enableSearch={false}
                  inputProps={{
                    name: "contact",
                  }}
                  containerStyle={{
                    width: "100%",
                  }}
                  inputStyle={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    borderRadius: windowWidth <= 500 ? "0px" : "10px",
                    color: "#818181",
                    height:
                      windowWidth <= 400
                        ? "5.6vh"
                        : windowWidth < 640
                        ? "5vh"
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
                className={`
                  ${errors.email ? "border-red-500" : "border-[#989BA1]"}
                  border border-[#989BA1]
                  text-[#818181]
                  bg-transparent
                  p-[clamp(6px,1vw,10px)]
                  rounded-[clamp(4px,1vw,10px)]
                  w-[100%] sm:w-[44%] md:w-[47%]  2xl:w-[33vw]
                  lg:w-[32vw]
                  lg:h-[clamp(35px,7vh,55px)]
                  md:h-[clamp(35px,4vh,55px)]
                  2xl:h-[clamp(35px,6vh,55px)]
                `}
              />
            </div>

            {/* ✅ Textarea (auto responsive) */}
            <textarea
              className={`
                  ${errors.idea ? "border-red-500" : "border-[#989BA1]"}
                w-full 
                rounded-[clamp(6px,1vw,10px)] 
                bg-transparent 
                border border-[#989BA1] 
                p-[clamp(8px,1vw,12px)] 
                text-[#818181] 
                h-[clamp(100px,5vh,160px)]
                resize-none
              `}
              placeholder="Project Idea *"
              name="idea"
              value={formData.idea}
              onChange={handleChange}
            ></textarea>
          </form>
          <div className="relative flex justify-center">
            <button
              type="button"
              onClick={handleSubmit}
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
