import React from "react";
import Image from "next/image";

type Testimonial = {
  id: number;
  name: string;
  category: string;
  feedback: string;
  image: string;
  rating: string;
};

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Helen Guo",
    category: "Programming",
    feedback:
      "Outstanding job! Every request I made was fulfilled to my satisfaction, and I am very pleased with the quality of work provided.",
    image: "/static/images/Profile_avatar_placeholder_large.png",
    rating: "3",
  },
  {
    id: 2,
    name: "John Smith",
    category: "Design",
    feedback:
      "Excellent work on the project! The attention to detail and creative solutions provided exceeded my expectations.",
    image: "/static/images/Profile_avatar_placeholder_large.png",
    rating: "4",
  },
  {
    id: 3,
    name: "Sarah Chen",
    category: "Development",
    feedback:
      "Very professional service with great communication throughout the entire process. Would definitely recommend!",
    image: "/static/images/Profile_avatar_placeholder_large.png",
    rating: "5",
  },
];

interface FeedbackGridProps {
    testimonials?: Testimonial[];
  className?: string;
  cardClassName?: string;
}

const FeedbackGrid: React.FC<FeedbackGridProps> = ({
  testimonials = defaultTestimonials,
  className = "px-24 py-16",
  cardClassName = "border-[2px] shadow-md hover:shadow-xl hover:scale-105 duration-500 rounded-[15px] border-[#2E2F35] p-6 flex flex-col justify-between w-[410px] h-[238px]",
}) => {
  const MAX_NAME_LENGTH = 20;
  const MAX_CATEGORY_LENGTH = 15;
  

  return (
    <section className={className}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={cardClassName}>
            <div className="flex items-center mb-4">
              <Image
                src={testimonial.image || "/static/images/Profile_avatar_placeholder_large.png"}
                alt={`${testimonial.name || "Anonymous"}'s profile`}
                width={64}
                height={64}
                className="rounded-full"
              />
              <div className="ml-5 flex flex-row">
                <div className="flex flex-col">
                  <h3 className="font-medium font-inter text-[15px] leading-[18px] text-[#2E2F35]">
                    {testimonial.name?.length > MAX_NAME_LENGTH
                      ? `${testimonial.name.substring(0, MAX_NAME_LENGTH)}...`
                      : testimonial.name || "Anonymous"}
                  </h3>
                  <p className="font-poppins font-bold text-[12px] leading-[21px] text-[#2C2C2C]">
                    {testimonial.category?.length > MAX_CATEGORY_LENGTH
                      ? `${testimonial.category.substring(
                          0,
                          MAX_CATEGORY_LENGTH
                        )}...`
                      : testimonial.category || "General"}
                  </p>
                </div>
                <div className="flex gap-1 ml-8 justify-between items-center">
                  {[...Array(Number(testimonial.rating))].map((_, index) => (
                  <Image
                    key={index}
                    src="/static/images/star.svg"
                    alt="Rating"
                    width={15}
                    height={16}
                  />
                ))}
                 <span className="ml-2">{`${testimonial.rating}/5`}</span>
                </div>
                
              </div>
            </div>
            <p className="w-[342px] h-[90px] font-poppins font-[400] text-[14px] leading-[23px] text-[#2C2C2C] ml-[10px] overflow-y-auto hide-scrollbar">
              {testimonial.feedback || "No feedback provided."}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeedbackGrid;
