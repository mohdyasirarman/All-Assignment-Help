import WhyStudentTrustUs from "@/components/landing-page/whyStudentTrustUs";
import UnlockExpertHelp from "@/components/landing-page/unlockExpertHelp";
import Footer from "@/components/common/footer";
import AcademicNeeds from "@/components/landing-page/academicneeds";
import ThingAboutUs from "@/components/landing-page/thingaboutus";
import HowItWorks from "@/components/landing-page/howitworks";
import FAQS from "@/components/landing-page/faq";
import AffordablePrice from "@/components/landing-page/affordableprice";
import HeroSectionNew from "@/components/landing-page/HeroSectionNew";
import WhatStudentSayAboutUs from "@/components/landing-page/whatStudentSayAboutUs";
import Features from "@/components/landing-page/features";
import Experts from "@/components/landing-page/experts";

export default function Page() {
  const question = [
    {
      question: "What is the 'Essay Editing Service'?",
      answer:
        "Our 'Essay Editing Service' connects you with expert editors who help you improve the structure, grammar, and clarity of your essays, making sure they meet academic standards.",
    },
    {
      question: "Why should I choose this service?",
      answer:
        "If you're looking to perfect your essay, our service is the perfect choice. We provide professional editing to ensure your work is polished and error-free.",
    },
    {
      question: "What types of essays can I get edited?",
      answer:
        "We offer editing for all types of essays, including research papers, argumentative essays, descriptive essays, and more. We cover a wide range of subjects like English, Business, and Science.",
    },
    {
      question: "How does it work?",
      answer:
        "Simply upload your essay, specify your requirements, and one of our expert editors will review and improve your work. We guarantee quality and quick turnaround.",
    },
    {
      question: "Who uses this service?",
      answer:
        "Students, professionals, and anyone looking to improve their essays use our editing service to ensure their work is clear, concise, and free from errors.",
    },
    {
      question: "What are the benefits of using this service?",
      answer:
        "The benefits include expert editing to ensure your essay is polished, grammar and spelling corrections, enhanced readability, and faster turnaround, all at an affordable price.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "Professional Essay Editing",
    title: "Essay Editing: Perfect Your Work Before Submission",
    description:
      "Our professional essay editors will help you refine your essay, ensuring it meets high academic standards.",
    items: [
      "Professional editing to improve grammar, structure, and flow.",
      "Get expert suggestions to enhance the quality of your writing.",
    ],
    buttonText: "Get Your Essay Edited Now",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Expert Essay Editors",
    title: "Edit Your Essays with Expert Help",
    description:
      "Work with experienced editors who ensure your essays are error-free and meet academic requirements.",
    items: [
      "Editing to enhance clarity, readability, and structure.",
      "Timely feedback to help you submit your work on time.",
    ],
    buttonText: "Start Editing Now",
    isReversed: true,
  };

  const pricingFeatures = [
    {
      name: "Full Essay Editing",
      originalPrice: "99.99",
      discountedPrice: "FREE",
    },
    {
      name: "Basic Essay Edit",
      originalPrice: "79.99",
      discountedPrice: "FREE",
    },
    {
      name: "Research Paper Edit",
      originalPrice: "109.99",
      discountedPrice: "FREE",
    },
    {
      name: "Report Editing",
      originalPrice: "89.99",
      discountedPrice: "FREE",
    },
    {
      name: "Exam Essay Editing",
      originalPrice: "69.99",
      discountedPrice: "FREE",
    },
    {
      name: "Unlimited Essay Editing",
      originalPrice: "129.99",
      discountedPrice: "FREE",
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
        changeInH={"Essay Editing: Perfect Essays with Experts"}
        changeInP={"Get editing for essays and improve chances of success."}
        isboy={false}
      />
      <AcademicNeeds
        title="Get Professional Help with Your Essay Editing "
        buttons={[
          "Request Essay Editing",
          "Submit Essay for Editing",
          "Get Research Editing Assistance",
          "Expert Editing",
          "Report Editing Service",
          "Exam Essay Editing Help",
          "Review Your Essay Before Submission",
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "Expert Editing, Affordable Prices",
            description:
              "We provide professional editing services to polish your essays and meet academic requirements.",
            number: "100%",
          },
          {
            title: "Available Anytime",
            description:
              "Our expert editors are available 24/7 to help you refine your essays and meet your deadlines.",
            number: "24/7",
          },
          {
            title: "Timely Delivery",
            description:
              "We guarantee timely editing, so your essays are always submitted on time, even for last-minute deadlines.",
            number: "98%",
          },
        ]}
      />
        <Experts experts={customExperts} />
      <ThingAboutUs section1={section1} section2={section2} />
      <Features/>
      <HowItWorks />
      <WhatStudentSayAboutUs changeInP="" changeTitle="" />
      <AffordablePrice pricingFeatures={pricingFeatures} />
      <FAQS questions={question} />
      <UnlockExpertHelp />
      <Footer />
    </div>
  );
}
