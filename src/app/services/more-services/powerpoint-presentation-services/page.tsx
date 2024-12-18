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
      question: "What is PowerPoint presentation help?",
      answer:
        "PowerPoint presentation help refers to expert assistance in creating, designing, and enhancing presentations, including content writing, slide design, and delivering impactful presentations.",
    },
    {
      question: "Why is PowerPoint presentation help important?",
      answer:
        "PowerPoint presentation help ensures that your presentation is professional, visually appealing, and effectively communicates your message, helping you impress your audience.",
    },
    {
      question: "What types of PowerPoint presentation help are available?",
      answer:
        "PowerPoint help includes content writing, slide design, formatting, visual enhancement, presentation coaching, and editing to improve the overall quality and impact of your slides.",
    },
    {
      question: "How do I get PowerPoint presentation help?",
      answer:
        "To get PowerPoint presentation help, share your presentation details, select the service you need, and collaborate with an expert to create an outstanding presentation.",
    },
    {
      question: "Who uses PowerPoint presentation help?",
      answer:
        "PowerPoint presentation help is used by students, professionals, and business owners who need assistance with creating presentations for academic, corporate, or personal purposes.",
    },
    {
      question: "What are the benefits of using PowerPoint presentation help?",
      answer:
        "PowerPoint presentation help improves slide design, ensures clarity of message, saves time, enhances visual appeal, and boosts the effectiveness of your presentation delivery.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "No AI Content",
    title: "PowerPoint Presentation Help: Professional Design and Content",
    description:
      "Expert PowerPoint presentation help ensures impactful design, engaging content, and a seamless flow that keeps your audience focused.",
    items: [
      "Every presentation is crafted by professional designers and writers, ensuring originality and clarity.",
      "Get personalized support to meet your presentation goals and audience expectations.",
    ],
    buttonText: "Create My Presentation",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Expert Verification",
    title: "Expert PowerPoint Help: Ensuring Visual Appeal and Clarity",
    description:
      "Expert PowerPoint Help guarantees top-notch designs, clear content, and a polished presentation to help you succeed.",
    items: [
      "Receive comprehensive PowerPoint design support from expert professionals.",
      "Ensure your slides are well-designed and engaging with our verified PowerPoint help.",
    ],
    buttonText: "Talk to an Expert",
    isReversed: true,
  };

  const pricingFeatures = [
    {
      name: "Slide Design",
      originalPrice: "25.99",
      discountedPrice: "FREE",
    },
    { name: "Formatting", originalPrice: "15.99", discountedPrice: "FREE" },
    {
      name: "Content Writing",
      originalPrice: "19.99",
      discountedPrice: "FREE",
    },
    {
      name: "Editing and Proofreading",
      originalPrice: "12.99",
      discountedPrice: "FREE",
    },
    {
      name: "Visual Enhancements",
      originalPrice: "16.99",
      discountedPrice: "FREE",
    },
    { name: "Unlimited Edits", originalPrice: "8.99", discountedPrice: "FREE" },
  ];

  const writingToolData = [
    {
      id: 1,
      title: "Presentation Analyzer",
      description:
        "Submit your presentation for detailed feedback and suggestions to enhance its impact and clarity.",
    },
    {
      id: 2,
      title: "Slide Formatter",
      description:
        "Ensure your PowerPoint slides meet design standards and are properly formatted for a professional look.",
    },
    {
      id: 3,
      title: "Data Visualizer",
      description:
        "Transform complex data into engaging visual representations for your PowerPoint slides.",
    },
    {
      id: 4,
      title: "Presentation Proofreader",
      description:
        "Eliminate spelling and grammar errors from your presentation with our advanced proofreading tool.",
    },
    {
      id: 5,
      title: "Grammar Checker",
      description:
        "Ensure your presentation is clear and error-free with our sophisticated grammar checker.",
    },
    {
      id: 6,
      title: "Word Counter",
      description:
        "Track word count and ensure your slides follow the optimal length for a focused presentation.",
    },
    {
      id: 7,
      title: "Slide Builder",
      description:
        "Create well-structured, organized slides using our easy-to-use PowerPoint builder tool.",
    },
    {
      id: 8,
      title: "Other Tools",
      description:
        "Explore additional tools for image resizing, chart creation, and more to elevate your PowerPoint presentation.",
    },
  ];

  return (
    <div className="w-full">
      <HeroSectionNew
        changeInH={"Expert Solutions for Presentation Challenges"}
        changeInP={"Get professional help to create a visually appealing and impactful presentation."}
        isboy={false}
      />
      <AcademicNeeds
        title="We Cover All Your PowerPoint Presentation Needs, "
        buttons={[
          "Design My Slides",
          "Get Presentation Insights",
          "Write My Presentation Script",
          "Help with My Visuals",
          "Presentation Editing and Proofreading",
          "Guide My Presentation",
          "Other Presentation Needs",
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "No AI",
            description:
              "All PowerPoint presentations are crafted by experts, ensuring original, human-crafted content without bots.",
            number: "100% ",
          },
          {
            title: "24/7 Support",
            description:
              "Our team is available 24/7 to assist with your PowerPoint presentation, no matter the time or query.",
            number: "24/7",
          },
          {
            title: "On Time",
            description:
              "We guarantee timely delivery of your PowerPoint presentation, ensuring you meet deadlines with high-quality slides.",
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
