import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const WhatStudentSayAboutUs = () => {
  const studentTestimonials = [
    {
      quote: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      name: `John Doe`,
      title: `Student`,
    },
    {
      quote: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      name: `John Doe`,
      title: `Student`,
    },
    {
      quote: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      name: `John Doe`,
      title: `Student`,
    },
    {
      quote: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      name: `John Doe`,
      title: `Student`,
    },
    {
      quote: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      name: `John Doe`,
      title: `Student`,
    },
    {
      quote: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      name: `John Doe`,
      title: `Student`,
    },
  ];
  return (
    <div className="w-full mt-32 mb-16">
      <div className="container px-4 lg:w-[1400px] mx-auto flex flex-col lg:flex-col gap-5 lg:gap-0">
        {/* Heading */}
        <div className="mb-20 w-full text-center">
          <div className="w-full">
            <span className="font-bold font-inter text-[55px] text-[#2E2F35] leading-[76px] tracking-[-2px]">
              See What <span className="text-[#09B14F]">Students</span> Say
              About Us
            </span>
          </div>
          <div className="font-poppins font-normal text-[#5F5F5F] text-lg leading-6">
            Discover why students trust us for their academic success
          </div>
        </div>
        {/* Testimonial Cards */}
        <InfiniteMovingCards
          pauseOnHover
          direction="left"
          speed="normal"
          items={studentTestimonials}
        />
        {/* Recieve My Assignment Button */}
        <div className="w-full flex justify-center mt-20 font-poppins">
          <button className="px-8 py-2 bg-[#09B14F] text-white font-normal text-lg rounded-lg">
            Recieve My Assignment
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatStudentSayAboutUs;
