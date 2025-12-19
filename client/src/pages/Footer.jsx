import React from "react";
import logo from "../assets/vedaPixelLogo.png";
import "../CSS/Footer.css";
import icon from "../assets/send.png";
import linkedin from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";
import emaill from "../assets/email.png";
import phone from "../assets/phone.png";
import whatsapp from "../assets/whatsapp.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import sent from "../assets/sent.png";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isMobile, setIsMobile] = useState(() =>
      typeof window !== "undefined" ? window.innerWidth < 768 : false
    );
  // Animation variants
  const container = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.footer
        className="w-full  px-6 sm:px-10 md:px-9 lg:px-20 2xl:px-[13rem] py-10 mt-20 sm:mt-32 bg-transparent"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.div
          className="flex  flex-col md:flex-row justify-between items-start gap-10 md:gap-0  2xl:gap-0"
          variants={container}
        >
          <motion.div
            className="footer-company-info  w-full md:w-5/6 2xl:w-3/6 flex flex-col items-start gap-4"
            variants={item}
          >
            {/* go throw this at last */}
            <Link to='/'>
              <img
                src={logo}
                alt="VedaPixel Logo"
                className="w-[60px] md:w-[50px] sm:w-[80px] 2xl:w-[5vw]"
              />
            </Link>
            {/* this too  */}
            <div>
              <p className="footer-company-name text-white text-[clamp(1.4rem,4vw,2.3rem)] md:text-[clamp(1.4rem,2vw,2.3rem)] 2xl:text-[clamp(1.4rem,4vw,2.3rem)] font-semibold leading-tight 2xl:leading-10">
                VedaPixel
              </p>
              <p className="footer-company-desc text-white text-[clamp(0.7rem,2vw,1rem)] md:text-[clamp(0.7rem,1.2vw,1rem)] 2xl:text-[50%]">
                Innovation in every Pixel
              </p>
            </div>
            {isMobile?false:
            <div className="mt-4 flex flex-col gap-3">
              <p className="text-[#F8F9FA] text-[clamp(0.6rem,2vw,0.9rem)] md:text-[clamp(0.6rem,1.2vw,0.9rem)] 2xl:text-[clamp(0.6rem,2vw,0.9rem)]">
                &copy; 2025 VedaPixel Tech Solution Pvt. Ltd. All Rights
                Reserved.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2 cursor-pointer">
                  <img
                    src={emaill}
                    alt="email"
                    className="h-[16px] md:h-[14px] sm:h-[20px]"
                  />
                  <a
                    href="mailto:info@vedapixel.com"
                    className="text-[#E4E3E3] text-[clamp(0.8rem,2vw,1rem)] md:text-[clamp(0.8rem,1.2vw,1rem)] 2xl:text-[clamp(0.8rem,2vw,1rem)]"
                  >
                    info@vedapixel.com
                  </a>
                </div>
                <div className="hidden sm:block text-white">|</div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <img
                    src={phone}
                    alt="phone"
                    className="h-[16px] md:h-[14px] sm:h-[20px]"
                  />
                  <a
                    href="tel:+919036354261"
                    className="text-[#E4E3E3] text-[clamp(0.8rem,2vw,1rem)] no-underline md:text-[clamp(0.8rem,1.2vw,1rem)] 2xl:text-[clamp(0.8rem,2vw,1rem)]"
                  >
                    +91 9036354261
                  </a>
                </div>
              </div>
            </div>}
          </motion.div>

          {/* ✅ Middle + Right Sections */}
          <motion.div
            className="flex  flex-col md:flex-row justify-between w-full 2xl:w-4/6 gap-10 sm:gap-0"
            variants={container}
          >
            {/* Footer Navigation */}
            <motion.div
              className="footer-nav  w-full sm:w-1/2 2xl:w-1/3 md:pl-[10%] flex flex-col items-start gap-3"
              variants={item}
            >
              <Link to="/about">
                <p className="footer-nav-links text-[#C8C1C1] text-[clamp(0.9rem,2vw,1.1rem)] md:text-[14px] 2xl:text-[clamp(0.9rem,2vw,1.1rem)] font-semibold mb-1 hover:text-[#b19cd9] transition">
                  About Us
                </p>
              </Link>
              <Link to="/services">
                <p className="footer-nav-links text-[#C8C1C1] text-[clamp(0.9rem,2vw,1.1rem)] md:text-[14px] 2xl:text-[clamp(0.9rem,2vw,1.1rem)] hover:text-[#b19cd9] transition">
                  Our Services
                </p>
              </Link>
              <Link to="/faqs">
                <p className="footer-nav-links text-[#C8C1C1] text-[clamp(0.9rem,2vw,1.1rem)] md:text-[14px] 2xl:text-[clamp(0.9rem,2vw,1.1rem)] hover:text-[#b19cd9] transition">
                  FAQs
                </p>
              </Link>
              <p className="footer-nav-links text-[#C8C1C1] text-[clamp(0.9rem,2vw,1.1rem)] md:text-[14px] 2xl:text-[clamp(0.9rem,2vw,1.1rem)] hover:text-[#b19cd9] transition">
                Our Team
              </p>
              <Link
                to="/contactus"
                state={{
                  status: true,
                }}
              >
                <p className="footer-nav-links text-[#C8C1C1] text-[clamp(0.9rem,2vw,1.1rem)] md:text-[14px] 2xl:text-[clamp(0.9rem,2vw,1.1rem)] hover:text-[#b19cd9] transition">
                  Career
                </p>
              </Link>
            </motion.div>

            {/* Contact / Social Section */}
            <motion.div
              className="h-fit w-full sm:w-1/2 2xl:w-fit flex flex-col gap-5"
              variants={item}
            >
              {isMobile?<div className=" flex flex-col gap-3">
             

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2 cursor-pointer">
                  <img
                    src={emaill}
                    alt="email"
                    className="h-[16px] md:h-[14px] sm:h-[20px]"
                  />
                  <a
                    href="mailto:info@vedapixel.com"
                    className="text-[#E4E3E3] text-[clamp(0.8rem,2vw,1rem)] md:text-[clamp(0.8rem,1.2vw,1rem)] 2xl:text-[clamp(0.8rem,2vw,1rem)]"
                  >
                    info@vedapixel.com
                  </a>
                </div>
                <div className="hidden sm:block text-white">|</div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <img
                    src={phone}
                    alt="phone"
                    className="h-[16px] md:h-[14px] sm:h-[20px]"
                  />
                  <a
                    href="tel:+919036354261"
                    className="text-[#E4E3E3] text-[clamp(0.8rem,2vw,1rem)] no-underline md:text-[clamp(0.8rem,1.2vw,1rem)] 2xl:text-[clamp(0.8rem,2vw,1rem)]"
                  >
                    +91 9036354261
                  </a>
                </div>
              </div>
            </div>:false}
            
              <div>
                <p className="text-[#C8C1C1] text-[clamp(1rem,2vw,1.2rem)] mb-2 font-medium">
                  Let's Get in Touch
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Id"
                    className="text-[#818181] w-[70vw] sm:w-[250px] md:w-[140px] 2xl:w-[18vw]
                               h-[36px] sm:h-[38px] md:h-[30px] 2xl:h-[42px] text-[clamp(0.8rem,2vw,1rem)]
                               rounded-[10px] border border-[#F2F2F7] px-3 focus:outline-none"
                  />
                  <motion.img
                    src={email.trim() ? sent : icon}
                    alt="send"
                    className="w-[30px] sm:w-[35px] md:w-[3vw] lg:w-[2vw] 2xl:w-[2vw] rotate-45 cursor-pointer"
                    whileHover={{ scale: 1.2, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
              {isMobile? <p className="text-[#F8F9FA] text-[clamp(0.6rem,2vw,0.9rem)] md:text-[clamp(0.6rem,1.2vw,0.9rem)] 2xl:text-[clamp(0.6rem,2vw,0.9rem)]">
                &copy; 2025 VedaPixel Tech Solution Pvt. Ltd. All Rights
                Reserved.
              </p>:false}

              {/* Social Links */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <p className="text-[#C8C1C1] text-[clamp(1rem,2vw,1.2rem)]">
                  Follow us on
                </p>
                <div className="flex gap-4">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/vedapixel-tech-solutions-private-limited/"
                  >
                    <motion.img
                      src={linkedin}
                      alt="LinkedIn"
                      className="w-[25px] sm:w-[30px] md:w-[22px]  2xl:w-[2vw] cursor-pointer"
                      whileHover={{ scale: 1.2, y: -3 }}
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/vedapixel/?igsh=MTBxbHdra2FzbWFzbg%3D%3D&utm_source=qr#"
                  >
                    <motion.img
                      src={Instagram}
                      alt="Instagram"
                      className="w-[25px] sm:w-[30px] md:w-[22px] ] 2xl:w-[2vw] cursor-pointer"
                      whileHover={{ scale: 1.2, y: -3 }}
                    />
                  </a>
                  {/* <a target="_blank" href="https://wa.me/919036354263">
                    <motion.img
                      src={whatsapp}
                      alt="whatsapp"
                      className="w-[25px] sm:w-[30px] md:w-[22px]  2xl:w-[2vw] cursor-pointer"
                      whileHover={{ scale: 1.2, y: -3 }}
                    />
                  </a> */}

                  {/* <i class="fa-brands fa-whatsapp fa-lg"></i> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.footer>
    </>
  );
};

export default Footer;
