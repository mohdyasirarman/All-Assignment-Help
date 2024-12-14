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
      question: "What is the 'Affordable Essay Help'?",
      answer:
        "Our 'Affordable Essay Help' service connects you with experienced writers who help you get your essays done quickly, professionally, and at a price that fits your budget.",
    },
    {
      question: "Why should I choose this service?",
      answer:
        "If you need assistance with your essays but are on a tight budget, our service offers quality help at an affordable price, ensuring your work is completed on time.",
    },
    {
      question: "What types of essays can I get help with?",
      answer:
        "We assist with all types of essays, including argumentative essays, research papers, reports, and more. We offer help across all subjects like English, Business, Science, and beyond.",
    },
    {
      question: "How does it work?",
      answer:
        "Simply tell us the type of essay you need help with, share the deadline, and our experienced writers will complete the work. We ensure timely delivery and affordable rates.",
    },
    {
      question: "Who uses this service?",
      answer:
        "Students, professionals, and anyone needing quality, affordable writing assistance turn to our service to get essays done quickly without exceeding their budget.",
    },
    {
      question: "What are the benefits of using this service?",
      answer:
        "The key benefits are affordable rates, quick turnaround, and high-quality work that ensures you meet your deadlines without overspending.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "Affordable Essay Help",
    title: "Affordable Essay Help: Get Your Essays Done Without the High Cost",
    description:
      "Forget about pricey essay services. We provide reliable and affordable essay assistance, delivering quality work on time.",
    items: [
      "Affordable essay help for all types of assignments.",
      "Get your essays done quickly, without the steep price tag.",
    ],
    buttonText: "Get Affordable Essay Help Now",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Professional Essay Writers",
    title: "Fast, Professional, and Affordable Essay Help",
    description:
      "Work with skilled writers who provide quality essays at a price that won't break your bank. We ensure on-time delivery.",
    items: [
      "Affordable, professional writing assistance for essays and papers.",
      "Timely delivery, every time.",
    ],
    buttonText: "Get Help Now",
    isReversed: true,
  };

  const pricingFeatures = [
    {
      name: "Full Essay Help",
      originalPrice: "99.99",
      discountedPrice: "FREE",
    },
    { name: "Basic Essay Help", originalPrice: "79.99", discountedPrice: "FREE" },
    {
      name: "Research Paper Help",
      originalPrice: "109.99",
      discountedPrice: "FREE",
    },
    {
      name: "Report Writing Assistance",
      originalPrice: "89.99",
      discountedPrice: "FREE",
    },
    {
      name: "Affordable Exam Essay Help",
      originalPrice: "69.99",
      discountedPrice: "FREE",
    },
    { name: "Unlimited Essay Assistance", originalPrice: "129.99", discountedPrice: "FREE" },
  ];

  const writingToolData = [
    {
      id: 1,
      title: "Essay Progress Tracker",
      description:
        "Keep track of your essay progress and deadlines, ensuring you never forget crucial dates.",
    },
    {
      id: 2,
      title: "Time Management Tips",
      description:
        "Learn time-saving strategies so you can finish essays quickly without compromising on quality.",
    },
    {
      id: 3,
      title: "Quick Essay Planner",
      description:
        "Easily organize your essay ideas and outline, making the writing process smoother and faster.",
    },
    {
      id: 4,
      title: "Basic Citation Guide",
      description:
        "Get quick help with citing your sources properly, even for last-minute essays.",
    },
    {
      id: 5,
      title: "Deadline Reminders",
      description:
        "Set up automatic reminders to ensure you never miss an essay deadline, even during busy periods.",
    },
    {
      id: 6,
      title: "Instant Feedback Tool",
      description:
        "Get immediate feedback on your essays so you can make improvements before submission.",
    },
    {
      id: 7,
      title: "Grade Tracker",
      description:
        "Monitor your academic progress to ensure you're meeting all your essay and grade goals.",
    },
    {
      id: 8,
      title: "More Tools for Faster Essays",
      description:
        "Explore more tools that will help you finish essays quicker and more effectively, all without additional costs.",
    },
  ];

  return (
    <div className="w-full">
      <HeroSectionNew
        changeInH={"Essay Help: Professional Writing Assistance"}
        changeInP={"Get essays done quickly, affordably, professionally—no matter deadline."}
        isboy={false}
      />
      <AcademicNeeds
        title="Affordable Help for Your Essay Writing Needs"
        buttons={[
          "Request Affordable Essay Help Now",
          "Submit Your Essay for Assistance",
          "Get Research Paper Help",
          "Report Writing Help",
          "Exam Essay Writing Support",
          "Manage Your Essay Deadlines",
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "Affordable and Fast Help",
            description:
              "We offer fast and affordable help with essays and assignments without compromising on quality.",
            number: "100%",
          },
          {
            title: "Available Anytime",
            description:
              "Our experts are available 24/7 to provide writing assistance whenever you need it.",
            number: "24/7",
          },
          {
            title: "No Missed Deadlines",
            description:
              "We guarantee on-time delivery of your essays, even when time is tight.",
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
