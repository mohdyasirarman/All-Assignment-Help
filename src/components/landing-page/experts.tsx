"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Expert {
  name: string;
  expertise: string;
  description: string;
  image?: string;
  orderFinished: number;
  orderInProgress: number;
  location: string;
  rating: string;
  about: string;
}

const defaultExpert: Expert = {
  name: "Default Expert",
  expertise: "No Expertise Provided",
  description: "No description available.",
  image: "/static/images/Profile_avatar_placeholder_large.png",
  orderFinished: 0,
  orderInProgress: 0,
  location: "No Where",
  rating: "5.0/5",
  about: "Who cares",
};

const ExpertCard: React.FC<{
  expert?: Expert;
  isFeatured?: boolean;
  isExpanded?: boolean;
  onExpand?: () => void;
}> = ({
  expert = defaultExpert,
  isFeatured = false,
  isExpanded = false,
  onExpand,
}) => {
  const rating = Math.round(Number(expert.rating?.split('/')[0]) || 4);

  return (
    <div
      onClick={onExpand}
      className={`transition-all duration-1000 ease-out overflow-hidden ${
        isFeatured
          ? "bg-white rounded-lg flex items-start w-[625px] h-[220px]"
          : `${
              isExpanded ? "w-[520px] p-10" : "w-[250px]"
            } h-[220px] bg-white rounded-2xl shadow-md p-5 flex flex-col flex-shrink-0 ${onExpand ? 'cursor-pointer' : ''} hover:shadow-lg`
      }`}
    >
      {isFeatured ? (
        <>
          <div className="flex flex-col items-start w-[300px]">
            <Image
              src={`${expert.image || defaultExpert.image}`}
              alt={`${expert.name} Profile`}
              width={50}
              height={50}
              className="rounded-full"
            />
            <h2 className="text-[18px] font-poppins leading-[16px] font-bold text-[#2C2C2C]">
              {expert.name}
            </h2>
            <div className="text-[#8A8A8A] font-poppins font-[400] text-[16px] leading-[21px]">
              {expert.expertise}
            </div>
            <div className="flex justify-center text-[#8A8A8A] font-poppins font-[400] text-[16px] leading-[21px]">
              <Image
                width={15}
                height={15}
                src="/static/images/elements.svg"
                alt="tick"
              />
              <div>
                <b>2010</b> Orders Finished
              </div>
            </div>
            <div className="flex flex-row">
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index}
                  src="/static/images/star.svg"
                  alt="Rating"
                  width={15}
                  height={16}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center w-[280px] mt-[100px]">
            <div className="text-[#343434] mb-4 font-poppins font-[500] text-[16px] leading-[24px]">
              {expert.description}
            </div>
            <button className="bg-[#55C360] text-white px-3 py-2 rounded-[30px] hover:bg-[#45a350] w-[120px] mt-[10px]">
              <Link href="/order">Hire Now</Link>
            </button>
          </div>
        </>
      ) : (
        <>
          <div
            className={`flex ${isExpanded ? "flex-row" : "flex-col"} ${
              isExpanded ? "w-full" : ""
            }`}
          >
            <div className={`${isExpanded ? "w-[300px]" : "w-full"}`}>
              <div className="flex gap-3 items-center">
                <Image
                  src={`${expert.image || defaultExpert.image}`}
                  alt={expert.name}
                  width={50}
                  height={50}
                  className="rounded-full mt-[10px] mb-[10px]"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {expert.name}
                  </h2>

                  <div className="text-sm text-gray-600 mb-1">
                    {expert.expertise}
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 text-sm text-gray-600 mb-1">
                <Image
                  width={15}
                  height={15}
                  src="/static/images/elements.svg"
                  alt="tick"
                />
                <div>
                  <b>{expert.orderFinished}</b> Orders Finished
                </div>
              </div>
              <div className="flex space-x-2 text-sm text-gray-600 mb-1">
                <Image
                  width={15}
                  height={15}
                  src="/static/images/beaker.svg"
                  alt="beaker"
                />
                <div>
                  <b>{expert.orderInProgress}</b> Order in Progress
                </div>
              </div>
              <div className="flex space-x-2 text-sm text-gray-600 mb-3">
                <Image
                  width={15}
                  height={15}
                  src="/static/images/location.svg"
                  alt="beaker"
                />
                <div>{expert.location}</div>
              </div>
              <div className="flex items-center flex-row gap-[4px]">
                {[...Array(rating)].map((_, index) => (
                  <Image
                    key={index}
                    src="/static/images/star.svg"
                    alt="Rating"
                    width={15}
                    height={16}
                    className="-mt-2"
                  />
                ))}
                <div className="flex text-base text-gray-600 -mt-2 ml-2">
                  {expert.rating}
                </div>
              </div>
            </div>

            {isExpanded && (
              <div className="flex flex-col justify-center items-center w-[280px] mt-[20px] ml-4">
                <p className="text-[#343434] mb-4 text-center font-poppins font-[500] text-[16px] leading-[24px]">
                  {expert.about}
                </p>
                <button className="bg-[#55C360] text-white px-3 py-2 rounded-[30px] hover:bg-green-600 w-[120px] mt-[10px]">
                  <Link href="/order">Hire Now</Link>
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

const Experts: React.FC<{ experts: Expert[] }> = ({ experts }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });

      setTimeout(() => {
        updateScrollAvailability();
      }, 300);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });

      setTimeout(() => {
        updateScrollAvailability();
      }, 300);
    }
  };

  const updateScrollAvailability = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft + container.clientWidth < container.scrollWidth
      );
    }
  };

  const handleExpand = (index: number) => {
    if (experts && experts.length > 0) {
      setExpandedIndex(index === expandedIndex ? null : index);
    }
  };

  useEffect(() => {
    updateScrollAvailability();
    window.addEventListener("resize", updateScrollAvailability);
    return () => window.removeEventListener("resize", updateScrollAvailability);
  }, []);

  useEffect(() => {
    if (experts && experts.length > 0) {
      updateScrollAvailability();
    } else {
      setCanScrollLeft(false);
      setCanScrollRight(false);
    }
  }, [experts]);

  return (
    <div className="bg-[#F5F6FB] py-12">
      <div className="mx-auto px-4">
        <div className="text-center mb-8">
          <button className="text-[#2BAFFC] bg-white rounded-xl p-2 font-bold text-[18px] leading-[27px]">
            OUR EXPERTS
          </button>
          <h1 className="text-[48px] font-poppins leading-[72px] font-bold text-gray-800 mt-[10px]">
            Connect with Top Assignment Experts
          </h1>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-4 pb-4 [&::-webkit-scrollbar]:hidden gap-2 [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {experts?.map((expert, index) => (
            <ExpertCard
              key={index}
              expert={expert}
              isExpanded={expandedIndex === index}
              onExpand={() => handleExpand(index)}
            />
          ))}
        </div>

        <div className="flex justify-center items-center mt-4">
          <button className="bg-white font-poppins font-semibold text-[18px] leading-[27px] text-[#55C360] px-6 py-2 rounded-[30px] border-[2px] border-green-500">
            <Link href="/experts">View More</Link>
          </button>

          <hr className="w-[900px] h-1 bg-gray-300 mx-4" />

          <div className="flex space-x-2">
            <Image
              src="/static/images/arrow1.svg"
              alt="scroll left"
              width={56}
              height={56}
              onClick={canScrollLeft ? scrollLeft : undefined}
              className={`${canScrollLeft ? "cursor-pointer hover:grayscale" : "filter grayscale cursor-not-allowed"}`}
            />
            <Image
              src="/static/images/arrow2.svg"
              alt="scroll right"
              width={56}
              height={56}
              onClick={canScrollRight ? scrollRight : undefined}
              className={`${canScrollRight ? "cursor-pointer hover:grayscale" : "filter grayscale cursor-not-allowed"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;