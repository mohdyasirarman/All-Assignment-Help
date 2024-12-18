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
      question: "What is the 'Programming Assignment Help' service?",
      answer:
        "'Programming Assignment Help' connects you with experienced developers who will complete your programming tasks, from coding problems to full-fledged projects, with expert precision and on time.",
    },
    {
      question: "Why should I use programming assignment help?",
      answer:
        "Using professional help for your programming assignments ensures that your code is optimized, error-free, and meets the best practices, while you focus on mastering programming concepts and managing your time effectively.",
    },
    {
      question: "What types of programming assignments can I get help with?",
      answer:
        "Whether you need help with coding algorithms, data structures, web development, mobile apps, or database systems, we have experts in a variety of programming languages ready to assist.",
    },
    {
      question: "How does the 'Programming Assignment Help' service work?",
      answer:
        "Simply share your programming task details, select the expert, and place your order. Our developers will craft the solution according to your requirements and deliver it on time.",
    },
    {
      question: "Who uses the 'Programming Assignment Help' service?",
      answer:
        "Students, professionals, and anyone struggling with programming tasks or looking to save time and ensure quality in their code turn to our service for reliable, expert assistance.",
    },
    {
      question: "What are the benefits of using programming assignment help?",
      answer:
        "The benefits include receiving well-structured, error-free code, ensuring your assignment is completed on time, learning best practices, and saving valuable time for other tasks or studying.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "Expert Programming Assistance",
    title: "Programming Assignment Help: Experts at Your Service",
    description:
      "No need to stress over complex coding problems. Pay experts to solve your programming assignments and get the best results.",
    items: [
      "Get help with algorithms, data structures, and coding challenges.",
      "Receive assistance with web development, mobile app development, and more.",
    ],
    buttonText: "Get Programming Help Now",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Experienced Developers for Programming Tasks",
    title: "Programming Help: Code Your Way to Success",
    description:
      "Work with verified programming experts who specialize in various coding languages and frameworks to ensure your assignments are handled with precision.",
    items: [
      "Expert help with complex programming problems and software development tasks.",
      "Get help with debugging, optimization, and improving your code quality.",
    ],
    buttonText: "Hire a Programming Expert Now",
    isReversed: true,
  };

  const pricingFeatures = [
    {
      name: "Full Programming Assignment Help",
      originalPrice: "199.99",
      discountedPrice: "FREE",
    },
    { name: "Algorithm & Data Structure Help", originalPrice: "149.99", discountedPrice: "FREE" },
    {
      name: "Web Development Assistance",
      originalPrice: "179.99",
      discountedPrice: "FREE",
    },
    {
      name: "Mobile App Development Help",
      originalPrice: "189.99",
      discountedPrice: "FREE",
    },
    {
      name: "Debugging and Code Optimization",
      originalPrice: "129.99",
      discountedPrice: "FREE",
    },
    { name: "Unlimited Programming Help", originalPrice: "249.99", discountedPrice: "FREE" },
  ];

  const writingToolData = [
    {
      id: 1,
      title: "Code Validator",
      description:
        "Submit your code to ensure it's error-free and optimized for performance. Get instant feedback on your code's quality.",
    },
    {
      id: 2,
      title: "Time Management for Coders",
      description:
        "Manage your coding tasks efficiently and ensure that every programming project is completed on time.",
    },
    {
      id: 3,
      title: "Code Structure Planner",
      description:
        "Organize and plan your code structure before writing. Ensure your code is clean, modular, and maintainable.",
    },
    {
      id: 4,
      title: "Debugging Assistant",
      description:
        "Troubleshoot issues in your code and find bugs quickly with our expert debugging tool.",
    },
    {
      id: 5,
      title: "Optimization Guide",
      description:
        "Learn how to optimize your code for performance and scalability, with expert suggestions and techniques.",
    },
    {
      id: 6,
      title: "Project Planner",
      description:
        "Plan your coding projects step-by-step to ensure they are completed efficiently and according to the requirements.",
    },
    {
      id: 7,
      title: "Version Control Helper",
      description:
        "Get help with managing your code's version history using tools like Git to avoid conflicts and keep your codebase organized.",
    },
    {
      id: 8,
      title: "Other Programming Tools",
      description:
        "Explore additional tools like code formatters, linters, and documentation generators to improve your coding workflow.",
    },
  ];

  return (
    <div className="w-full">
      <HeroSectionNew
        changeInH={"Programming Help: Expert Code Solutions"}
        changeInP={"Let  programming experts take care of assignments, so you can focus on what matters."}
        isboy={false}
      />
      <AcademicNeeds
        title="Comprehensive Help for programming Needs "
        buttons={[
          "Get Programming Help",
          "Request Algo Help",
          "Web Development Assistance",
          "App Development Help",
          "Debugging & Code Optimization",
          "Time Management",
          "Other Programming Helps",
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "Real Developers, No Bots",
            description:
              "Your programming tasks are handled by experienced, verified developers, not AI. We ensure top-quality results.",
            number: "100% ",
          },
          {
            title: "Available Anytime",
            description:
              "Our experts are available 24/7 to assist you with your programming assignments, no matter when you need them.",
            number: "24/7",
          },
          {
            title: "On-Time Delivery Guaranteed",
            description:
              "We ensure your programming assignments are delivered on time, with no missed deadlines.",
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
