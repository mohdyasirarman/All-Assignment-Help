
import React from "react";
import Image from "next/image";


interface SectionProps {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  items?: string[];
  buttonText?: string;
  buttonAction?: () => void;
  isReversed?: boolean;
}

const Section: React.FC<SectionProps> = ({
  imageSrc = "/static/images/thing1.svg",
  imageAlt = "Default Image",
  title = "No AI Content: 100% Human Expertise",
  description = "Every piece of content is created by skilled professionals, ensuring originality, creativity, and precision without relying on AI tools.", // Default description
  items = [
    "Every word is written by professionals, ensuring originality.",
    "Great ipsum dolor sit amet, consectetur adipiscing elit.",
  ],
  buttonText = "Do My Assignment",
  isReversed = false,
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row ${isReversed ? "lg:flex-row-reverse" : ""} items-center gap-10 lg:gap-20 mb-32`}
    >
      <div className="flex-shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={490}
          height={490}
          className="rounded-[24px]"
        />
      </div>

      <div className="text-center lg:text-left max-w-[500px]">
        <h3 className="text-[48px] leading-[57px] font-poppins font-bold text-[#010101] mt-10 mb-6 ">
          {title}
        </h3>
        <p className="text-[16px] text-[#666666] font-poppins leading-[24px] mb-6 font-[400]">
          {description}
        </p>
        {items.map((item, index) => (
          <div
            key={index}
            className="text-[15px] flex flex-row font-poppins leading-[21px] text-[#666666] font-[400] mb-6"
          >
            <Image
              src="/static/images/elements.svg"
              alt="Item Icon"
              width={19}
              height={19}
              className="rounded-[24px] mr-[5px]"
            />
            <p>{item}</p>
          </div>
        ))}
        <button className="bg-[#55C360] text-white text-[14px] font-semibold py-3 px-6 rounded-[40px]">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

  

interface ThingAboutUsProps {
  section1?: {
    imageSrc?: string;
    imageAlt?: string;
    title?: string;
    description?: string;
    items?: string[];
    buttonText?: string;
  };
  section2?: {
    imageSrc?: string;
    imageAlt?: string;
    title?: string;
    description?: string;
    items?: string[];
    buttonText?: string;
    isReversed?: boolean;
  };
}

const ThingAboutUs: React.FC<ThingAboutUsProps> = ({
  section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "No AI Content",
    title: "No AI Content: 100% Human Expertise",
    description: "Every piece of content is created by skilled professionals, ensuring originality, creativity, and precision without relying on AI tools.",
    items: [
      "Every word is written by professionals, ensuring originality.",
      "Great ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    buttonText: "Do My Assignment",
  },
  section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Expert Verification",
    title: "Expert Verification: Ensuring Excellence",
    description: "Every expert goes through a strict verification process, ensuring you receive the highest standard of assignments.",
    items: [
      "You’ll be only qualified professionals, verified through our rigorous process",
      "Guaranteed Top Quality",
    ],
    buttonText: "Talk to Expert",
    isReversed: true,
  },
}) => {
  return (
    <div className="bg-white py-10 px-5 flex flex-col items-center ">
      <svg
        width="40"
        height="40"
        viewBox="0 0 56 56"
        fill="none"
        className="absolute left-[52%] mb-24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 12C0 5.37258 5.37258 0 12 0H44C50.6274 0 56 5.37258 56 12V44C56 50.6274 50.6274 56 44 56H12C5.37258 56 0 50.6274 0 44V12Z"
          fill="#FFED9E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.0373 20.2895C15.9998 20.0661 16.0267 20.0327 16.2508 20.0182C16.5824 19.9966 16.9154 19.9982 17.248 19.9998C17.3357 20.0002 17.4233 20.0007 17.5108 20.0007C17.7338 20.0007 17.7448 20.0091 17.7782 20.2344C18.4509 24.765 22.0922 28.3283 26.6655 28.9154V35.1381C24.5967 35.5732 22.8818 36.9991 21.9293 38.8901C21.1323 40.4721 22.2486 42.3334 23.9439 42.3334H32.0538C33.7491 42.3334 34.8653 40.4721 34.0684 38.8901C33.1158 36.9991 31.401 35.5732 29.3322 35.1381V28.9157C33.9065 28.3295 37.549 24.7658 38.2218 20.2344C38.2553 20.0091 38.2662 20.0007 38.4892 20.0007C38.5767 20.0007 38.6644 20.0002 38.752 19.9998C39.0846 19.9982 39.4176 19.9966 39.7492 20.0182C39.9867 20.0336 39.9901 20.1312 39.9527 20.3474C39.9194 20.5342 39.8729 20.7509 39.8119 21.0343C39.4055 22.9207 38.53 24.5487 37.3768 25.74C36.8646 26.2691 36.8784 27.1132 37.4075 27.6254C37.9366 28.1375 38.7807 28.1238 39.2928 27.5947C40.8154 26.0217 41.9146 23.9362 42.4188 21.5958C42.429 21.5484 42.4393 21.5009 42.4497 21.4533C42.5509 20.9887 42.6532 20.5193 42.6655 20.0432C42.6808 19.4543 42.5438 18.8586 42.0962 18.3144C41.6212 17.7369 41.0111 17.5073 40.4317 17.4131C39.9435 17.3336 39.355 17.3338 38.7697 17.334L38.511 17.334C38.283 17.334 38.2722 17.326 38.2415 17.0932C38.2118 16.8682 38.1699 16.6476 38.1079 16.435C37.921 15.7935 37.5736 15.2689 37.0112 14.7547C35.8177 13.6634 34.436 13.6649 32.6619 13.6669H23.3381C21.564 13.6649 20.1823 13.6634 18.9888 14.7547C18.4264 15.2689 18.079 15.7935 17.8921 16.435C17.8302 16.6476 17.7882 16.8682 17.7585 17.0932C17.7279 17.326 17.7171 17.334 17.489 17.334L17.2303 17.334C16.645 17.3338 16.0566 17.3336 15.5683 17.4131C14.9889 17.5073 14.3788 17.7369 13.9038 18.3144C13.4562 18.8586 13.3192 19.4543 13.3345 20.0432C13.3466 20.5092 13.4599 21.0336 13.564 21.5158C14.0521 23.7778 15.089 25.923 16.7072 27.5947C17.2194 28.1238 18.0635 28.1375 18.5926 27.6254C19.1217 27.1132 19.1354 26.2691 18.6232 25.74C17.1837 24.2528 16.3865 22.3054 16.0373 20.2895Z"
          fill="#DB6E00"
        />
      </svg>
      <Section {...section1} />
      <Section {...section2} />
    </div>
  );
};

export default ThingAboutUs;
