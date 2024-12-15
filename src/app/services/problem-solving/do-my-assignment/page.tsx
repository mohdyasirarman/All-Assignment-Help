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

  const title = "Need Someone to Do Your Assignment? ";
  const buttons = [
    "Do My Assignment",
    "Complete My Assignment",
    "Help with Assignment Formatting",
    "Proofread My Assignment",
    "Provide Assignment Guidance",
    "Assist with Research for My Assignment",
  ];

  const sections = [
    {
      title: "Custom Assignment Solutions",
      description: 
        "We offer tailored assignment help that meets your specific academic requirements, ensuring high-quality results.",
      number: "100%",
    },
    {
      title: "Professional Experts",
      description: 
        "Our team of seasoned professionals is ready to handle your assignments across various academic disciplines.",
      number: "250+",
    },
    {
      title: "Deadline-Oriented",
      description: 
        "We understand the importance of deadlines and deliver your assignments on time, every time.",
      number: "98%",
    }
  ];

  const questions = [
    {
      question: "What does your assignment help service include?",
      answer:
        "Our service includes writing original assignments, formatting, editing, research assistance, and guidance tailored to your academic needs.",
    },
    {
      question: "Who completes the assignments?",
      answer:
        "Our team consists of qualified experts with advanced degrees and experience in completing assignments across various subjects.",
    },
    {
      question: "Can I request revisions for my assignment?",
      answer:
        "Yes, we offer free revisions to ensure your assignment meets your academic standards and expectations.",
    },
    {
      question: "What is the typical delivery time for an assignment?",
      answer:
        "We offer flexible timelines to accommodate both urgent and standard assignments, ensuring timely delivery.",
    },
    {
      question: "How do you ensure my information is kept confidential?",
      answer:
        "We prioritize your privacy and implement strict measures to protect your personal and assignment-related information.",
    },
    {
      question: "Can I communicate with the expert?",
      answer:
        "Yes, you can communicate directly with the expert to ensure the assignment meets your requirements and expectations.",
    },
    {
      question: "Do you handle urgent assignment requests?",
      answer:
        "Yes, we are equipped to handle urgent assignment requests while maintaining high quality.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is easy. Just share your assignment details and deadline with us, and we’ll take care of the rest.",
    }
  ];

  return (
    <>
      <HeroSectionNew 
        changeInH={"Get Expert Help to Do Your Assignment"} 
        changeInP={"Let our experienced team handle your assignments while you focus on other priorities."} 
        isboy={false} 
      />
      <AcademicNeeds title={title} buttons={buttons} />
      <WhyStudentTrustUs sections={sections} />
      <Experts />
      <ThingAboutUs />
      <Features />
      <HowItWorks />
      <WhatStudentSayAboutUs 
        changeInP={"Read how students succeeded with their assignments using our professional help."} 
        changeTitle={"What Our Clients Say About Us"} 
      />
      <AffordablePrice />
      <FAQS questions={questions} />
      <UnlockExpertHelp />
      <Footer />          
    </>
  );
}
