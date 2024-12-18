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


  return (
    <div className="w-full">
      <HeroSectionNew
        changeInH={"Cheap Essay Writing: Affordable Help"}
        changeInP={"Get essays done fast and affordably, no matter the deadline."}
        isboy={false}
      />
      <AcademicNeeds
        title="Affordable Help for All Your Essay Writing Needs "
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
      <Experts/>
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
