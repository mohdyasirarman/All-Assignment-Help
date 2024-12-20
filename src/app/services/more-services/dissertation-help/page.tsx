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
        changeInH={"Expert Solutions for Dissertation Challenges"}
        changeInP={"Get professional dissertation assistance to ensure academic success."}
        isboy={false}
      />
      <AcademicNeeds
        title="We Cover All  Dissertation Needs, "
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
            number: "100%",
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
            number: "98% ",
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
