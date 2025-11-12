import React, { useState } from "react";
import "../CSS/Body.css";
import { Link } from "react-router-dom";

const InfiniteScrollNodes = ({ direction = "left", baseSpeed = 35 }) => {
  const [speed, setSpeed] = useState(baseSpeed);

  // const items = [
  //   "Web Design",
  //   "Web Development",
  //   "Mobile Applications",
  //   "Game Development",
  //   "AR/VR",
  //   "ERP Solutions",
  //   "Chatbot Development",
  //   "Artificial Intelligence",
  //   "CRM Development",
  //   "Cloud Computing",
  //   "Maintenance & Support",
  //   "Blockchain Development",
  //   "IoT Development",

  // ];

  const items = [
    {
      title: "Web Design",
      link: "web"
    },
    {
      title: "Web Development",
      link: "Web"
    },
    {
      title: "Mobile Applications",
      link: "mobile"
    },
    {
      title: "Game Development",
      link: "game"
    },
    {
      title: "AR/VR",
      link: "arvr"
    },
    {
      title: "ERP Solutions",
      link: "erp"
    },
    {
      title: "Chatbot Development",
      link: "chatbot"
    },
    {
      title: "Artificial Intelligence",
      link: "ai"
    },
    {
      title: "Cloud Computing",
      link: "cloud"
    },

    {
      title: "CRM Development",
      link: "crm"
    },
    {
      title: "Machine Learning",
      link: "ai"
    },
    {
      title: "Devops Services",
      link: "cloud"
    },
    {
      title: "Maintenance & Support",
      link: "maintenance"
    },
    {
      title: "Blockchain Development",
      link: "blockchain"
    },
    {
      title: "Iot Development",
      link: "iot"
    },
    {
      title: "Web Design",
      link: "web"
    },
    {
      title: "Web Development",
      link: "Web"
    },
    {
      title: "Mobile Applications",
      link: "mobile"
    },
    {
      title: "Game Development",
      link: "game"
    },
    {
      title: "AR/VR",
      link: "arvr"
    },
    {
      title: "ERP Solutions",
      link: "erp"
    },
    {
      title: "Chatbot Development",
      link: "chatbot"
    },
    {
      title: "Artificial Intelligence",
      link: "ai"
    },
    {
      title: "Cloud Computing",
      link: "cloud"
    },

    {
      title: "CRM Development",
      link: "crm"
    },
    {
      title: "Machine Learning",
      link: "ai"
    },
    {
      title: "Devops Services",
      link: "cloud"
    },
    {
      title: "Maintenance & Support",
      link: "maintenance"
    },
    {
      title: "Blockchain Development",
      link: "blockchain"
    },
    {
      title: "Iot Development",
      link: "iot"
    },

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
        {loopItems.reverse().map((text, index) => (

          <Link to='/serviceInfo' state={{
                askedService: text.link,
              }}>
            <div
              key={index}
              className="
              infinite-scroll-node
              flex items-center justify-center
              text-white font-medium select-none
              border border-white rounded-md
              px-2 sm:px-3 md:px-4
              h-[6vh] sm:h-[6vh] md:h-[40px] lg:h-[68px]
              w-[40vw] sm:w-[60vw] md:w-[220px] lg:w-[287px]
              text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px]
              hover:bg-gradient-to-r hover:from-[#BBABEB] hover:to-[#6A6185]
              transition-all duration-300 ease-in-out
            "
            >
              {text.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollNodes;
