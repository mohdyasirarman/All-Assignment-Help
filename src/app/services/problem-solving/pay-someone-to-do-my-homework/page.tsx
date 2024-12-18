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
      question: "What is the 'Pay Someone to Do My Homework' service?",
      answer:
        "Our 'Pay Someone to Do My Homework' service connects you with professional experts who can take care of your homework assignments across various subjects, ensuring top-quality results and timely submission.",
    },
    {
      question: "Why should I pay someone to do my homework?",
      answer:
        "By paying experts to complete your homework, you save time, reduce stress, and guarantee that your assignments are completed to the highest academic standards. Let us handle the hard work while you focus on other priorities.",
    },
    {
      question: "What types of homework can I pay someone to do?",
      answer:
        "We offer professional help with all types of homework, from essays and math problems to case studies, lab reports, and more. No matter the subject or complexity, we’ve got you covered.",
    },
    {
      question: "How does the 'Pay Someone to Do My Homework' service work?",
      answer:
        "Simply submit your homework details, choose your expert, and pay for the service. Our qualified professionals will complete your assignments on time, ensuring you get the best possible grade.",
    },
    {
      question: "Who uses this 'Pay Someone to Do My Homework' service?",
      answer:
        "Students who want to save time, manage their academic workload, or need expert help with their homework rely on our service to get professional results and boost their academic performance.",
    },
    {
      question: "What are the benefits of paying someone to do my homework?",
      answer:
        "When you pay someone to handle your homework, you benefit from higher grades, faster task completion, reduced stress, and the assurance that your work is done to the highest academic standards.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "Professional Homework Assistance",
    title: "Pay Someone to Do My Homework: Let Experts Handle It",
    description:
      "Don’t stress over homework anymore. Pay someone to handle your assignments and get the expert help you need to succeed.",
    items: [
      "Get expert help with writing essays, solving math problems, and completing case studies.",
      "Our professionals will help you with lab reports, presentations, and other complex homework tasks.",
    ],
    buttonText: "Pay for Homework Help Now",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Qualified Homework Experts",
    title: "Professional Homework Help: Your Path to Success",
    description:
      "Get matched with top-rated homework experts who specialize in various subjects. No matter the task, our team will ensure it's completed perfectly.",
    items: [
      "Expert help with writing essays, solving math problems, and other homework tasks.",
      "Get high-quality, timely help from verified homework experts who are ready to tackle your assignments.",
    ],
    buttonText: "Hire a Homework Expert Now",
    isReversed: true,
  };

  const pricingFeatures = [
    {
      name: "Full Homework Assistance",
      originalPrice: "149.99",
      discountedPrice: "FREE",
    },
    { name: "Essay Help", originalPrice: "99.99", discountedPrice: "FREE" },
    {
      name: "Math Problem Assistance",
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
    { name: "Unlimited Homework Help", originalPrice: "199.99", discountedPrice: "FREE" },
  ];

  const writingToolData = [
    {
      id: 1,
      title: "Homework Analyzer",
      description:
        "Get expert feedback on your homework structure and content to ensure you're on the right track before submission.",
    },
    {
      id: 2,
      title: "Time Management Tool",
      description:
        "Keep your homework organized and make sure you meet deadlines with our effective time management tool.",
    },
    {
      id: 3,
      title: "Research Planner",
      description:
        "Organize your research process step-by-step with our interactive planning tool to make your homework easier.",
    },
    {
      id: 4,
      title: "Essay Writing Assistant",
      description:
        "Get help from experts who will guide you through writing essays and homework tasks clearly and concisely.",
    },
    {
      id: 5,
      title: "Homework Proofreader",
      description:
        "Ensure that your homework is error-free and polished before submission with our expert proofreading service.",
    },
    {
      id: 6,
      title: "Case Study Guide",
      description:
        "Receive professional assistance in writing and analyzing case studies for your homework assignments.",
    },
    {
      id: 7,
      title: "Citation Generator",
      description:
        "Generate correct citations and references to maintain academic integrity in your homework assignments.",
    },
    {
      id: 8,
      title: "Other Tools",
      description:
        "Explore additional tools such as grammar checkers, writing tips, and formatting aids to perfect your homework.",
    },
  ];

  return (
    <div className="w-full">
      <HeroSectionNew
        changeInH={"Pay Someone to Do Homework"}
        changeInP={"Hire experts to complete your homework on time and to the highest standards."}
        isboy={false}
      />
      <AcademicNeeds
        title="All Your Homework Needs Covered "
        buttons={[
          "Pay for Homework Help Now",
          "Request Essay Help",
          "Math Problem Assistance",
          "Case Study Help",
          "Lab Report Help",
          "Homework Time Management",
          "Other Homework Help",
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "No AI, Just Human Expertise",
            description:
              "All homework is handled by experienced, human experts. We don’t use AI, so you can trust that your work is in capable hands.",
            number: "100% ",
          },
          {
            title: "24/7 Support",
            description:
              "Our team is available around the clock, ready to assist you with your homework whenever you need it.",
            number: "24/7",
          },
          {
            title: "Timely Delivery",
            description:
              "We guarantee on-time homework delivery so you never miss a deadline again.",
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
