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
import Experts from "@/components/landing-page/experts";

export default function Page() {
  const question = [
    {
      question: "What is the 'Do My Homework' service?",
      answer:
        "'Do My Homework' offers expert assistance in completing your homework, including essays, math problems, case studies, and other tasks across various subjects.",
    },
    {
      question: "Why should I use the 'Do My Homework' service?",
      answer:
        "This service helps you achieve the best results on your homework by providing expert guidance, saving you time, and ensuring your work meets academic standards.",
    },
    {
      question: "What types of homework can I get help with?",
      answer:
        "We provide help with a wide range of homework tasks, including essays, math problems, case studies, lab reports, and project-based assignments in various subjects.",
    },
    {
      question: "How does the 'Do My Homework' service work?",
      answer:
        "Simply share your homework details, choose the type of help you need, and let our experts guide you in completing your homework effectively and on time.",
    },
    {
      question: "Who uses the 'Do My Homework' service?",
      answer:
        "Students who need assistance with their homework, whether it's an essay, math problem, or case study, use this service to improve their academic performance.",
    },
    {
      question: "What are the benefits of using the 'Do My Homework' service?",
      answer:
        "Using this service helps you improve your grades, manage your time better, reduce stress, and ensure your homework is completed to the highest academic standards.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "Expert Homework Assistance",
    title: "Do My Homework: Expert Guidance for Academic Success",
    description:
      "'Do My Homework' provides expert support to help you complete your homework on time and to the highest standard.",
    items: [
      "Get help with writing essays, solving math problems, and case studies.",
      "Receive personalized assistance for your lab reports, presentations, and other homework tasks.",
    ],
    buttonText: "Get Homework Help Now",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Verified Homework Experts",
    title: "Expert Homework Help: Achieve Your Academic Goals",
    description:
      "Work with verified homework experts who specialize in various subjects to guide you through assignments and tasks.",
    items: [
      "Benefit from expert strategies for writing essays and solving homework problems.",
      "Get tailored advice to help you meet deadlines and deliver high-quality homework.",
    ],
    buttonText: "Talk to a Homework Expert",
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
        "Submit your homework for detailed feedback on structure, content, and areas for improvement.",
    },
    {
      id: 2,
      title: "Time Management Tool",
      description:
        "Use our tool to manage your time effectively and ensure all homework tasks are completed on time.",
    },
    {
      id: 3,
      title: "Research Planner",
      description:
        "Plan and organize your research process with our interactive homework tool.",
    },
    {
      id: 4,
      title: "Essay Writing Assistant",
      description:
        "Get expert help with writing essays, reports, and homework using clear and concise language.",
    },
    {
      id: 5,
      title: "Homework Proofreader",
      description:
        "Ensure your homework is error-free and meets academic standards with our proofreading tool.",
    },
    {
      id: 6,
      title: "Case Study Guide",
      description:
        "Receive expert help on writing and analyzing case studies for your homework.",
    },
    {
      id: 7,
      title: "Citation Generator",
      description:
        "Generate proper citations and references for your homework to ensure academic integrity.",
    },
    {
      id: 8,
      title: "Other Tools",
      description:
        "Explore additional tools like grammar checkers, writing tips, and formatting aids to complete your homework.",
    },
  ];

  const customExperts = [
    {
      name: "Jane Smith",
      qualification: "Ph.D. in Mathematics",
      description: "Expert in advanced calculus and statistical analysis.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Michael Brown",
      qualification: "Masters in Computer Science",
      description: "Specialized in AI, machine learning, and big data analytics.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Emily Davis",
      qualification: "Masters in Chemistry",
      description: "Focused on organic synthesis and material science research.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "David Wilson",
      qualification: "Ph.D. in Economics",
      description: "Expert in macroeconomic policy and financial markets.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Sarah Johnson",
      qualification: "Masters in Biology",
      description: "Specialized in molecular biology and genetic engineering.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "William Martinez",
      qualification: "Ph.D. in Environmental Science",
      description: "Focused on climate change modeling and sustainability.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Olivia Taylor",
      qualification: "Masters in Psychology",
      description: "Expert in cognitive behavioral therapy and mental health.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Alexander Moore",
      qualification: "Ph.D. in Astrophysics",
      description: "Researcher in black holes, dark matter, and the origins of the universe.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Sophia Anderson",
      qualification: "Masters in Education",
      description: "Specialized in curriculum development and learning strategies.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Ethan Carter",
      qualification: "Ph.D. in Philosophy",
      description: "Expert in ethics, logic, and existential theories.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Isabella Lee",
      qualification: "Masters in Literature",
      description: "Focused on contemporary literary analysis and creative writing.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Lucas Harris",
      qualification: "Masters in Engineering",
      description: "Specialized in robotics and automation systems.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Amelia Scott",
      qualification: "Ph.D. in Sociology",
      description: "Expert in urban sociology and social behavior analysis.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Benjamin Evans",
      qualification: "Masters in Political Science",
      description: "Focused on international relations and public policy.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Charlotte Thompson",
      qualification: "Ph.D. in Art History",
      description: "Specialized in Renaissance and modern art movements.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Daniel King",
      qualification: "Masters in Law",
      description: "Expert in corporate law and intellectual property.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Grace White",
      qualification: "Ph.D. in Archaeology",
      description: "Researcher in ancient civilizations and cultural heritage.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Liam Rodriguez",
      qualification: "Masters in Marketing",
      description: "Specialized in digital marketing and brand strategy.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Chloe Walker",
      qualification: "Masters in Nutrition",
      description: "Focused on dietetics and sports nutrition.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Noah Phillips",
      qualification: "Ph.D. in History",
      description: "Expert in medieval history and historical preservation.",
      image: "/static/images/headphoneGirl.png",
    },
  ];

  return (
    <div className="w-full">
      <HeroSectionNew
        changeInH={"Expert Homework Help for Success"}
        changeInP={"Get professional assistance to complete your homework with excellence."}
        isboy={false}
      />
      <AcademicNeeds
        title="We Cover Your Homework Needs "
        buttons={[
          "Get Homework Help Now",
          "Request Essay Help",
          "Math Problem Assistance",
          "Case Study Help",
          "Lab Report Help",
          "Time Management for Homework",
          "Other Homework Help",
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "No AI",
            description:
              "All homework assistance is provided by verified experts, ensuring genuine, human-driven support.",
            number: "100% ",
          },
          {
            title: "24/7 Support",
            description:
              "Our team is available 24/7 to assist with your homework, no matter the time or stage of the process.",
            number: "24/7",
          },
          {
            title: "On Time",
            description:
              "We guarantee timely homework help and assistance, ensuring you meet all deadlines.",
            number: "98% ",
          },
        ]}
      />
       <Experts experts={customExperts} />
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
