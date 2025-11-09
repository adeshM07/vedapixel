
//    <section
//   id="process"
//   ref={processRef}
//   className="w-full border-2 border-red-500 text-white py-16 px-6 flex flex-col items-center lg:mt-[7vw] overflow-hidden"
// >
//   <div className="relative w-full max-w-5xl">
//     <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#6A6185] w-[2px] h-full"></div>

//     {steps.map((step, index) => (
//       <motion.div
//         key={step.id}
//         initial={{ opacity: 0, y: 80 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: index * 0.1 }}
//         viewport={{ once: true }}
//         className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-24 ${
//           index % 2 === 0 ? "md:justify-start" : "md:justify-end"
//         }`}
//       >
//         <div
//           className={`flex w-full md:w-1/2 ${
//             index % 2 === 0
//               ? "md:justify-end md:pr-12 text-right"
//               : "md:justify-start md:pl-12 text-left"
//           }`}
//         >
//           <div className="p-6 rounded-2xl   w-full md:w-[100%] ">
//             <h3 className="text-[#C8C1C1] text-[1.9rem] about-card-title  mb-2">
//               {step.title}
//             </h3>
//             <p className="text-gray-200 text-[1.5rem] leading-relaxed">
//               {step.desc}
//             </p>
//           </div>
//         </div>
//         <div
//           className={`absolute about-card-desc transform -translate-y-[120%] w-10 h-10 flex items-center justify-center rounded-full  text-[#C8C1C1]  text-[3rem] ${
//             index % 2 === 0
//               ? "md:left-[calc(50%+10px)]"
//               : "md:right-[calc(50%+10px)]"
//           }`}
//         >
//           {step.id}.
//         </div>
//       </motion.div>
//     ))}
//   </div>
// </section>; 

useEffect(() => {
  const bodySection = document.querySelector(".body-content");
  if (!bodySection) return;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const width = window.innerWidth;
    const rect = bodySection.getBoundingClientRect();

    // is body-content in view at all
    const isVisible = rect.bottom > 100 && rect.top < window.innerHeight - 100;

    let visible = false;
    if (width >= 1024) visible = isVisible && scrollY > 50;
    else if (width >= 768 && width < 1024) visible = isVisible && scrollY > 100;
    else visible = false;

    setShowBody(visible);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


