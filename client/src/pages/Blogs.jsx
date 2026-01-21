import React from "react";
import banner from "../assets/blog1Banner.png";
import banner2 from "../assets/blog2Banner.png";
import banner3 from "../assets/blog3Banner.png";
import banner4 from "../assets/blog4Banner.png";
import banner5 from "../assets/blog5Banner.png";
import banner6 from "../assets/blog6Banner.png";

import { Search } from "lucide-react";

const Blogs = () => {
  // let blogsContent = [
  //     {blogTitle:"Why Every Business in 2026 Needs a Professional Website (Not Just Instagram)",blogBanner:""}
  // ]
  return (
    <div className="mt-30 md:mt-45 lg:mt-[192px] px-4 md:px-15 lg:px-15 xl:px-30 2xl:px-40  w-full flex flex-col gap-20">
      <div className="w-full flex justify-end">
        <div className=" h-10 w-100 rounded-xl  flex justify-between items-center px-2">
          <Search size={24} color="white" />
          <input type="search" placeholder="Search" className="w-[90%]  h-full  text-white" />
        </div>
      </div>
      <div className="w-full flex gap-y-20 justify-between flex-wrap">
        <div
          className="relative text-white font-poppins xl:w-[30%] xl:h-[450px] 2xl:h-[450px] 2xl:w-[32%] 
        p-4 flex flex-col gap-3 rounded-2xl  bg-gradient-to-br from-white/15 via-white/5 to-white/10
        backdrop-blur-2xl shadow-2xl shadow-black/40
        hover:scale-[1.02] transition-all duration-300
"
        >
          {/* Image Wrapper */}
          <div
            className="absolute inset-0 rounded-2xl 
          bg-gradient-to-br from-white/20 via-transparent to-transparent 
          pointer-events-none"
          />
          <div className="w-full  h-[55%] rounded-2xl overflow-hidden">
            <img
              src={banner}
              className="w-full h-full object-cover"
              alt="Why Every Business Needs a Website in 2026"
            />
          </div>

          <p className="text-sm text-center text-gray-400">19 Jan 2026</p>

          <h1 className="font-semibold text-xl leading-snug ">
            Why Every Business in 2026 Needs a Professional Website (Not Just
            Instagram)
          </h1>

          <p className="text-gray-300 line-clamp-2">
            In 2026, relying only on Instagram is risky. Discover why a
            professional website is essential to build trust, attract Google
            leads, and turn visitors into paying customers.
          </p>
        </div>
        <div
          className="relative text-white font-poppins w-[30%] h-[450px] 2xl:h-[450px] 2xl:w-[32%]
        p-4 flex flex-col gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-white/15 via-white/5 to-white/10
        backdrop-blur-2xl shadow-2xl shadow-black/40
        hover:scale-[1.02] transition-all duration-300
"
        >
          {/* Image Wrapper */}
          <div
            className="absolute inset-0 rounded-2xl 
          bg-gradient-to-br from-white/20 via-transparent to-transparent 
          pointer-events-none"
          />
          <div className="w-full  h-[55%] rounded-2xl overflow-hidden">
            <img
              src={banner3}
              className="w-full h-full object-cover"
              alt="Why Every Business Needs a Website in 2026"
            />
          </div>

          <p className="text-sm text-center text-gray-400">19 Jan 2026</p>

          <h1 className="font-semibold text-xl leading-snug ">
            How Often Should a Business Post on Social Media?
          </h1>

          <p className="text-gray-300 line-clamp-2">
            How often should a business post on social media? Discover the
            perfect posting frequency to boost engagement, grow your brand
            visibility, and attract more customers consistently without
            overwhelming your audience.
          </p>
        </div>
        <div
          className="relative text-white font-poppins w-[30%] h-[450px] 2xl:h-[450px] 2xl:w-[32%] 
        p-4 flex flex-col gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-white/15 via-white/5 to-white/10
        backdrop-blur-2xl shadow-2xl shadow-black/40
        hover:scale-[1.02] transition-all duration-300
"
        >
          {/* Image Wrapper */}
          <div
            className="absolute inset-0 rounded-2xl 
          bg-gradient-to-br from-white/20 via-transparent to-transparent 
          pointer-events-none"
          />
          <div className="w-full  h-[55%] rounded-2xl overflow-hidden">
            <img
              src={banner6}
              className="w-full h-full object-cover"
              alt="Why Every Business Needs a Website in 2026"
            />
          </div>

          <p className="text-sm text-center text-gray-400">19 Jan 2026</p>

          <h1 className="font-semibold text-xl leading-snug ">
            How VedaPixel Delivers 24/7 Reliable Maintenance & Support That
            Keeps Your Business Running Smoothly
          </h1>

          <p className="text-gray-300 line-clamp-2">
            Discover how VedaPixel delivers 24/7 reliable maintenance and
            support to ensure maximum uptime, seamless performance, and
            stress-free business operations that keep your digital systems
            running smoothly.
          </p>
        </div>
        <div
          className="relative text-white font-poppins w-[30%] h-[450px] 2xl:h-[450px] 2xl:w-[32%]
        p-4 flex flex-col gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-white/15 via-white/5 to-white/10
        backdrop-blur-2xl shadow-2xl shadow-black/40
        hover:scale-[1.02] transition-all duration-300
"
        >
          {/* Image Wrapper */}
          <div
            className="absolute inset-0 rounded-2xl 
          bg-gradient-to-br from-white/20 via-transparent to-transparent 
          pointer-events-none"
          />
          <div className="w-full  h-[55%] rounded-2xl overflow-hidden">
            <img
              src={banner4}
              className="w-full h-full object-cover"
              alt="Why Every Business Needs a Website in 2026"
            />
          </div>

          <p className="text-sm text-center text-gray-400">19 Jan 2026</p>

          <h1 className="font-semibold text-xl leading-snug ">
            Why Startups Must Invest in Branding from Day One
          </h1>

          <p className="text-gray-300 line-clamp-2">
            Why startups must invest in branding from day one to build trust,
            stand out from competitors, attract loyal customers, and create a
            strong, memorable identity that drives long-term business growth.
          </p>
        </div>
        <div
          className="relative text-white font-poppins w-[30%] h-[450px] 2xl:h-[450px] 2xl:w-[32%]
        p-4 flex flex-col gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-white/15 via-white/5 to-white/10
        backdrop-blur-2xl shadow-2xl shadow-black/40
        hover:scale-[1.02] transition-all duration-300
"
        >
          {/* Image Wrapper */}
          <div
            className="absolute inset-0 rounded-2xl 
          bg-gradient-to-br from-white/20 via-transparent to-transparent 
          pointer-events-none"
          />
          <div className="w-full  h-[55%] rounded-2xl overflow-hidden">
            <img
              src={banner2}
              className="w-full h-full object-cover"
              alt="Why Every Business Needs a Website in 2026"
            />
          </div>

          <p className="text-sm text-center text-gray-400">19 Jan 2026</p>

          <h1 className="font-semibold text-xl leading-snug ">
            How VedaPixel Helps Businesses Grow Online Step-by-Step
          </h1>

          <p className="text-gray-300 line-clamp-2">
            Discover how VedaPixel helps businesses grow online step by step
            with powerful websites, smart marketing strategies, and data-driven
            solutions that turn traffic into real customers.
          </p>
        </div>
        <div
          className="relative text-white font-poppins w-[30%] h-[450px] 2xl:h-[450px] 2xl:w-[32%]
        p-4 flex flex-col gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-white/15 via-white/5 to-white/10
        backdrop-blur-2xl shadow-2xl shadow-black/40
        hover:scale-[1.02] transition-all duration-300
"
        >
          {/* Image Wrapper */}
          <div
            className="absolute inset-0 rounded-2xl 
          bg-gradient-to-br from-white/20 via-transparent to-transparent 
          pointer-events-none"
          />
          <div className="w-full  h-[55%] rounded-2xl overflow-hidden">
            <img
              src={banner5}
              className="w-full h-full object-cover"
              alt="Why Every Business Needs a Website in 2026"
            />
          </div>

          <p className="text-sm text-center text-gray-400">19 Jan 2026</p>

          <h1 className="font-semibold text-xl leading-snug ">
            How Bangalore Startups Can Scale Faster with a Strong Website
          </h1>

          <p className="text-gray-300 line-clamp-2">
            How Bangalore startups can scale faster with a strong website that
            builds credibility, attracts high-quality leads, improves
            conversions, and establishes a powerful digital presence in today’s
            competitive market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
