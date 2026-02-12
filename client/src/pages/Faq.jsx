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
        "The cost of a custom mobile or web application depends on its features, complexity, platform, and technology stack. We provide an exact quote after understanding your business goals and project requirements.",
    },
    {
      question: "What is your process for custom app development?",
      answer:
        "Our app development process includes discovery, UI/UX design, development, testing, deployment, and post-launch support. Each stage is transparent and aligned with your business objectives.",
    },
    {
      question: "Can you take over an existing or incomplete app project?",
      answer:
        "Yes, we can take over existing or incomplete projects by auditing the codebase and current progress. We ensure a smooth transition and timely delivery. ",
    },
    {
      question: "Do you help in choosing the right technology stack?",
      answer:
        "Yes, we recommend the right technology stack based on your business needs, scalability requirements, and budget. This ensures long-term performance and maintainability.",
    },
    {
      question: "How do you manage changes during app development",
      answer:
        "We use agile development methods that allow changes during the project lifecycle. All change requests are reviewed, approved, and implemented transparently. ",
    },
    {
      question:
        "What technologies and frameworks do you use for app development?",
      answer:
        "We use modern technologies such as React Native, Flutter, Swift, Kotlin, Node.js, Python, and Java Spring Boot. The choice depends on your project goals and platform requirements. ",
    },
    {
      question: "Do you develop applications for both Android and iOS?",
      answer:
        "Yes, we build native Android and iOS applications as well as cross-platform apps that work seamlessly on both platforms. ",
    },
    {
      question:
        "Can you integrate AI, ML, or third-party APIs into applications?",
      answer:
        "Yes, we integrate AI features, machine learning models, and third-party APIs such as payment gateways, maps, analytics, and CRM systems.",
    },
    {
      question: "How long does it take to build a custom application?",
      answer:
        "The timeline for building a custom application typically ranges from 8 to 20 weeks, depending on the project scope and complexity",
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer:
        "Yes, we provide ongoing support, maintenance, updates, and performance optimization after launch. ",
    },
    {
      question: "Will my app idea remain confidential?",
      answer:
        "Yes, your app idea remains fully confidential. We sign a Non-Disclosure Agreement (NDA) before starting the project. ",
    },
    {
      question: "Can the application scale as my business grows?",
      answer:
        "Yes, we design scalable application architectures that support growth, new users, and future feature expansion.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <Helmet>
        <title>Vedapixel FAQs – Services, Pricing & Process</title>
        <meta
          name="description"
          content="Find answers to common questions about Vedapixel’s services, pricing, timelines and development process."
        />
      </Helmet>
      <div className="flex  justify-center mt-[192px] w-full h-fit px-4 md:px-15 lg:px-15 xl:px-30 2xl:px-40">
        <div className="w-[90vw] md:w-[90vw] lg::w-[73vw] flex mt-[60px] flex-col gap-[1.3rem]">
          <p className="text-[3rem] service-title text-[#BBABEB]">FAQs</p>
          <div className="bg-[#0e141d]/50 backdrop-blur-lg border rounded-lg border-[#F8F9FA]">
            {faqJSON.map((faq, index) => (
              <div key={index} className="border-b  border-[#2a2f37]">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full  flex justify-between items-center px-6 py-5 text-left text-[#F8F9FA] hover:text-[#BBABEB] transition-all duration-200"
                >
                  <span
                    className={`${
                      openIndex === index ? "text-[#BBABEB]" : "text-[#F8F9FA]"
                    } text-[1.2rem] cursor-pointer  w-[90%] md:text-[20px] font-poppins font-normal `}
                  >
                    {faq.question}
                  </span>
                  <span className="text-[#BBABEB] cursor-pointer text-[0.8rem] md:text-2xl">
                    {openIndex === index ? (
                      <img
                        src={up}
                        className=" h-[2vh] w-[5vw] md:h-[25px] md:w-[25px]"
                      ></img>
                    ) : (
                      <img
                        className="h-[2vh] w-[5vw] md:h-[25px] md:w-[25px]"
                        src={down}
                      ></img>
                    )}
                  </span>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-40 py-3" : "max-h-0"
                  }`}
                >
                  <p className="text-[#C8C1C1] font-poppins font-normal text-[1rem] md:text-[0.9rem] leading-relaxed">
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
