"use client"
import React, { useRef, useState } from "react";
import Image from "next/image";

interface Expert {
  name: string;
  qualification: string;
  description: string;
  image: string;
}

const experts: Expert[] = [
  {
    name: "Alexis Jiang",
    qualification: "Masters of Ph.D. in Accounting",
    description: "",
    image: "/static/images/picture.svg",
  },
  {
    name: "Alexis Jiang",
    qualification: "Masters of Ph.D. in Accounting",
    description: "",
    image: "/static/images/picture.svg",
  },
  {
    name: "Alexis Jiang",
    qualification: "Masters of Ph.D. in Accounting",
    description: "",
    image: "/static/images/picture.svg",
  },
  {
    name: "Alexis Jiang",
    qualification: "Masters of Ph.D. in Accounting",
    description: "",
    image: "/static/images/picture.svg",
  },
  {
    name: "Alexis Jiang",
    qualification: "Masters of Ph.D. in Accounting",
    description: "",
    image: "/static/images/picture.svg",
  },
  {
    name: "Alexis Jiang",
    qualification: "Masters of Ph.D. in Accounting",
    description: "",
    image: "/static/images/picture.svg",
  },
  {
    name: "Alexis Jiang",
    qualification: "Masters of Ph.D. in Accounting",
    description: "",
    image: "/static/images/picture.svg",
  },
  {
    name: "Alexis Jiang",
    qualification: "Masters of Ph.D. in Accounting",
    description: "",
    image: "/static/images/picture.svg",
  },
 
];

export const ExpertCard: React.FC<{ 
  expert?: Expert; 
  isFeatured?: boolean; 
}> = ({ expert, isFeatured = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

 
  const defaultExpert: Expert = {
    name: "Default Expert",
    qualification: "No Qualification Provided",
    description: "No description available.",
    image: "/static/images/default-image.svg", 
  };

 
  const expertData = expert || defaultExpert;

  const handleClick = () => {
    if (!isFeatured) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div 
      onClick={handleClick}
      className={`transition-all duration-1000 ease-out overflow-hidden 
        ${isFeatured ? 
          'bg-white rounded-lg flex items-start w-[625px] h-[336px]' : 
          `${isExpanded ? 'w-[625px] ' : 'w-[250px]'} h-[336px] bg-white rounded-2xl shadow-md p-4 
          flex flex-col flex-shrink-0 cursor-pointer hover:shadow-lg`}`
      }
    >
      {isFeatured ? (
        <>
          <div className="flex flex-col items-start w-[300px]">
            <Image
              src={expertData.image}
              alt={`${expertData.name} Profile`}
              width={248}
              height={196}
              className="rounded-md "
            />
            <h2 className="text-[18px] font-poppins leading-[16px] font-bold text-[#2C2C2C]">
              {expertData.name}
            </h2>
            <p className="text-[#8A8A8A] font-poppins font-[400] text-[16px] leading-[21px] ">
              {expertData.qualification}
            </p>
            <div className="flex flex-row  ">
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
            <p className="text-[#343434] mb-4 font-poppins font-[500] text-[16px] leading-[24px]">
              {expertData.description || "No detailed description available."}
            </p>
            <button className="bg-[#55C360] text-white px-3 py-2 rounded-[30px] w-[120px] mt-[10px]">
              Hire Now
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={`flex ${isExpanded ? 'flex-row' : 'flex-col'} ${isExpanded ? 'w-full' : ''}`}>
            <div className={`${isExpanded ? 'w-[300px]' : 'w-full'}`}>
              <Image
                src={expertData.image}
                alt={expertData.name}
                width={248}
                height={196}
                className="rounded-md  mt-[10px] "
              />
              <h2 className="text-lg font-semibold text-gray-800">
                {expertData.name}
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                {expertData.qualification}
              </p>
              <div className="flex flex-row gap-[4px]">
                {[...Array(5)].map((_, index) => (
                  <Image
                    key={index}
                    src="/static/images/star.svg"
                    alt="Rating"
                    width={15}
                    height={16}
                    className="mt-2"
                  />
                ))}
              </div>
            </div>

            {isExpanded && (
              <div className="flex flex-col justify-center w-[280px] mt-[20px] ml-4">
                <p className="text-[#343434] mb-4 font-poppins font-[500] text-[16px] leading-[24px]">
                  {expertData.description || "No detailed description available."}
                </p>
                <button className="bg-[#55C360] text-white px-3 py-2 rounded-[30px] w-[120px] mt-[10px]">
                  Hire Now
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

ExpertCard.defaultProps = {
  expert: undefined,
  isFeatured: false,
};

const Experts: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });

      setTimeout(() => {
        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(
          container.scrollLeft + container.clientWidth < container.scrollWidth
        );
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
        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(
          container.scrollLeft + container.clientWidth < container.scrollWidth
        );
      }, 300);
    }
  };

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
          {experts.map((expert, index) => (
            <ExpertCard 
              key={index} 
              expert={expert} 
            />
          ))}
        </div>

        <div className="flex justify-center items-center mt-4">
          <button className="bg-white font-poppins font-semibold text-[18px] leading-[27px] text-[#55C360] px-6 py-2 rounded-[30px] border-[2px] border-green-500">
            View More
          </button>

          <hr className="w-[900px] h-1 bg-gray-300 mx-4" />

          <div className="flex space-x-2">
            <Image 
              src="/static/images/arrow1.svg"
              alt="scroll left"
              width={56}
              height={56}
              onClick={scrollLeft}
              className={`cursor-pointer ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
            <Image 
              src="/static/images/arrow2.svg"
              alt="scroll right"
              width={56}
              height={56}
              onClick={scrollRight}
              className={`cursor-pointer ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
