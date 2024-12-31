"use client";

import React, { useRef, useState } from "react";
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
    width: 140,
    height: 30,
  },
  {
    imageSrc: "/static/images/quora.svg",
    content:
      '"Having an all-in-one solution, compared to siloed info, ensures teams can better understand action OKRs and work transparently across the business."',
    author: "Naveen Gavini",
    role: "SVP of Products at Pinterest",
    btimage: "/static/images/bottom.svg",
    bgColor: "bg-[#A8240040]",
    width: 110,
    height: 30,
  },
  {
    imageSrc: "/static/images/pinterest.svg",
    content:
      '"Having an all-in-one solution, compared to siloed info, ensures teams can better understand action OKRs and work transparently across the business."',
    author: "Naveen Gavini",
    role: "SVP of Products at Pinterest",
    btimage: "/static/images/bottom.svg",
    bgColor: "bg-[#FFE6C9]",
    width: 140,
    height: 30,
  },
  {
    imageSrc: "/static/images/pinterest.svg",
    content:
      '"With this all-in-one platform, our teams can streamline workflows and achieve OKRs efficiently, promoting better collaboration across departments."',
    author: "Sarah Lee",
    role: "Head of Operations at Pinterest",
    btimage: "/static/images/bottom.svg",
    bgColor: "bg-[#E1F7E6]",
    width: 140,
    height: 30,
  },
  {
    imageSrc: "/static/images/quora.svg",
    content:
      '"Switching to an all-in-one solution has greatly improved our ability to track OKRs and streamline our team’s efforts for faster results."',
    author: "James Park",
    role: "Product Manager at Quora",
    btimage: "/static/images/bottom.svg",
    bgColor: "bg-[#FFF4E5]",
    width: 110,
    height: 30,
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
    width: 120,
    height: 30,
  },
  {
    imageSrc: "/static/images/linkedin.svg",
    content:
      '"Having an all-in-one solution, compared to siloed info, ensures teams can better understand action OKRs and work transparently across the business."',
    author: "Naveen Gavini",
    role: "SVP of Products at Pinterest",
    btimage: "/static/images/bottom.svg",
    bgColor: "bg-[#E0F2FE]",
    width: 130,
    height: 30,
  },
  {
    imageSrc: "/static/images/linkedin.svg",
    content:
      '"Having an all-in-one solution, compared to siloed info, ensures teams can better understand action OKRs and work transparently across the business."',
    author: "Naveen Gavini",
    role: "SVP of Products at Pinterest",
    btimage: "/static/images/bottom.svg",
    bgColor: "bg-[#DBEAFE]",
    width: 120,
    height: 30,
  },
  {
    imageSrc: "/static/images/linkedin.svg",
    content:
      '"The unified approach has helped us align our teams with clear objectives and results, leading to an enhanced work environment and performance."',
    author: "Mark Davis",
    role: "Chief Product Officer at LinkedIn",
    btimage: "/static/images/bottom.svg",
    bgColor: "bg-[#BEE7FF]",
    width: 120,
    height: 30,
  },
  {
    imageSrc: "/static/images/linkedin.svg",
    content:
      '"With a cohesive solution in place, we have achieved a more effective tracking system for our OKRs, bringing our team closer to our goals."',
    author: "Anna Wong",
    role: "Director of Operations at LinkedIn",
    btimage: "/static/images/bottom.svg",
    bgColor: "bg-[#E0F2FE]",
    width: 130,
    height: 30,
  },
];

const SlidingReviews: React.FC = () => {
  const scrollRefUpper = useRef<HTMLDivElement>(null);
  const scrollRefLower = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    if (scrollRefUpper.current && scrollRefLower.current) {
      const newPosition = Math.max(0, scrollPosition - 652);
      scrollRefUpper.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      scrollRefLower.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    if (scrollRefUpper.current && scrollRefLower.current) {
      const containerWidthUpper =
        scrollRefUpper.current.scrollWidth - scrollRefUpper.current.clientWidth;
      const containerWidthLower =
        scrollRefLower.current.scrollWidth - scrollRefLower.current.clientWidth;
      const newPosition = Math.min(
        Math.min(containerWidthUpper, containerWidthLower),
        scrollPosition + 652
      );
      scrollRefUpper.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      scrollRefLower.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="mx-auto py-8">
      <div className="text-center flex flex-col items-center mx-auto w-full">
        <h2 className="font-poppins text-[45px] leading-[40px] text-[#1C1C1C] font-bold mb-4 text-center">
          Student Reviews from Social Media
        </h2>
        <p className="font-poppins font-[400] text-[16px] leading-[18px] text-[#000000] text-opacity-[60%] max-w-[500px] mb-8 text-center">
          Discover authentic reviews from students sharing their success stories
          on social platforms.
        </p>
      </div>

      <div
        className="flex overflow-hidden mb-10 gap-10 mt-10"
        ref={scrollRefUpper}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`p-[30px] rounded-[20px] mx-w-4xl min-w-[700px] h-[276px] ${review.bgColor} flex  hover:saturate-150 duration-500 flex-col items-start transition-transform `}
          >
            <Image
              src={review.imageSrc}
              alt={review.author}
              width={review.width}
              height={review.height}
              className="mb-4"
            />
            <p className="w-[648px] h-[112px] mt-[15px] font-poppins font-[400] text-[24px] leading-[32px] text-[#212121] mb-4">
              {review.content}
            </p>
            <div className="flex flex-row mt-[15px]">
              <Image src={review.btimage} alt="Image" width={30} height={30} />
              <div className="flex flex-col ml-[8px]">
                <p className="text-[#212121] font-inter font-semibold text-[14px] leading-[20px]">
                  {review.author}
                </p>
                <p className="font-inter font-[400] text-[14px] leading-[18px] text-[#8E8E8E]">
                  {review.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="flex overflow-hidden mb-10 -ml-[30px] gap-10"
        ref={scrollRefLower}
      >
        {reviews1.map((review1, index) => (
          <div
            key={index}
            className={`p-[30px] rounded-[20px] mx-w-4xl  hover:saturate-150 min-w-[700px] h-[276px] ${review1.bgColor} flex flex-col items-start transition-transform duration-300`}
          >
            <Image
              src={review1.imageSrc}
              alt={review1.author}
              width={review1.width}
              height={review1.height}
              className="mb-4"
            />
            <p className="w-[648px] h-[112px] mt-[15px] font-poppins font-[400] text-[24px] leading-[32px] text-[#212121] mb-4">
              {review1.content}
            </p>
            <div className="flex flex-row mt-[15px]">
              <Image src={review1.btimage} alt="Image" width={30} height={30} />
              <div className="flex flex-col ml-[8px]">
                <p className="text-[#212121] font-inter font-semibold text-[14px] leading-[20px]">
                  {review1.author}
                </p>
                <p className="font-inter font-[400] text-[14px] leading-[18px] text-[#8E8E8E]">
                  {review1.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-row gap-[12px] mt-[50px] justify-center">
        <Image
          src="/static/images/arrow1.svg"
          alt="left"
          width={45}
          height={45}
          onClick={scrollLeft}
          className="cursor-pointer hover:saturate-150"
        />
        <Image
          src="/static/images/arrow2.svg"
          alt="right"
          width={45}
          height={45}
          onClick={scrollRight}
          className="cursor-pointer hover:saturate-50"
        />
      </div>
    </div>
  );
};

export default SlidingReviews;
