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
      question: "What services do you provide?",
      answer:
        "I offer professional assignment help, including writing, editing, proofreading, formatting, and research assistance for a variety of subjects.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is simple. Share your assignment details, including requirements and deadlines, and I’ll provide a custom quote tailored to your needs.",
    },
    {
      question: "Who will work on my assignment?",
      answer:
        "Your assignment will be handled personally by me or by a trusted expert in the relevant field, ensuring top-quality results.",
    },
    {
      question: "Can you handle urgent assignments?",
      answer:
        "Yes, I specialize in managing tight deadlines without compromising the quality of work. Reach out for urgent assignment help anytime.",
    },
    {
      question: "Why should I use your service?",
      answer:
        "Our service ensures high-quality assignments delivered on time, helping you achieve better academic results with less stress.",
    },
    {
      question: "Who will do my assignment?",
      answer:
        "Your assignment will be handled by our team of experts with advanced degrees and extensive experience in academic writing.",
    },
    {
      question: "How do I request help with my assignment?",
      answer:
        "Getting started is simple. Share your assignment details and deadline with us, and we'll take care of the rest.",
    },
    {
      question: "Can you handle urgent assignment requests?",
      answer:
        "Yes, we are equipped to handle urgent assignment requests while maintaining high standards of quality.",
    },
    {
      question: "How do you ensure the originality of assignments?",
      answer:
        "Every assignment is crafted from scratch and thoroughly checked with advanced plagiarism detection tools to ensure 100% originality.",
    },
    {
      question: "How do you protect my privacy?",
      answer:
        "Your privacy is my top priority. All personal details and assignment-related information are kept confidential and never shared with third parties.",
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
              className="hover:saturate-200"
            >
              <stop offset="0.36" stopColor="#55C360" />
              <stop offset="1" stopColor="#2BAFFC" />
            </linearGradient>
          </defs>
        </svg>
        <div className="text-center font-poppins font-bold -ml-24 text-[43.6px] ">
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

export default FAQS;
