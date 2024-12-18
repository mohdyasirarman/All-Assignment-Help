import FAQS from "@/components/landing-page/faq";
import UnlockExpertHelp from "@/components/landing-page/unlockExpertHelp";
import Footer from "@/components/common/footer";
import TrendingTopics from "@/components/landing-page/trendingtopics";
import ExpertGrid from "@/components/landing-page/ConnectWithExperts";
import VerificationProcess from "@/components/landing-page/VerificationProcess";
import ExpertHomePage from "@/components/landing-page/expertHomePage";
import StuckOnAssignment from "@/components/landing-page/stuckOnAssignment";


export default function Page() {
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
    },
  ];

  return (
    <>
      <ExpertHomePage changeInH="" changeInP="" />
      <TrendingTopics />
      <ExpertGrid />
      <VerificationProcess imageSrc="/static/images/sample_expert.jpg" />
      <StuckOnAssignment
        changeTitle=""
        changeInP="Our vision is to be the go-to destination for all assignment needs, offering reliable support and expert solutions to help students excel with confidence."
      />
      <FAQS questions={questions} />
      <UnlockExpertHelp />
      <Footer />
    </>
  );
}
