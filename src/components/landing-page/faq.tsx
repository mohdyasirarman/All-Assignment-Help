import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = () => {
  const faqData = [
    {
      question: "Lorem x 6 ipsum dolor sit amet?",
      answer: "dshhbvds lorem ipsum dolor sit amet",
    },
    {
      question: "Lorem x 6 ipsum dolor sit amet?",
      answer: "dshhbvds lorem ipsum dolor sit amet",
    },
    {
      question: "Lorem x 6 ipsum dolor sit amet?",
      answer: "dshhbvds lorem ipsum dolor sit amet",
    },
    {
      question: "Lorem x 6 ipsum dolor sit amet?",
      answer: "dshhbvds lorem ipsum dolor sit amet",
    },
    {
      question: "Lorem x 6 ipsum dolor sit amet?",
      answer: "dshhbvds lorem ipsum dolor sit amet",
    },
    {
      question: "Lorem x 6 ipsum dolor sit amet?",
      answer: "dshhbvds lorem ipsum dolor sit amet",
    },
    {
      question: "Lorem x 6 ipsum dolor sit amet?",
      answer: "dshhbvds lorem ipsum dolor sit amet",
    },
    {
      question: "Lorem x 6 ipsum dolor sit amet?",
      answer: "dshhbvds lorem ipsum dolor sit amet",
    },
  ];
  return (
    <div className="">
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq, index) => (
          <AccordionItem value="" key={index}>
            <AccordionTrigger className="flex justify-between items-center py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
            </AccordionTrigger>
            <AccordionContent className="py-4 border-b border-gray-200">
              <p>{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQS;
