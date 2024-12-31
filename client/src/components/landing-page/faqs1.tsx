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
        "question": "What is Assignment Help and why is it the best service for students?",
        "answer":
          "Assignment Help is a platform that provides expert academic assistance in various subjects. It helps students achieve better grades with high-quality, plagiarism-free work delivered on time. Our service stands out due to its reliability, affordability, and expert team.",
      },
      {
        "question": "What is your favorite feature of Assignment Help?",
        "answer":
          "Our favorite feature is the expert assistance from highly qualified professionals. Whether it's essays, research papers, or presentations, students receive guidance from industry experts, ensuring they get the best academic support.",
      },
      {
        "question": "How do you submit an assignment for help?",
        "answer":
          "Submitting an assignment for help is easy. You can simply upload your assignment details, along with any specific instructions, through our website. Our experts will review it and get in touch with you to ensure your needs are met.",
      },
      {
        "question": "Why is Assignment Help the best service for assignments?",
        "answer":
          "We pride ourselves on providing custom-written, high-quality assignments tailored to each student's requirements. Our quick turnaround times, affordable pricing, and expert knowledge make us the go-to choice for students seeking assistance.",
      },
      {
        "question": "What is Assignment Help and why is it the best service for students?",
        "answer":
          "Assignment Help is a professional service that assists students with their assignments across various academic disciplines. With experienced experts, we offer personalized and timely assistance that guarantees students top-notch grades.",
      },
      {
        "question": "What is your favorite feature of Assignment Help?",
        "answer":
          "One of the standout features is our 24/7 customer support. Students can get help anytime, ensuring they're never alone in their academic journey. We’re always available to guide students through their assignments, revisions, or any concerns.",
      },
      {
        "question": "How do you submit an assignment for help?",
        "answer":
          "Submitting your assignment is simple. You can fill out a form with assignment details and any additional instructions you may have. You will then be matched with an expert who will provide assistance based on your requirements.",
      },
      {
        "question": "Why is Assignment Help the best service for assignments?",
        "answer":
          "Our team of experts is dedicated to delivering high-quality, custom assignments that adhere to the highest academic standards. We ensure every assignment is thoroughly researched, well-written, and delivered on time, ensuring students’ success.",
      }
    ]
    
  
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
  