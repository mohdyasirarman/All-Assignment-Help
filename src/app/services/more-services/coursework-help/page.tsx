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
      question: "What is coursework help?",
      answer:
        "Coursework help refers to expert guidance and assistance provided to students in completing their coursework assignments, projects, and other academic tasks.",
    },
    {
      question: "Why is coursework help important?",
      answer:
        "Coursework help allows students to receive professional insights, ensure academic rigor, and improve their performance by submitting high-quality work.",
    },
    {
      question: "What types of coursework help are available?",
      answer:
        "Coursework help includes various services such as research, writing, editing, proofreading, formatting, and even expert consultations for specific subjects or assignments.",
    },
    {
      question: "How do I get coursework help?",
      answer:
        "To get coursework help, you can share your coursework details, select the desired service, and collaborate with an expert to complete the task successfully.",
    },
    {
      question: "Who uses coursework help?",
      answer:
        "Coursework help is used by students across different levels, from undergraduate to postgraduate, who need support with assignments, research, and projects.",
    },
    {
      question: "What are the benefits of using coursework help?",
      answer:
        "Coursework help improves academic performance, saves time, ensures original work, and provides students with expert guidance to enhance the quality of their assignments.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "No AI Content",
    title: "Coursework Help: Simplifying Tasks for Better Grades",
    description:
      "Expert guidance for coursework ensures high-quality, well-researched solutions that help you achieve academic success.",
    items: [
      "Every coursework is crafted by professionals, ensuring originality.",
      "Your Guide to Acing Coursework: Tailored Support for Your Success",
    ],
    buttonText: "Do My Coursework",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Expert Verification",
    title: "Expert Coursework Help: Ensuring Excellence and Accuracy",
    description:
      "Expert Coursework Help guarantees high-quality, verified solutions that offer clear insights and accuracy for your assignments.",
    items: [
      "Ensure top-quality coursework with expert help, providing precise, verified solutions.",
      "Receive expert-driven coursework assistance that ensures clarity and academic excellence.",
    ],
    buttonText: "Talk to Expert",
    isReversed: true,
  };

 

  const pricingFeatures = [
    {
      name: "Coursework Research",
      originalPrice: "20.99",
      discountedPrice: "FREE",
    },
    { name: "Formatting", originalPrice: "12.99", discountedPrice: "FREE" },
    {
      name: "Coursework Revision",
      originalPrice: "19.99",
      discountedPrice: "FREE",
    },
    {
      name: "Proofreading and Editing",
      originalPrice: "10.99",
      discountedPrice: "FREE",
    },
    {
      name: "Plagiarism Check",
      originalPrice: "14.99",
      discountedPrice: "FREE",
    },
    { name: "Unlimited Edits", originalPrice: "6.99", discountedPrice: "FREE" },
  ];

  const writingToolData = [
    {
      id: 1,
      title: "Coursework Analyzer",
      description:
        "Submit your coursework for in-depth analysis and get tailored insights and suggestions to improve your assignment.",
    },
    {
      id: 2,
      title: "Coursework Formatter",
      description:
        "Ensure your coursework is properly formatted, meeting academic standards with our specialized tool.",
    },
    {
      id: 3,
      title: "Data Solver",
      description:
        "Solve complex data problems and ensure accurate analysis for your coursework with our equation-solving tool.",
    },
    {
      id: 4,
      title: "Coursework Proofreader",
      description:
        "Make sure your coursework is flawless with our proofreading tool, eliminating spelling and grammar mistakes.",
    },
    {
      id: 5,
      title: "Grammar Checker",
      description:
        "Improve your coursework's readability and eliminate grammatical errors with our advanced grammar checker.",
    },
    {
      id: 6,
      title: "Word Counter",
      description:
        "Track the word count, paragraph count, and more to ensure your coursework meets all requirements.",
    },
    {
      id: 7,
      title: "Coursework Builder",
      description:
        "Build a well-structured, professional coursework assignment with our easy-to-use builder tool.",
    },
    {
      id: 8,
      title: "Other Tools",
      description:
        "Explore additional tools for citation generation, project summaries, and more to enhance your coursework.",
    },
  ];

  return (
    <div className="w-full ">
      <HeroSectionNew
        changeInH={"Expert Solutions for Your Coursework Challenges"}
        changeInP={"Get expert help for your coursework assignments."}
        isboy={false}
      />
      <AcademicNeeds
        title="We Cover All Your Coursework Needs"
        buttons={[
          "Finish My Coursework",
          "Get Coursework Insights",
          "Ace My Presentation",
          "Write My Report",
          "Guide My Coursework",
          "Help with My Project",
          "Other Coursework Needs",
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "No AI",
            description:
              "All coursework is written by expert researchers, ensuring original, human-crafted content without bots.",
            number: "No AI",
          },
          {
            title: "24/7 Support",
            description:
              "Our team is available around the clock to assist with your coursework needs, no matter the time or question.",
            number: "24/7",
          },
          {
            title: "On Time",
            description:
              "We guarantee timely delivery of your coursework, maintaining high standards of reliability and trust.",
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
