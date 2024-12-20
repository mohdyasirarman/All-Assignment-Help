import WhyStudentTrustUs from "@/components/landing-page/whyStudentTrustUs";
import UnlockExpertHelp from "@/components/landing-page/unlockExpertHelp";
import Footer from "@/components/common/footer";
import AcademicNeeds from "@/components/landing-page/academicneeds";
import ThingAboutUs from "@/components/landing-page/thingaboutus";
import HowItWorks from "@/components/landing-page/howitworks";
import FAQS from "@/components/landing-page/faq";
import AffordablePrice from "@/components/landing-page/affordableprice";
import HeroSectionNew from "@/components/landing-page/HeroSectionNew";
import Experts from "@/components/landing-page/experts";
import Features from "@/components/landing-page/features";

export default function Page() {
  const question = [
    {
      question: "What is the 'Affordable Essay Help'?",
      answer:
        "Our 'Affordable Essay Help' service connects you with experienced writers who help you get your essays done quickly, professionally, and at a price that fits your budget.",
    },
    {
      question: "Why should I choose this service?",
      answer:
        "If you need assistance with your essays but are on a tight budget, our service offers quality help at an affordable price, ensuring your work is completed on time.",
    },
    {
      question: "What types of essays can I get help with?",
      answer:
        "We assist with all types of essays, including argumentative essays, research papers, reports, and more. We offer help across all subjects like English, Business, Science, and beyond.",
    },
    {
      question: "How does it work?",
      answer:
        "Simply tell us the type of essay you need help with, share the deadline, and our experienced writers will complete the work. We ensure timely delivery and affordable rates.",
    },
    {
      question: "Who uses this service?",
      answer:
        "Students, professionals, and anyone needing quality, affordable writing assistance turn to our service to get essays done quickly without exceeding their budget.",
    },
    {
      question: "What are the benefits of using this service?",
      answer:
        "The key benefits are affordable rates, quick turnaround, and high-quality work that ensures you meet your deadlines without overspending.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "Affordable Essay Help",
    title: "Affordable Essay Help: Get Your Essays Done Without the High Cost",
    description:
      "Forget about pricey essay services. We provide reliable and affordable essay assistance, delivering quality work on time.",
    items: [
      "Affordable essay help for all types of assignments.",
      "Get your essays done quickly, without the steep price tag.",
    ],
    buttonText: "Get Affordable Essay Help Now",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Professional Essay Writers",
    title: "Fast, Professional, and Affordable Essay Help",
    description:
      "Work with skilled writers who provide quality essays at a price that won't break your bank. We ensure on-time delivery.",
    items: [
      "Affordable, professional writing assistance for essays and papers.",
      "Timely delivery, every time.",
    ],
    buttonText: "Get Help Now",
    isReversed: true,
  };

  const pricingFeatures = [
    {
      name: "Full Essay Help",
      originalPrice: "99.99",
      discountedPrice: "FREE",
    },
    { name: "Basic Essay Help", originalPrice: "79.99", discountedPrice: "FREE" },
    {
      name: "Research Paper Help",
      originalPrice: "109.99",
      discountedPrice: "FREE",
    },
    {
      name: "Report Writing Assistance",
      originalPrice: "89.99",
      discountedPrice: "FREE",
    },
    {
      name: "Affordable Exam Essay Help",
      originalPrice: "69.99",
      discountedPrice: "FREE",
    },
    { name: "Unlimited Essay Assistance", originalPrice: "129.99", discountedPrice: "FREE" },
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
    <div className="w-full">
      <HeroSectionNew
        changeInH={"Essay Help: Professional Writing Assistance"}
        changeInP={"Get essays done quickly, affordably, professionally—no matter deadline."}
        isboy={false}
      />
      <AcademicNeeds
        title="Help for Essay Writing Needs "
        buttons={[
          "Request Affordable Essay",
          "Submit Essay for Assistance",
          "Report Writing Help",
          "Fast and Affordable",
          "Get Research Paper Help",
          "Exam Essay Writing Support",
          "Manage Your Essay Deadlines",
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "Affordable and Fast Help",
            description:
              "We offer fast and affordable help with essays and assignments without compromising on quality.",
            number: "100%",
          },
          {
            title: "Available Anytime",
            description:
              "Our experts are available 24/7 to provide writing assistance whenever you need it.",
            number: "24/7",
          },
          {
            title: "No Missed Deadlines",
            description:
              "We guarantee on-time delivery of your essays, even when time is tight.",
            number: "98%",
          },
        ]}
      />
      <ThingAboutUs section1={section1} section2={section2} />
      <Experts experts={customExperts} />
      <HowItWorks />
      <Features/>
      <AffordablePrice pricingFeatures={pricingFeatures} />
      <FAQS questions={question} />
      <UnlockExpertHelp />
      <Footer />
    </div>
  );
}
