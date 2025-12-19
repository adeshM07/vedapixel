// pages/Base.jsx
import React, { useEffect, useState } from "react";
import Face from "./Face";
import LandingPage from "./LandingPage";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Menu from "./Menu";
import { useRef } from "react";
import { animate } from "framer-motion";
import ServiceInfoPage from "./ServiceInfoPage";
import WhatsAppFloat from "./WhatsAppFloat";

const Base = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [hideMenu, setHideMenu] = useState(false);
  const landingRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/") {
      const unsubscribe = scrollY.on("change", (latest) => {
        setShowMenu(latest > 350);
      });
      return () => unsubscribe();
    } else {
      setShowMenu(true);
    }
  }, [scrollY, location.pathname]);

  useEffect(() => {
    if (window.innerWidth >= 768) return; // mobile only

    let observer;

    const attachObserver = () => {
      const footer = document.querySelector("footer");
      if (!footer) {
        // retry until footer mounts
        requestAnimationFrame(attachObserver);
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          setHideMenu(entry.isIntersecting);
        },
        { threshold: 0.15 }
      );

      observer.observe(footer);
    };

    attachObserver();

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === "INTRO_VIDEO_ENDED") {
        const targetY = landingRef.current.offsetTop;

        animate(window.scrollY, targetY, {
          duration: 1.9,
          ease: [0.22, 1, 0.36, 1], // cinematic easing
          onUpdate: (v) => window.scrollTo(0, v),
        });
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="bg-[#101820]  lg:w-screen h-fit relative">
      {location.pathname === "/" && (
        <div className="sticky top-0 z-10 ">
          <Face scrollProgress={scrollYProgress} />
        </div>
      )}

      <AnimatePresence>
        {showMenu && !hideMenu && (
          <motion.div
            key="menu"
            className="fixed top-0 left-0 w-full z-[100]"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Menu />
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={landingRef} className="relative z-20">
        <LandingPage />
        {/* <ServiceInfoPage></ServiceInfoPage> */}
      </div>
      <WhatsAppFloat></WhatsAppFloat>
    </div>
  );
};

export default Base;
