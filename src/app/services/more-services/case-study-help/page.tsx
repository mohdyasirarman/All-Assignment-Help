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
      <HowItWorks  />
      <AffordablePrice pricingFeatures={pricingFeatures} />
      <WritingTool writingToolData={writingToolData} />
      <FAQS questions={question} />
      <UnlockExpertHelp />
      <Footer />
    </div>
  );
}
