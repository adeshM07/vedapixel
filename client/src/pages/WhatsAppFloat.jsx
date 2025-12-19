import React, { useEffect } from "react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/919900641808" // replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-5 z-[9999]"
    >
      <div className="rounded-full flex items-center justify-center transition whatsapp-pulse">
        <i
          className="fa-brands fa-whatsapp text-green-500
    [@media(min-width:300px)_and_(max-width:700px)]:text-[2.5rem]
    text-[4rem] xl:text-[3.4rem] 2xl:text-[4rem]"
        ></i>
      </div>
    </a>
  );
};

export default WhatsAppFloat;
