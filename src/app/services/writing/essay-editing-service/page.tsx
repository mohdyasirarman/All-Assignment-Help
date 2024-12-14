import WhyStudentTrustUs from "@/components/landing-page/whyStudentTrustUs";
import UnlockExpertHelp from "@/components/landing-page/unlockExpertHelp";
import Footer from "@/components/common/footer";
import AcademicNeeds from "@/components/landing-page/academicneeds";
import ThingAboutUs from "@/components/landing-page/thingaboutus";
import HowItWorks from "@/components/landing-page/howitworks";
import WritingTool from "@/components/landing-page/writingTool";
import FAQS from "@/components/landing-page/faq";
import AffordablePrice from "@/components/landing-page/affordableprice";
import HeroSectionNew from "@/components/landing-page/HeroSectionNew";

export default function Page() {
  const question = [
    {
      question: "What is the 'Essay Editing Service'?",
      answer:
        "Our 'Essay Editing Service' connects you with expert editors who help you improve the structure, grammar, and clarity of your essays, making sure they meet academic standards.",
    },
    {
      question: "Why should I choose this service?",
      answer:
        "If you're looking to perfect your essay, our service is the perfect choice. We provide professional editing to ensure your work is polished and error-free.",
    },
    {
      question: "What types of essays can I get edited?",
      answer:
        "We offer editing for all types of essays, including research papers, argumentative essays, descriptive essays, and more. We cover a wide range of subjects like English, Business, and Science.",
    },
    {
      question: "How does it work?",
      answer:
        "Simply upload your essay, specify your requirements, and one of our expert editors will review and improve your work. We guarantee quality and quick turnaround.",
    },
    {
      question: "Who uses this service?",
      answer:
        "Students, professionals, and anyone looking to improve their essays use our editing service to ensure their work is clear, concise, and free from errors.",
    },
    {
      question: "What are the benefits of using this service?",
      answer:
        "The benefits include expert editing to ensure your essay is polished, grammar and spelling corrections, enhanced readability, and faster turnaround, all at an affordable price.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "Professional Essay Editing",
    title: "Essay Editing: Perfect Your Work Before Submission",
    description:
      "Our professional essay editors will help you refine your essay, ensuring it meets high academic standards.",
    items: [
      "Professional editing to improve grammar, structure, and flow.",
      "Get expert suggestions to enhance the quality of your writing.",
    ],
    buttonText: "Get Your Essay Edited Now",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Expert Essay Editors",
    title: "Edit Your Essays with Expert Help",
    description:
      "Work with experienced editors who ensure your essays are error-free and meet academic requirements.",
    items: [
      "Editing to enhance clarity, readability, and structure.",
      "Timely feedback to help you submit your work on time.",
    ],
    buttonText: "Start Editing Now",
    isReversed: true,
  };

  const pricingFeatures = [
    {
      name: "Full Essay Editing",
      originalPrice: "99.99",
      discountedPrice: "FREE",
    },
    { name: "Basic Essay Edit", originalPrice: "79.99", discountedPrice: "FREE" },
    {
      name: "Research Paper Edit",
      originalPrice: "109.99",
      discountedPrice: "FREE",
    },
    {
      name: "Report Editing",
      originalPrice: "89.99",
      discountedPrice: "FREE",
    },
    {
      name: "Exam Essay Editing",
      originalPrice: "69.99",
      discountedPrice: "FREE",
    },
    { name: "Unlimited Essay Editing", originalPrice: "129.99", discountedPrice: "FREE" },
  ];

  const writingToolData = [
    {
      id: 1,
      title: "Essay Feedback Tracker",
      description:
        "Track the feedback provided on your essay edits and improvements over time.",
    },
    {
      id: 2,
      title: "Grammar & Style Guide",
      description:
        "Follow a simple guide to improve your grammar and style for perfect essay writing.",
    },
    {
      id: 3,
      title: "Quick Editing Checklist",
      description:
        "Use this checklist to ensure your essay meets all editing requirements before submission.",
    },
    {
      id: 4,
      title: "Citation Review Tool",
      description:
        "Get help with reviewing and correcting your citations to match academic standards.",
    },
    {
      id: 5,
      title: "Time-Saving Editing Tips",
      description:
        "Learn how to edit your essay faster with tips that help streamline the editing process.",
    },
    {
      id: 6,
      title: "Instant Grammar Checker",
      description:
        "Use an instant grammar tool to spot errors and fix them quickly for a polished essay.",
    },
    {
      id: 7,
      title: "Final Submission Check",
      description:
        "Before submitting, use this tool to check if your essay is ready for submission.",
    },
    {
      id: 8,
      title: "More Editing Tools",
      description:
        "Explore additional tools designed to help you with all aspects of essay editing.",
    },
  ];

  return (
    <div className="w-full">
      <HeroSectionNew
        changeInH={"Essay Editing: Perfect Essays with Experts"}
        changeInP={"Get editing for essays and improve chances of success."}
        isboy={false}
      />
      <AcademicNeeds
        title="Get Professional Help with Your Essay Editing"
        buttons={[
          "Request Essay Editing Now",
          "Submit Your Essay for Editing",
          "Get Research Paper Editing Assistance",
          "Report Editing Service",
          "Exam Essay Editing Help",
          "Review Your Essay Before Submission",
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "Expert Editing, Affordable Prices",
            description:
              "We provide professional editing services to polish your essays and meet academic requirements.",
            number: "100%",
          },
          {
            title: "Available Anytime",
            description:
              "Our expert editors are available 24/7 to help you refine your essays and meet your deadlines.",
            number: "24/7",
          },
          {
            title: "Timely Delivery",
            description:
              "We guarantee timely editing, so your essays are always submitted on time, even for last-minute deadlines.",
            number: "98%",
          },
        ]}
      />
      <ThingAboutUs section1={section1} section2={section2} />
      <HowItWorks />
      <AffordablePrice pricingFeatures={pricingFeatures} />
      <WritingTool writingToolData={writingToolData} />
      <FAQS questions={question} />
      <UnlockExpertHelp />
      <Footer />
    </div>
  );
}
