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
  const title = "Need a Paper ? We've Got Covered! ";
  const buttons = [
    "Write My Paper for Me",
    "Edit My Paper",
    "Help Me Format My Paper",
    "Cite Sources Correctly",
    "Proofread My Paper",
    "Assist with Research",
    "Provide Guidance for Other Writing Needs",
  ];

  const sections = [
    {
      title: "Plagiarism-Free Papers",
      description: 
        "Every paper we provide is written from scratch, tailored to your specific requirements, and thoroughly checked for plagiarism.",
      number: "100%",
    },
    {
      title: "Expert Writers",
      description: 
        "Our writers are experts in a variety of fields, ensuring your paper is handled by someone knowledgeable in your subject area.",
      number: "200+",
    },
    {
      title: "Timely Delivery",
      description: 
        "Deadlines matter. We deliver your paper on time, so you never miss a submission date.",
      number: "98%",
    }
  ];

  const questions = [
    {
      question: "What services do you offer for paper writing?",
      answer:
        "We provide writing, editing, formatting, citation assistance, proofreading, and research help for academic papers.",
    },
    {
      question: "Are the papers plagiarism-free?",
      answer:
        "Yes, all our papers are written from scratch and checked with advanced plagiarism detection tools to ensure originality.",
    },
    {
      question: "Can you help with urgent deadlines?",
      answer:
        "Absolutely. We have a team of experts ready to work on urgent tasks without compromising quality.",
    },
    {
      question: "What subjects do you cover?",
      answer:
        "We cover a wide range of subjects, including sciences, humanities, business, and technical fields.",
    },
    {
      question: "How do you ensure quality?",
      answer:
        "Our quality assurance team reviews every paper for structure, grammar, and adherence to your guidelines before delivery.",
    },
    {
      question: "What if I'm not satisfied with the paper?",
      answer:
        "We offer free revisions to ensure the final paper meets your expectations and requirements.",
    },
    {
      question: "Are your services confidential?",
      answer:
        "Yes, we prioritize your privacy and ensure all personal and project details are kept secure.",
    },
    {
      question: "How can I get started?",
      answer:
        "Simply place an order on our website with your requirements, and we'll take care of the rest.",
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
      <HeroSectionNew 
        changeInH={"Get Paper Done Professionally, On Time"} 
        changeInP={"Expert paper writing services tailored to  academic needs."} 
        isboy={false} 
      /> 
      <AcademicNeeds title={title} buttons={buttons} />
      <WhyStudentTrustUs sections={sections} />
      <Experts experts={customExperts} />
      <ThingAboutUs />
      <Features/>
      <HowItWorks />
      <WhatStudentSayAboutUs 
        changeInP={"Hear from students who have trusted us with their  success."} 
        changeTitle={"What Students Say About Us"} 
      />
      <AffordablePrice />
      <FAQS questions={questions} />
      <UnlockExpertHelp />  
      <Footer />          
    </>
  );
}
