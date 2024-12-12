import React from "react";
import Image from "next/image";

const topics = [
  {
    name: "Artificial Intelligence",
    icon: "/static/images/image1.svg",
    width: 52,
    height: 52,
  },
  {
    name: "ML/ Data Science",
    icon: "/static/images/image2.svg",
    width: 52,
    height: 52,
  },
  {
    name: "Corruption Results",
    icon: "/static/images/image3.svg",
    width: 59,
    height: 52,
  },
  {
    name: "Crime Impact",
    icon: "/static/images/image4.svg",
    width: 52,
    height: 52,
  },
  {
    name: "Society Issues",
    icon: "/static/images/image5.svg",
    width: 52,
    height: 52,
  },
  {
    name: "Business & AI",
    icon: "/static/images/image6.svg",
    width: 52,
    height: 31,
  },
  {
    name: "Changing World",
    icon: "/static/images/image7.svg",
    width: 52,
    height: 52,
  },
  {
    name: "Impact of Technology",
    icon: "/static/images/image8.svg",
    width: 52,
    height: 52,
  },
];

const TrendingTopics: React.FC = () => {
  return (
    <div className="mx-auto p-6">
      <div className="mb-[70px]">
        <h2 className="text-center text-[48px] font-poppins leading-[52px] text-[#1C1C1C] font-bold mb-[16px] mt-[20px]">
          Search by Trending Topics
        </h2>
        <p className="text-center text-[#000000] opacity-[60%] mb-6 font-poppins font-bold text-[18px] leading-[19px]">
          Stay ahead with the hottest topics in academics.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-[20px]">
        {topics.map((topic, index) => (
          <div
            key={index}
            className=" w-[328px] h-[126px] flex items-center bg-white rounded-lg  p-4 gap-4"
            style={{
              boxShadow: "0px 4.21px 21.03px 0px #FFEFE0",
            }}
          >
            <div className="flex-shrink-0">
              <Image
                src={topic.icon}
                alt={topic.name}
                width={topic.width}
                height={topic.height}
                className="object-contain ml-[10px]"
              />
            </div>
            <p className="text-[#333333] font-poppins font-bold text-[21px] leading-[29px] w-[128px] ml-[20px]">
              {topic.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;
