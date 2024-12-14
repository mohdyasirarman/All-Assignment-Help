// features.tsx
import React from "react";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Quality Essay, No AI",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    icon: "/static/images/f1.svg",
  },
  {
    title: "Timely Submissions",
    description:
      "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data.",
    icon: "/static/images/f2.svg",
  },
  {
    title: "Friendly Policies",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    icon: "/static/images/f3.svg",
  },
  {
    title: "Reliable Essay Experts",
    description:
      "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email.",
    icon: "/static/images/f4.svg",
  },
  {
    title: "Pocket-Friendly Services",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    icon: "/static/images/f5.svg",
  },
  {
    title: "24/7 Availability",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    icon: "/static/images/f6.svg",
  },
];

const Features: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex items-center px-[10px]">
      <div className="max-w-7xl mx-auto  lg:flex lg:items-start lg:space-x-10 justify-center">
        {/* Header Section */}
        <div className="w-[324px] mb-10 lg:mb-0 mr-6">
          <h1 className="text-[48px] font-poppins leading-[57px] font-bold text-[#2C2C2C] ml-2 mb-4">
            Top Features for Your Need
          </h1>
          <p className="font-inter font-[400] text-[18px] leading-[28px] text-[#575858]">
            Get access to our best-in-class services, designed to meet your
            essay needs with precision and excellence.
          </p>
        </div>

        {/* Features Section */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#2BAFFC1A] w-[384px] h-[270px] rounded-lg p-6 flex flex-col items-start text-start"
            >
              <div className="mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={50}
                  height={50}
                />
              </div>
              <h2 className="text-[20px] font-semibold leading-[30px] text-[#101828] mb-2 mt-[40px]">
                {feature.title}
              </h2>
              <p className="font-inter font-[400] text-[16px] leading-[24px] text-[#575858]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
