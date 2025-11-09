
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

<section
  id="process"
  ref={processRef}
  className="w-full text-white py-10 sm:py-16 px-3 sm:px-6 flex flex-col items-center lg:mt-[7vw] overflow-hidden"
>
  <div className="relative w-full max-w-5xl">
    {/* ✅ Center vertical line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#6A6185] w-[1.5px] sm:w-[2px] h-full"></div>

    {steps.map((step, index) => (
      <motion.div
        key={step.id}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`process-step relative flex flex-col md:flex-row items-center mb-10 sm:mb-16 md:mb-20 ${
          index % 2 === 0 ? "md:justify-start" : "md:justify-end"
        }`}
      >
        {/* ✅ Left or Right Side Alignment */}
        <div
          className={`flex items-center justify-between w-full md:w-1/2 ${
            index % 2 === 0
              ? "md:justify-end md:pr-3 sm:md:pr-4 lg:pr-12 text-right flex-row-reverse"
              : "md:justify-start md:pl-3 sm:md:pl-4 lg:pl-12 text-left flex-row"
          }`}
        >
          {/* ✅ Step Number */}
          <motion.div
            className={`flex-shrink-0 text-[#C8C1C1] text-[1.8rem] sm:text-[2.3rem] md:text-[2.8rem] font-semibold ${
              index % 2 === 0
                ? "md:ml-5 ml-3 order-2"
                : "md:mr-5 mr-3 order-1"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
          >
            {step.id}.
          </motion.div>

          {/* ✅ Title + Description */}
          <div className="border-2 border-white rounded-2xl p-3 sm:p-4 md:p-6 w-full transition-all duration-500">
            <motion.h3
              className="process-title text-[#C8C1C1] 
              text-[1rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] 
              2xl:text-[1.9rem] font-semibold leading-snug break-words"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.4 }}
            >
              {step.title}
            </motion.h3>

            {/* ✅ Hidden on mobile */}
            <motion.p
              className="hidden md:block text-gray-200 text-[1rem] md:text-[1.1rem] 
              2xl:text-[1.2rem] leading-relaxed transition-colors duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              {step.desc}
            </motion.p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>



