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
      question: "What is the 'Thesis Help' service?",
      answer:
        "'Thesis Help' allows you to get expert assistance in writing, editing, or proofreading your thesis to ensure it meets academic standards and is ready for submission.",
    },
    {
      question: "Why should I use the 'Thesis Help' service?",
      answer:
        "The 'Thesis Help' service ensures that your thesis is professionally written, properly structured, and adheres to all required guidelines, saving you time and ensuring the best outcome.",
    },
    {
      question: "What types of thesis assistance are available?",
      answer:
        "Our experts provide help with topic selection, thesis writing, research assistance, data analysis, editing, and proofreading.",
    },
    {
      question: "How does the 'Thesis Help' service work?",
      answer:
        "Simply share your thesis requirements, choose the level of help you need, and let our expert guide you throughout the process, from initial drafts to final editing.",
    },
    {
      question: "Who uses the 'Thesis Help' service?",
      answer:
        "This service is designed for graduate and postgraduate students who need assistance in completing their thesis to meet academic requirements and deadlines.",
    },
    {
      question: "What are the benefits of using the 'Thesis Help' service?",
      answer:
        "Using this service will help you create a high-quality thesis, improve your research and writing skills, reduce stress, and ensure your thesis meets academic standards.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "Expert Thesis Assistance",
    title: "Thesis Help: Expert Guidance for Your Academic Success",
    description:
      "Our 'Thesis Help' service offers professional support to help you write a top-quality thesis, making sure you meet your academic goals and deadlines.",
    items: [
      "Get expert help in crafting and structuring your thesis to ensure it stands out.",
      "Receive personalized support for research, data analysis, writing, and editing.",
    ],
    buttonText: "Get Thesis Help Now",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Verified Thesis Experts",
    title: "Expert Thesis Help: Ensure Your Academic Excellence",
    description:
      "With professional guidance from verified thesis experts, your thesis will be clear, well-written, and in perfect form for submission.",
    items: [
      "Work with experienced professionals who specialize in thesis writing and research.",
      "Receive expert strategies and advice for organizing and structuring your thesis.",
    ],
    buttonText: "Talk to a Thesis Expert",
    isReversed: true,
  };

  const pricingFeatures = [
    {
      name: "Full Thesis Assistance",
      originalPrice: "199.99",
      discountedPrice: "FREE",
    },
    { name: "Thesis Editing", originalPrice: "99.99", discountedPrice: "FREE" },
    {
      name: "Research Assistance",
      originalPrice: "149.99",
      discountedPrice: "FREE",
    },
    {
      name: "Data Analysis Help",
      originalPrice: "129.99",
      discountedPrice: "FREE",
    },
    {
      name: "Thesis Proofreading",
      originalPrice: "79.99",
      discountedPrice: "FREE",
    },
    { name: "Unlimited Thesis Help", originalPrice: "249.99", discountedPrice: "FREE" },
  ];

  const writingToolData = [
    {
      id: 1,
      title: "Thesis Analyzer",
      description:
        "Submit your draft for detailed feedback on structure, content, and areas for improvement.",
    },
    {
      id: 2,
      title: "Research Planner",
      description:
        "Plan and organize your research process with our interactive research tool.",
    },
    {
      id: 3,
      title: "Literature Review Assistant",
      description:
        "Get help in crafting a comprehensive literature review for your thesis.",
    },
    {
      id: 4,
      title: "Data Analysis Tools",
      description:
        "Use our data analysis tools to help interpret and present your research data.",
    },
    {
      id: 5,
      title: "Writing Assistance",
      description:
        "Get expert help in writing sections of your thesis with clear and concise language.",
    },
    {
      id: 6,
      title: "Thesis Proofreader",
      description:
        "Ensure your thesis is error-free with our proofreading tool to finalize your submission.",
    },
    {
      id: 7,
      title: "Citation Generator",
      description:
        "Generate proper citations and references for your thesis to ensure academic integrity.",
    },
    {
      id: 8,
      title: "Other Tools",
      description:
        "Explore additional tools like grammar checkers, writing tips, and formatting aids to complete your thesis.",
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
        changeInH={"Expert Thesis Help for Academic Success"}
        changeInP={"Get professional assistance with writing, editing, and proofreading your thesis."}
        isboy={false}
      />
      <AcademicNeeds
        title="We Cover All Your Thesis Needs, "
        buttons={[
          "Get Thesis Help Now",
          "Request Thesis Editing",
          "Thesis Research Assistance",
          "Thesis Data Analysis",
          "Thesis Proofreading",
          "Thesis Writing Tips",
          "Other Thesis Help",
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "No AI",
            description:
              "All thesis assistance is provided by verified experts, ensuring genuine, human-driven support.",
            number: "100% ",
          },
          {
            title: "24/7 Support",
            description:
              "Our team is available 24/7 to assist with your thesis, no matter the time or stage of the process.",
            number: "24/7",
          },
          {
            title: "On Time",
            description:
              "We guarantee timely thesis help and assistance, ensuring you meet your submission deadlines.",
            number: "98% ",
          },
        ]}
      />
      <Experts  experts={customExperts} />
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
