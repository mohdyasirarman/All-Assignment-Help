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
      question: "What is a case study?",
      answer:
        "A case study is an in-depth analysis of a specific situation, event, or problem, used to explore and understand key issues or concepts in a real-world context.",
    },
    {
      question: "Why are case studies important?",
      answer:
        "Case studies provide detailed insights into complex issues, helping to analyze problems, generate solutions, and apply theoretical knowledge in practical scenarios.",
    },
    {
      question: "What types of case studies exist?",
      answer:
        "Case studies can be categorized into several types, including descriptive, exploratory, explanatory, and instrumental, each serving different research or educational purposes.",
    },
    {
      question: "How do you write a case study?",
      answer:
        "To write a case study, identify the issue, gather relevant data, analyze the problem, propose solutions, and present the findings in a structured format.",
    },
    {
      question: "Who uses case studies?",
      answer:
        "Case studies are commonly used by students, researchers, businesses, and educators to study specific situations, enhance problem-solving skills, and apply knowledge in practical ways.",
    },
    {
      question: "What are the benefits of using case studies?",
      answer:
        "Case studies offer practical, real-world applications of theory, develop critical thinking skills, and enhance understanding of complex issues and decision-making processes.",
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

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "No AI Content",
    title: "Case Study Help: Simplifying Problems for Clearer Insights",
    description:
      "Expert guidance for case studies helps solve complex problems with structured, high-quality solutions for success.",
    items: [
      "Every word is written by professionals, ensuring originality.",
      "Your Guide to Acing Case Studies: Tailored Support for Success",
    ],
    buttonText: "Do My Case Study",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Expert Verification",
    title: "Expert Case Study Help: Ensuring Excellence and Clarity",
    description:
      "Expert Case Study Help ensures verified, high-quality solutions with clear insights for your success.",
    items: [
      "Ensure top-quality case studies with expert help, providing clear, precise, and verified solutions.",
      "Receive verified, expert-driven case study help, ensuring clarity and excellence in every solution.",
    ],
    buttonText: "Talk to Expert",
    isReversed: true,
  };

  const pricingFeatures = [
    {
      name: "Case Study Analysis",
      originalPrice: "20.99",
      discountedPrice: "FREE",
    },
    { name: "Formatting", originalPrice: "12.99", discountedPrice: "FREE" },
    {
      name: "Case Study Revision",
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
      title: "Case Study Analyzer",
      description:
        "Submit your case study for in-depth analysis. Get unique solutions and insights tailored to your specific case.",
    },
    {
      id: 2,
      title: "Case Study Formatter",
      description:
        "Ensure your case study is perfectly formatted with our specialized tool, ready for submission or presentation.",
    },
    {
      id: 3,
      title: "Data Solver",
      description:
        "Solve complex data problems and ensure accurate analysis for your case study with our equation-solving tool.",
    },
    {
      id: 4,
      title: "Case Study Proofreader",
      description:
        "Don’t let grammar or spelling mistakes affect your case study. Try our proofreader for flawless writing.",
    },
    {
      id: 5,
      title: "Grammar Checker",
      description:
        "Eliminate grammatical errors and improve your case study's readability with our advanced grammar checker.",
    },
    {
      id: 6,
      title: "Word Counter",
      description:
        "Track the word count, paragraph count, and more to ensure your case study meets all requirements.",
    },
    {
      id: 7,
      title: "Case Study Builder",
      description:
        "Build a well-structured, professional case study with our easy-to-use case study builder tool.",
    },
    {
      id: 8,
      title: "Other Tools",
      description:
        "Explore additional tools for citation generation, project summaries, and more to enhance your case study.",
    },
  ];

  return (
    <div className="w-full ">
      <HeroSectionNew
        changeInH={"Expert Solutions for Case Study Challenges"}
        changeInP={"Expert guidance for case studies."}
        isboy={false}
      />
      <AcademicNeeds
        title="We Cover All Your Case Study Needs, "
        buttons={[
          "Finish My Case Study",
          "Get Case Study Insights",
          "Ace My Presentation",
          "Write My Report",
          "Guide My Case Study",
          "Help with My Project",
          "Other Case Study Needs",
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "No AI",
            description:
              "All case studies are written by expert researchers, ensuring original, human-crafted content without bots.",
            number: "No AI",
          },
          {
            title: "24/7 Support",
            description:
              "Our team is available round-the-clock to assist with your case study needs, no matter the time or question.",
            number: "24/7",
          },
          {
            title: "On Time",
            description:
              "We guarantee timely delivery of your case study, maintaining a high standard of reliability and trust.",
            number: "98%",
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
