import React from "react";

type CustomHeadingProps = {
  text: string;
  myClass?: string;
};

const CustomHeading: React.FC<CustomHeadingProps> = ({ text, myClass }) => {
  return (
    <h2
      className={` ${myClass} text-custom-black font-bold text-[49px] leading-[61.59px] tracking-[-0.66px] max-lg:text-5xl max-lg:leading-[52px] max-md:text-4xl max-sm:text-3xl max-md:leading-[40px] max-sm:leading-[36px]`}
    >
      {text}
    </h2>
  );
};

export default CustomHeading;
