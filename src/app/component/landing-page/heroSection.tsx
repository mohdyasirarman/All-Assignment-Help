import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function HeroSection() {
  const reviews = [
    {
      id: 1,
      platform: "Client Reviews",
      rating: "4.9",
      logo: "/static/images/logo1.png",
      reviews: 1000,
    },
    {
      id: 2,
      platform: "Trustpilot",
      rating: "4.5",
      logo: "/static/images/trustpilot.png",
      reviews: 1000,
    },
    {
      id: 3,
      platform: "Sitejabber",
      rating: "4.2",
      logo: "/static/images/sitejabber.png",
      reviews: 1000,
    },
  ];

  return (
    <div className=" bg-gradient-to-r from-white to-[#CADAFB] w-full">
      <div className="container pt-20 pb-20 lg:w-[1100px] mx-auto flex flex-col lg:flex-row gap-5 lg:gap-0">
        {/* Left Section */}
        <div className="flex flex-col gap-5 px-4">
          {/* Headings */}
          <div className="flex flex-col gap-5 ">
            <h1 className="text-[40px] text-[#1754c4] leading-[130%] font-bold mb-0">
              ASSIGNMENT HELP - ASSIGNMENTHELP.COM
            </h1>
            <h3 className="-mt-3 mb-8 text-black text-[22px] leading-8">
              Get Online Assignment Help From Best Assignment Help Website
              Instantly!!
            </h3>
          </div>
          {/* Stats */}
          <div className="flex flex-col lg:flex-row gap-5 w-[74%] mx-auto mt-20 mb-7">
            <div className="flex flex-col gap-2">
              <span className="block text-5xl text-[#232e44] font-bold">
                98.2%
              </span>
              <span className="text-base font-normal ">
                Orders Arrive Timely
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="block text-5xl text-[#232e44] font-bold">
                9/10
              </span>
              <span className="text-base font-normal ">
                Report Better Grades
              </span>
            </div>
          </div>
          {/* Reviews */}
          <div className="bg-[#fff] box-shadow-lg rounded-lg grid grid-cols-1 lg:grid-cols-3 gap-5 w-[85%] float-left mx-auto py-3 px-4 relative">
            {reviews.map((review) => (
              <div key={review.platform} className="flex items-center gap-2">
                <div className="w-[50px] h-[50px] flex flex-row items-center justify-center">
                  <Image
                    src={review.logo}
                    alt={review.platform}
                    width={20}
                    height={20}
                  />
                  <span className="text-xs font-normal">{review.platform}</span>
                </div>
                <div>
                  <span className="text-base font-bold ">{review.rating}</span>
                  {review.id === 3 ? null : (
                    <div className="border-r-[1px] border-r-[#eaeaea] h-full w-[1px]"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right Section */}
        <div className="flex flex-col gap-5">
          {/* Heading */}
          <h1 className="text-4xl font-bold">Get Assignment Instantly</h1>
          {/* Form */}
          <div className="flex flex-col gap-5">
            <input type="text" placeholder="Enter your email" />
            <button>Get Started</button>
          </div>
          {/* Cover Images */}
        </div>
      </div>
    </div>
  );
}
