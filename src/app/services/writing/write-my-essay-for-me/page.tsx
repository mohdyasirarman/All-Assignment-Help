import WhyStudentTrustUs from "@/components/landing-page/whyStudentTrustUs";
import WhatStudentSayAboutUs from "@/components/landing-page/whatStudentSayAboutUs";
import FAQS from "@/components/landing-page/faq";
import UnlockExpertHelp from "@/components/landing-page/unlockExpertHelp";
import Footer from "@/components/common/footer";
import AcademicNeeds from "@/components/landing-page/academicneeds";
import HowItWorks from "@/components/landing-page/howitworks";
import AffordablePrice from '@/components/landing-page/affordableprice';
import ThingAboutUs from "@/components/landing-page/thingaboutus";
import HeroSectionNew from "@/components/landing-page/HeroSectionNew";
import Experts from "@/components/landing-page/experts";
import Features from "@/components/landing-page/features";


export default function Page() {

  const title = "Need Essay? We’ll Write It for You, " ;
  const buttons = [
  "Write My Essay for Me",
  "Finish My Course for Me",
  "Get Homework Done",
  "Ace My Online Test",
  "Guide Me Through My Exam",
  "Get Help on My Project",
  "Find Help for Other Academic Needs",
];
const sections =  [
  {
    title: "No Plagiarism",
    description: 
      "Each essay is crafted from scratch to meet your requirements. We guarantee 100% plagiarism-free work with proper citations and references.",
    number: "0%",
  },
  {
    title: "Expert Writers",
    description: 
      "Our team of professional writers specializes in various academic fields, ensuring your essay is written by a subject matter expert.",
    number: "100+",
  },
  {
    title: "On-Time Delivery",
    description: 
      "We understand deadlines are crucial. Your essay will be delivered on time, ensuring you have plenty of time to review and submit.",
    number: "99% ",
  }
]

const questions = [
    {
      question: "What is included in your essay writing service?",
      answer:
        "Our service includes customized essays written to your requirements, proper citations, and plagiarism-free content.",
    },
    {
      question: "How qualified are your essay writers?",
      answer:
        "Our writers are highly qualified professionals with expertise in various academic fields, ensuring top-quality essays.",
    },
    {
      question: "Can I request revisions for my essay?",
      answer:
        "Yes, we offer free revisions to ensure your essay meets your exact expectations and requirements.",
    },
    {
      question: "What is the turnaround time for an essay?",
      answer:
        "We provide flexible deadlines ranging from a few hours to several days, depending on your needs.",
    },
    {
      question: "Is my personal information kept confidential?",
      answer:
        "Absolutely. We take privacy seriously and ensure your personal and project information is secure.",
    },
    {
      question: "Can I communicate with the writer working on my essay?",
      answer:
        "Yes, you can directly communicate with the writer to discuss your essay details and provide feedback.",
    },
    {
      question: "Do you handle urgent essay requests?",
      answer:
        "Yes, we have a team of experts ready to handle urgent tasks while maintaining quality standards.",
    },
    {
      question: "How do I place an order?",
      answer:
        "Placing an order is simple—just provide your essay requirements on our website, and we'll take care of the rest.",
    }
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
    <>
          <HeroSectionNew changeInH={"Get Your Essay,Fast and Easy"} changeInP={"Expert writers delivering high-quality essays tailored to needs."} isboy={false}/> 
          <AcademicNeeds  title={title} buttons={buttons} /> 
          <WhyStudentTrustUs sections={sections} />
          <Experts experts={customExperts} />
          <ThingAboutUs />
          <Features/>
          <HowItWorks/>
          <WhatStudentSayAboutUs changeInP={""} changeTitle=""/>
          <AffordablePrice />
          <FAQS  questions={questions}/>
          <UnlockExpertHelp />  
          <Footer />          
    </>
  );
}
