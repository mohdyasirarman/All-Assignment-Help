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

const FAQS: React.FC<FAQSProps> = ({ questions }) => {
  const defaultFAQs: FAQ[] = [
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    },
    {
      question: "Where can I get some?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      question: "Is Lorem Ipsum safe to use?",
      answer:
        "Yes, Lorem Ipsum is safe to use as placeholder text for design and layout purposes.",
    },
    {
      question: "How do I customize it?",
      answer:
        "You can generate Lorem Ipsum text online using various generators that let you specify the length and type of text.",
    },
  ];

  const faqsToRender =
    questions && questions.length > 0 ? questions : defaultFAQs;

  const midIndex = Math.ceil(faqsToRender.length / 2);
  const leftFAQs = faqsToRender.slice(0, midIndex);
  const rightFAQs = faqsToRender.slice(midIndex);

  return (
    <div className="mb-[250px] w-full my-20">
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
              fill-opacity="0.8"
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
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              <stop offset="0.36" stop-color="#55C360" />
              <stop offset="1" stop-color="#2BAFFC" />
            </linearGradient>
          </defs>
        </svg>
        <div className="text-center font-poppins font-bold -ml-24 text-[43.6px]  ">
          FAQs
        </div>
      </div>

      <div className=" flex justify-between px-28  gap-10 text-[#303A42] text-lg font-bold">
        <div className="w-1/2">
          <Accordion type="single" collapsible className="w-full">
            {leftFAQs.map((faq, index) => (
              <AccordionItem value={`left-${index}`} key={`left-${index}`}>
                <AccordionTrigger className="flex justify-between items-center pt-6 pb-3 border-gray-200 focus:text-[#09B14F]">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="pb-6 font-normal text-sm border-b-[#3F3F3F] border-gray-200 transition-all duration-300 ease-in-out">
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
                <AccordionTrigger className="flex justify-between items-center pt-6 pb-3 border-gray-200 focus:text-[#09B14F]">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="pb-6 font-normal text-sm border-b-[#3F3F3F] border-gray-200 transition-all duration-300 ease-in-out">
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

export default FAQS;
