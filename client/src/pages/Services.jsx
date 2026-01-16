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
import { Helmet } from "react-helmet";

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
      title: "Mobile Application Development",
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
    <Helmet>
            <title>Services | Vedapixel
            </title>
    
            <meta
  name="description"
  content="Explore VedaPixel’s services including web design, branding, UI/UX design, SEO, and digital marketing solutions tailored for business growth."
/>
            <link rel="canonical" href="https://vedapixel.com/services" />
    </Helmet>
      <div className=" flex flex-col gap-5 mt-30 md:mt-45 lg:mt-[192px] px-4 md:px-15 lg:px-15 xl:px-30 2xl:px-40">
        <p className="font-garotaSans font-normal   w-full  text-4xl md:text-[3rem] lg:text-[3rem]  text-white">
          Our Services
        </p>
        <p className="text-[24px] font-poppins font-normal text-[#C8C1C1]">Vedapixel Tech Solutions Pvt. Ltd. builds intelligent, scalable digital platforms that solve  real-world business challenges. With over a decade of experience, we focus on creating solutions that streamline operations, enhance accessibility, and enable sustainable growth across industries. We don’t just deliver technology.</p>
        

        <motion.div
          layout
          className="services-box w-full  pt-[20px] md:mt-0 flex flex-wrap justify-between gap-y-10"
          variants={container}
          initial="hidden"
          animate="visible"
          style={{ willChange: "transform, opacity" }}
        >
          {services.map((service, index) => (
            <motion.div
              layout
              key={index}
              className="w-full sm:w-[80%]  md:w-[40vw] xl:lg:w-[25vw] xl:h-[230px] 2xl:w-[360px] 2xl:h-[222px]"
            >
              <Link
                to="/serviceInfo"
                state={{ askedService: service.link }}
                className="block h-full"
              >
                <motion.div
                  layout
                  className="
            h-full
            border border-white
            flex flex-col gap-3
            rounded-xl p-6
            transition-all duration-300
          "
                  variants={card}
                  custom={index}
                  whileHover={{
                    scale: 1.03,
                    background:
                      "linear-gradient(139.47deg, rgba(50, 58, 68, 0.8) -45.69%, rgba(16, 24, 32, 0.9) 54.7%)",
                    border: "2px solid rgba(255, 255, 255, 0.15)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.35)",
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[50px] lg:h-[50px] object-contain"
                    variants={img}
                    custom={index}
                    loading="lazy"
                  />

                  <p className="font-garotaSans font-normal text-xl md:text-[1.75rem] lg:text-[1.5rem] 2xl:text-[1.7rem] text-white ">
                    {service.title}
                  </p>

                  <p className="font-poppins font-normal text-sm md:text-[1rem] lg:text-[1rem] text-[#C8C1C1] leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-[40px]  mx-auto flex w-full">
          <p className="text-[#F8F9FA]  w-full text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[2.2rem] xl:text-[2.6rem] 2xl:text-[3rem]  font-garotaSans font-normal">
            Have any questions?
            <Link to="/faqs">
              <span className=" mx-3 underline decoration-[#BBABEB] text-[#BBABEB] text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.8rem] font-garotaSans font-normal">
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
