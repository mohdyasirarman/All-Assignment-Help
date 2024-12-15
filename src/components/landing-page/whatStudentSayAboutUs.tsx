import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

interface StudentProps {
  changeTitle: string;
  changeInP: string;
}

const WhatStudentSayAboutUs = ({ changeTitle, changeInP }: StudentProps) => {
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
    <div className="w-full mt-32 mb-32">
      <div className="container px-4 lg:w-[1400px] mx-auto flex flex-col lg:flex-col gap-5 lg:gap-0">

        <div className="mb-20 w-full text-center">
          {changeTitle ? (
            <>
              <div className="w-full">
                <span className="font-bold font-inter text-[55px] text-[#2E2F35] leading-[76px] tracking-[-2px]">
                  {changeTitle}
                </span>
              </div>
              <div className="font-poppins font-normal text-[#5F5F5F] text-lg leading-6">
                {changeInP}
              </div>
            </>
          ) : (
            <>
              <div className="w-full">
                <span className="font-bold font-inter text-[48px] text-[#2C2C2C] leading-[76px] tracking-[-2px]">
                  See What Students Say About Us
                </span>
              </div>
              <div className="font-poppins font-normal text-[#5F5F5F] text-lg leading-6">
                Discover why students trust us for their academic success
              </div>
            </>
          )}
        </div>
        <InfiniteMovingCards
          pauseOnHover
          direction="left"
          speed="normal"
          items={studentTestimonials}
        />
        
      </div>
    </div>
  );
};

export default WhatStudentSayAboutUs;
