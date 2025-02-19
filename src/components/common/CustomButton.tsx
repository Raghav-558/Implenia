import React from "react";

interface CustomButtonProps {
  text: string;
  myClass?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, myClass }) => {
  return (
    <button
      className={`${myClass} font-bold text-[21px] leading-[21px] rounded-[47px] transition-all duration-300`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
