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

  const Expert = [
    {
      name: "Dr. Emily Carter",
      qualification: "PhD in Astrophysics",
      description: "A seasoned astrophysicist specializing in stellar evolution and black holes. Published numerous papers in leading journals.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Chef Antonio Rossi",
      qualification: "Michelin Star Chef",
      description: "An award-winning chef known for authentic Italian cuisine, with over 20 years of experience in culinary arts.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Ms. Sophia Li",
      qualification: "Certified Financial Planner (CFP)",
      description: "An expert in financial planning, investment strategies, and wealth management, helping clients achieve financial independence.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Professor John Smith",
      qualification: "MSc in Computer Science",
      description: "Experienced computer science professor focusing on AI, machine learning, and big data analytics.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Dr. Rajesh Kapoor",
      qualification: "MD in Internal Medicine",
      description: "A renowned physician with expertise in chronic disease management and preventive care.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Dr. Laura Williams",
      qualification: "PhD in Environmental Science",
      description: "An expert in climate change, environmental conservation, and sustainability. Works on global environmental policy.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Mr. David Brown",
      qualification: "MBA in Marketing",
      description: "A marketing strategist specializing in brand development and digital advertising with over 15 years of experience.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Professor Lisa Yang",
      qualification: "PhD in Linguistics",
      description: "A linguistics professor with a focus on sociolinguistics and language acquisition. Author of multiple academic papers.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Mr. James Patel",
      qualification: "Certified Cybersecurity Professional (CCSP)",
      description: "A cybersecurity expert specializing in network security, threat mitigation, and ethical hacking.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Dr. Helen Scott",
      qualification: "MD in Pediatrics",
      description: "A pediatrician with expertise in child health, specializing in immunization, growth development, and preventive care.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Dr. Helen Scott",
      qualification: "MD in Pediatrics",
      description: "A pediatrician with expertise in child health, specializing in immunization, growth development, and preventive care.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Dr. Helen Scott",
      qualification: "MD in Pediatrics",
      description: "A pediatrician with expertise in child health, specializing in immunization, growth development, and preventive care.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Dr. Helen Scott",
      qualification: "MD in Pediatrics",
      description: "A pediatrician with expertise in child health, specializing in immunization, growth development, and preventive care.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Dr. Helen Scott",
      qualification: "MD in Pediatrics",
      description: "A pediatrician with expertise in child health, specializing in immunization, growth development, and preventive care.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Dr. Helen Scott",
      qualification: "MD in Pediatrics",
      description: "A pediatrician with expertise in child health, specializing in immunization, growth development, and preventive care.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Dr. Helen Scott",
      qualification: "MD in Pediatrics",
      description: "A pediatrician with expertise in child health, specializing in immunization, growth development, and preventive care.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Dr. Helen Scott",
      qualification: "MD in Pediatrics",
      description: "A pediatrician with expertise in child health, specializing in immunization, growth development, and preventive care.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Dr. Helen Scott",
      qualification: "MD in Pediatrics",
      description: "A pediatrician with expertise in child health, specializing in immunization, growth development, and preventive care.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Dr. Helen Scott",
      qualification: "MD in Pediatrics",
      description: "A pediatrician with expertise in child health, specializing in immunization, growth development, and preventive care.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Dr. Helen Scott",
      qualification: "MD in Pediatrics",
      description: "A pediatrician with expertise in child health, specializing in immunization, growth development, and preventive care.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Dr. Helen Scott",
      qualification: "MD in Pediatrics",
      description: "A pediatrician with expertise in child health, specializing in immunization, growth development, and preventive care.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Dr. Helen Scott",
      qualification: "MD in Pediatrics",
      description: "A pediatrician with expertise in child health, specializing in immunization, growth development, and preventive care.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Dr. Helen Scott",
      qualification: "MD in Pediatrics",
      description: "A pediatrician with expertise in child health, specializing in immunization, growth development, and preventive care.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Dr. Helen Scott",
      qualification: "MD in Pediatrics",
      description: "A pediatrician with expertise in child health, specializing in immunization, growth development, and preventive care.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Dr. Helen Scott",
      qualification: "MD in Pediatrics",
      description: "A pediatrician with expertise in child health, specializing in immunization, growth development, and preventive care.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Dr. Helen Scott",
      qualification: "MD in Pediatrics",
      description: "A pediatrician with expertise in child health, specializing in immunization, growth development, and preventive care.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Dr. Helen Scott",
      qualification: "MD in Pediatrics",
      description: "A pediatrician with expertise in child health, specializing in immunization, growth development, and preventive care.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Dr. Helen Scott",
      qualification: "MD in Pediatrics",
      description: "A pediatrician with expertise in child health, specializing in immunization, growth development, and preventive care.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Dr. Helen Scott",
      qualification: "MD in Pediatrics",
      description: "A pediatrician with expertise in child health, specializing in immunization, growth development, and preventive care.",
      image: "/static/images/headphoneGirl.png",
    },
  ];
  
  

  return (
    <>
      <ExpertHomePage changeInH="" changeInP="" />
      <TrendingTopics />
      <ExpertGrid experts={Expert} />
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
