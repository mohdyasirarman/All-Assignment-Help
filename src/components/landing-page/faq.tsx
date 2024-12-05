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

const FAQS: React.FC<FAQSProps> = ({ questions = [] }) => {

  if (questions?.length === 0) {
    return (
      <div className="w-full my-20 text-center text-gray-500">
        <p>No FAQs available at the moment.</p>
      </div>
    );
  }

  const midIndex = Math.ceil(questions?.length / 2);
  const leftFAQs = questions?.slice(0, midIndex);
  const rightFAQs = questions?.slice(midIndex);

  return (
    <div className="w-full my-20">
      <div className="flex justify-between px-28 gap-10 text-[#303A42] text-lg font-bold">
        <div className="w-1/2">
          <Accordion type="single" collapsible className="w-full">
            {leftFAQs?.map((faq, index) => (
              <AccordionItem value={`left-${index}`} key={`left-${index}`}>
                <AccordionTrigger className="flex justify-between items-center pt-6 pb-3 border-gray-200 focus:text-[#09B14F]">
                  <h3 className="text-lg font-semibold">{faq?.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="pb-6 font-normal text-sm border-b-[#3F3F3F] border-gray-200 transition-all duration-300 ease-in-out">
                  <p>{faq?.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="w-1/2">
          <Accordion type="single" collapsible className="w-full">
            {rightFAQs?.map((faq, index) => (
              <AccordionItem value={`right-${index}`} key={`right-${index}`}>
                <AccordionTrigger className="flex justify-between items-center pt-6 pb-3 border-gray-200 focus:text-[#09B14F]">
                  <h3 className="text-lg font-semibold">{faq?.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="pb-6 font-normal text-sm border-b-[#3F3F3F] border-gray-200 transition-all duration-300 ease-in-out">
                  <p>{faq?.answer}</p>
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
