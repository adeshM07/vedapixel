import React from "react";
// import pic1 from "../assets/appDevelopment.png";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import pic1 from "../assets/appDevelopment.png";
import pic2 from "../assets/website.png";
import pic3 from "../assets/gaming.png";
import pic4 from "../assets/arvr.png";
import pic5 from "../assets/erp.png";
import pic6 from "../assets/chatbot.png";
import pic7 from "../assets/alml.png";
import pic8 from "../assets/crm.png";
import pic9 from "../assets/cloud.png";
import pic10 from "../assets/maintenance.png";
import pic11 from "../assets/blockchain.png";
import pic12 from "../assets/iot.png";

const Services = () => {
  const controls = useAnimation();
  // const [ref, inView] = useInView({
  //   triggerOnce: true, // animate only once when seen
  //   threshold: 0.35, // triggers when 35% visible
  // });

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // smooth stagger
        when: "beforeChildren",
      },
    },
  };

  const img = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: "easeOut",
        delay: i * 0.06,
      },
    }),
  };

  // Child variant uses a soft spring for natural motion
  const card = {
    hidden: { opacity: 0, y: 20, scale: 0.995 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 90, // softer than snappy
        damping: 16, // smooth settling
        mass: 0.9,
      },
    },
  };

  // React.useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   }
  // }, [inView, controls]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: 10,
      scale: 0.97,
      filter: "blur(2px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier
      },
    },
  };
  const services = [
    {
      title: "Mobile Applications",
      desc: "Crafting seamless iOS and Android apps that engage users.",
      img: pic1,
      link: "mobile",
    },
    {
      title: "Web Development",
      desc: "Building dynamic, responsive websites for every need.",
      img: pic2,
      link: "web",
    },
    {
      title: "Gaming App Development",
      desc: "Creating immersive, high-quality games across all platforms.",
      img: pic3,
      link: "game",
    },
    {
      title: "AR/VR",
      desc: "Delivering lifelike AR and VR experiences for learning and innovation.",
      img: pic4,
      link: "arvr",
    },
    {
      title: "ERP",
      desc: " Streamlining operations with intelligent, all-in-one ERP systems.",
      img: pic5,
      link: "erp",
    },
    {
      title: "Chatbot Development",
      desc: "Designing AI chatbots that simplify support and engagement.",
      img: pic6,
      link: "chatbot",
    },
    {
      title: "AL/ML",
      desc: "Empowering automation and insights through advanced AI and ML.",
      img: pic7,
      link: "ai",
    },
    {
      title: "CRM",
      desc: "Enhancing relationships through efficient, customized CRM solutions.",
      img: pic8,
      link: "crm",
    },
    {
      title: "Cloud & DevOps Services",
      desc: "Driving efficiency with seamless cloud and DevOps tools.",
      img: pic9,
      link: "cloud",
    },
    {
      title: "Maintenance & Support",
      desc: "Ensuring software stays secure, reliable, and up to date.",
      img: pic10,
      link: "maintenance",
    },
    {
      title: "Blockchain",
      desc: "Developing secure, transparent blockchain apps and smart contracts.",
      img: pic11,
      link: "blockchain",
    },
    {
      title: "Internet of Things",
      desc: "We ensure secure, end-to-end data flow from devices to actionable cloud insights.",
      img: pic12,
      link: "iot",
    },
  ];
  return (
    <>
      <div className=" flex flex-col gap-10 mt-20 md:mt-45 lg:mt-40 px-6 sm:px-10  md:px-16 2xl:px-28">
        <p className="service-title  mx-auto w-[73vw] md:w-full 2xl:w-[73vw] text-4xl md:text-[4rem] lg:text-[4.5rem] font-semibold text-white">
          Our Services
        </p>

        <motion.div
          className="services-box w-[73vw] md:w-full 2xl:w-[73vw] pt-[20px] md:mt-0 flex flex-wrap mx-auto gap-[30px]"
          variants={container}
          initial="hidden"
          animate="visible"
          style={{ willChange: "transform, opacity" }}
        >
          {services.map((service, index) => (
            <Link
              to="/serviceInfo"
              state={{
                askedService: service.link,
              }}
            >
              <motion.div
                key={index}
                className="w-full  sm:w-[80%] md:w-[40vw] lg:w-[27vw]   2xl:w-[23vw] h-auto border border-[#F2F2F2] flex flex-col gap-3 rounded-xl p-6 hover:bg-[#141414] transition-all duration-300"
                variants={card}
                custom={index}
                // use transform for subpixel/GPU rendering
                style={{
                  transform: "translateZ(0)",
                }}
                whileHover={{
                  scale: 1.03,
                  background:
                    "linear-gradient(139.47deg, rgba(50, 58, 68, 0.8) -45.69%, rgba(16, 24, 32, 0.9) 54.7%)",
                  border: "2px solid rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                  backdropFilter: "blur(10px) saturate(180%)",
                  WebkitBackdropFilter: "blur(10px) saturate(180%)",
                  transition: { duration: 0.1, ease: "easeOut" },
                }}
              >
                <motion.img
                  src={service.img}
                  alt={service.title}
                  className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[50px] lg:h-[50px] object-contain"
                  variants={img}
                  custom={index}
                  // small accessibility improvement: avoid layout shifts
                  loading="lazy"
                />

                <p className="service-title text-xl md:text-[1.75rem] lg:text-[1.7rem] text-white font-semibold">
                  {service.title}
                </p>

                <p className="service-desc text-sm md:text-[1rem] lg:text-[0.8rem]  text-[#C8C1C1] leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        <div className="mt-[80px]  mx-auto flex [@media(min-width:300px)_and_(max-width:448px)]:w-[70vw]    w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-full 2xl:w-[73vw]">
          <p className="text-[#F8F9FA] text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[2.2rem] xl:text-[2.6rem] 2xl:text-[3rem]  service-title">
            Have any questions?
            <Link to="/faqs">
              <span className=" mx-3 underline decoration-[#BBABEB] text-[#BBABEB] text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.8rem] service-title">
                FAQs
              </span>
            </Link>
          </p>
        </div>

      </div>
    </>
  );
};

export default Services;
