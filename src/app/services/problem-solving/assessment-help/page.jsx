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

  const title = "Need Help with Your Assessments?";
  const buttons = [
    "Write My Assessment",
    "Edit My Assessment",
    "Help with Assessment Formatting",
    "Proofread My Assessment",
    "Provide Assessment Guidance",
    "Assist with Exam Preparation",
  ];

  const sections = [
    {
      title: "Tailored Assessments",
      description: 
        "We provide customized assessment help that aligns with your academic and subject requirements.",
      number: "100%",
    },
    {
      title: "Professional Experts",
      description: 
        "Our team comprises experienced professionals with expertise in various academic disciplines, ready to assist with assessments.",
      number: "250+",
    },
    {
      title: "Deadline-Oriented",
      description: 
        "We understand the importance of deadlines and ensure timely delivery of your assessments, so you can stay stress-free.",
      number: "98%",
    }
  ];

  const questions = [
    {
      question: "What does your assessment help service include?",
      answer:
        "Our service includes writing original assessments, accurate formatting, and thorough editing tailored to your academic standards.",
    },
    {
      question: "Who helps with the assessments?",
      answer:
        "Our team consists of experts with advanced degrees and extensive experience in writing and assisting with assessments.",
    },
    {
      question: "Can I request revisions for my assessment?",
      answer:
        "Yes, we provide free revisions to ensure your assessment meets your expectations.",
    },
    {
      question: "What is the typical delivery time for an assessment?",
      answer:
        "We offer flexible deadlines, from urgent requests to standard timelines, to accommodate your needs.",
    },
    {
      question: "How do you ensure my information is kept confidential?",
      answer:
        "We take privacy seriously, implementing robust measures to safeguard your personal and academic information.",
    },
    {
      question: "Can I communicate with the expert?",
      answer:
        "Yes, you can directly collaborate with the expert to ensure your assessment meets your specific requirements.",
    },
    {
      question: "Do you handle urgent assessment requests?",
      answer:
        "Yes, we can handle urgent assessment requests without compromising on quality.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is easy. Simply share your requirements and deadlines through our platform, and we'll handle the rest.",
    }
  ];

  return (
    <>
      <HeroSectionNew 
        changeInH={"Ace Your Assessments with Expert Help"} 
        changeInP={"Get professional assistance to ensure high-quality assessments."} 
        isboy={false} 
      />
      <AcademicNeeds title={title} buttons={buttons} />
      <WhyStudentTrustUs sections={sections} />
      <Experts />
      <ThingAboutUs />
      <Features />
      <HowItWorks />
      <WhatStudentSayAboutUs 
        changeInP={"Hear from students who improved their grades with our assessment help."} 
        changeTitle={"What Our Clients Say About Us"} 
      />
      <AffordablePrice />
      <FAQS questions={questions} />
      <UnlockExpertHelp />
      <Footer />          
    </>
  );
}
