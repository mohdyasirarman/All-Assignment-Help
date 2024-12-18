"use client";
import React, { useRef } from "react";
import Image from "next/image";

const testimonials1 = [
  {
    id: 1,
    name: "Helen Guo",
    category: "Programming",
    feedback:
      "Amazing experience! The project was delivered with high standards and met my expectations perfectly.",
    image: "/static/images/grid.svg",
    rating: "/static/images/stars1.svg",
  },
  {
    id: 2,
    name: "John Doe",
    category: "Design",
    feedback:
      "I couldn't be more satisfied. The design was modern and clean, just what I needed for my project.",
    image: "/static/images/grid.svg",
    rating: "/static/images/stars1.svg",
  },
  {
    id: 3,
    name: "Alice Brown",
    category: "Writing",
    feedback:
      "The content delivered was of exceptional quality and really helped me in boosting my website's performance.",
    image: "/static/images/grid.svg",
    rating: "/static/images/stars1.svg",
  },
  {
    id: 4,
    name: "Chris Green",
    category: "SEO",
    feedback:
      "Highly recommended! The SEO services improved my search ranking significantly and brought in more traffic.",
    image: "/static/images/grid.svg",
    rating: "/static/images/stars1.svg",
  },
  {
    id: 5,
    name: "Eva Smith",
    category: "Marketing",
    feedback:
      "Great results! Their marketing strategy helped increase my online visibility and customer engagement.",
    image: "/static/images/grid.svg",
    rating: "/static/images/stars1.svg",
  },
];

const testimonials2 = [
  {
    id: 1,
    name: "David Lee",
    category: "Development",
    feedback:
      "Fantastic work! The application is now running smoothly, and I can see the results of the effort put in.",
    image: "/static/images/grid.svg",
    rating: "/static/images/stars1.svg",
  },
  {
    id: 2,
    name: "Olivia White",
    category: "Consulting",
    feedback:
      "Very insightful! Their consulting services helped me streamline my business processes and improve efficiency.",
    image: "/static/images/grid.svg",
    rating: "/static/images/stars1.svg",
  },
  {
    id: 3,
    name: "James Clark",
    category: "Development",
    feedback:
      "The software developed was top-notch and exceeded my expectations. Truly a professional team.",
    image: "/static/images/grid.svg",
    rating: "/static/images/stars1.svg",
  },
  {
    id: 4,
    name: "Sophia Adams",
    category: "Design",
    feedback:
      "The user interface design is clean and intuitive. I love how everything looks and feels.",
    image: "/static/images/grid.svg",
    rating: "/static/images/stars1.svg",
  },
  {
    id: 5,
    name: "Michael Johnson",
    category: "Programming",
    feedback:
      "They delivered the solution on time, and the code quality was impeccable. Highly recommend their services.",
    image: "/static/images/grid.svg",
    rating: "/static/images/stars1.svg",
  },
];

const FeedbackGrid: React.FC<{
  testimonials: typeof testimonials1;
  gridRef: React.RefObject<HTMLDivElement>;
}> = ({ testimonials, gridRef }) => {
  return (
    <div
      ref={gridRef}
      className="flex gap-6  pb-8 overflow-hidden"
    >
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
                <h3 className="font-[500] font-inter text-[15px] leading-[18px] text-[#2E2F35]">
                  {testimonial.name}
                </h3>
                <p className="font-poppins font-bold text-[12px] leading-[21px] text-[#2C2C2C]">
                  {testimonial.category}
                </p>
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
          <p className="w-[342px] h-[90px] font-poppins font-[400] text-[14px] leading-[23px] text-[#2C2C2C] ml-[10px]">
            {testimonial.feedback}
          </p>
        </div>
      ))}
    </div>
  );
};

const FeedbackGrid2: React.FC = () => {
  const gridRef1 = useRef<HTMLDivElement | null>(null);
  const gridRef2 = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    const gridRefs = [gridRef1, gridRef2];
    const scrollAmount = 410;
    gridRefs.forEach((gridRef) => {
      if (gridRef.current) {
        gridRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    });
  };

  return (
    <section className="py-16">
      <div className="relative mx-[120px]">
        <FeedbackGrid testimonials={testimonials1} gridRef={gridRef1} />
        <FeedbackGrid testimonials={testimonials2} gridRef={gridRef2} />
        <div className="flex flex-row gap-[15px] mt-[70px]  justify-center absolute top-[90%] left-0 right-0 transform -translate-y-1/2">
          <button onClick={() => handleScroll("left")}>
            <Image
              src="/static/images/arrow1.svg"
              alt="left"
              width={38}
              height={42}
              className="cursor-pointer"
            />
          </button>
          <button onClick={() => handleScroll("right")}>
            <Image
              src="/static/images/arrow2.svg"
              alt="right"
              width={38}
              height={42}
              className="cursor-pointer"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeedbackGrid2;
