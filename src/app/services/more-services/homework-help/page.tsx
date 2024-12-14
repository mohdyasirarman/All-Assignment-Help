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
      question: "What is homework help?",
      answer:
        "Homework help refers to expert assistance provided to students in completing their homework assignments, including research, writing, editing, and understanding difficult concepts.",
    },
    {
      question: "Why is homework help important?",
      answer:
        "Homework help ensures that students receive the support they need to complete their homework on time, understand challenging topics, and improve their academic performance.",
    },
    {
      question: "What types of homework help are available?",
      answer:
        "Homework help includes various services such as subject-specific tutoring, writing assistance, editing, research support, and even problem-solving help for assignments in math, science, and other subjects.",
    },
    {
      question: "How do I get homework help?",
      answer:
        "To get homework help, simply share your assignment details, select the service you need, and collaborate with an expert to complete your homework successfully.",
    },
    {
      question: "Who uses homework help?",
      answer:
        "Homework help is used by students from elementary to college level who need assistance with their homework assignments, including research, writing, and problem-solving.",
    },
    {
      question: "What are the benefits of using homework help?",
      answer:
        "Homework help improves academic performance, saves time, ensures original work, and provides students with expert guidance to understand complex topics and complete assignments efficiently.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "No AI Content",
    title: "Homework Help: Expert Guidance for Better Results",
    description:
      "Expert homework help ensures accurate solutions, thorough understanding, and the timely completion of your assignments.",
    items: [
      "Every homework task is handled by professionals, ensuring original and academically rigorous solutions.",
      "Get personalized homework support to help you understand the material and complete assignments with confidence.",
    ],
    buttonText: "Do My Homework",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Expert Verification",
    title: "Expert Homework Help: Ensuring Accuracy and Clarity",
    description:
      "Expert Homework Help guarantees precise, clear, and academically rigorous solutions to ensure the highest quality in your assignments.",
    items: [
      "Receive help from experienced tutors who provide clear explanations and accurate solutions.",
      "Ensure your homework is accurate, well-researched, and ready for submission with our verified help.",
    ],
    buttonText: "Talk to an Expert",
    isReversed: true,
  };

  const pricingFeatures = [
    {
      name: "Homework Research",
      originalPrice: "15.99",
      discountedPrice: "FREE",
    },
    { name: "Formatting", originalPrice: "10.99", discountedPrice: "FREE" },
    {
      name: "Homework Revision",
      originalPrice: "14.99",
      discountedPrice: "FREE",
    },
    {
      name: "Proofreading and Editing",
      originalPrice: "8.99",
      discountedPrice: "FREE",
    },
    {
      name: "Plagiarism Check",
      originalPrice: "12.99",
      discountedPrice: "FREE",
    },
    { name: "Unlimited Edits", originalPrice: "5.99", discountedPrice: "FREE" },
  ];

  const writingToolData = [
    {
      id: 1,
      title: "Homework Analyzer",
      description:
        "Submit your homework for in-depth analysis, receiving tailored insights and suggestions for improvement.",
    },
    {
      id: 2,
      title: "Homework Formatter",
      description:
        "Ensure your homework meets academic standards with our specialized formatting tool for flawless presentation.",
    },
    {
      id: 3,
      title: "Math Solver",
      description:
        "Solve complex math problems and equations with our advanced homework-solving tool for accurate answers.",
    },
    {
      id: 4,
      title: "Homework Proofreader",
      description:
        "Eliminate spelling and grammar errors in your homework with our advanced proofreading tool.",
    },
    {
      id: 5,
      title: "Grammar Checker",
      description:
        "Improve readability and eliminate grammatical errors with our sophisticated grammar checker.",
    },
    {
      id: 6,
      title: "Word Counter",
      description:
        "Track word count, paragraph count, and ensure your homework adheres to submission requirements.",
    },
    {
      id: 7,
      title: "Homework Builder",
      description:
        "Create well-structured homework assignments using our easy-to-use builder tool for organizing your tasks.",
    },
    {
      id: 8,
      title: "Other Tools",
      description:
        "Explore additional tools for citation generation, project summaries, and more to enhance your homework quality.",
    },
  ];

  return (
    <div className="w-full">
      <HeroSectionNew
        changeInH={"Expert Solutions for Your Homework Challenges"}
        changeInP={"Get professional help to ensure your homework is completed successfully."}
        isboy={false}
      />
      <AcademicNeeds
        title="We Cover All Your Homework Needs"
        buttons={[
          "Finish My Homework",
          "Get Homework Insights",
          "Solve My Math Problems",
          "Write My Essay",
          "Edit My Homework",
          "Help with My Project",
          "Other Homework Needs",
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "No AI",
            description:
              "All homework is completed by expert tutors and researchers, ensuring original, human-crafted content without bots.",
            number: "100%",
          },
          {
            title: "24/7 Support",
            description:
              "Our team is available round the clock to assist with your homework, no matter the time or query.",
            number: "24/7",
          },
          {
            title: "On Time",
            description:
              "We guarantee timely delivery of your homework, ensuring you meet your deadlines with high-quality work.",
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
