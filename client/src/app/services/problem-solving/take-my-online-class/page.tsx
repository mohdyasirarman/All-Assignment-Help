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
      question: "What is 'Take My Online Class' service?",
      answer:
        "'Take My Online Class' connects you with experienced tutors who will attend your online classes on your behalf, complete assignments, and ensure your participation and progress.",
    },
    {
      question: "Why should I use the 'Take My Online Class' service?",
      answer:
        "By using our service, you can save time and ensure that you perform well in your online classes, as experts will handle the coursework, quizzes, and assignments for you, while you focus on other responsibilities.",
    },
    {
      question: "What types of online classes can I get help with?",
      answer:
        "We provide assistance with various online courses, ranging from computer science and engineering to humanities, business, mathematics, and more. Our tutors are experts in a wide range of subjects.",
    },
    {
      question: "How does the 'Take My Online Class' service work?",
      answer:
        "Simply share your class details, select a tutor, and schedule the sessions. Our tutors will attend your classes, participate in discussions, complete assignments, and help you ace your exams.",
    },
    {
      question: "Who uses the 'Take My Online Class' service?",
      answer:
        "Students struggling with time management, those balancing multiple commitments, or anyone seeking expert assistance in their online classes rely on our service for reliable academic help.",
    },
    {
      question:
        "What are the benefits of using the 'Take My Online Class' service?",
      answer:
        "The key benefits include saving time, boosting your academic performance, receiving professional assistance, and ensuring you never miss an online class or assignment deadline.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "Expert Online Class Assistance",
    title: "Take My Online Class: Let Experts Handle Your Coursework",
    description:
      "No need to stress over online classes. Let experts attend your classes, complete assignments, and ensure your success.",
    items: [
      "Get expert help with online lectures, homework, and exams.",
      "Professionals will handle your online class participation and assignments.",
    ],
    buttonText: "Get Help with Your Online Class Now",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Professional Tutors for Online Classes",
    title: "Online Class Help: Focus on What Matters",
    description:
      "Work with verified tutors who specialize in managing online classes and assignments. We ensure top-notch results with every class.",
    items: [
      "Expert tutors will attend your classes, participate in discussions, and complete assignments.",
      "Ensure timely submission of coursework and quizzes with professional assistance.",
    ],
    buttonText: "Hire an Expert Tutor Now",
    isReversed: true,
  };

  const pricingFeatures = [
    {
      name: "Full Online Class Assistance",
      originalPrice: "299.99",
      discountedPrice: "FREE",
    },
    {
      name: "Assignment Completion",
      originalPrice: "149.99",
      discountedPrice: "FREE",
    },
    {
      name: "Quiz & Exam Help",
      originalPrice: "179.99",
      discountedPrice: "FREE",
    },
    {
      name: "Live Class Participation",
      originalPrice: "199.99",
      discountedPrice: "FREE",
    },
    {
      name: "Class Project Assistance",
      originalPrice: "169.99",
      discountedPrice: "FREE",
    },
    {
      name: "Unlimited Class Help",
      originalPrice: "349.99",
      discountedPrice: "FREE",
    },
  ];

  const writingToolData = [
    {
      id: 1,
      title: "Class Progress Tracker",
      description:
        "Track your academic progress and stay updated with all upcoming classes, assignments, and deadlines.",
    },
    {
      id: 2,
      title: "Time Management for Students",
      description:
        "Stay on top of your coursework and manage your time effectively to balance multiple online classes.",
    },
    {
      id: 3,
      title: "Assignment Planner",
      description:
        "Organize and prioritize your assignments, ensuring that all tasks are completed on time and to the highest standard.",
    },
    {
      id: 4,
      title: "Class Discussion Guide",
      description:
        "Get help with participating in live class discussions and contributing to course topics effectively.",
    },
    {
      id: 5,
      title: "Online Exam Preparation",
      description:
        "Prepare for online exams with expert tips and resources to help you succeed in every test.",
    },
    {
      id: 6,
      title: "Project Tracker",
      description:
        "Stay organized and focused on class projects, with expert advice on structure and deadlines.",
    },
    {
      id: 7,
      title: "Grade Tracker",
      description:
        "Monitor your grades and ensure you are on track to achieve the best possible outcomes in your classes.",
    },
    {
      id: 8,
      title: "Other Class Tools",
      description:
        "Explore additional tools for academic success, including note-taking, research tools, and formatting aids.",
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
        changeInH={"Take Online Class With Expert Help"}
        changeInP={
          "Let experienced tutors handle online classes while you focus on other priorities."
        }
        isboy={false}
      />
      <AcademicNeeds
        title="Complete Assistance for Online Classes "
        buttons={[
          "Get Online Class Help Now",
          "Request Assignment Help",
          "Quiz & Exam Assistance",
          "Live Class Participation",
          "Project Help",
          "Time Management for Classes",
          "Other Online Class Help",
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "Real Tutors, No Bots",
            description:
              "All online classes are attended by verified, professional tutors, not bots. We ensure genuine academic assistance.",
            number: "100%",
          },
          {
            title: "Available 24/7",
            description:
              "Our tutors are available around the clock, ready to help with any online class at any time.",
            number: "24/7",
          },
          {
            title: "On-Time Submission Guaranteed",
            description:
              "We guarantee that your assignments, quizzes, and exams are submitted on time, ensuring no deadlines are missed.",
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
