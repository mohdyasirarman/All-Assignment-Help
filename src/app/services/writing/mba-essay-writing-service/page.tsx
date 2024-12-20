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

  const title = "Need Help with  MBA Essay ? " ;
  const buttons = [
    "Write My MBA Essay",
    "Edit My MBA Essay",
    "Help with MBA Essay Formatting",
    "Proofread My MBA Essay",
    "Assist with MBA Research",
    "Provide MBA Essay Guidance",
    "Support for Other MBA Writing Needs",
  ];

  const sections =  [
    {
      title: "Customized Essays",
      description: 
        "We tailor each MBA essay to match your unique requirements and goals, ensuring a personalized and impactful essay.",
      number: "100%",
    },
    {
      title: "Professional Writers",
      description: 
        "Our writers specialize in MBA admissions and academic writing, bringing expertise and experience to your essay.",
      number: "150+",
    },
    {
      title: "Timely Delivery",
      description: 
        "Deadlines are crucial. We ensure your MBA essay is delivered promptly, giving you peace of mind.",
      number: "99%",
    }
  ];

  const questions = [
    {
      question: "What does your MBA essay writing service include?",
      answer:
        "Our service includes personalized MBA essays, expert editing, and detailed formatting to meet application standards.",
    },
    {
      question: "Are your writers experienced in MBA applications?",
      answer:
        "Yes, our writers are well-versed in MBA application processes and have extensive experience crafting essays for top programs.",
    },
    {
      question: "Can I request revisions for my MBA essay?",
      answer:
        "Absolutely! We provide free revisions to ensure your essay aligns perfectly with your expectations.",
    },
    {
      question: "What is the turnaround time for an MBA essay?",
      answer:
        "We offer flexible deadlines tailored to your needs, from urgent requests to standard delivery times.",
    },
    {
      question: "How do you ensure the confidentiality of my information?",
      answer:
        "We take privacy seriously and guarantee the security of your personal and essay details.",
    },
    {
      question: "Can I communicate with the writer?",
      answer:
        "Yes, you can collaborate directly with your writer to ensure your essay reflects your voice and vision.",
    },
    {
      question: "Do you handle urgent MBA essay requests?",
      answer:
        "Yes, our team is equipped to handle urgent requests while maintaining exceptional quality.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply provide us with your essay requirements and deadlines through our website to get started.",
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
          <HeroSectionNew changeInH={"Craft Your MBA Essay with Ease"} changeInP={"Expert  professional writers to elevate MBA application."} isboy={false}/> 
          <AcademicNeeds title={title} buttons={buttons} /> 
          <WhyStudentTrustUs sections={sections} />
          <Experts experts={customExperts} />
          <ThingAboutUs />
          <Features/>
          <HowItWorks/>
          <WhatStudentSayAboutUs changeInP={"Discover how we’ve helped MBA applicants succeed."} changeTitle={"What Students Say About Us"}/>
          <AffordablePrice />
          <FAQS  questions={questions}/>
          <UnlockExpertHelp />  
          <Footer />          
    </>
  );
}
