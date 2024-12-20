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
      question: "What is the 'Cheap Essay Writing Service'?",
      answer:
        "Our 'Cheap Essay Writing Service' connects you with affordable, professional writers who help you get your essays done quickly and with decent quality, all without breaking the bank.",
    },
    {
      question: "Why should I choose this service?",
      answer:
        "If you need help with your essays but are on a tight budget, our service is the perfect option for getting quality help at a low price. We make sure you don't miss any deadlines.",
    },
    {
      question: "What types of essays can I get help with?",
      answer:
        "We offer cheap help with all sorts of essays, including research papers, argumentative essays, and reports. We cover all major subjects, including English, Business, Science, and more.",
    },
    {
      question: "How does it work?",
      answer:
        "Just let us know what you need help with, provide your deadline, and one of our writers will take care of the rest. We promise affordable prices and timely delivery.",
    },
    {
      question: "Who uses this service?",
      answer:
        "Students, professionals, and anyone looking for affordable, quality writing help use our service to get essays done fast without spending too much.",
    },
    {
      question: "What are the benefits of using this service?",
      answer:
        "The main benefits are low-cost help, quick turnaround, and solid work that will meet your deadlines without costing you a fortune.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "Affordable Essay Help",
    title: "Cheap Essay Writing: Affordable Help When You Need It",
    description:
      "Don’t stress about expensive writing services. We offer cheap, reliable essay help that gets the job done on time.",
    items: [
      "Affordable essay writing help for all types of assignments.",
      "Get your work done quickly, without the high price tag.",
    ],
    buttonText: "Get Cheap Essay Help Now",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Professional Essay Writers",
    title: "Get Your Essays Done: Fast, Affordable, and Professional",
    description:
      "Work with experienced writers who deliver decent essays at a price that won’t break your budget.",
    items: [
      "Affordable, quality writing support for your essays and papers.",
      "On-time delivery of your work, every time.",
    ],
    buttonText: "Get Help Now",
    isReversed: true,
  };

  const pricingFeatures = [
    {
      name: "Cheap Full Essay Help",
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
        changeInH={"Cheap Essay Writing: Affordable Help"}
        changeInP={"Get essays done fast and affordably, no matter the deadline."}
        isboy={false}
      />
      <AcademicNeeds
        title="Help for Your Essay Writing Needs ?"
        buttons={[
          "Request Cheap Essay Help Now",
          "Submit Your Essay for Help",
          "Get Research Paper Assistance",
          "Report Writing Help",
          "Exam Essay Writing Support",
          "Manage Your Writing Deadlines",
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "Affordable and Fast Help",
            description:
              "We provide quick, budget-friendly help with essays and other assignments without sacrificing quality.",
            number: "100%",
          },
          {
            title: "Available Anytime",
            description:
              "Our writing experts are available 24/7 to help you with your essays, whenever you need assistance.",
            number: "24/7",
          },
          {
            title: "No Missed Deadlines",
            description:
              "We guarantee that your essays will be delivered on time, even if you're in a rush.",
            number: "98%",
          },
        ]}
      />
      <Experts experts={customExperts} />
      <ThingAboutUs section1={section1} section2={section2} />
      <Features/>
      <HowItWorks />
      <AffordablePrice pricingFeatures={pricingFeatures} />
      <FAQS questions={question} />
      <UnlockExpertHelp />
      <Footer />
    </div>
  );
}
