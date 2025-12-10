// pages/Body.jsx
import React, { useEffect, useState, useRef } from "react";
import "../CSS/Body.css";
import { motion, AnimatePresence } from "framer-motion";
import InfiniteScrollNodes from "./InfiniteScrollNodes";
import InfiniteScrollNodes2 from "./InfiniteScrollNodes2";
import InfiniteScrollNodes3 from "./InfiniteScrollNodes3";
import profileImg from "../assets/profileImg.png";
import adesh from '../assets/adesh.png'
import susmita from '../assets/adesh.png'
import shruti from '../assets/adesh.png'
import { Link } from "react-router-dom";

const Body = () => {
  const [showBody, setShowBody] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [navOpacity, setNavOpacity] = useState(1);
  const [showTeamPopup, setShowTeamPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const [currentWord, setCurrentWord] = useState("streamline operations");

  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const teamRef = useRef(null);

  const steps = [
    {
      id: 1,
      title: "Requirement Analysis",
      desc: "We begin by understanding your goals and defining the core functionalities to ensure they align perfectly with your business objectives.",
    },
    {
      id: 2,
      title: "UI/UX Design",
      desc: "Our designers craft stunning, intuitive interfaces that are simple to navigate and visually impactful.",
    },
    {
      id: 3,
      title: "Development Phase",
      desc: "We develop robust, full-featured solutions with clean code and seamless integrations.",
    },
    {
      id: 4,
      title: "Quality Testing",
      desc: "Every component is thoroughly tested to ensure high performance, security, and scalability across all devices.",
    },
    {
      id: 5,
      title: "Deployment & Launch",
      desc: "We handle the entire deployment process — making your site or app live on Play Store and App Store.",
    },
    {
      id: 6,
      title: "Support & Maintenance",
      desc: "Our dedicated team provides round-the-clock maintenance, updates, and ongoing support to keep your project running smoothly.",
    },
    {
      id: 7,
      title: "Improve & Scale",
      desc: "We continue improving with new features and enhancements to support your business growth.",
    },
  ];

  // ✅ Smooth visibility hook (scroll range + buffer)
  const useSmoothVisibility = (min = 100, max = 500, buffer = 60) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const scrollTimeout = useRef(null);
    const ticking = useRef(false);

    useEffect(() => {
      const handleScroll = () => {
        if (!ref.current) return;
        if (ticking.current) return;

        ticking.current = true;
        requestAnimationFrame(() => {
          const top = ref.current.getBoundingClientRect().top;

          // Add a small buffer to prevent flicker
          if (top >= min - buffer && top <= max + buffer) {
            if (!visible) setVisible(true);
          } else {
            if (visible) setVisible(false);
          }

          ticking.current = false;
        });
      };

      // Debounce listener for performance
      const handleDebouncedScroll = () => {
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(handleScroll, 5);
      };

      window.addEventListener("scroll", handleDebouncedScroll);
      handleScroll(); // initial call
      return () => window.removeEventListener("scroll", handleDebouncedScroll);
    }, [min, max, buffer, visible]);

    return [ref, visible];
  };

  // Attach hooks for each section title
  const [aimTitleRef, aimVisible] = useSmoothVisibility(120, 600);
  const [servicesTitleRef, servicesVisible] = useSmoothVisibility(120, 600);
  const [teamTitleRef, teamVisible] = useSmoothVisibility(120, 600);
  // const [teamTitleRef, teamVisible] = useSmoothVisibility(120, 600);

  // ✅ Nav highlight detection
  // ✅ Final stable Nav Highlight Detection (fixes Aim ↔ Services inversion)
  useEffect(() => {
    const sections = [
      { id: "about", ref: aboutRef },
      { id: "services", ref: servicesRef },
      { id: "process", ref: processRef },
      { id: "team", ref: teamRef },
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Track which section occupies most of the viewport
      let maxVisibleHeight = 0;
      let currentSection = "about";

      sections.forEach(({ id, ref }) => {
        const element = ref.current;
        if (!element) return;
        const rect = element.getBoundingClientRect();

        // How much of the section is visible in the viewport
        const visibleHeight =
          Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);

        // Only count if at least 10–15% of it is visible
        if (
          visibleHeight > maxVisibleHeight &&
          visibleHeight > viewportHeight * 0.15
        ) {
          maxVisibleHeight = visibleHeight;
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Show sidebar nav after section enters viewport
  // useEffect(() => {
  //   const bodySection = document.querySelector(".body-content");
  //   if (!bodySection) return;

  //   const handleObserverUpdate = ([entry]) => {
  //     const width = window.innerWidth;
  //     let visible = false;

  //     if (width >= 1024) {
  //       // 💻 Laptop/Desktop → keep nav visible slightly longer (for "Our Process")
  //       visible = entry.intersectionRatio > 0.15;
  //     } else if (width >= 768 && width < 1024) {
  //       // 📱 Tablet → extend range too
  //       visible = entry.intersectionRatio > 0.4;
  //     } else {
  //       // 📲 Mobile → hidden anyway
  //       visible = false;
  //     }

  //     setShowBody(visible);
  //   };

  //   const observer = new IntersectionObserver(handleObserverUpdate, {
  //     threshold: Array.from({ length: 21 }, (_, i) => i * 0.05),
  //   });

  //   observer.observe(bodySection);
  //   return () => observer.disconnect();
  // }, []);
  // ✅ Show sidebar nav after section enters viewport
  // ✅ Hybrid: reliable + context-aware nav visibility
  useEffect(() => {
    const bodySection = document.querySelector(".body-content");
    if (!bodySection) return;

    const handleObserverUpdate = (entries) => {
      const entry = entries[0];
      const width = window.innerWidth;
      let visible = false;

      // fix: ensure bounding rect is calculated correctly
      const rect = entry.target.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight - 110 && rect.bottom > 450;

      if (width >= 1024) {
        // 💻 Laptop/Desktop → keep nav visible slightly longer (for "Our Process")
        visible =
          entry.isIntersecting && isInView && entry.intersectionRatio > 0.05;
      } else if (width >= 768 && width < 1024) {
        // 📱 Tablet → extend range too
        visible =
          entry.isIntersecting && isInView && entry.intersectionRatio > 0.1;
      } else {
        // 📲 Mobile → hidden anyway
        visible = false;
      }

      setShowBody(visible);
    };

    // fix: use multiple thresholds + rootMargin to increase sensitivity
    const observer = new IntersectionObserver(handleObserverUpdate, {
      root: null,
      rootMargin: "0px 0px -10% 0px", // extend detection a little before it leaves view
      threshold: Array.from({ length: 21 }, (_, i) => i * 0.05),
    });

    observer.observe(bodySection);

    // immediate check on mount (helps GitHub/SSR environments)
    const rect = bodySection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setShowBody(true);
    }

    return () => observer.disconnect();
  }, []);

  // ✅ Handle resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Sidebar positioning
  const [navPosition, setNavPosition] = useState({
    left: window.innerWidth >= 1024 ? "10vw" : "32px",
    top: window.innerWidth >= 1024 ? "180px" : "280px",
  });

  useEffect(() => {
    const handleResize = () => {
      setNavPosition({
        left: window.innerWidth >= 1024 ? "10vw" : "32px",
        top: window.innerWidth >= 1024 ? "180px" : "280px",
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Nav item animation
  const navItem = (id, label) => {
    const isActive = activeSection === id;
    return (
      <motion.p
        onClick={() =>
          document
            .getElementById(id)
            ?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        className="body-nav   relative cursor-pointer pl-3 lg:pl-1 md:text-[18px] lg:text-[24px] 2xl:text-[28px] flex items-center transition-all duration-300"
        animate={{
          color: isActive ? "#b19cd9" : "#d1d5db",
          x: isActive ? 4 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <motion.span
          className="absolute border-2 -left-1 top-1/2 -translate-y-1/2 bg-[#b19cd9] rounded-full"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isActive ? "100%" : 0,
            width: isActive ? "3px" : 0,
            opacity: isActive ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
        {label}
      </motion.p>
    );
  };

  useEffect(() => {
    const words = [
      "streamline operations",
      "drive sustainable growth",
      "boost accessibility",
    ];

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setCurrentWord(words[index]);
    }, 1400);

    return () => clearInterval(interval);
  }, []);
  const [activeStep, setActiveStep] = useState(null);

  useEffect(() => {
    if (!isMobile) return;

    const stepElements = document.querySelectorAll(".process-step");

    const handleScroll = () => {
      let closestIndex = null;
      let closestDistance = Infinity;

      stepElements.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        const distanceToCenter = Math.abs(
          rect.top + rect.height / 2 - window.innerHeight / 2
        );
        if (distanceToCenter < closestDistance) {
          closestDistance = distanceToCenter;
          closestIndex = i;
        }
      });

      setActiveStep(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      const teamSection = teamRef.current;
      if (!teamSection) return;

      const rect = teamSection.getBoundingClientRect();

      // 👇 Keep nav fully visible until Team section's top < 100px
      if (rect.top > 100) {
        setNavOpacity(1); // fully visible
      } else if (rect.top > 0) {
        // start fading gradually between 100px → 0px
        const progress = rect.top / 100; // normalize 1 → 0
        setNavOpacity(Math.max(0, Math.min(1, progress)));
      } else {
        setNavOpacity(0); // completely hidden after top passes 0
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const stepElements = document.querySelectorAll(".process-step");

    const handleScroll = () => {
      let closestStep = null;
      let closestDistance = Infinity;

      // Step 1: find the step closest to viewport center
      stepElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const distanceToCenter = Math.abs(
          rect.top + rect.height / 2 - window.innerHeight / 2
        );
        if (distanceToCenter < closestDistance) {
          closestDistance = distanceToCenter;
          closestStep = el;
        }
      });

      // Step 2: reset all titles & borders
      stepElements.forEach((el) => {
        const title = el.querySelector(".process-title");
        const box = el.querySelector("div.flex.border-2");
        if (title) {
          title.style.color = "#C8C1C1";
          title.style.transition = "color 0.4s ease";
        }
        if (box) {
          // reset all sides to white
          box.style.borderTopColor = "#101820";
          box.style.borderBottomColor = "#101820";
          box.style.borderLeftColor = "#101820";
          box.style.borderRightColor = "#101820";
          box.style.transition = "border-color 0.4s ease";
        }
      });

      // Step 3: highlight the active one (title + inner border)
      if (closestStep) {
        const activeTitle = closestStep.querySelector(".process-title");
        const activeBox = closestStep.querySelector("div.flex.border-2");

        // detect if this step is on left or right
        const isLeft = closestStep.classList.contains("md:justify-end");

        if (activeTitle) {
          activeTitle.style.color = "#BBABEB";
          activeTitle.style.transition = "color 0.4s ease";
        }

        if (activeBox) {
          // Keep all sides white but color only the center side purple
          activeBox.style.borderTopColor = "#101820";
          activeBox.style.borderBottomColor = "#101820";

          if (isLeft) {
            // box is on left → right border is the inner side
            activeBox.style.borderRightColor = "#101820";
            activeBox.style.borderLeftColor = "#BBABEB";
          } else {
            // box is on right → left border is the inner side
            activeBox.style.borderLeftColor = "#101820";
            activeBox.style.borderRightColor = "#BBABEB";
          }

          activeBox.style.transition = "border-color 0.4s ease";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ✅ Team Popup */}
      <AnimatePresence>
        {showTeamPopup && (
          <motion.div
            className=" fixed mt-20 inset-0 bg-black/50 backdrop-blur-[8px] flex justify-center items-center  px-4 sm:px-6 z-999"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ zIndex: 9999 }}
          >
            <motion.div
              className="relative  w-full max-w-[95vw] md:w-[700px] overflow-y-scroll md:overflow-x-scroll no-scrollbar h-[85vh] lg:w-[80vw]  md:h-[85vh]
                   flex flex-col gap-6 sm:gap-8 md:gap-10
                   rounded-[30px] sm:rounded-[40px]
                   border border-white/20 bg-white/10 backdrop-blur-[20px]
                   shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
                    p-4 sm:p-6 md:p-8 pt-10 "
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <button
                className="absolute md:top-4 right-6 text-white text-[24px] hover:text-[#b19cd9] transition-all"
                onClick={() => setShowTeamPopup(false)}
              >
                ✕
              </button>

              <p className="popup-teamCard-title text-white text-center md:text-left text-[2rem] lg:text-[39px] pb-14 font-semibold">
                Meet Our Team
              </p>

              <div className="flex flex-col  sm:flex-row sm:flex-wrap justify-center gap-16 sm:gap-8 lg:gap-24 px-2 sm:px-4 pb-10">
                {[
                  { name: "Sunil MB", role: "Co-Founder - MD / CEO",img:"adesh" },
                  { name: "Nithin MB", role: "Co-Founder - MD" },
                  { name: "Nisarga M", role: "Head of Operations" },
                  { name: "Abhishek", role: "HR" },
                ].map((member, i) => (
                  <div
                    key={i}
                    className="relative flex justify-start w-full sm:w-[45%] md:w-[46%] lg:w-[32vw]
                h-[100px] sm:h-[130px] md:h-[150px]  lg:h-[20vh]
                rounded-t-[50px] rounded-br-[50px]
                bg-[#9C90BD]/90 border border-white/20 
                shadow-[0_8px_25px_rgba(156,144,189,0.4)]
                backdrop-blur-[6px]
                hover:shadow-[0_12px_30px_rgba(156,144,189,0.7)]
                transition-all duration-500"
                  >
                    <img
                      src={profileImg}
                      alt="Profile"
                      className="absolute bottom-0 left-0 object-cover h-[150px] md:h-[200px] -translate-y-[10px]"
                    />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[60%] flex flex-col justify-center items-start pl-7 md:pl-5">
                      <p className="text-white font-bold text-[1rem] lg:text-[22px]">
                        {member.name}
                      </p>
                      <p className="text-[#E4E3E3] text-[0.85rem] lg:text-[14px]">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Main Body */}
      <div className="body-content  px-[2%] relative min-h-screen flex flex-col  transition-all duration-700 ease-out w-full pt-[6vw]">
        {/* Sidebar Nav */}

        <AnimatePresence>
          {!isMobile && showBody && (
            <motion.nav
              className="text-white flex flex-col  gap-[15px] [@media(min-width:2000px)]:gap-[32px] 2xl:gap-[15px]"
              style={{
                position: "fixed",
                left: navPosition.left,
                top: navPosition.top,
                zIndex: 50,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {navItem("about", "Our Aim")}
              {navItem("services", "Our Services")}
              {navItem("process", "Our Process")} {/* ✅ Added this line */}
              {navItem("team", "Ready to Begin?")}
            </motion.nav>
          )}
        </AnimatePresence>

        {/* ✅ Content */}
        <div className="flex px-[2vw]   flex-col gap-[10rem] w-full md:pl-[30vw] lg:pl-[30vw]">
          {/* --- Our Aim --- */}
          <section
            id="about"
            ref={aboutRef}
            className="flex flex-col gap-[12px] mt-[7vw]"
          >
            {isMobile && (
              <motion.p
                ref={aimTitleRef}
                animate={{
                  opacity: aimVisible ? 1 : 0,
                  y: aimVisible ? 0 : 25,
                  scale: aimVisible ? 1 : 0.97,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative my-[30px] text-center text-[clamp(1.3rem,4vw,2rem)] font-semibold
                  bg-gradient-to-r from-[#C7B9F6] via-[#A699D9] to-[#6A6185]
                  bg-clip-text text-transparent inline-block"
              >
                Our Aim
                <motion.span
                  className="absolute left-1/2 -translate-x-1/2 bottom-[-5px] h-[2px] w-[25%]
                 bg-gradient-to-r from-[#C7B9F6] via-[#A699D9] to-[#6A6185] rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  viewport={{ once: false, amount: 0.4 }}
                />
              </motion.p>
            )}
            <p className="text-white   [@media(min-width:300px)_and_(max-width:410px)]:text-[18px]  text-[20px]   md:text-[28px] lg:text-[2.2rem] 2xl:text-[3rem] leading-[1.3]">
              We bridge innovation and execution with <br /> user-centric,
              future-ready systems that <br />
              <span
                id="tag"
                className=" relative  inline-block align-baseline text-[#b19cd9]  overflow-hidden"
                style={{
                  display: "inline-flex",
                  verticalAlign: "baseline",
                  height: "1.3em",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWord}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "-0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeIn" }}
                    className="inline-block"
                    style={{
                      whiteSpace: "nowrap",
                    }}
                  >
                    {currentWord}
                  </motion.span>
                </AnimatePresence>
              </span>
            </p>
            <p className="about-card-desc [@media(min-width:300px)_and_(max-width:410px)]:text-[10px] text-[#C8C1C1] text-[12px] md:text-[16px] lg:text-[0.9rem]  2xl:text-[1.5rem]">
              We offer future-ready solutions to streamline your business, drive
              <br />
              growth, and put your processes in place. Explore our range of
              <br />
              solutions below.
            </p>
            <div className="relative inline-block">
              <Link to="/about">
                <button
                  className="rotating-btn relative text-[#b19cd9] font-garota text-[0.7rem] md:text-[1.5rem] rounded-md px-3 py-2 md:px-6 md:py-3 overflow-hidden hover:from-[#6A6185] hover:to-[#B19CD9]
             hover:text-white hover:shadow-[0_0_15px_rgba(177,156,217,0.4)]
             hover:-translate-y-1"
                >
                  Know More
                </button>
              </Link>
            </div>
          </section>

          {/* --- Our Services --- */}
          <section
            id="services"
            ref={servicesRef}
            className="flex flex-col gap-[12px] mt-[7vw]"
          >
            {isMobile && (
              <motion.p
                ref={servicesTitleRef}
                animate={{
                  opacity: servicesVisible ? 1 : 0,
                  y: servicesVisible ? 0 : 25,
                  scale: servicesVisible ? 1 : 0.97,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className=" relative  my-[30px] text-center text-[clamp(1.3rem,4vw,2rem)] font-semibold
                  bg-gradient-to-r from-[#C7B9F6] via-[#A699D9] to-[#6A6185]
                  bg-clip-text text-transparent inline-block"
              >
                Our Services
                <motion.span
                  className="absolute left-1/2 -translate-x-1/2 bottom-[-5px] h-[2px] w-[25%]
                 bg-gradient-to-r from-[#C7B9F6] via-[#A699D9] to-[#6A6185] rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  viewport={{ once: false, amount: 0.4 }}
                />
              </motion.p>
            )}
            <div className="flex flex-col  lg:w-[60vw]  lg:gap-4">
              <InfiniteScrollNodes direction="left" baseSpeed={85} />
              <InfiniteScrollNodes direction="right" baseSpeed={95} />
              <InfiniteScrollNodes2 direction="left" baseSpeed={85} />
              <InfiniteScrollNodes2 direction="right" baseSpeed={95} />
              <InfiniteScrollNodes3 direction="left" baseSpeed={95} />
            </div>
          </section>

          {/* our Process */}

          {/* <section
            id="process"
            ref={processRef}
            className="w-full text-white py-10 sm:py-16 px-3 sm:px-6 flex flex-col items-center lg:mt-[7vw] overflow-hidden"
          >
            {isMobile && (
              <motion.p
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                initial={{ opacity: 0, y: 25, scale: 0.97 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative my-[60px] text-center text-[clamp(1.3rem,4vw,2rem)] font-semibold
      bg-gradient-to-r from-[#C7B9F6] via-[#A699D9] to-[#6A6185]
      bg-clip-text text-transparent inline-block"
              >
                Our Process
                <motion.span
                  className="absolute  left-1/2 -translate-x-1/2 bottom-[-5px] h-[2px] w-[105%]
       bg-gradient-to-r from-[#C7B9F6] via-[#A699D9] to-[#6A6185] rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  viewport={{ once: false, amount: 0.4 }}
                />
              </motion.p>
            )}

            <div className="relative w-full max-w-5xl">
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#6A6185] w-[2px] h-full"></div>

              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`process-step relative flex flex-col md:flex-row items-center mb-10  md:mb-20 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                    }`}
                >
                  <div
                    className={`  relative flex w-full md:w-1/2 items-center justify-center ${index % 2 === 0
                      ? "md:justify-end md:pr-4 lg:pr-10 text-right"
                      : "md:justify-start md:pl-4 lg:pl-10 text-left"
                      }`}
                  >
                    <motion.div
                      className={`  absolute top-1/2 -translate-y-1/2 text-[#C8C1C1] font-semibold 
            text-[1.6rem] sm:text-[2rem] md:text-[2.4rem]
            ${index % 2 === 0
                          ? "left-[calc(50%-24px)] md:left-auto md:right-[calc(100%+10px)]  border-r-[#BBABEB] "
                          : "right-[calc(50%-24px)] md:right-auto md:left-[calc(100%+10px)]  border-l-[#BBABEB]"
                        }`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      {step.id}.
                    </motion.div>

                     <div
                      className={` rounded-2xl p-3 sm:p-4 md:p-6 w-[70%] sm:w-[60%] md:w-full transition-all duration-500
            ${index % 2 === 0
                          ? "ml-[55%] text-left md:ml-0 md:text-right"
                          : "mr-[55%] text-right md:mr-0 md:text-left"
                        }`}
                    >
                      <motion.h3
                        className="process-title text-[#C8C1C1]
              text-[1rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem]
              2xl:text-[1.9rem] font-semibold leading-snug break-words"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                      >
                        {step.title}
                      </motion.h3>

                      
                      <motion.p
                        className="hidden md:block text-gray-200 text-[1rem] md:text-[1.1rem]
              2xl:text-[1.2rem] leading-relaxed transition-colors duration-300"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                      >
                        {step.desc}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section> */}

          {isMobile ? (
            <section
              id="process"
              ref={processRef}
              className="w-full flex justify-center py-10 px-4 flex-col "
            >
              <div className="w-full flex flex-col gap-10 mx-auto overflow-x-hidden">
                <motion.p
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                
                  className="relative my-[60px] text-center text-[clamp(1.3rem,4vw,2rem)] font-semibold
      bg-gradient-to-r from-[#C7B9F6] via-[#A699D9] to-[#6A6185]
      bg-clip-text text-transparent inline-block"
                >
                  Our Process
                  <motion.span
                    className="absolute  left-1/2 -translate-x-1/2 bottom-[-5px] h-[2px] w-[35%]
       bg-gradient-to-r from-[#C7B9F6] via-[#A699D9] to-[#6A6185] rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    viewport={{ once: false, amount: 0.4 }}
                  />
                </motion.p>
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className={`process-step flex flex-col gap-2 border border-[#2b2b2b] p-4 rounded-xl bg-[#101820]/40 backdrop-blur-md transition-all duration-500 `}
                   
                  >
                    <p
                      className={`process-title text-[1.4rem] font-semibold transition-all duration-500 ${
                        index === activeStep
                          ? "text-[#B1A2DF]"
                          : "text-[#C8C1C1]"
                      }`}
                    >
                      {step.id}. {step.title}
                    </p>
                    <p className="text-[#F8F9FA] text-[0.95rem] leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>
          ) : (
            <section
              id="process"
              ref={processRef}
              className="w-full text-white py-10 sm:py-16 px-3 sm:px-6 flex flex-col items-center lg:mt-[7vw] overflow-hidden"
            >
              <div className="relative w-full  max-w-5xl">
                {/* center vertical line */}
                <div className="absolute left-1/2  transform -translate-x-1/2 bg-[#6A6185] w-[1.5px] sm:w-[2px] h-full"></div>

                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`process-step  relative  flex flex-col md:flex-row items-center    ${
                      index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    <div
                      className={`flex border-2 border-white w-full md:w-1/2 ${
                        index % 2 === 0
                          ? "md:justify-end md:pr-3 sm:md:pr-4 lg:pr-12 text-right"
                          : "md:justify-start md:pl-3 sm:md:pl-4 lg:pl-12 text-left"
                      }`}
                    >
                      <div className=" rounded-2xl p-3 sm:p-4 md:p-6 w-full md:w-[100%] transition-all duration-500">
                        <motion.h3
                          className="process-title [@media(min-width:2000px)]:text-[3rem]  process-title-css text-[#C8C1C1] text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] font-semibold mb-2"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          viewport={{ once: false, amount: 0.4 }}
                        >
                          {step.title}
                        </motion.h3>

                        {/* Description hidden on mobile */}
                        <motion.p
                          className="hidden [@media(min-width:2000px)]:text-[1.8rem] process-des-css md:block text-gray-200 text-[1rem] md:text-[1.1rem] lg:text-[1.3rem]
                           leading-relaxed transition-colors duration-300"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.7,
                            ease: "easeOut",
                            delay: 0.1,
                          }}
                          viewport={{ once: false, amount: 0.4 }}
                        >
                          {step.desc}
                        </motion.p>
                      </div>
                    </div>

                    {/* Step number */}
                    <div
                      className={`absolute about-card-desc transform -translate-y-[110%] w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 flex items-center justify-center rounded-full text-[#C8C1C1] text-[2rem] sm:text-[2.5rem] md:text-[3rem] ${
                        index % 2 === 0
                          ? "md:left-[calc(50%+8px)]"
                          : "md:right-[calc(50%+8px)]"
                      }`}
                    >
                      {step.id}.
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
          {/* --- Our Team --- */}
          <section
            id="team"
            ref={teamRef}
            className="flex  flex-col gap-[12px] mt-[2vw]"
          >
            {isMobile && (
              <motion.p
                ref={teamTitleRef}
                animate={{
                  opacity: teamVisible ? 1 : 0,
                  y: teamVisible ? 0 : 25,
                  scale: teamVisible ? 1 : 0.97,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative my-[30px] text-center text-[clamp(1.3rem,4vw,2rem)] font-semibold
                  bg-gradient-to-r from-[#C7B9F6] via-[#A699D9] to-[#6A6185]
                  bg-clip-text text-transparent inline-block"
              >
                Our Team
                <motion.span
                  className="absolute left-1/2 -translate-x-1/2 bottom-[-5px] h-[2px] w-[25%]
                 bg-gradient-to-r from-[#C7B9F6] via-[#A699D9] to-[#6A6185] rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  viewport={{ once: false, amount: 0.4 }}
                />
              </motion.p>
            )}

            <div className="relative mb-[30px]  md:w-[50vw]  mx-auto">
              <p className="begin-title text-[9vw] md:text-[clamp(1.8rem,4vw,4rem)] font-extrabold bg-gradient-to-b from-[#C7B9F6] to-[#6A6185] bg-clip-text text-transparent leading-[1] absolute top-0 left-0 z-20">
                Hello!
              </p>
              <div
                className="relative border border-white p-[clamp(1.5rem,3vw,2.3rem)] mt-[clamp(20px,3vw,30px)] rounded-tr-[60px] rounded-b-[60px] sm:rounded-tr-[70px] sm:rounded-b-[70px] md:rounded-tr-[80px] md:rounded-b-[80px] shadow-xl transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(139.47deg, rgba(47, 54, 64, 0.8) -45.69%, rgba(16, 24, 32, 0.8) 54.7%)",
                  backdropFilter: "blur(12px) saturate(180%)",
                  WebkitBackdropFilter: "blur(12px) saturate(180%)",
                  border: "2px solid rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                }}
              >
                <div className="flex flex-col justify-center items-start h-full space-y-3">
                  <p className="begin-card-title text-[clamp(1.3rem,2.5vw,3rem)] text-white font-semibold leading-tight">
                    we are experienced innovators <br /> building scalable
                    digital platforms
                  </p>

                  <p className="begin-card-desc text-[#C8C1C1] text-[clamp(0.9rem,1.8vw,1.5rem)]">
                    Driving enterprise & consumer innovation
                  </p>

                  {/* <div className="relative inline-block">
                    <button
                      className="rotating-btn-teams  begin-card-button  text-white text-[12px] md:text-[16px] py-2 rounded-[8px] mt-[clamp(15px,2vw,25px)] w-[25vw] md:h-[clamp(50px,6vh,55px)] md:w-[clamp(110px,10vw,160px)] transition-all duration-300 hover:scale-105 hover:bg-[#B1A2DF]/20"
                      onClick={() => setShowTeamPopup(true)}
                    >
                      Our Team
                    </button>
                  </div> */}
                  <div className="relative inline-block">
                    <button
                      onClick={() => setShowTeamPopup(true)}
                      className="rotating-btn relative  text-[#b19cd9] font-garota text-[12px] md:text-[16px] rounded-md w-[25vw] [@media(min-width:300px)_and_(max-width:410px)]:h-[4vh] h-[4vh] md:h-[clamp(50px,6vh,55px)] md:w-[clamp(110px,10vw,160px)]  overflow-hidden hover:from-[#6A6185] hover:to-[#B19CD9]
             hover:text-white hover:shadow-[0_0_15px_rgba(177,156,217,0.4)]
             hover:-translate-y-1"
                    >
                      Our Team
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Body;