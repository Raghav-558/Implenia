"use client";
import { HEADER_LIST } from "@/utils/helper";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOverflow = () => {
      if (open && window.innerWidth < 780) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };
    handleOverflow();
    window.addEventListener("resize", handleOverflow);
    return () => {
      window.removeEventListener("resize", handleOverflow);
    };
  }, [open]);

  return (
    <div className="pt-[18px] pb-[19px] max-lg:py-4 shadow-[0px_4px_8px_0px#00000040]">
      <div className="max-w-[1239px] px-4 mx-auto flex items-center justify-between">
        <a href="/">
          <Image
            src="/assets/images/webp/page-logo.webp"
            alt="page-logo"
            width={93}
            height={93}
            className="pointer-events-none size-[93px] max-lg:size-[70px]"
          />
        </a>
        <div
          className={`flex max-md:gap-10 max-md:fixed max-md:top-0 max-md:-right-full max-md:h-full max-md:w-full max-md:justify-center max-md:items-center transition-all duration-300 max-md:flex-col max-md:bg-white max-md:!z-20 ${
            open ? "max-md:!right-0" : ""
          }`}
        >
          <div className="flex max-md:flex-col gap-[38px] items-center">
            {HEADER_LIST.map((item, i) => (
              <a
                key={i}
                onClick={() => setOpen(false)}
                href={item.link}
                className="!whitespace-nowrap font-bold text-base max-md:text-xl leading-5 hover:text-custom-orange transition-all duration-300"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-10 md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="overflow-hidden relative z-50 lg:hidden size-6.5 gap-[5px] flex flex-col justify-between items-center"
          >
            <span
              className={`w-10 h-[5px] transition-all duration-300 bg-black rounded-lg ${
                open ? "translate-x-10" : ""
              }`}
            ></span>
            <span
              className={`w-10 h-[5px] transition-all duration-300 bg-black rounded-lg relative ${
                open ? "rotate-45" : ""
              } ${
                open ? "after:rotate-90" : ""
              } after:absolute after:top-0 after:left-0 after:w-10  after:h-[5px] after:bg-black after:rounded-lg`}
            ></span>
            <span
              className={`w-10 h-[5px] transition-all duration-300 bg-black rounded-lg ${
                open ? "-translate-x-10" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
