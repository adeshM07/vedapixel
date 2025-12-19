import React, { useEffect, useRef, useState } from "react";
import "../CSS/Body.css";
import "../CSS/Contact.css";
import banner from "../assets/contact-banner.png";
import upIcon from "../assets/up-loading.png";
import { useLocation } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion, AnimatePresence } from "framer-motion";

const ContactPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [collabErrors, setCollabErrors] = useState({});
  const [careerErrors, setCareerErrors] = useState({});

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [showNav, setShowNav] = useState(false);
  const [activeSection, setActiveSection] = useState("banner");
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const [isTab, setIsTab] = useState(
    typeof window !== "undefined" ? window.innerWidth < 1536 : false
  );

  const [collabForm, setCollabForm] = useState({
    name: "",
    company: "",
    email: "",
    contact: "+91",
    idea: "",
  });
  const [careerForm, setCareerForm] = useState({
    name: "",
    email: "",
    contact: "+91",
    message: "",
    resume: null,
  });
  const [collabFilled, setCollabFilled] = useState(false);
  const [careerFilled, setCareerFilled] = useState(false);

  // ✅ Handle input changes
  const handleCollabChange = (e) => {
    setCollabForm({ ...collabForm, [e.target.name]: e.target.value });
    setCollabErrors((prev) => ({ ...prev, [e.target.name]: false }));
  };

  const handleCareerChange = (e) => {
    setCareerForm({ ...careerForm, [e.target.name]: e.target.value });
    setCareerErrors((prev) => ({ ...prev, [e.target.name]: false }));
  };
  const handleCareerFile = (e) => {
    const file = e.target.files[0];
    setCareerForm({ ...careerForm, resume: file });

    // ✅ remove red border instantly after selecting file
    setCareerErrors((prev) => ({ ...prev, resume: false }));
  };

  // ✅ Check if all fields are filled (Collaborate)
  // ✅ Check if required fields are filled (Company optional)
  useEffect(() => {
    const { name, email, contact, idea } = collabForm; // company excluded
    const allFilled =
      name.trim() !== "" &&
      email.trim() !== "" &&
      contact.trim() !== "" &&
      idea.trim() !== "";
    setCollabFilled(allFilled);
  }, [collabForm]);

  // ✅ Check if all fields are filled (Career)
  useEffect(() => {
    const allFilled = Object.values(careerForm).every((v) =>
      typeof v === "string" ? v.trim() !== "" : v !== null
    );
    setCareerFilled(allFilled);
  }, [careerForm]);

  const location = useLocation();
  const [service, setService] = useState();
  useEffect(() => {
    if (location.state && location.state.status) {
      const { status } = location.state;
      console.log("Status", status);
      setService(status);
    } else {
      console.warn("No service received in state");
    }
  }, [location.state]);

  useEffect(() => {
    if (service) {
      const careerSection = document.getElementById("career");
      if (careerSection) {
        const yOffset = -120; // 👈 adjust this value as needed (e.g., -100 or -150)
        const y =
          careerSection.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [service]);

  const pageRef = useRef(null);
  const bannerRef = useRef(null);
  const collaborateRef = useRef(null);
  const careerRef = useRef(null);

  // Refs for mobile headings
  const collabTitleRef = useRef(null);
  const careerTitleRef = useRef(null);
  const [collabTitleVisible, setCollabTitleVisible] = useState(false);
  const [careerTitleVisible, setCareerTitleVisible] = useState(false);

  const [bannerVisible, setBannerVisible] = useState(true);

  // ✅ Keep isMobile updated
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  // ✅ Smooth nav visibility logic
  // ✅ Smooth nav visibility logic — FINAL VERSION (stays visible slightly into Career)
  useEffect(() => {
    if (!collaborateRef.current || !careerRef.current) return;

    const handleScroll = () => {
      if (isMobile) {
        setShowNav(false);
        return;
      }

      const collabRect = collaborateRef.current.getBoundingClientRect();
      const careerRect = careerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // ✅ Conditions:
      // 1️⃣ Nav appears once Collaborate enters viewport
      // 2️⃣ Nav remains visible while Collaborate is still around
      // 3️⃣ Nav stays slightly into Career (15–20% of its height visible)
      const collabInView =
        collabRect.top < windowHeight * 0.8 && collabRect.bottom > 100;

      const careerOverlap =
        careerRect.top < windowHeight * 0.85 &&
        careerRect.top > -windowHeight * 0.2;
      // 👆 keeps nav visible until 20% of Career passes top

      const shouldShow = collabInView || careerOverlap;

      setShowNav(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // ✅ Active section observer
  useEffect(() => {
    const elements = [
      { id: "banner", ref: bannerRef },
      { id: "collaborate", ref: collaborateRef },
      { id: "career", ref: careerRef },
    ];

    let debounceTimer = null;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target._lastRatio = entry.intersectionRatio;
        });

        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          let best = { id: "banner", ratio: 0 };
          elements.forEach((el) => {
            const node = el.ref.current;
            const ratio =
              node && typeof node._lastRatio === "number" ? node._lastRatio : 0;
            if (ratio > best.ratio) best = { id: el.id, ratio };
          });
          if (best.ratio > 0) setActiveSection(best.id);
        }, 120);
      },
      {
        threshold: isMobile
          ? [0.1, 0.25, 0.5]
          : [0, 0.1, 0.25, 0.4, 0.6, 0.8, 1],
      }
    );

    elements.forEach((el) => {
      if (el.ref.current) obs.observe(el.ref.current);
    });

    return () => {
      clearTimeout(debounceTimer);
      obs.disconnect();
    };
  }, [isMobile]);

  // ✅ Banner fade-out observer
  useEffect(() => {
    if (!bannerRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setBannerVisible(entry.intersectionRatio > 0.05),
      { threshold: [0, 0.05, 0.15, 0.3] }
    );
    obs.observe(bannerRef.current);
    return () => obs.disconnect();
  }, []);

  // ✅ Mobile heading visibility observer
  useEffect(() => {
    if (!isMobile) {
      setCollabTitleVisible(false);
      setCareerTitleVisible(false);
      return;
    }

    const titleEls = [
      { ref: collabTitleRef, setVisible: setCollabTitleVisible },
      { ref: careerTitleRef, setVisible: setCareerTitleVisible },
    ];

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === collabTitleRef.current)
            setCollabTitleVisible(entry.intersectionRatio > 0.2);
          if (entry.target === careerTitleRef.current)
            setCareerTitleVisible(entry.intersectionRatio > 0.2);
        });
      },
      { threshold: [0, 0.15, 0.25, 0.5] }
    );

    titleEls.forEach((t) => {
      if (t.ref.current) obs.observe(t.ref.current);
    });

    return () => obs.disconnect();
  }, [isMobile]);

  // ✅ Nav item
  const navItem = (id, label) => {
    const isActive = activeSection === id;
    return (
      <motion.p
        key={id}
        onClick={() =>
          document
            .getElementById(id)
            ?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        className="relative cursor-pointer pl-2 pr-[12px] h-[42px] text-[18px] sm:text-[20px] md:text-[24px] flex items-center transition-all duration-300"
        animate={{
          color: isActive ? "#b19cd9" : "#d1d5db",
          x: isActive ? 6 : 0,
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <motion.span
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#b19cd9] rounded-full"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isActive ? "100%" : 0,
            width: isActive ? "3px" : 0,
            opacity: isActive ? 1 : 0,
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        />
        {label}
      </motion.p>
    );
  };

  const validateCollab = () => {
    const e = {};
    if (!collabForm.name.trim()) e.name = true;
    if (!collabForm.email.trim()) e.email = true;
    if (!collabForm.contact.trim()) e.contact = true;
    if (!collabForm.idea.trim()) e.idea = true;

    setCollabErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateCareer = () => {
    const e = {};
    if (!careerForm.name.trim()) e.name = true;
    if (!careerForm.email.trim()) e.email = true;
    if (!careerForm.contact.trim()) e.contact = true;
    if (!careerForm.message.trim()) e.message = true;
    if (!careerForm.resume) e.resume = true;

    setCareerErrors(e);
    return Object.keys(e).length === 0;
  };

  // ===== SEND COLLABORATE FORM =====
  const submitCollabForm = async () => {
    if (!validateCollab()) return;

    const formData = new FormData();
    formData.append("formType", "collaborate");
    formData.append("name", collabForm.name);
    formData.append("company", collabForm.company);
    formData.append("email", collabForm.email);
    formData.append("contact", collabForm.contact);
    formData.append("idea", collabForm.idea);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbz3tUTCcuf5qTDG6aY3R064C_KhcSSJ-gRcwuU-DT94eG3o42uel64EZF7hsknE_-9j/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );

      alert("Collaborate form submitted successfully!");
      setCollabForm({
        name: "",
        company: "",
        email: "",
        contact: "+91",
        idea: "",
      });
    } catch (error) {
      alert("Error submitting collaborate form!");
      console.log(error);
    }
  };

  const submitCareerForm = async () => {
    if (!validateCareer()) return;

    const formData = new FormData();
    formData.append("formType", "career");
    formData.append("name", careerForm.name);
    formData.append("email", careerForm.email);
    formData.append("contact", careerForm.contact);
    formData.append("message", careerForm.message);

    if (careerForm.resume) {
      formData.append("resume", careerForm.resume);
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyOcZfiswsBY-1fVd-tTSWIQrvJDJRwhunuPwK2ARxeM9rY-V-wHwqfhsx1KDR-bifq/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );

      alert("Career form submitted successfully!");
      setCareerForm({
        name: "",
        email: "",
        contact: "+91",
        message: "",
        resume: null,
      });
    } catch (error) {
      alert("Error submitting career form!");
      console.log(error);
    }
  };

  return (
    <>
      <div
        ref={pageRef}
        className="contact-page-content  relative h-fit w-[99vw] pb-[40px] flex"
      >
        <AnimatePresence>
          {showNav && !isMobile && (
            <motion.nav
              className="text-white w-[15vw] flex flex-col gap-[10px]"
              style={{
                position: "fixed",
                left: "132px",
                top: "180px",
                zIndex: 50,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              {navItem("collaborate", "Collaborate")}
              {navItem("career", "Career")}
            </motion.nav>
          )}
        </AnimatePresence>

        {/* ===== MAIN CONTENT ===== */}
        <div className="flex flex-col  pt-[54px] w-full">
          {/* Banner */}
          <div
            ref={bannerRef}
            className="self-center px-[4vw] w-full flex justify-center"
          >
            <AnimatePresence>
              {bannerVisible && (
                <motion.img
                  key="banner"
                  src={banner}
                  alt="Banner"
                  id="banner"
                  className="w-[85vw] sm:w-[70vw] md:w-[55vw] lg:w-[45vw] xl:w-[40vw]
                             h-[22vh] sm:h-[25vh] md:h-[28vh] lg:h-[32vh] xl:h-[36vh]
                             mb-10 object-contain"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-20 pl-0 sm:pl-[25vw] lg:pl-[30vw] 2xl:gap-[200px]  items-center sm:items-start">
            {/* === COLLABORATE SECTION === */}
            <section
              id="collaborate"
              ref={collaborateRef}
              className="flex flex-col w-full items-center"
            >
              {isMobile && (
                <motion.p
                  ref={collabTitleRef}
                  className="relative my-[18px] text-center text-[clamp(1.2rem,4vw,1.8rem)] font-semibold
                             bg-gradient-to-r from-[#C7B9F6] via-[#A699D9] to-[#6A6185]
                             bg-clip-text text-transparent inline-block"
                  initial={{ opacity: 0, y: 18 }}
                  animate={
                    collabTitleVisible
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 18 }
                  }
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  Collaborate
                  <span
                    className="block mt-2 h-[2px] w-[115%] mx-auto rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg,#C7B9F6 0%, #A699D9 50%, #6A6185 100%)",
                    }}
                  />
                </motion.p>
              )}

              {/* Prevent layout shift */}
              <div className="relative flex justify-center items-start w-full">
                <motion.div
                  className="w-[90vw] sm:w-[80%] md:w-[70%] 2xl:w-[50vw]
                             border-2 border-white
                             p-[clamp(20px,3vw,40px)]
                             rounded-xl
                             flex flex-col 
                             gap-[clamp(14px,2vw,22px)]
                             h-auto"
                  style={{
                    background:
                      "linear-gradient(139.47deg, rgba(50, 58, 68) -45.69%, rgba(16, 24, 32) 54.7%)",
                    backdropFilter: "blur(10px) saturate(180%)",
                    WebkitBackdropFilter: "blur(10px) saturate(180%)",
                    border: "2px solid rgba(255, 255, 255, 0.15)",
                    willChange: "opacity, box-shadow, filter",
                    transformOrigin: "center center",
                  }}
                  animate={{
                    opacity: activeSection === "collaborate" ? 1 : 0.5,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <p className="contact-box-title text-[#C8C1C1] text-[clamp(0.9rem,2vw,1.5rem)] md:text-[clamp(0.9rem,1vw,1.5rem)] lg:text-[clamp(0.9rem,2vw,1.5rem)] text-center lg:text-left">
                    Find Your Way Forward, we're here to support.
                  </p>

                  <form className="w-full flex flex-col gap-[clamp(18px,3vw,28px)] h-auto">
                    <div className="flex flex-col md:flex-row flex-wrap justify-between gap-[clamp(15px,2vw,26px)]">
                      <input
                        type="text"
                        name="name"
                        value={collabForm.name}
                        onChange={handleCollabChange}
                        placeholder="Name *"
                        className={`border ${
                          collabErrors.name
                            ? "border-red-500"
                            : "border-[#989BA1]"
                        } text-[#818181] bg-transparent p-[clamp(6px,1vw,10px)]
  rounded-[clamp(4px,1vw,10px)] w-[100%] md:w-[47%] 2xl:w-[21vw]`}
                      />
                      <input
                        type="text"
                        placeholder="Company Name "
                        name="company"
                        value={collabForm.company}
                        onChange={handleCollabChange}
                        className="border border-[#989BA1] text-[#818181] bg-transparent 
                                   p-[clamp(6px,1vw,10px)] rounded-[clamp(4px,1vw,10px)]
                                   w-[100%] md:w-[47%]  md:h-[clamp(35px,3vh,55px)] 2xl:h-[clamp(35px,6.5vh,55px)] "
                      />
                      <div className="w-[100%] md:h-[clamp(35px,3vh,55px)] 2xl:h-[clamp(35px,6vh,55px)]   md:w-[47%] 2xl:w-[21vw]">
                        <PhoneInput
                          country={"in"} // 🇮🇳 Default country
                          value={collabForm.contact}
                          onChange={(value, country) => {
                            const dialCode = `+${country.dialCode}`;
                            if (!value.startsWith(dialCode)) value = dialCode;
                            setCollabForm({
                              ...collabForm,
                              contact: value,
                              countryCode: dialCode,
                            });
                          }}
                          inputProps={{
                            name: "contact",
                            required: true,
                          }}
                          enableSearch={false} // ❌ hide search bar
                          countryCodeEditable={false}
                          placeholder="Enter contact number"
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
                                ? "5vh"
                                : windowWidth < 640
                                ? "4vh"
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
                          dropdownStyle={{
                            background: "rgba(16, 24, 32, 0.25)", // 🌫 transparent with slight tint
                            backdropFilter: "blur(6px) saturate(160%)", // 💎 subtle blur
                            WebkitBackdropFilter: "blur(6px) saturate(160%)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "10px",
                            color: "#E4E3E3",
                            boxShadow: "0 4px 18px rgba(0, 0, 0, 0.3)",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            zIndex: 9999,
                          }}
                        />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={collabForm.email}
                        onChange={handleCollabChange}
                        placeholder="Email Id *"
                        className={`border ${
                          collabErrors.name
                            ? "border-red-500"
                            : "border-[#989BA1]"
                        } text-[#818181] bg-transparent p-[clamp(6px,1vw,10px)]
  rounded-[clamp(4px,1vw,10px)] w-[100%] md:w-[47%] 2xl:w-[21vw]`}
                      />
                    </div>

                    <textarea
                      name="idea"
                      value={collabForm.idea}
                      onChange={handleCollabChange}
                      className={`border ${
                        collabErrors.idea
                          ? "border-red-500"
                          : "border-[#989BA1]"
                      } text-[#818181] bg-transparent 
  p-[clamp(8px,1vw,12px)] rounded-[clamp(6px,1vw,10px)]
  w-full h-[clamp(100px,5vh,160px)] resize-none`}
                      placeholder="Project Idea *"
                    ></textarea>
                  </form>

                  <button
                    onClick={submitCollabForm}
                    className={`${
                      collabFilled ? "active-btn" : "rotating-btn"
                    } border border-[#B1A2DF] rounded-[8px] text-white font-medium 
  w-[clamp(200px,60vw,300px)] h-[clamp(40px,5vh,60px)] 
  md:h-[clamp(40px,3vh,60px)] 2xl:h-[clamp(40px,5vh,60px)] 
  md:w-[clamp(200px,30vw,300px)] 2xl:w-[clamp(500px,60vw,300px)]
  mx-auto mt-[clamp(10px,2vw,20px)] 
  hover:bg-[#B1A2DF]/10 transition 
  text-[clamp(0.9rem,1.5vw,1.3rem)]`}
                  >
                    Submit
                  </button>
                </motion.div>
              </div>
            </section>

            {/* === CAREER SECTION === */}
            <section
              id="career"
              ref={careerRef}
              className="flex  flex-col w-full items-center"
            >
              {isMobile && (
                <motion.p
                  ref={careerTitleRef}
                  className="relative my-[18px] text-center text-[clamp(1.2rem,4vw,1.8rem)] font-semibold
                             bg-gradient-to-r from-[#C7B9F6] via-[#A699D9] to-[#6A6185]
                             bg-clip-text text-transparent inline-block"
                  initial={{ opacity: 0, y: 18 }}
                  animate={
                    careerTitleVisible
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 18 }
                  }
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  Career
                  <span
                    className="block mt-2 h-[2px] w-[105%] mx-auto rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg,#C7B9F6 0%, #A699D9 50%, #6A6185 100%)",
                    }}
                  />
                </motion.p>
              )}

              <div className="relative flex justify-center items-start w-full">
                <motion.div
                  className="w-[90vw] sm:w-[80%] md:w-[70%] 2xl:w-[50vw]
                             border-2 border-white
                             p-[clamp(20px,3vw,40px)]
                             rounded-xl
                             flex flex-col 
                             gap-[clamp(14px,2vw,22px)]
                             h-auto mb-36"
                  style={{
                    background:
                      "linear-gradient(139.47deg, rgba(50, 58, 68) -45.69%, rgba(16, 24, 32) 54.7%)",
                    backdropFilter: "blur(10px) saturate(180%)",
                    WebkitBackdropFilter: "blur(10px) saturate(180%)",
                    border: "2px solid rgba(255, 255, 255, 0.15)",
                    willChange: "opacity, box-shadow, filter",
                    transformOrigin: "center center",
                  }}
                  animate={{
                    opacity: activeSection === "career" ? 1 : 0.5,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <p className="contact-box-title text-[#C8C1C1] md:text-[clamp(0.9rem,1vw,1.5rem)] lg:text-[clamp(0.9rem,2vw,1.5rem)] text-center lg:text-left">
                    Tell us about yourself
                  </p>

                  <form className="w-full flex flex-col gap-[clamp(18px,3vw,28px)] h-auto">
                    <div className="flex flex-col md:flex-row flex-wrap justify-between gap-[clamp(15px,2vw,26px)]">
                      <input
                        type="text"
                        placeholder="Name *"
                        name="name"
                        value={careerForm.name}
                        onChange={handleCareerChange}
                        className={`border ${
                          careerErrors.name
                            ? "border-red-500"
                            : "border-[#989BA1]"
                        } text-[#818181] bg-transparent p-[clamp(6px,1vw,10px)]
  rounded-[clamp(4px,1vw,10px)] w-[100%] md:w-[47%] 2xl:w-[21vw]`}
                      />
                      <input
                        type="email"
                        name="email"
                        value={careerForm.email}
                        onChange={handleCareerChange}
                        placeholder="Email Id *"
                        className={`border ${
                          careerErrors.email
                            ? "border-red-500"
                            : "border-[#989BA1]"
                        } text-[#818181] bg-transparent p-[clamp(6px,1vw,10px)]
  rounded-[clamp(4px,1vw,10px)] w-[100%] md:w-[47%] 2xl:w-[21vw]`}
                      />
                      <div className="w-[100%] md:w-[47%] 2xl:w-[21vw]">
                        <PhoneInput
                          country={"in"} // 🇮🇳 Default to India
                          value={careerForm.contact}
                          onChange={(value, country) => {
                            const dialCode = `+${country.dialCode}`;
                            if (!value.startsWith(dialCode)) value = dialCode;

                            setCareerForm({
                              ...careerForm,
                              contact: value,
                              countryCode: dialCode,
                            });
                          }}
                          enableSearch={false}
                          countryCodeEditable={false}
                          placeholder="Contact No. *"
                          inputProps={{
                            name: "contact",
                            required: true,
                          }}
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
                                ? "5vh"
                                : windowWidth < 640
                                ? "4vh"
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
                          dropdownStyle={{
                            background: "rgba(16, 24, 32, 0.25)", // transparent with slight tint
                            backdropFilter: "blur(6px) saturate(160%)",
                            WebkitBackdropFilter: "blur(6px) saturate(160%)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "10px",
                            color: "#E4E3E3",
                            boxShadow: "0 4px 18px rgba(0, 0, 0, 0.3)",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            zIndex: 9999,
                          }}
                        />
                      </div>

                      <div className="relative w-[100%]  md:w-[47%] 2xl:w-[21vw]">
                        <input
                          type="file"
                          onChange={handleCareerFile}
                          id="resume"
                          // onChange={(e) =>
                          //   setFileName(e.target.files[0] ? e.target.files[0].name : "Upload Resume *")
                          // }
                          className="hidden "
                        />
                        <label
                          htmlFor="resume"
                          className={`flex items-center gap-2 border 
    ${careerErrors.resume ? "border-red-500" : "border-[#989BA1]"} 
    bg-transparent p-[clamp(6px,1vw,10px)] rounded-[clamp(4px,1vw,10px)]
    w-full md:w-[100%] lg:w-[21vw] 2xl:w-[21vw]`}
                          style={{
                            minWidth: 0, // ✅ ensures flex text can shrink properly
                          }}
                        >
                          {/* ✅ Text container that won't collapse */}
                          <span
                            className="truncate !text-[#818181] text-[clamp(0.8rem,2.5vw,1rem)] flex-1 min-w-0 block"
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              color: "#818181",
                            }}
                          >
                            {careerForm.resume
                              ? careerForm.resume.name.length > 25
                                ? careerForm.resume.name.slice(0, 25) + "..."
                                : careerForm.resume.name
                              : "Upload Your Resume"}
                          </span>

                          {/* ✅ Icon stays fixed */}
                          <img
                            src={upIcon}
                            alt="Upload"
                            className="flex-shrink-0 h-[2vh] md:h-[1.6vh] lg:h-[1.4vh] xl:h-[2vh] [@media(min-width:2000px)]:h-[2vh]"
                          />
                        </label>
                      </div>
                    </div>

                    <textarea
                      name="message"
                      value={careerForm.message}
                      onChange={handleCareerChange}
                      placeholder="Any Message *"
                      className={`border ${
                        careerErrors.message
                          ? "border-red-500"
                          : "border-[#989BA1]"
                      } text-[#818181] bg-transparent 
  p-[clamp(8px,1vw,12px)] rounded-[clamp(6px,1vw,10px)]
  w-full h-[clamp(100px,5vh,160px)] resize-none`}
                    ></textarea>
                  </form>

                  <button
                    onClick={submitCareerForm}
                    className={`${
                      careerFilled ? "active-btn" : "rotating-btn"
                    } border border-[#B1A2DF] rounded-[8px] text-white font-medium 
  w-[clamp(200px,60vw,300px)] h-[clamp(40px,5vh,60px)] 
  md:h-[clamp(40px,3vh,60px)] 2xl:h-[clamp(40px,5vh,60px)] 
  md:w-[clamp(200px,30vw,300px)] 2xl:w-[clamp(500px,60vw,300px)]
  mx-auto mt-[clamp(10px,2vw,20px)] 
  hover:bg-[#B1A2DF]/10 transition 
  text-[clamp(0.9rem,1.5vw,1.3rem)]`}
                  >
                    Submit
                  </button>
                </motion.div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
