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
  const [showWhatsapp, setShowWhatsapp] = useState(false);
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [hideMenu, setHideMenu] = useState(false);
  const [userScrolled, setUserScrolled] = useState(false);
  const landingRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setUserScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    if (location.pathname !== "/") {
      setShowWhatsapp(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === "INTRO_VIDEO_ENDED") {
        // ❌ If user already scrolled → DO NOTHING
        if (userScrolled) return;

        const targetY = landingRef.current.offsetTop;

        animate(window.scrollY, targetY, {
          duration: 2.3,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (v) => window.scrollTo(0, v),
        });

        setShowWhatsapp(true);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [userScrolled]);

  return (
    <div className="bg-[#101820]  lg:w-full h-fit relative">
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

      <div ref={landingRef} className="relative z-20 w-full">
        <LandingPage />
        {/* <ServiceInfoPage></ServiceInfoPage> */}
      </div>
      {showWhatsapp && <WhatsAppFloat></WhatsAppFloat>}
    </div>
  );
};

export default Base;
