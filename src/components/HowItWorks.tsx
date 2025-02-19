"use client";
import React, { useState } from "react";
import Image from "next/image";
import CustomHeading from "./common/CustomHeading";

const HowItWorks = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="pt-[128px] pb-[144px] max-lg:py-20 max-md:py-[60px] bg-custom-gray">
      <div className="max-w-[1172px] px-4 mx-auto">
        <CustomHeading
          text="HOW IT WORKS"
          myClass="pb-[64px] max-md:pb-10 max-sm:pb-5"
        />
        <div
          className={`w-full max-h-[580px] mx-auto rounded-[25px] relative ${
            showVideo ? "hidden" : ""
          }`}
        >
          <Image
            onClick={() => setShowVideo(true)}
            height={580}
            width={1064}
            src="/assets/images/webp/video-img.webp"
            alt="video-image"
            className="max-h-[580px] max-w-[1064px] w-full mx-auto max-lg:h-[560px] max-md:h-[450px] max-sm:h-[280px]"
          />
          <div className="py-2.5 max-w-[372px] max-md:!max-w-[300px] absolute top-6 left-16 max-lg:left-7 max-md:left-5 max-md:top-5 max-md:px-3 max-sm:top-2 max-sm:left-2 bg-custom-yellow">
            <p className="md:text-[21px] sm:text-xs text-[8px] md:leading-[21px] sm:leading-4 leading-3 font-bold text-center">
              VIDEO CAN BE EXCHANGED FOR CAMPAIGNS.
            </p>
            <p className="md:text-[21px] sm:text-xs text-[8px] md:leading-[21px] sm:leading-4 leading-3 font-bold text-center md:pt-4">
              -Titel: Name of Campaign
            </p>
            <p className="md:text-[21px] sm:text-xs text-[8px] md:leading-[21px] sm:leading-4 leading-3 font-bold text-center">
              -Button: Join the campaign!
            </p>
          </div>
        </div>
        {showVideo && (
          <div className="w-full h-full max-h-[580px] max-w-[1064px] mx-auto max-lg:h-[560px] max-md:h-[450px] max-sm:h-[280px] relative">
            <iframe
              width="100%"
              height="580"
              className="max-xl:h-full rounded-[25px]"
              src="https://www.youtube.com/embed/Xb2FSfza95A"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default HowItWorks;
