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
      question: "What is the 'Assessment Help' service?",
      answer:
        "'Assessment Help' offers expert assistance in preparing for and completing your academic assessments, including exams, assignments, quizzes, and projects.",
    },
    {
      question: "Why should I use the 'Assessment Help' service?",
      answer:
        "This service ensures that you can achieve the best results on your assessments, with the help of professionals who can guide you in studying, answering questions, and completing tasks effectively.",
    },
    {
      question: "What types of assessments can I get help with?",
      answer:
        "We provide assistance with a wide range of assessments, including exams, coursework, quizzes, projects, and even group assignments across different academic fields.",
    },
    {
      question: "How does the 'Assessment Help' service work?",
      answer:
        "Simply share your assessment details, choose the type of assistance you need, and let our experts guide you in completing your task or preparing for your assessment.",
    },
    {
      question: "Who uses the 'Assessment Help' service?",
      answer:
        "Students, working professionals, and anyone who needs help preparing for or completing academic assessments use this service to ensure high performance.",
    },
    {
      question: "What are the benefits of using the 'Assessment Help' service?",
      answer:
        "Using this service helps you manage your time effectively, boosts your performance, reduces stress, and ensures that your assessments are completed to the highest standard.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "Expert Assessment Assistance",
    title: "Assessment Help: Professional Support for Academic Success",
    description:
      "'Assessment Help' ensures you get expert guidance in preparing for and completing your academic assessments, helping you achieve your academic goals with ease.",
    items: [
      "Get expert help in preparing for exams, completing assignments, and tackling quizzes.",
      "Receive personalized assistance for your coursework, projects, and group assessments.",
    ],
    buttonText: "Get Assessment Help Now",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Verified Assessment Experts",
    title: "Expert Assessment Help: Master Your Academic Challenges",
    description:
      "Work with verified professionals who specialize in guiding students through various types of academic assessments, ensuring top performance.",
    items: [
      "Benefit from expert strategies for exam preparation and assignment completion.",
      "Receive tailored advice to help you meet deadlines and achieve excellent results.",
    ],
    buttonText: "Talk to an Assessment Expert",
    isReversed: true,
  };

  const pricingFeatures = [
    {
      name: "Full Assessment Assistance",
      originalPrice: "149.99",
      discountedPrice: "FREE",
    },
    { name: "Exam Preparation", originalPrice: "99.99", discountedPrice: "FREE" },
    {
      name: "Assignment Assistance",
      originalPrice: "89.99",
      discountedPrice: "FREE",
    },
    {
      name: "Quiz Help",
      originalPrice: "49.99",
      discountedPrice: "FREE",
    },
    {
      name: "Project Support",
      originalPrice: "129.99",
      discountedPrice: "FREE",
    },
    { name: "Unlimited Assessment Help", originalPrice: "199.99", discountedPrice: "FREE" },
  ];

  const writingToolData = [
    {
      id: 1,
      title: "Assessment Analyzer",
      description:
        "Submit your past assessments for detailed feedback on how to improve your performance in future tasks.",
    },
    {
      id: 2,
      title: "Time Management Tool",
      description:
        "Use our tool to manage your time effectively during assessments, ensuring you complete all tasks within deadlines.",
    },
    {
      id: 3,
      title: "Practice Quizzer",
      description:
        "Test your knowledge with practice quizzes tailored to your assessment topics.",
    },
    {
      id: 4,
      title: "Assignment Proofreader",
      description:
        "Ensure your assignments are error-free and meet academic standards with our proofreading tool.",
    },
    {
      id: 5,
      title: "Exam Strategy Guide",
      description:
        "Learn expert strategies for tackling exams, managing stress, and improving your performance.",
    },
    {
      id: 6,
      title: "Assessment Practice Sessions",
      description:
        "Get personalized practice sessions for upcoming exams or assignments to prepare effectively.",
    },
    {
      id: 7,
      title: "Project Assistance",
      description:
        "Receive guidance and expert help on your academic projects, from concept to final submission.",
    },
    {
      id: 8,
      title: "Other Tools",
      description:
        "Explore additional tools like citation generators, writing tips, and formatting aids to help with your assessments.",
    },
  ];

  return (
    <div className="w-full">
      <HeroSectionNew
        changeInH={"Expert Assessment Help for Success"}
        changeInP={"Get  assistance to prepare for and complete your  assessments with ease."}
        isboy={false}
      />
      <AcademicNeeds
        title="We Cover All Your Assessment Needs"
        buttons={[
          "Get Assessment Help Now",
          "Request Exam Preparation",
          "Assignment Assistance",
          "Project Support",
          "Quiz Help",
          "Time Management for Assessments",
          "Other Assessment Help",
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "No AI",
            description:
              "All assessment assistance is provided by verified experts, ensuring genuine, human-driven support.",
            number: "100% ",
          },
          {
            title: "24/7 Support",
            description:
              "Our team is available 24/7 to assist with your assessments, no matter the time or stage of the process.",
            number: "24/7",
          },
          {
            title: "On Time",
            description:
              "We guarantee timely assessment help and assistance, ensuring you meet all deadlines.",
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
