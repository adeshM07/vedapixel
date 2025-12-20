import React, { useEffect, useState } from "react";
import "../CSS/Face.css";
import { motion, useTransform } from "framer-motion";

const Face = ({ scrollProgress }) => {
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setDeviceType("mobile");
      else if (window.innerWidth < 1024) setDeviceType("tablet");
      else setDeviceType("desktop");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let fadeRange;
  if (deviceType === "mobile") fadeRange = [0.0, 0.1];
  else if (deviceType === "tablet") fadeRange = [0.03, 0.1];
  else fadeRange = [0.05, 0.1];

  const opacity = useTransform(scrollProgress, fadeRange, [1, 0]);

  return (
    <motion.div
      className="relative   w-full h-screen overflow-hidden bg-[#101820] flex justify-center items-center"
      style={{ opacity }}
    >
      {/* ✅ Responsive Framer design embed */}
      <div className="relative  w-full h-full flex justify-center items-center">
        <iframe
          src="/framerFace.html"
          title="Framer Face"
          className="absolute border-none"
          style={{
            width: "100%",
            height: "100%",
            transformOrigin: "center center",
            transform:
              deviceType === "mobile"
                ? "scale(1.1)"
                : deviceType === "tablet"
                ? "scale(1.2)"
                : "scale(1)",
          }}
        />
      </div>
    </motion.div>
  );
};

export default Face;
