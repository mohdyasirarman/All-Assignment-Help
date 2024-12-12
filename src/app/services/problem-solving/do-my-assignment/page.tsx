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
      question: "What is the 'Do My Assignment' service?",
      answer:
        "'Do My Assignment' offers expert assistance in completing your assignments, including essays, research papers, case studies, and problem-solving tasks across various subjects.",
    },
    {
      question: "Why should I use the 'Do My Assignment' service?",
      answer:
        "This service helps you achieve the best results on your assignments by providing expert guidance, saving you time, and ensuring your work meets academic standards.",
    },
    {
      question: "What types of assignments can I get help with?",
      answer:
        "We provide help with a wide range of assignments, including essays, research papers, case studies, lab reports, and problem-solving tasks in various subjects.",
    },
    {
      question: "How does the 'Do My Assignment' service work?",
      answer:
        "Simply share your assignment details, choose the type of help you need, and let our experts guide you in completing your assignment effectively and on time.",
    },
    {
      question: "Who uses the 'Do My Assignment' service?",
      answer:
        "Students who need assistance with their assignments, whether it's an essay, research paper, or case study, use this service to improve their academic performance.",
    },
    {
      question: "What are the benefits of using the 'Do My Assignment' service?",
      answer:
        "Using this service helps you improve your grades, manage your time better, reduce stress, and ensure your assignments are completed to the highest academic standards.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "Expert Assignment Assistance",
    title: "Do My Assignment: Expert Guidance for Academic Success",
    description:
      "'Do My Assignment' provides expert support to help you complete your assignments on time and to the highest standard.",
    items: [
      "Get help with writing essays, research papers, and case studies.",
      "Receive personalized assistance for your lab reports, presentations, and projects.",
    ],
    buttonText: "Get Assignment Help Now",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Verified Assignment Experts",
    title: "Expert Assignment Help: Achieve Your Academic Goals",
    description:
      "Work with verified assignment experts who specialize in various subjects to guide you through assignments and projects.",
    items: [
      "Benefit from expert strategies for writing essays and solving case studies.",
      "Get tailored advice to help you meet deadlines and deliver high-quality assignments.",
    ],
    buttonText: "Talk to an Assignment Expert",
    isReversed: true,
  };

  const pricingFeatures = [
    {
      name: "Full Assignment Assistance",
      originalPrice: "149.99",
      discountedPrice: "FREE",
    },
    { name: "Essay Help", originalPrice: "99.99", discountedPrice: "FREE" },
    {
      name: "Research Paper Assistance",
      originalPrice: "129.99",
      discountedPrice: "FREE",
    },
    {
      name: "Case Study Help",
      originalPrice: "109.99",
      discountedPrice: "FREE",
    },
    {
      name: "Lab Report Help",
      originalPrice: "79.99",
      discountedPrice: "FREE",
    },
    { name: "Unlimited Assignment Help", originalPrice: "199.99", discountedPrice: "FREE" },
  ];

  const writingToolData = [
    {
      id: 1,
      title: "Assignment Analyzer",
      description:
        "Submit your assignment for detailed feedback on structure, content, and areas for improvement.",
    },
    {
      id: 2,
      title: "Time Management Tool",
      description:
        "Use our tool to manage your time effectively and ensure all assignment tasks are completed on time.",
    },
    {
      id: 3,
      title: "Research Planner",
      description:
        "Plan and organize your research process with our interactive assignment tool.",
    },
    {
      id: 4,
      title: "Essay Writing Assistant",
      description:
        "Get expert help with writing essays, reports, and assignments using clear and concise language.",
    },
    {
      id: 5,
      title: "Assignment Proofreader",
      description:
        "Ensure your assignment is error-free and meets academic standards with our proofreading tool.",
    },
    {
      id: 6,
      title: "Case Study Guide",
      description:
        "Receive expert help on writing and analyzing case studies for your assignments.",
    },
    {
      id: 7,
      title: "Citation Generator",
      description:
        "Generate proper citations and references for your assignments to ensure academic integrity.",
    },
    {
      id: 8,
      title: "Other Tools",
      description:
        "Explore additional tools like grammar checkers, writing tips, and formatting aids to complete your assignments.",
    },
  ];

  return (
    <div className="w-full">
      <HeroSectionNew
        changeInH={"Expert Assignment Help for Success"}
        changeInP={"Get professional assistance to complete your assignments with excellence."}
        isboy={false}
      />
      <AcademicNeeds
        title="We Cover All Your Assignment Needs"
        buttons={[
          "Get Assignment Help Now",
          "Request Essay Help",
          "Research Paper Assistance",
          "Case Study Help",
          "Lab Report Help",
          "Time Management for Assignments",
          "Other Assignment Help",
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "No AI",
            description:
              "All assignment assistance is provided by verified experts, ensuring genuine, human-driven support.",
            number: "100% ",
          },
          {
            title: "24/7 Support",
            description:
              "Our team is available 24/7 to assist with your assignments, no matter the time or stage of the process.",
            number: "24/7",
          },
          {
            title: "On Time",
            description:
              "We guarantee timely assignment help and assistance, ensuring you meet all deadlines.",
            number: "98% ",
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
   