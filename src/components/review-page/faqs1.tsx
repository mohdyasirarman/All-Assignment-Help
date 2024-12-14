import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  type FAQ = {
    question: string;
    answer: string;
  };
  
  type FAQSProps = {
    questions?: FAQ[];
  };
  
  const FAQS1: React.FC<FAQSProps> = ({ questions }) => {
    const defaultFAQs: FAQ[] = [
      {
        question: "What is Webflow and why is it the best website builder?",
        answer:
          "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
      },
      {
        question: "What is your favorite template from BRIX Templates?",
        answer:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
      {
        question: "How do you clone a template from the Showcase?",
        answer:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
      },
      {
        question: "Why is BRIX Templates the best Webflow agency?",
        answer:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      },
      {
        question: "What is Webflow and why is it the best website builder?",
        answer:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      },
      {
        question: "What is your favorite template from BRIX Templates?",
        answer:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      },
      {
        question: "How do you clone a template from the Showcase?",
        answer:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      },
      {
        question: "Why is BRIX Templates the best Webflow agency?",
        answer:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      },
    ];
  
    const faqsToRender =
      questions && questions.length > 0 ? questions : defaultFAQs;
  
    const midIndex = Math.ceil(faqsToRender.length / 2);
    const leftFAQs = faqsToRender.slice(0, midIndex);
    const rightFAQs = faqsToRender.slice(midIndex);
  
    return (
      <div className="mb-[300px] w-full my-20">
        <div className="flex justify-center items-center ">
          <svg
            width="205"
            height="189"
            viewBox="0 0 205 189"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_422_839)">
              <ellipse
                cx="102.5"
                cy="94.3203"
                rx="43.5"
                ry="35"
                fill="url(#paint0_linear_422_839)"
                fillOpacity="0.8"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_422_839"
                x="0"
                y="0.320312"
                width="205"
                height="188"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="29.5"
                  result="effect1_foregroundBlur_422_839"
                />
              </filter>
              <linearGradient
                id="paint0_linear_422_839"
                x1="102.5"
                y1="59.3203"
                x2="102.5"
                y2="129.32"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.36" stopColor="#55C360" />
                <stop offset="1" stopColor="#2BAFFC" />
              </linearGradient>
            </defs>
          </svg>
          <div className="text-center font-poppins font-bold -ml-24 text-[43.6px]">
            FAQs
          </div>
        </div>
  
        <div className="flex justify-between px-28 gap-24 text-[#303A42] text-lg font-bold">
          <div className="w-1/2">
            <Accordion type="single" collapsible className="w-full">
              {leftFAQs.map((faq, index) => (
                <AccordionItem value={`left-${index}`} key={`left-${index}`}>
                  <AccordionTrigger className="flex justify-between items-center pt-6 hover:no-underline pb-3 font-sans border-gray-200 focus:text-[#2BAFFC] focus:outline-none focus:no-underline">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-[#303A42] font-normal text-sm border-b-[#3F3F3F] font-sans border-gray-200 transition-all duration-300 ease-in-out">
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="w-1/2">
            <Accordion type="single" collapsible className="w-full">
              {rightFAQs.map((faq, index) => (
                <AccordionItem value={`right-${index}`} key={`right-${index}`}>
                  <AccordionTrigger className="flex justify-between items-center hover:no-underline pt-6 pb-3 font-sans border-gray-200 focus:text-[#2BAFFC] focus:outline-none focus:no-underline">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-[#303A42] font-normal text-sm border-b-[#3F3F3F] font-sans border-gray-200 transition-all duration-300 ease-in-out">
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    );
  };
  
  export default FAQS1;
  