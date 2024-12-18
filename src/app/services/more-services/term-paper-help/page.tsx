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
      question: "What is the 'Take My Online Exam' service?",
      answer:
        "The 'Take My Online Exam' service allows you to hire an expert to take your online exam for you while ensuring top-notch performance and meeting your academic goals.",
    },
    {
      question: "Why should I use the 'Take My Online Exam' service?",
      answer:
        "This service ensures you can pass your online exams successfully by leveraging the expertise of professionals who can handle all aspects of the exam for you.",
    },
    {
      question: "What types of online exams can be taken with this service?",
      answer:
        "Our experts can take a variety of online exams across different subjects, including quizzes, tests, and final exams, for both academic and certification courses.",
    },
    {
      question: "How does the 'Take My Online Exam' service work?",
      answer:
        "Simply share your exam details, choose your preferred service level, and let our expert handle everything. We'll ensure that your exam is completed on time with excellent results.",
    },
    {
      question: "Who uses the 'Take My Online Exam' service?",
      answer:
        "Students, working professionals, and anyone with time constraints or needing assistance with online exams use this service to ensure high performance.",
    },
    {
      question: "What are the benefits of using the 'Take My Online Exam' service?",
      answer:
        "This service offers peace of mind by allowing you to outsource the stress of online exams, ensuring timely, accurate, and successful results without compromising quality.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "Expert Exam Assistance",
    title: "Take My Online Exam: Expert Assistance for Your Success",
    description:
      "Our 'Take My Online Exam' service guarantees top-notch performance on your online exams, ensuring your academic goals are achieved without the stress.",
    items: [
      "Let an expert take your online exam for you while you focus on other priorities.",
      "Get personalized support tailored to your exam needs and objectives.",
    ],
    buttonText: "Take My Online Exam Now",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Verified Experts",
    title: "Expert Exam Help: Ensuring Success in Your Online Exams",
    description:
      "With our expert exam assistance, you can rest assured that your online exam will be handled professionally, ensuring top performance.",
    items: [
      "Work with verified experts who specialize in taking online exams in various subjects.",
      "Benefit from strategies and time management tips to achieve the best results.",
    ],
    buttonText: "Talk to an Expert",
    isReversed: true,
  };

  const pricingFeatures = [
    {
      name: "Full Exam Assistance",
      originalPrice: "99.99",
      discountedPrice: "FREE",
    },
    { name: "Timed Exam Support", originalPrice: "49.99", discountedPrice: "FREE" },
    {
      name: "Instant Exam Help",
      originalPrice: "59.99",
      discountedPrice: "FREE",
    },
    {
      name: "Subject-Specific Assistance",
      originalPrice: "39.99",
      discountedPrice: "FREE",
    },
    {
      name: "Premium Exam Support",
      originalPrice: "79.99",
      discountedPrice: "FREE",
    },
    { name: "Unlimited Exam Help", originalPrice: "149.99", discountedPrice: "FREE" },
  ];

  const writingToolData = [
    {
      id: 1,
      title: "Exam Analyzer",
      description:
        "Submit your past exams for detailed feedback and suggestions to improve your exam-taking strategies and performance.",
    },
    {
      id: 2,
      title: "Time Management Tool",
      description:
        "Ensure you manage your time effectively during online exams with our interactive time management tool.",
    },
    {
      id: 3,
      title: "Subject Quizzer",
      description:
        "Test your knowledge with practice quizzes tailored to your upcoming online exam subjects.",
    },
    {
      id: 4,
      title: "Exam Proofreader",
      description:
        "Review and correct your answers before finalizing your online exam with our proofreader tool.",
    },
    {
      id: 5,
      title: "Test-Taking Strategies",
      description:
        "Learn expert strategies for taking online exams, managing stress, and achieving the best possible results.",
    },
    {
      id: 6,
      title: "Exam Practice Sessions",
      description:
        "Get personalized practice sessions and simulations to prepare for the actual exam experience.",
    },
    {
      id: 7,
      title: "Online Exam Helper",
      description:
        "Receive help from an expert during your online exam, ensuring you complete the test accurately and on time.",
    },
    {
      id: 8,
      title: "Other Tools",
      description:
        "Explore additional tools like essay grading, exam analysis, and study aids to enhance your exam preparation.",
    },
  ];

  return (
    <div className="w-full">
      <HeroSectionNew
        changeInH={"Expert Solutions for Online Exam Success"}
        changeInP={"Get professional help to take your online exam and achieve excellent results."}
        isboy={false}
      />
      <AcademicNeeds
        title="We Cover All Your Online Exam Needs, "
        buttons={[
          "Take My Online Exam",
          "Get Exam Preparation Help",
          "Online Exam Tutoring",
          "Help with Exam Strategy",
          "Practice My Exam",
          "Time Management for Exams",
          "Other Exam Assistance",
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "No AI",
            description:
              "All online exam assistance is provided by verified experts, ensuring genuine, human-driven support.",
            number: "100% ",
          },
          {
            title: "24/7 Support",
            description:
              "Our team is available 24/7 to assist with your online exams, no matter the time or question.",
            number: "24/7",
          },
          {
            title: "On Time",
            description:
              "We guarantee timely exam help and assistance, ensuring you meet all deadlines and perform your best.",
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
