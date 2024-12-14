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
      question: "What is online exam help?",
      answer:
        "Online exam help refers to expert assistance in preparing for, taking, or managing online exams, ensuring you perform well and meet your academic goals.",
    },
    {
      question: "Why is online exam help important?",
      answer:
        "Online exam help provides guidance and support to ensure you understand the material, manage time efficiently, and deliver accurate answers under exam conditions.",
    },
    {
      question: "What types of online exam help are available?",
      answer:
        "Online exam help includes test preparation, time management tips, tutoring sessions, and even exam-taking assistance for specific subjects and exams.",
    },
    {
      question: "How do I get online exam help?",
      answer:
        "To get online exam help, share your exam details and requirements with us, and we will connect you with an expert who can guide you through the process or even take the exam on your behalf.",
    },
    {
      question: "Who uses online exam help?",
      answer:
        "Online exam help is used by students who need assistance with online tests, including time management, subject guidance, or complete test-taking support.",
    },
    {
      question: "What are the benefits of using online exam help?",
      answer:
        "Online exam help ensures you perform well, reduce stress, improve your understanding of exam topics, and save time by getting assistance with preparation or during the exam.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "Expert Assistance",
    title: "Online Exam Help: Expert Assistance for Your Test Success",
    description:
      "Professional online exam help ensures you are well-prepared, manage time effectively, and achieve your academic goals with confidence.",
    items: [
      "Receive expert help for various online exams, from preparation to taking the test itself.",
      "Get personalized support to meet your academic and test-taking goals.",
    ],
    buttonText: "Take My Online Exam",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Expert Verification",
    title: "Expert Exam Help: Ensuring Success in Online Tests",
    description:
      "Online exam help ensures you get top-quality support and guidance to succeed in your tests, whether it's for practice or during the actual exam.",
    items: [
      "Get help from verified experts with experience in your exam subjects.",
      "Benefit from time management tips and strategies for optimal exam performance.",
    ],
    buttonText: "Talk to an Expert",
    isReversed: true,
  };

  const pricingFeatures = [
    {
      name: "Test Preparation",
      originalPrice: "25.99",
      discountedPrice: "FREE",
    },
    { name: "Time Management Coaching", originalPrice: "15.99", discountedPrice: "FREE" },
    {
      name: "Subject Tutoring",
      originalPrice: "19.99",
      discountedPrice: "FREE",
    },
    {
      name: "Exam Taking Assistance",
      originalPrice: "12.99",
      discountedPrice: "FREE",
    },
    {
      name: "Practice Tests",
      originalPrice: "16.99",
      discountedPrice: "FREE",
    },
    { name: "Unlimited Assistance", originalPrice: "8.99", discountedPrice: "FREE" },
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
        changeInP={"Get professional help for online exam preparation or to take your exam successfully."}
        isboy={false}
      />
      <AcademicNeeds
        title="We Cover All Your Online Exam Needs"
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
