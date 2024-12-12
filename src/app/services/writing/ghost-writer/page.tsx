import WhyStudentTrustUs from "@/components/landing-page/whyStudentTrustUs";
import UnlockExpertHelp from "@/components/landing-page/unlockExpertHelp";
import Footer from "@/components/common/footer";
import AcademicNeeds from "@/components/landing-page/academicneeds";
import ThingAboutUs from "@/components/landing-page/thingaboutus";
import HowItWorks from "@/components/landing-page/howitworks";
import WritingTool from "@/components/landing-page/writingTool";
import FAQS from "@/components/landing-page/faq";
import AffordablePrice from "@/components/landing-page/affordableprice";
import HeroSectionNew from "@/components/landing-page/HeroSectionNew";

export default function Page() {
  const question = [
    {
      question: "What is 'Ghostwriting'?",
      answer:
        "Our 'Ghostwriting' service allows you to work with professional writers who craft high-quality content on your behalf, without crediting them for the work. Perfect for blogs, books, essays, speeches, and more.",
    },
    {
      question: "Why should I choose ghostwriting services?",
      answer:
        "If you need high-quality content but lack the time or expertise to write it yourself, our ghostwriters will deliver exceptional content on your behalf, while you maintain full ownership and credit.",
    },
    {
      question: "What types of content can I get ghostwritten?",
      answer:
        "We provide ghostwriting services for a wide range of content, including blog posts, books, articles, speeches, essays, business reports, and more.",
    },
    {
      question: "How does ghostwriting work?",
      answer:
        "Simply provide us with your ideas, guidelines, and deadline. Our experienced ghostwriters will produce content tailored to your needs, ensuring it meets your expectations. You'll receive the final draft, ready to be published under your name.",
    },
    {
      question: "Who uses ghostwriting services?",
      answer:
        "Authors, business owners, bloggers, and anyone in need of quality content but lacking the time or writing expertise use our ghostwriting service to get professional work done discreetly.",
    },
    {
      question: "What are the benefits of using ghostwriting services?",
      answer:
        "The key benefits include professional quality writing, content creation on-demand, confidentiality, and the ability to maintain full ownership of the work without the stress of writing it yourself.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "Professional Ghostwriting",
    title: "Expert Ghostwriting: Get High-Quality Content, Without the Hassle",
    description:
      "Our ghostwriting service connects you with experienced writers who can produce top-quality content without the need for you to lift a finger.",
    items: [
      "Professional ghostwriters for any type of content.",
      "High-quality writing delivered discreetly and on time.",
    ],
    buttonText: "Get Professional Ghostwriting Help Now",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Skilled Ghostwriters",
    title: "Fast, Professional, and Discreet Ghostwriting Services",
    description:
      "Work with talented writers who will craft content based on your ideas and maintain confidentiality. We ensure your work is ready for use without the credit being given to anyone but you.",
    items: [
      "Professional, tailored writing services for any project.",
      "Timely delivery, with full confidentiality.",
    ],
    buttonText: "Get Ghostwriting Help Now",
    isReversed: true,
  };

  const pricingFeatures = [
    {
      name: "Full Ghostwriting Service (Books)",
      originalPrice: "499.99",
      discountedPrice: "FREE",
    },
    { name: "Blog Post Ghostwriting", originalPrice: "149.99", discountedPrice: "FREE" },
    {
      name: "Article Ghostwriting",
      originalPrice: "129.99",
      discountedPrice: "FREE",
    },
    {
      name: "Speech Ghostwriting",
      originalPrice: "199.99",
      discountedPrice: "FREE",
    },
    {
      name: "Business Report Ghostwriting",
      originalPrice: "179.99",
      discountedPrice: "FREE",
    },
    { name: "Unlimited Ghostwriting Assistance", originalPrice: "999.99", discountedPrice: "FREE" },
  ];

  const writingToolData = [
    {
      id: 1,
      title: "Content Planning Tool",
      description:
        "Keep track of your content ideas and deadlines, ensuring everything is ready for the ghostwriters to start.",
    },
    {
      id: 2,
      title: "Writer Collaboration Hub",
      description:
        "Collaborate with our ghostwriters, providing feedback and additional guidance to ensure the content meets your needs.",
    },
    {
      id: 3,
      title: "Content Quality Tracker",
      description:
        "Monitor the quality of your ghostwritten content with tools that ensure your writing is on point and professional.",
    },
    {
      id: 4,
      title: "Citation and Source Guide",
      description:
        "Easily manage your sources and references to ensure your ghostwritten content is properly cited and credible.",
    },
    {
      id: 5,
      title: "Instant Feedback Tool",
      description:
        "Get immediate feedback on your ghostwritten drafts, allowing for quick adjustments and improvements.",
    },
    {
      id: 6,
      title: "Content Delivery Reminders",
      description:
        "Set reminders for ghostwriters to ensure timely delivery of your content, no matter how tight the deadline.",
    },
    {
      id: 7,
      title: "Ghostwriting Progress Tracker",
      description:
        "Track the progress of your ghostwriting projects and ensure everything stays on schedule.",
    },
    {
      id: 8,
      title: "More Tools for Efficient Ghostwriting",
      description:
        "Explore additional tools that will help you manage your ghostwriting projects more effectively and efficiently.",
    },
  ];

  return (
    <div className="w-full">
      <HeroSectionNew
        changeInH={"Ghostwriting Service: Get Content, Discreetly"}
        changeInP={"ghostwriters delivering content on time, under your name with complete confidentiality."}
        isboy={false}
      />
      <AcademicNeeds
        title="Ghostwriting Services for Your Content Needs "
        buttons={[
          "Request Ghostwriting Help Now",
          "Submit Your Ghostwriting Project",
          "Get Book Ghostwriting Assistance",
          "Article Ghostwriting Help",
          "Speech Writing Support",
          "Manage Your Ghostwriting Deadlines",
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "Professional and Discreet",
            description:
              "Our ghostwriting services ensure your content is written by experts, with full confidentiality and discretion.",
            number: "100%",
          },
          {
            title: "Available Anytime",
            description:
              "Our ghostwriters are available 24/7, ready to help you create high-quality content whenever you need it.",
            number: "24/7",
          },
          {
            title: "On-Time Delivery",
            description:
              "We guarantee that all ghostwritten content will be delivered on time, every time, even with tight deadlines.",
            number: "98%",
          },
        ]}
      />
      <ThingAboutUs section1={section1} section2={section2} />
      <HowItWorks />
      <AffordablePrice pricingFeatures={pricingFeatures} />
      <WritingTool writingToolData={writingToolData} />
      <FAQS questions={question} />
      <UnlockExpertHelp />
      <Footer />
    </div>
  );
}
