import React from "react";
import Image from "next/image";

const testimonials = [
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
  {
    id: 7,
    name: "Helen Guo",
    category: "Programming",
    feedback:
      "Outstanding job! Every request I made was fulfilled to my satisfaction, and I am very pleased with the quality of work provided.",
    image: "/static/images/grid.svg",
    rating: "/static/images/stars1.svg",
  },
  {
    id: 8,
    name: "Helen Guo",
    category: "Programming",
    feedback:
      "Outstanding job! Every request I made was fulfilled to my satisfaction, and I am very pleased with the quality of work provided.",
    image: "/static/images/grid.svg",
    rating: "/static/images/stars1.svg",
  },
  {
    id: 9,
    name: "Helen Guo",
    category: "Programming",
    feedback:
      "Outstanding job! Every request I made was fulfilled to my satisfaction, and I am very pleased with the quality of work provided.",
    image: "/static/images/grid.svg",
    rating: "/static/images/stars1.svg",
  },
];

const FeedbackGrid: React.FC = () => {
  return (
    <section className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="border-[2px] rounded-[15px] border-[#2E2F35] p-6 flex flex-col justify-between w-[410px] h-[238px]"
          >
            <div className="flex items-center mb-4">
              <Image
                src={testimonial.image}
                alt="Profile"
                width={64}
                height={64}
                className="rounded-[100px]"
              />
              <div className="ml-4 flex flex-row">
                <div className="flex flex-col">
                <h3 className="font-[500] font-inter text-[15px] leading-[18px] text-[#2E2F35]">{testimonial.name}</h3>
                <p className="font-poppins font-bold text-[12px] leading-[21px] text-[#2C2C2C]">{testimonial.category}</p>
                </div>
                <Image
                src={testimonial.rating}
                alt="Rating Stars"
                width={104}
                height={15}
                className="ml-[80px]"
              />
              </div>
            </div>
            <p className="w-[342px] h-[90px] font-poppins font-[400] text-[14px] leading-[23px] text-[#2C2C2C] ml-[10px]">{testimonial.feedback}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeedbackGrid;
