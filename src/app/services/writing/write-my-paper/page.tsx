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
  const title = "Need a Paper ? We've Got You Covered! ";
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

  return (
    <>
      <HeroSectionNew 
        changeInH={"Get Paper Done Professionally, On Time"} 
        changeInP={"Expert paper writing services tailored to  academic needs."} 
        isboy={false} 
      /> 
      <AcademicNeeds title={title} buttons={buttons} />
      <WhyStudentTrustUs sections={sections} />
      <Experts/>
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
