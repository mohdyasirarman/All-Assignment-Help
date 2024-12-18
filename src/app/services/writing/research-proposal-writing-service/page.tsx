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

  const title = "Need Help with Your Research Proposal ? ";
  const buttons = [
    "Write My Research Proposal",
    "Edit My Research Proposal",
    "Proofread My Proposal",
    "customized research",
    "Assist with Research",
    "Provide Writing Guidance",
    "Support for Other Proposal Needs",
  ];

  const sections = [
    {
      title: "Tailored Proposals",
      description: 
        "We create customized research proposals that align with your academic and project requirements.",
      number: "100%",
    },
    {
      title: "Professional Experts",
      description: 
        "Our team comprises seasoned professionals with expertise in writing compelling research proposals across disciplines.",
      number: "250+",
    },
    {
      title: "Deadline-Oriented",
      description: 
        "We value your time and ensure prompt delivery of your research proposal, keeping you stress-free.",
      number: "98%",
    }
  ];

  const questions = [
    {
      question: "What does your research proposal writing service include?",
      answer:
        "Our service includes drafting original research proposals, precise formatting, and thorough editing tailored to academic standards.",
    },
    {
      question: "Who writes the research proposals?",
      answer:
        "Our team consists of experts with advanced degrees and extensive experience in research proposal writing.",
    },
    {
      question: "Can I request revisions for my research proposal?",
      answer:
        "Yes, we provide free revisions to ensure your proposal meets your expectations.",
    },
    {
      question: "What is the typical delivery time for a research proposal?",
      answer:
        "We offer flexible deadlines, from urgent requests to standard timelines, to accommodate your needs.",
    },
    {
      question: "How do you ensure my information is kept confidential?",
      answer:
        "We take privacy seriously, implementing robust measures to safeguard your personal and project details.",
    },
    {
      question: "Can I communicate with the writer?",
      answer:
        "Yes, you can directly collaborate with your writer to ensure the proposal aligns with your goals.",
    },
    {
      question: "Do you handle urgent research proposal requests?",
      answer:
        "Yes, we are equipped to manage urgent requests without compromising quality.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is simple. Share your requirements and deadlines through our platform, and we’ll take care of the rest.",
    }
  ];

  return (
    <>
      <HeroSectionNew 
        changeInH={"Craft Perfect Research Proposal with Confidence"} 
        changeInP={"Professional guidance, expert writers for standout research proposal."} 
        isboy={false} 
      />
      <AcademicNeeds title={title} buttons={buttons} />
      <WhyStudentTrustUs sections={sections} />
      <Experts />
      <ThingAboutUs />
      <Features />
      <HowItWorks />
      <WhatStudentSayAboutUs 
        changeInP={"Hear from students and researchers who achieved success with proposals."} 
        changeTitle={"What Our Clients Say About Us"} 
      />
      <AffordablePrice />
      <FAQS questions={questions} />
      <UnlockExpertHelp />
      <Footer />          
    </>
  );
}
