import React from "react";
import "../CSS/ServiceInfoPage.css";
import { useState } from "react";
import down from "../assets/downwards.png";
import up from "../assets/upwards.png";

const Faq = () => {
  let faqJSON = [
    {
      question:
        "How much does it cost to develop a custom mobile or web application?",
      answer:
        "The cost depends on several factors, including project complexity, features, technology stack, design requirements, and development timeline. We provide a detailed quote after understanding your business goals and project scope.",
    },
    {
      question: "What is your process for custom app development?",
      answer:
        "Our process includes discovery & consultation, UI/UX design, development, testing, deployment, and post-launch support. We maintain transparency at every stage to ensure your vision is fully realized.",
    },
    {
      question:
        "Can you take over an existing app or incomplete project from another vendor?",
      answer:
        "Yes, we can audit your existing project, understand the current codebase and progress, and seamlessly take over to ensure smooth continuation and delivery.",
    },
    {
      question: "Do you offer guidance in choosing the right technology stack?",
      answer:
        "Absolutely. Our technical experts evaluate your business needs and recommend the most suitable frameworks, tools, and technologies to ensure scalability, performance, and cost efficiency.",
    },
    {
      question:
        "How do you handle changes in project requirements during development?",
      answer:
        "We follow agile methodologies that allow flexibility for updates and modifications. Any change requests are assessed for impact and implemented with your approval.",
    },
    {
      question:
        "What technologies and frameworks do you use for app development?",
      answer:
        "We work with the latest technologies such as React Native, Flutter, Swift, Kotlin, Node.js, Python, and Java Spring Boot — choosing the stack based on project goals and platform requirements.",
    },
    {
      question: "Do you develop both Android and iOS applications?",
      answer:
        "Yes, we specialize in building native apps for Android and iOS, as well as cross-platform solutions that run smoothly on both.",
    },
    {
      question:
        "Are you experienced in integrating AI, ML, or third-party APIs into applications?",
      answer:
        "Yes, we have experience in integrating AI-based features like chatbots, predictive analytics, image recognition, and API integrations for payments, maps, or CRM tools.",
    },
    {
      question: "How long does it take to build a custom application?",
      answer:
        "Project timelines depend on complexity and scope — typically ranging from 8 to 20 weeks. We provide a clear timeline after initial discussions and requirement analysis.",
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer:
        "Yes, we offer ongoing support, updates, bug fixes, and performance optimization to keep your application running efficiently.",
    },
    {
      question: "Will my app idea remain confidential?",
      answer:
        "Absolutely. We sign a Non-Disclosure Agreement (NDA) before starting any project to ensure your concept and data are completely secure.",
    },
    {
      question: "Can you scale the app as my business grows?",
      answer:
        "Yes, scalability is built into our architecture. We design applications that can easily accommodate new users, features, and integrations as your business expands.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <div className="flex justify-center mt-[70px] w-full h-fit">
        <div className="w-[90vw] md:w-[90vw] lg::w-[73vw] flex mt-[60px] flex-col gap-[1.3rem]">
          <p className="text-[3rem] service-title text-[#F8F9FA]">FAQs</p>
          <div className="bg-[#0e141d]/50 backdrop-blur-lg border rounded-lg border-[#F8F9FA]">
            {faqJSON.map((faq, index) => (
              <div key={index} className="border-b border-[#2a2f37]">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center px-6 py-5 text-left text-[#F8F9FA] hover:text-[#BBABEB] transition-all duration-200"
                >
                  <span className="text-[1.2rem] md:text-[1.8rem] service-title ">
                    {faq.question}
                  </span>
                  <span className="text-[#BBABEB] text-[0.8rem] md:text-2xl">
                    {openIndex === index ? <img src={up} className="h-[25px] w-[25px]"></img>  : <img className="h-[25px] w-[25px]" src={down}></img> }
                  </span>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-40 py-3" : "max-h-0"
                  }`}
                >
                  <p className="text-[#C8C1C1] service-desc text-[1rem] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
