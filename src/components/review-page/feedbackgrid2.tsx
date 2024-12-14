import React from "react";
import Image from "next/image";

const testimonials1 = [
  {
    id: 1,
    name: "Helen Guo",
    category: "Programming",
    feedback:
      "Outstanding job! Every request I made was fulfilled to my satisfaction, and I am very pleased with the quality of work provided.",
    image: "/static/images/grid.svg", 
    rating: "/static/images/stars1.svg",
  },
  {
    id: 2,
    name: "Helen Guo",
    category: "Programming",
    feedback:
      "Outstanding job! Every request I made was fulfilled to my satisfaction, and I am very pleased with the quality of work provided.",
    image: "/static/images/grid.svg",
    rating: "/static/images/stars1.svg",
  },
  {
    id: 3,
    name: "Helen Guo",
    category: "Programming",
    feedback:
      "Outstanding job! Every request I made was fulfilled to my satisfaction, and I am very pleased with the quality of work provided.",
    image: "/static/images/grid.svg",
    rating: "/static/images/stars1.svg",
  },
  {
    id: 4,
    name: "Helen Guo",
    category: "Programming",
    feedback:
      "Outstanding job! Every request I made was fulfilled to my satisfaction, and I am very pleased with the quality of work provided.",
    image: "/static/images/grid.svg",
    rating: "/static/images/stars1.svg",
  },
  {
    id: 5,
    name: "Helen Guo",
    category: "Programming",
    feedback:
      "Outstanding job! Every request I made was fulfilled to my satisfaction, and I am very pleased with the quality of work provided.",
    image: "/static/images/grid.svg",
    rating: "/static/images/stars1.svg",
  },
  {
    id: 6,
    name: "Helen Guo",
    category: "Programming",
    feedback:
      "Outstanding job! Every request I made was fulfilled to my satisfaction, and I am very pleased with the quality of work provided.",
    image: "/static/images/grid.svg",
    rating: "/static/images/stars1.svg",
  },
];

const FeedbackGrid2: React.FC = () => {
  return (
    <section className="p-10">
      <div className="grid grid-cols-3 gap-6">
        {testimonials1.map((testimonial1) => (
          <div
            key={testimonial1.id}
            className="border-[2px] rounded-[15px] border-[#2E2F35] p-6 flex flex-col justify-between w-[410px] h-[238px]"
          >
            <div className="flex items-center mb-4">
              <Image
                src={testimonial1.image}
                alt="Profile"
                width={64}
                height={64}
                className="rounded-[100px]"
              />
              <div className="ml-4 flex flex-row">
                <div className="flex flex-col">
                <h3 className="font-[500] font-inter text-[15px] leading-[18px] text-[#2E2F35]">{testimonial1.name}</h3>
                <p className="font-poppins font-bold text-[12px] leading-[21px] text-[#2C2C2C]">{testimonial1.category}</p>
                </div>
                <Image
                src={testimonial1.rating}
                alt="Rating Stars"
                width={104}
                height={15}
                className="ml-[80px]"
              />
              </div>
            </div>
            <p className="w-[342px] h-[90px] font-poppins font-[400] text-[14px] leading-[23px] text-[#2C2C2C] ml-[10px]">{testimonial1.feedback}</p>
            
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-[15px] mt-[70px] justify-center">
              <Image
                src="/static/images/arrow1.svg"
                alt="left"
                width={38}
                height={42}
                className="cursor-pointer"
              />
              <Image
                src="/static/images/arrow2.svg"
                alt="left"
                width={38}
                height={42}
                className="cursor-pointer"
              />
            </div>
    </section>
  );
};

export default FeedbackGrid2;
