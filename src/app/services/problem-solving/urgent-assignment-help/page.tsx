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
import Experts from "@/components/landing-page/experts";

export default function Page() {
  const question = [
    {
      question: "What is 'Urgent Assignment Help' service?",
      answer:
        "'Urgent Assignment Help' connects you with experienced professionals who will complete your assignments under tight deadlines with expert precision and quality.",
    },
    {
      question: "Why should I use the 'Urgent Assignment Help' service?",
      answer:
        "If you are facing time constraints or need help with assignments at the last minute, our service guarantees quick, quality solutions to meet your deadlines without compromising on quality.",
    },
    {
      question: "What types of assignments can I get urgent help with?",
      answer:
        "We offer urgent help with assignments in various fields, including computer science, business, engineering, mathematics, humanities, and more. No matter the subject, our experts are here to assist.",
    },
    {
      question: "How does the 'Urgent Assignment Help' service work?",
      answer:
        "Simply share the details of your assignment, set a deadline, and our professionals will complete your task efficiently and on time, ensuring high-quality results.",
    },
    {
      question: "Who uses the 'Urgent Assignment Help' service?",
      answer:
        "Students, professionals, and anyone with time-sensitive tasks rely on our urgent assignment help service to meet their deadlines and deliver quality work.",
    },
    {
      question: "What are the benefits of using 'Urgent Assignment Help'?",
      answer:
        "The key benefits include fast delivery of well-written assignments, high-quality results under tight deadlines, and the peace of mind of knowing your work is handled by experts.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "Urgent Assignment Assistance",
    title: "Urgent Assignment Help: Fast Solutions, Guaranteed Quality",
    description:
      "Don't stress over tight deadlines. Let experts handle your urgent assignments and deliver top-notch results quickly.",
    items: [
      "Get fast help with essays, reports, and other assignments.",
      "Guaranteed high-quality work delivered before your deadline.",
    ],
    buttonText: "Get Urgent Assignment Help Now",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Professional Help for Urgent Assignments",
    title: "Urgent Assignment Help: Focus on What Matters",
    description:
      "Work with verified professionals who specialize in delivering urgent assignments with precision and on time.",
    items: [
      "Expert help with various types of assignments under tight deadlines.",
      "Timely submission of essays, projects, and research papers.",
    ],
    buttonText: "Get Expert Help Now",
    isReversed: true,
  };

  const pricingFeatures = [
    {
      name: "Full Urgent Assignment Help",
      originalPrice: "199.99",
      discountedPrice: "FREE",
    },
    {
      name: "Essay & Report Help",
      originalPrice: "149.99",
      discountedPrice: "FREE",
    },
    {
      name: "Research Paper Assistance",
      originalPrice: "179.99",
      discountedPrice: "FREE",
    },
    {
      name: "Project Assistance",
      originalPrice: "189.99",
      discountedPrice: "FREE",
    },
    {
      name: "Exam Help & Revision",
      originalPrice: "129.99",
      discountedPrice: "FREE",
    },
    {
      name: "Unlimited Urgent Help",
      originalPrice: "249.99",
      discountedPrice: "FREE",
    },
  ];

  const writingToolData = [
    {
      id: 1,
      title: "Urgent Assignment Tracker",
      description:
        "Track your urgent assignments, deadlines, and progress all in one place to stay organized and meet your submission times.",
    },
    {
      id: 2,
      title: "Time Management for Urgent Tasks",
      description:
        "Plan and prioritize your tasks efficiently, ensuring that you meet all deadlines without compromising on quality.",
    },
    {
      id: 3,
      title: "Quick Assignment Planner",
      description:
        "Organize your assignments quickly, plan your approach, and ensure timely submission with expert tips.",
    },
    {
      id: 4,
      title: "Revision Assistant",
      description:
        "Get expert tips and feedback on your work to help you quickly revise and improve your assignments before submission.",
    },
    {
      id: 5,
      title: "Deadline Reminders",
      description:
        "Set and track reminders for your assignment deadlines, so you never miss an important due date.",
    },
    {
      id: 6,
      title: "Quick Feedback Tool",
      description:
        "Receive instant feedback on your assignments and improve them before submission.",
    },
    {
      id: 7,
      title: "Grade Tracker",
      description:
        "Monitor your grades to ensure you're on track to achieve your desired academic outcomes, especially under tight deadlines.",
    },
    {
      id: 8,
      title: "Other Urgent Assignment Tools",
      description:
        "Explore additional tools for effective writing, research, and formatting to expedite your assignment completion.",
    },
  ];

  const customExperts = [
    {
      name: "Jane Smith",
      expertise: "Mathematics",
      description: "Expert in advanced calculus and statistical analysis.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2010,
      orderInProgress: 3,
      location: "Singapore",
      rating: "4.9/5",
      about:
        "Experienced mathematician specializing in problem-solving and data modeling.",
    },
    {
      name: "Michael Brown",
      expertise: "Computer Science",
      description:
        "Specialized in AI, machine learning, and big data analytics.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2015,
      orderInProgress: 4,
      location: "US",
      rating: "4.7/5",
      about:
        "Innovative computer scientist focusing on artificial intelligence and cutting-edge technology.",
    },
    {
      name: "Emily Davis",
      expertise: "Chemistry",
      description:
        "Focused on organic synthesis and material science research.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2012,
      orderInProgress: 2,
      location: "UK",
      rating: "4.6/5",
      about:
        "Chemistry expert with a passion for creating novel materials and advancing chemical processes.",
    },
    {
      name: "David Wilson",
      expertise: "Economics",
      description: "Expert in macroeconomic policy and financial markets.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2014,
      orderInProgress: 3,
      location: "India",
      rating: "4.8/5",
      about:
        "Economist with extensive experience in global financial systems and policy formulation.",
    },
    {
      name: "Sarah Johnson",
      expertise: "Biology",
      description: "Specialized in molecular biology and genetic engineering.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2016,
      orderInProgress: 5,
      location: "US",
      rating: "5.0/5",
      about:
        "Biologist with expertise in genetic research and advancements in molecular techniques.",
    },
    {
      name: "William Martinez",
      expertise: "Environmental Science",
      description: "Focused on climate change modeling and sustainability.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2011,
      orderInProgress: 2,
      location: "Canada",
      rating: "4.7/5",
      about:
        "Environmental scientist dedicated to finding sustainable solutions for climate challenges.",
    },
    {
      name: "Olivia Taylor",
      expertise: "Psychology",
      description: "Expert in cognitive behavioral therapy and mental health.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2013,
      orderInProgress: 4,
      location: "UK",
      rating: "4.9/5",
      about:
        "Psychologist specializing in therapeutic approaches for mental wellness and personal growth.",
    },
    {
      name: "Alexander Moore",
      expertise: "Astrophysics",
      description:
        "Researcher in black holes, dark matter, and the origins of the universe.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2010,
      orderInProgress: 1,
      location: "US",
      rating: "4.6/5",
      about:
        "Astrophysicist with a deep focus on space phenomena and the mysteries of the cosmos.",
    },
    {
      name: "Sophia Anderson",
      expertise: "Education",
      description:
        "Specialized in curriculum development and learning strategies.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2014,
      orderInProgress: 2,
      location: "Australia",
      rating: "4.8/5",
      about:
        "Education expert designing innovative teaching methods to enhance learning outcomes.",
    },
    {
      name: "Ethan Carter",
      expertise: "Philosophy",
      description: "Expert in ethics, logic, and existential theories.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2015,
      orderInProgress: 1,
      location: "US",
      rating: "4.9/5",
      about:
        "Philosopher passionate about exploring the depths of human thought and moral dilemmas.",
    },
    {
      name: "Isabella Lee",
      expertise: "Literature",
      description:
        "Focused on contemporary literary analysis and creative writing.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2013,
      orderInProgress: 3,
      location: "UK",
      rating: "4.7/5",
      about:
        "Literature expert with a love for analyzing modern texts and fostering creative expression.",
    },
    {
      name: "Lucas Harris",
      expertise: "Engineering",
      description: "Specialized in robotics and automation systems.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2012,
      orderInProgress: 2,
      location: "Germany",
      rating: "4.8/5",
      about:
        "Engineer focused on developing intelligent machines and enhancing automation across industries.",
    },
    {
      name: "Amelia Scott",
      expertise: "Sociology",
      description: "Expert in urban sociology and social behavior analysis.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2011,
      orderInProgress: 3,
      location: "Canada",
      rating: "4.6/5",
      about:
        "Sociologist with a keen interest in understanding social structures and urban dynamics.",
    },
    {
      name: "Benjamin Evans",
      expertise: "Political Science",
      description: "Focused on international relations and public policy.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2014,
      orderInProgress: 4,
      location: "US",
      rating: "4.7/5",
      about:
        "Political scientist analyzing global trends and shaping policies for international cooperation.",
    },
    {
      name: "Charlotte Thompson",
      expertise: "Art History",
      description: "Specialized in Renaissance and modern art movements.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2016,
      orderInProgress: 2,
      location: "Italy",
      rating: "5.0/5",
      about:
        "Art historian with a deep appreciation for cultural evolution and iconic art periods.",
    },
    {
      name: "Daniel King",
      expertise: "Law",
      description: "Expert in corporate law and intellectual property.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2010,
      orderInProgress: 3,
      location: "US",
      rating: "4.9/5",
      about:
        "Corporate lawyer with a specialization in intellectual property rights and business law.",
    },
    {
      name: "Grace White",
      expertise: "Archaeology",
      description: "Researcher in ancient civilizations and cultural heritage.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2012,
      orderInProgress: 1,
      location: "Egypt",
      rating: "4.8/5",
      about:
        "Archaeologist committed to preserving ancient history and discovering lost civilizations.",
    },
    {
      name: "Liam Rodriguez",
      expertise: "Marketing",
      description: "Specialized in digital marketing and brand strategy.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2015,
      orderInProgress: 3,
      location: "Brazil",
      rating: "4.7/5",
      about:
        "Marketing expert helping brands enhance their presence through strategic digital initiatives.",
    },
    {
      name: "Chloe Walker",
      expertise: "Nutrition",
      description: "Focused on dietetics and sports nutrition.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2013,
      orderInProgress: 2,
      location: "US",
      rating: "4.9/5",
      about:
        "Nutritionist dedicated to optimizing health through personalized diet and nutrition plans.",
    },
    {
      name: "Noah Phillips",
      expertise: "History",
      description: "Expert in medieval history and historical preservation.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2011,
      orderInProgress: 3,
      location: "UK",
      rating: "4.8/5",
      about:
        "Historian specializing in medieval periods and the conservation of cultural landmarks.",
    },
  ];

  return (
    <div className="w-full">
      <HeroSectionNew
        changeInH={"Urgent Assignment Help: Reliable Solutions"}
        changeInP={
          "Get expert help to complete assignments on time, no matter how tight the deadline."
        }
        isboy={false}
      />
      <AcademicNeeds
        title="Complete Assistance for Assignments "
        buttons={[
          "Get Urgent Assignment Help",
          "Request Essay Help",
          "Research Paper Assistance",
          "Project Help",
          "Exam Help & Revision",
          "Deadline Management for Tasks",
          "Other Urgent Help",
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "Real Experts, No Bots",
            description:
              "Your urgent assignments are handled by professional experts, not bots. We guarantee genuine quality work.",
            number: "100%",
          },
          {
            title: "Available 24/7",
            description:
              "Our experts are available around the clock, ready to help with urgent assignments whenever you need.",
            number: "24/7",
          },
          {
            title: "On-Time Delivery Guaranteed",
            description:
              "We ensure that your urgent assignments are completed and submitted on time, with no missed deadlines.",
            number: "98%",
          },
        ]}
      />
      <Experts experts={customExperts} />
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
