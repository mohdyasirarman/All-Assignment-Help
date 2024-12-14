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

  const title = "Need Help with Your College Homework?";
  const buttons = [
    "Complete My Homework",
    "Edit My Homework",
    "Help with Homework Formatting",
    "Proofread My Homework",
    "Provide Homework Guidance",
    "Assist with Problem Solving",
    "Support for Other Homework Needs",
  ];

  const sections = [
    {
      title: "Tailored Homework Solutions",
      description: 
        "We provide customized homework help that aligns with your specific college assignments and subject requirements.",
      number: "100%",
    },
    {
      title: "Professional Experts",
      description: 
        "Our team comprises experienced experts in various academic disciplines, ready to assist with your college homework.",
      number: "250+",
    },
    {
      title: "Deadline-Oriented",
      description: 
        "We understand the pressure of homework deadlines and ensure timely delivery, so you stay stress-free.",
      number: "98%",
    }
  ];

  const questions = [
    {
      question: "What does your college homework help service include?",
      answer:
        "Our service includes writing and editing homework assignments, problem-solving, and guidance tailored to your academic needs.",
    },
    {
      question: "Who helps with the homework?",
      answer:
        "Our team consists of experienced experts with advanced degrees, ready to provide support for various college homework tasks.",
    },
    {
      question: "Can I request revisions for my homework?",
      answer:
        "Yes, we provide free revisions to ensure your homework meets your expectations and academic standards.",
    },
    {
      question: "What is the typical delivery time for homework help?",
      answer:
        "We offer flexible deadlines, from urgent requests to standard timelines, to suit your schedule.",
    },
    {
      question: "How do you ensure my information is kept confidential?",
      answer:
        "We prioritize privacy and implement robust measures to protect your personal and academic information.",
    },
    {
      question: "Can I communicate with the expert?",
      answer:
        "Yes, you can directly collaborate with the expert to ensure the homework aligns with your instructions and expectations.",
    },
    {
      question: "Do you handle urgent homework requests?",
      answer:
        "Yes, we are equipped to handle urgent homework requests without compromising on quality.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is simple. Just share your homework requirements and deadlines, and we’ll handle the rest.",
    }
  ];

  return (
    <>
      <HeroSectionNew 
        changeInH={"Get Expert Help with Your College Homework"} 
        changeInP={"Receive professional assistance to complete your college homework successfully."} 
        isboy={false} 
      />
      <AcademicNeeds title={title} buttons={buttons} />
      <WhyStudentTrustUs sections={sections} />
      <Experts />
      <ThingAboutUs />
      <Features />
      <HowItWorks />
      <WhatStudentSayAboutUs 
        changeInP={"Hear from students who successfully completed their homework with our help."} 
        changeTitle={"What Our Clients Say About Us"} 
      />
      <AffordablePrice />
      <FAQS questions={questions} />
      <UnlockExpertHelp />
      <Footer />          
    </>
  );
}
