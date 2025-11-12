import React, { useState } from "react";
import "../CSS/Body.css";

const ScrollNodes = ({ direction = "left", baseSpeed = 75 }) => {
  const [speed, setSpeed] = useState(baseSpeed);

  const items = [
    "Confidential Agreement",
    "Free Consultation",
    "Transparent Pricing",
    "Flexible Engagement",
    "Quick Onboarding",
    "Code Ownership",
    "Confidential Agreement",
    "Free Consultation",
    "Transparent Pricing",
    "Flexible Engagement",
    "Quick Onboarding",
    "Code Ownership",
    "Confidential Agreement",
    "Free Consultation",
    "Transparent Pricing",
    "Flexible Engagement",
    "Quick Onboarding",
    "Code Ownership",
  ];

  // ✅ Duplicate twice (for perfect looping)
  const loopItems = [...items, ...items];

  return (
    <div className="relative w-full h-[70px] overflow-hidden flex items-center justify-center">
      <div
        className={`scroll-track flex gap-[14px] whitespace-nowrap ${direction === "left" ? "scroll-left" : "scroll-right"
          }`}
        style={{
          animationDuration: `${baseSpeed}s`,
          animationPlayState: speed === 0 ? "paused" : "running",
        }}
        onMouseEnter={() => setSpeed(0)}
        onMouseLeave={() => setSpeed(baseSpeed)}
      >
        {loopItems.map((text, index) => (
          <div
            key={index}
            className="
              infinite-scroll-node
              flex items-center justify-center
              text-white font-medium select-none
              border border-white rounded-[10px]
              [@media(min-width:300px)_and_(max-width:410px))]:h-[35px]
              [@media(min-width:2000px)]:text-[1.5rem]
              [@media(min-width:2000px)]:w-[20vw]
              
              px-2 sm:px-3 md:px-4
              h-[6vh] sm:h-[6vh] md:h-[60px] lg:h-[68px]
              w-[40vw] sm:w-[60vw] md:w-[220px] lg:w-[287px]
              text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px]
              hover:bg-gradient-to-r hover:from-[#BBABEB] hover:to-[#6A6185]
              transition-all duration-300 ease-in-out
            "
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollNodes;
