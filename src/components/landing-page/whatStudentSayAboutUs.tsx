import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

interface StudentProps {
  changeTitle: string;
  changeInP: string;
}

const WhatStudentSayAboutUs = ({ changeTitle, changeInP }: StudentProps) => {
  const studentTestimonials = [
    {
      quote: "This platform has completely changed the way I study. The resources are top-notch and easy to access.",
      name: "Alice Johnson",
      title: "Computer Science",
    },
    {
      quote: "The interactive tutorials helped me understand complex topics. I feel much more confident in my skills now.",
      name: "Mark Rivera",
      title: "Engineering Student",
    },
    {
      quote: "I love the community here! Everyone is so supportive, and the study groups have been incredibly helpful.",
      name: "Sophia Martinez",
      title: "Business  Student",
    },
    {
      quote: "The personalized recommendations for study material saved me so much time and effort.",
      name: "David Kim",
      title: "Medical Student",
    },
    {
      quote: "Thanks to this platform, I aced my finals! The practice tests are very realistic and thorough.",
      name: "Emily Carter",
      title: "Law Student",
    },
    {
      quote: "I appreciate how accessible the content is. It's perfect for someone balancing school and work.",
      name: "Michael Brown",
      title: "Student",
    },
    {
      quote: "The variety of learning tools available here makes it easy to stay engaged and motivated.",
      name: "Jessica Lee",
      title: "Psychology Major",
    },
    {
      quote: "This website has been a game-changer for me. The mentorship program is especially amazing.",
      name: "Ethan Walker",
      title: "Graduate Student",
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
