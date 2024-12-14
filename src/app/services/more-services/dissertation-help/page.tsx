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
      question: "What is dissertation help?",
      answer:
        "Dissertation help refers to expert assistance provided to students in completing their dissertations, including research, writing, editing, and formatting.",
    },
    {
      question: "Why is dissertation help important?",
      answer:
        "Dissertation help ensures high-quality research, expert guidance, and timely completion, which are essential for achieving academic success in your doctoral or master's program.",
    },
    {
      question: "What types of dissertation help are available?",
      answer:
        "Dissertation help includes research assistance, writing support, editing, proofreading, plagiarism checks, and expert consultations for specific dissertation chapters or sections.",
    },
    {
      question: "How do I get dissertation help?",
      answer:
        "To get dissertation help, share your dissertation requirements with us, select the service you need, and collaborate with an expert to complete your dissertation successfully.",
    },
    {
      question: "Who uses dissertation help?",
      answer:
        "Dissertation help is used by graduate and postgraduate students who need professional assistance with their dissertation research, writing, and submission process.",
    },
    {
      question: "What are the benefits of using dissertation help?",
      answer:
        "Dissertation help improves the quality of research, ensures professional writing, saves time, and helps students meet deadlines with well-structured, academically rigorous work.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "No AI Content",
    title: "Dissertation Help: Professional Guidance for Your Research Journey",
    description:
      "Expert dissertation help ensures high-quality research, structured writing, and the timely completion of your dissertation.",
    items: [
      "Every dissertation is written by professional researchers, ensuring originality and academic rigor.",
      "Get personalized dissertation support to meet your research goals and academic standards.",
    ],
    buttonText: "Do My Dissertation",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Expert Verification",
    title: "Expert Dissertation Help: Ensuring Quality and Accuracy",
    description:
      "Expert Dissertation Help guarantees thorough, high-quality solutions with a focus on academic excellence and clarity.",
    items: [
      "Receive comprehensive dissertation support from expert researchers and writers.",
      "Ensure top-quality research, writing, and formatting with our verified dissertation help.",
    ],
    buttonText: "Talk to an Expert",
    isReversed: true,
  };

 

  const pricingFeatures = [
    {
      name: "Dissertation Research",
      originalPrice: "25.99",
      discountedPrice: "FREE",
    },
    { name: "Formatting", originalPrice: "15.99", discountedPrice: "FREE" },
    {
      name: "Dissertation Revision",
      originalPrice: "19.99",
      discountedPrice: "FREE",
    },
    {
      name: "Proofreading and Editing",
      originalPrice: "12.99",
      discountedPrice: "FREE",
    },
    {
      name: "Plagiarism Check",
      originalPrice: "16.99",
      discountedPrice: "FREE",
    },
    { name: "Unlimited Edits", originalPrice: "8.99", discountedPrice: "FREE" },
  ];

  const writingToolData = [
    {
      id: 1,
      title: "Dissertation Analyzer",
      description:
        "Submit your dissertation for detailed analysis, receiving insights and suggestions for improvement.",
    },
    {
      id: 2,
      title: "Dissertation Formatter",
      description:
        "Ensure your dissertation meets academic standards with our formatting tool, designed for flawless presentation.",
    },
    {
      id: 3,
      title: "Data Solver",
      description:
        "Solve complex data problems and ensure accuracy in your dissertation research with our data-solving tool.",
    },
    {
      id: 4,
      title: "Dissertation Proofreader",
      description:
        "Eliminate grammar and spelling errors in your dissertation with our advanced proofreading tool.",
    },
    {
      id: 5,
      title: "Grammar Checker",
      description:
        "Improve readability and eliminate grammatical errors with our sophisticated grammar-checking tool.",
    },
    {
      id: 6,
      title: "Word Counter",
      description:
        "Track word count, paragraph count, and ensure your dissertation adheres to submission requirements.",
    },
    {
      id: 7,
      title: "Dissertation Builder",
      description:
        "Build a well-organized, structured dissertation using our easy-to-use dissertation builder tool.",
    },
    {
      id: 8,
      title: "Other Tools",
      description:
        "Explore additional tools for citation generation, project summaries, and more to enhance your dissertation.",
    },
  ];

  return (
    <div className="w-full">
      <HeroSectionNew
        changeInH={"Expert Solutions for Your Dissertation Challenges"}
        changeInP={"Get professional dissertation assistance to ensure academic success."}
        isboy={false}
      />
      <AcademicNeeds
        title="We Cover All Your Dissertation Needs"
        buttons={[
          "Finish My Dissertation",
          "Get Dissertation Insights",
          "Write My Dissertation Proposal",
          "Help with My Research",
          "Dissertation Editing and Proofreading",
          "Guide My Dissertation",
          "Other Dissertation Needs",
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "No AI",
            description:
              "All dissertations are written by expert researchers and writers, ensuring original, human-crafted content without bots.",
            number: "100% Original",
          },
          {
            title: "24/7 Support",
            description:
              "Our team is available around the clock to assist with your dissertation, no matter the time or question.",
            number: "24/7",
          },
          {
            title: "On Time",
            description:
              "We guarantee timely delivery of your dissertation, ensuring that you meet your deadlines with high-quality work.",
            number: "98% On-Time Delivery",
          },
        ]}
      />
      <ThingAboutUs section1={section1} section2={section2} />
      <HowItWorks  />
      <AffordablePrice pricingFeatures={pricingFeatures} />
      <WritingTool writingToolData={writingToolData} />
      <FAQS questions={question} />
      <UnlockExpertHelp />
      <Footer />
    </div>
  );
}
