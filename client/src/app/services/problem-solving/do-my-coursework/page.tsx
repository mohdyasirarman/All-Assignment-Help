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
      question: "What is the 'Do My Coursework' service?",
      answer:
        "'Do My Coursework' offers expert assistance in completing your coursework, including essays, research papers, case studies, and project reports across various subjects.",
    },
    {
      question: "Why should I use the 'Do My Coursework' service?",
      answer:
        "This service helps you achieve the best results on your coursework by providing expert guidance, saving you time, and ensuring your work meets academic standards.",
    },
    {
      question: "What types of coursework can I get help with?",
      answer:
        "We provide help with a wide range of coursework tasks, including essays, research papers, case studies, lab reports, and project-based assignments in various subjects.",
    },
    {
      question: "How does the 'Do My Coursework' service work?",
      answer:
        "Simply share your coursework details, choose the type of help you need, and let our experts guide you in completing your coursework effectively and on time.",
    },
    {
      question: "Who uses the 'Do My Coursework' service?",
      answer:
        "Students who need assistance with their coursework, whether it's an essay, research paper, or case study, use this service to improve their academic performance.",
    },
    {
      question:
        "What are the benefits of using the 'Do My Coursework' service?",
      answer:
        "Using this service helps you improve your grades, manage your time better, reduce stress, and ensure your coursework is completed to the highest academic standards.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "Expert Coursework Assistance",
    title: "Do My Coursework: Expert Guidance for Academic Success",
    description:
      "'Do My Coursework' provides expert support to help you complete your coursework on time and to the highest standard.",
    items: [
      "Get help with writing essays, research papers, and case studies.",
      "Receive personalized assistance for your lab reports, presentations, and project reports.",
    ],
    buttonText: "Get Coursework Help Now",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Verified Coursework Experts",
    title: "Expert Coursework Help: Achieve Your Academic Goals",
    description:
      "Work with verified coursework experts who specialize in various subjects to guide you through assignments and projects.",
    items: [
      "Benefit from expert strategies for writing essays and solving case studies.",
      "Get tailored advice to help you meet deadlines and deliver high-quality coursework.",
    ],
    buttonText: "Talk to a Coursework Expert",
    isReversed: true,
  };

  const pricingFeatures = [
    {
      name: "Full Coursework Assistance",
      originalPrice: "149.99",
      discountedPrice: "FREE",
    },
    { name: "Essay Help", originalPrice: "99.99", discountedPrice: "FREE" },
    {
      name: "Research Paper Assistance",
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
    {
      name: "Unlimited Coursework Help",
      originalPrice: "199.99",
      discountedPrice: "FREE",
    },
  ];

  const writingToolData = [
    {
      id: 1,
      title: "Coursework Analyzer",
      description:
        "Submit your coursework for detailed feedback on structure, content, and areas for improvement.",
    },
    {
      id: 2,
      title: "Time Management Tool",
      description:
        "Use our tool to manage your time effectively and ensure all coursework tasks are completed on time.",
    },
    {
      id: 3,
      title: "Research Planner",
      description:
        "Plan and organize your research process with our interactive coursework tool.",
    },
    {
      id: 4,
      title: "Essay Writing Assistant",
      description:
        "Get expert help with writing essays, reports, and coursework using clear and concise language.",
    },
    {
      id: 5,
      title: "Coursework Proofreader",
      description:
        "Ensure your coursework is error-free and meets academic standards with our proofreading tool.",
    },
    {
      id: 6,
      title: "Case Study Guide",
      description:
        "Receive expert help on writing and analyzing case studies for your coursework.",
    },
    {
      id: 7,
      title: "Citation Generator",
      description:
        "Generate proper citations and references for your coursework to ensure academic integrity.",
    },
    {
      id: 8,
      title: "Other Tools",
      description:
        "Explore additional tools like grammar checkers, writing tips, and formatting aids to complete your coursework.",
    },
  ];

  const customExperts = [
    {
      name: "Jane Smith",
      expertise: "Mathematics",
      description: "Expert in advanced calculus and statistical analysis.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2010,
      orderInProgress: 3,
      location: "Singapore",
      rating: "4.9/5",
      about:
        "Experienced mathematician specializing in problem-solving and data modeling.",
    },
    {
      name: "Michael Brown",
      expertise: "Computer Science",
      description:
        "Specialized in AI, machine learning, and big data analytics.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2015,
      orderInProgress: 4,
      location: "US",
      rating: "4.7/5",
      about:
        "Innovative computer scientist focusing on artificial intelligence and cutting-edge technology.",
    },
    {
      name: "Emily Davis",
      expertise: "Chemistry",
      description:
        "Focused on organic synthesis and material science research.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2012,
      orderInProgress: 2,
      location: "UK",
      rating: "4.6/5",
      about:
        "Chemistry expert with a passion for creating novel materials and advancing chemical processes.",
    },
    {
      name: "David Wilson",
      expertise: "Economics",
      description: "Expert in macroeconomic policy and financial markets.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2014,
      orderInProgress: 3,
      location: "India",
      rating: "4.8/5",
      about:
        "Economist with extensive experience in global financial systems and policy formulation.",
    },
    {
      name: "Sarah Johnson",
      expertise: "Biology",
      description: "Specialized in molecular biology and genetic engineering.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2016,
      orderInProgress: 5,
      location: "US",
      rating: "5.0/5",
      about:
        "Biologist with expertise in genetic research and advancements in molecular techniques.",
    },
    {
      name: "William Martinez",
      expertise: "Environmental Science",
      description: "Focused on climate change modeling and sustainability.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2011,
      orderInProgress: 2,
      location: "Canada",
      rating: "4.7/5",
      about:
        "Environmental scientist dedicated to finding sustainable solutions for climate challenges.",
    },
    {
      name: "Olivia Taylor",
      expertise: "Psychology",
      description: "Expert in cognitive behavioral therapy and mental health.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2013,
      orderInProgress: 4,
      location: "UK",
      rating: "4.9/5",
      about:
        "Psychologist specializing in therapeutic approaches for mental wellness and personal growth.",
    },
    {
      name: "Alexander Moore",
      expertise: "Astrophysics",
      description:
        "Researcher in black holes, dark matter, and the origins of the universe.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2010,
      orderInProgress: 1,
      location: "US",
      rating: "4.6/5",
      about:
        "Astrophysicist with a deep focus on space phenomena and the mysteries of the cosmos.",
    },
    {
      name: "Sophia Anderson",
      expertise: "Education",
      description:
        "Specialized in curriculum development and learning strategies.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2014,
      orderInProgress: 2,
      location: "Australia",
      rating: "4.8/5",
      about:
        "Education expert designing innovative teaching methods to enhance learning outcomes.",
    },
    {
      name: "Ethan Carter",
      expertise: "Philosophy",
      description: "Expert in ethics, logic, and existential theories.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2015,
      orderInProgress: 1,
      location: "US",
      rating: "4.9/5",
      about:
        "Philosopher passionate about exploring the depths of human thought and moral dilemmas.",
    },
    {
      name: "Isabella Lee",
      expertise: "Literature",
      description:
        "Focused on contemporary literary analysis and creative writing.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2013,
      orderInProgress: 3,
      location: "UK",
      rating: "4.7/5",
      about:
        "Literature expert with a love for analyzing modern texts and fostering creative expression.",
    },
    {
      name: "Lucas Harris",
      expertise: "Engineering",
      description: "Specialized in robotics and automation systems.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2012,
      orderInProgress: 2,
      location: "Germany",
      rating: "4.8/5",
      about:
        "Engineer focused on developing intelligent machines and enhancing automation across industries.",
    },
    {
      name: "Amelia Scott",
      expertise: "Sociology",
      description: "Expert in urban sociology and social behavior analysis.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2011,
      orderInProgress: 3,
      location: "Canada",
      rating: "4.6/5",
      about:
        "Sociologist with a keen interest in understanding social structures and urban dynamics.",
    },
    {
      name: "Benjamin Evans",
      expertise: "Political Science",
      description: "Focused on international relations and public policy.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2014,
      orderInProgress: 4,
      location: "US",
      rating: "4.7/5",
      about:
        "Political scientist analyzing global trends and shaping policies for international cooperation.",
    },
    {
      name: "Charlotte Thompson",
      expertise: "Art History",
      description: "Specialized in Renaissance and modern art movements.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2016,
      orderInProgress: 2,
      location: "Italy",
      rating: "5.0/5",
      about:
        "Art historian with a deep appreciation for cultural evolution and iconic art periods.",
    },
    {
      name: "Daniel King",
      expertise: "Law",
      description: "Expert in corporate law and intellectual property.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2010,
      orderInProgress: 3,
      location: "US",
      rating: "4.9/5",
      about:
        "Corporate lawyer with a specialization in intellectual property rights and business law.",
    },
    {
      name: "Grace White",
      expertise: "Archaeology",
      description: "Researcher in ancient civilizations and cultural heritage.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2012,
      orderInProgress: 1,
      location: "Egypt",
      rating: "4.8/5",
      about:
        "Archaeologist committed to preserving ancient history and discovering lost civilizations.",
    },
    {
      name: "Liam Rodriguez",
      expertise: "Marketing",
      description: "Specialized in digital marketing and brand strategy.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2015,
      orderInProgress: 3,
      location: "Brazil",
      rating: "4.7/5",
      about:
        "Marketing expert helping brands enhance their presence through strategic digital initiatives.",
    },
    {
      name: "Chloe Walker",
      expertise: "Nutrition",
      description: "Focused on dietetics and sports nutrition.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2013,
      orderInProgress: 2,
      location: "US",
      rating: "4.9/5",
      about:
        "Nutritionist dedicated to optimizing health through personalized diet and nutrition plans.",
    },
    {
      name: "Noah Phillips",
      expertise: "History",
      description: "Expert in medieval history and historical preservation.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2011,
      orderInProgress: 3,
      location: "UK",
      rating: "4.8/5",
      about:
        "Historian specializing in medieval periods and the conservation of cultural landmarks.",
    },
  ];

  return (
    <div className="w-full">
      <HeroSectionNew
        changeInH={"Expert Coursework Help for Success"}
        changeInP={
          "Get professional assistance to complete your coursework with excellence."
        }
        isboy={false}
      />
      <AcademicNeeds
        title="We Cover Your Coursework Needs "
        buttons={[
          "Get Coursework Help Now",
          "Request Essay Help",
          "Research Paper Assistance",
          "Case Study Help",
          "Lab Report Help",
          "Time Management for Coursework",
          "Other Coursework Help",
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "No AI",
            description:
              "All coursework assistance is provided by verified experts, ensuring genuine, human-driven support.",
            number: "100% ",
          },
          {
            title: "24/7 Support",
            description:
              "Our team is available 24/7 to assist with your coursework, no matter the time or stage of the process.",
            number: "24/7",
          },
          {
            title: "On Time",
            description:
              "We guarantee timely coursework help and assistance, ensuring you meet all deadlines.",
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
