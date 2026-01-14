import React from "react";
// import "../CSS/Contact.css";
import "../CSS/Body.css";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

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
      toast.error(`Please fill: ${missingFields.join(", ")}`, {
        duration: 3000,
      });
      return;
    }

    const formBody = new FormData();
    formBody.append("name", formData.name);
    formBody.append("company", formData.company);
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
    console.log(formData.contact, "number");
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
          px-4 md:px-15 lg:px-15 xl:px-30 2xl:px-40
        "
      >
        <div
          className="
            w-full border-2 border-white 
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
                flex flex-col sm:flex-row flex-wrap 
                justify-between  
                2xl:gap-x-[1.4rem]
                xl:gap-x-[1.2rem]
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
                  border border-[#989BA1]
                  text-[#818181]
                  bg-transparent
                  p-[clamp(6px,1vw,10px)]
                  rounded-[clamp(4px,1vw,10px)]
                  [@media(min-width:1280px)_and_(max-width:1281px)]:w-[48%]
                  [@media(min-width:1280px)_and_(max-width:1281px)]:h-[50px]
                  w-[100%] sm:w-[49%]  md:w-[49%] lg:w-[49%] xl:w-[49%] 2xl:w-[49%]
                  h-[40px]
                  md:h-[45px]
                  lg:h-[47px]
                  xl:h-[50px]
                  2xl:h-[42px]
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
                   [@media(min-width:1280px)_and_(max-width:1281px)]:w-[48%]
                  [@media(min-width:1280px)_and_(max-width:1281px)]:h-[50px]
                  w-[100%] sm:w-[49%] md:w-[49%] xl:w-[49%] 2xl:w-[49%]
                  h-[40px]
                  md:h-[45px]
                  lg:h-[47px]
                  xl:h-[50px]
                 2xl:h-[42px]
                "
              />
              <div
                className={`
                  w-full sm:w-[49%] md:w-[49%] lg:w-[49%] xl:w-[49%] 2xl:w-[49%]   [@media(min-width:1280px)_and_(max-width:1281px)]:w-[48%]
                  [@media(min-width:1280px)_and_(max-width:1281px)]:h-[50px] h-[40px] md:h-[45px] lg:h-[47px] xl:h-[50px] 2xl:h-[42px]
                  rounded-sm md:rounded-[10px] border border-[#989BA1]
                 
                `}
              >
                <PhoneInput
                  country={"in"}
                  value={formData.contact}
                  onChange={(value, country) => {
                    setFormData((prev) => ({
                      ...prev,
                      contact: value,
                    }));

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
                        ? "39px"
                        : windowWidth < 640
                        ? "39px"
                        : windowWidth <= 1024
                        ? "39px"
                        : windowWidth <= 1280
                        ? "47px"
                        : windowWidth <= 1560
                        ? "41px"
                        : "42px",
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
                  border border-[#989BA1]
                  text-[#818181]
                  bg-transparent
                  p-[clamp(6px,1vw,10px)]
                  rounded-[clamp(4px,1vw,10px)]
                     [@media(min-width:1280px)_and_(max-width:1281px)]:w-[48%]
                  [@media(min-width:1280px)_and_(max-width:1281px)]:h-[50px]
                  w-[100%] sm:w-[49%] md:w-[49%] xl:w-[49%]  2xl:w-[49%]
                  h-[40px]
                  md:h-[45px]
                  lg:h-[47px]
                  xl:h-[50px]
                  2xl:h-[42px]
                `}
              />
            </div>

            {/* ✅ Textarea (auto responsive) */}
            <textarea
              className={`
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
     2xl:text-[1.5rem] popins rounded-[8px] font-poppins font-normal`}
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
