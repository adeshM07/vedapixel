// pages/Base.jsx
import React, { useEffect, useState } from "react";
import Face from "./Face";
import LandingPage from "./LandingPage";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Menu from "./Menu";
import ServiceInfoPage from "./ServiceInfoPage";

const Base = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  // ✅ Menu visibility logic
  useEffect(() => {
    // If we’re on homepage, show only after scroll.
    if (location.pathname === "/") {
      const unsubscribe = scrollY.on("change", (latest) => {
        setShowMenu(latest > 350);
      });
      return () => unsubscribe();
    } else {
      // On all other routes, show Menu by default.
      setShowMenu(true);
    }
  }, [scrollY, location.pathname]);

  return (
    <div className="bg-[#101820]  lg:w-screen h-fit relative">
      {/* ✅ Show Face only on homepage */}
      {location.pathname === "/" && (
        <div className="sticky top-0 z-10 ">
          <Face scrollProgress={scrollYProgress}   />
        </div>
      )}

      {/* ✅ Animated Menu — shows everywhere */}
      <AnimatePresence>
        {showMenu && (
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

      {/* ✅ Always show LandingPage */}
      <div className="relative z-20">
        <LandingPage />
        {/* <ServiceInfoPage></ServiceInfoPage> */}
      </div>
    </div>
  );
};

export default Base;
