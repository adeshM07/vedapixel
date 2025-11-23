import React from "react";
import { motion } from "framer-motion";

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

const OurProcess = () => {
  return (
    <section className="w-full min-h-screen bg-[#3B3434] flex flex-col items-center justify-center px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#A891FF] mb-10 text-center">
        Our Process
      </h2>

      <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl relative">
        {/* Vertical line for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#A891FF]"></div>

        <div className="flex flex-col w-full gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div
                className={`bg-[#2C2626] text-white p-6 rounded-2xl shadow-md md:w-[45%] w-full ${
                  index % 2 === 0 ? "md:mr-[55%]" : "md:ml-[55%]"
                }`}
              >
                <p className="text-[#A891FF] text-xl font-semibold mb-2">
                  {step.id}. {step.title}
                </p>
                <p className="text-sm leading-relaxed text-gray-200">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
