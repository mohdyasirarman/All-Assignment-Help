"use client";

import React, { useRef } from "react";
import Image from "next/image";

const reviews = [
  {
    imageSrc: "/static/images/pinterest.svg",
    content:
      '"Having an all-in-one solution, compared to siloed info, ensures teams can better understand action OKRs and work transparently across the business."',
    author: "Naveen Gavini",
    role: "SVP of Products at Pinterest",
    btimage: "/static/images/bottom.svg",
    bgColor: "bg-[#FFE6C9]",
    width: 175,
    height: 40,
  },
  {
    imageSrc: "/static/images/quora.svg",
    content:
      '"Having an all-in-one solution, compared to siloed info, ensures teams can better understand action OKRs and work transparently across the business."',
    author: "Naveen Gavini",
    role: "SVP of Products at Pinterest",
    btimage: "/static/images/bottom.svg",
    bgColor: "bg-[#A8240040]",
    width: 126,
    height: 40,
  },
];

const reviews1 = [
  {
    imageSrc: "/static/images/linkedin.svg",
    content:
      '"Having an all-in-one solution, compared to siloed info, ensures teams can better understand action OKRs and work transparently across the business."',
    author: "Naveen Gavini",
    role: "SVP of Products at Pinterest",
    btimage: "/static/images/bottom.svg",
    bgColor: "bg-[#DBEAFE]",
    width: 164,
    height: 40,
  },
  {
    imageSrc: "/static/images/linkedin.svg",
    content:
      '"Having an all-in-one solution, compared to siloed info, ensures teams can better understand action OKRs and work transparently across the business."',
    author: "Naveen Gavini",
    role: "SVP of Products at Pinterest",
    btimage: "/static/images/bottom.svg",
    bgColor: "bg-[#E0F2FE]",
    wid: "w-[164px]",
    hei: "h-[41px]",
    width: 175,
    height: 40,
  },
];

const SlidingReviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="mx-auto py-8 ">
      <div className="text-center w-[862px] flex flex-col items-center ml-[280px]">
        <h2 className="font-poppins text-[48px] leading-[52px] text-[#1C1C1C] font-bold mb-4">
          Student Reviews from Social Media
        </h2>
        <p className="font-poppins font-[400] text-[18px] leading-[19px] text-[#000000] text-opacity-[60%] max-w-[700px] mb-8">
          Discover authentic reviews from students sharing their success stories
          on social platforms.
        </p>
      </div>
      {/* Grid Container */}
      <div className="flex flex-row ml-[20px] overflow-hidden relative">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`p-[35px] rounded-[30px] mx-w-4xl shadow-lg w-[932px] h-[376px] ${review.bgColor} flex flex-col items-start transition-transform duration-300`}
            style={{
              transform: index === 1 ? "translateX(-50%)" : "translateX(0)",
              position: index === 1 ? "absolute" : "relative",
              right: index === 1 ? "-70%" : "auto",
            }}
          >
            <Image
              src={review.imageSrc}
              alt={review.author}
              width={review.width}
              height={review.height}
              className="mb-4"
            />
            <p className="w-[848px] h-[156px] mt-[15px] font-poppins font-[400] text-[32px] leading-[52px] text-[#212121] mb-4">
              {review.content}
            </p>
            <div className="flex flex-row mt-[20px]">
              <Image src={review.btimage} alt="Image" width={44} height={42} />
              <div className="flex flex-col ml-[10px]">
                <p className="text-[#212121] font-inter font-semibold text-[16px] leading-[24px]">
                  {review.author}
                </p>
                <p className="font-inter font-[400] text-[16px] leading-[20px] text-[#8E8E8E]">
                  {review.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex flex-row mt-[20px] overflow-hidden relative"
        ref={scrollRef}
      >
        {reviews1.map((review1, index) => (
          <div
            key={index}
            className={`p-[35px] rounded-[30px] mx-w-4xl shadow-lg w-[932px] h-[376px] ${review1.bgColor} flex flex-col items-start transition-transform duration-300`}
            style={{
              transform: index === 0 ? "translateX(72.5%)" : "translateX(0)",
              position: index === 1 ? "absolute" : "relative",
              left: index === 1 ? "-20%" : "auto",
            }}
          >
            <Image
              src={review1.imageSrc}
              alt={review1.author}
              width={review1.width}
              height={review1.height}
              className="mb-4"
            />
            <div className="w-[848px] h-[156px] mt-[15px]">
              <p className="font-poppins font-[400] text-[32px] leading-[52px] text-[#212121] mb-4">
                {review1.content}
              </p>
            </div>
            <div className="flex flex-row mt-[20px]">
              <Image src={review1.btimage} alt="Image" width={44} height={42} />
              <div className="flex flex-col ml-[10px]">
                <p className="text-[#212121] font-inter font-semibold text-[16px] leading-[24px]">
                  {review1.author}
                </p>
                <p className="font-inter font-[400] text-[16px] leading-[20px] text-[#8E8E8E]">
                  {review1.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-[15px] mt-[70px] justify-center">
        <Image
          src="/static/images/arrow1.svg"
          alt="left"
          width={38}
          height={42}
          onClick={() => scrollLeft(scrollRef)}
          className="cursor-pointer"
        />
        <Image
          src="/static/images/arrow2.svg"
          alt="left"
          width={38}
          height={42}
          onClick={() => scrollRight(scrollRef)}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SlidingReviews;
