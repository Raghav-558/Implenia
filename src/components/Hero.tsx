import React from "react";
import Image from "next/image";
import Header from "./common/Header";
import CustomButton from "./common/CustomButton";

const Hero = () => {
  return (
    <div className="bg-hero-bg bg-cover bg-center relative overflow-hidden lg:min-h-[662px]">
      <div className="bg-white">
        <Header />
      </div>
      <Image
        src="/assets/images/webp/hello-logo.webp"
        alt="hello-robot"
        width={380}
        height={562}
        className="absolute left-0 -bottom-[40px] max-xl:hidden pointer-events-none"
      />
      <div className="max-w-[1172px] px-4 mx-auto">
        <div className="pt-[197px] pb-[168px] max-lg:py-28 max-md:py-24 max-sm:py-20">
          <p className="font-bold text-[21px] leading-[21px] text-white text-shadow">
            Shape the future of Implenia!
          </p>
          <h1 className="font-bold text-white text-[76px] leading-[80px] max-lg:text-7xl max-md:text-6xl max-sm:text-5xl max-lg:leading-[76px] max-md:leading-[64px] max-sm:leading-[52px] relative z-10 max-w-[600px] text-shadow">
            WE ARE LOOKING FOR YOUR IDEA
          </h1>
          <CustomButton
            text="Bring your idea to life!"
            myClass="mt-[25px] border-2 border-white h-[67px] w-[312px] text-white hover:bg-black hover:text-white hover:border-black max-md:text-lg max-md:w-[240px] max-md:h-[56px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
