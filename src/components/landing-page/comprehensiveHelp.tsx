import { ComprehensiveHelpCard } from "@/components/ui/assignment-expert-card";

const ComprehensiveHelp = () => {
  const comprehensiveHelpData = [
    {
      id: 1,
      image: "/static/images/comprehensive-help/icon1.svg",
      title: "Essay Writing Help",
      description:
        "Get precise, well-researched essays crafted by academic specialists.",
    },
    {
      id: 2,
      image: "/static/images/comprehensive-help/icon2.svg",
      title: "Homework Help",
      description:
        "Our experts can help with any subject, ensuring stay top of your coursework.",
    },
    {
      id: 3,
      image: "/static/images/comprehensive-help/icon3.svg",
      title: "Dissertation Support",
      description:
        "From proposal to final submission, we provide expert support at every stage.",
    },
    {
      id: 4,
      image: "/static/images/comprehensive-help/icon4.svg",
      title: "Case Study Solutions",
      description:
        "Receive detailed, insightful case studies with data-backed analysis.",
    },
    {
      id: 5,
      image: "/static/images/comprehensive-help/icon5.svg",
      title: "Research Paper Assistance",
      description:
        "Get assistance from experienced writers ,well-structured research papers.",
    },
    {
      id: 6,
      image: "/static/images/comprehensive-help/icon6.svg",
      title: "Presentation & Report Writing",
      description:
        "Make your presentations stand out with clear, compelling content designed",
    },
  ];
  return (
    <div className="w-full">
      <div className="container px-0 py-10 lg:w-[1400px] mx-auto flex flex-col justify-between gap-5">
        {/* Heading */}
        <div className="w-full text-center font-poppins space-y-5 px-4 md:px-10 lg:px-20 mb-10">
          <div className="font-bold text-4xl md:text-5xl lg:text-6xl text-[#2C2C2C] leading-tight">
            Comprehensive Help for Every <br />
            Assignment Type
          </div>
          <div className="font-normal text-base md:text-lg text-[#5F5F5F]">
            Get tailored expert help for essays, case studies, research papers,
            and more
          </div>
        </div>
        {/* Cards */}
        <div className="flex justify-center items-center px-2">
          <div className="w-full flex flex-wrap justify-center items-stretch gap-10 gap-x-0">
            {comprehensiveHelpData.map((data) => (
              <div key={data.id} className="flex-grow-0 flex-shrink-0 basis-[calc(29.333%-0.25rem)]">
                <ComprehensiveHelpCard
                  title={data.title}
                  image={data.image}
                  description={data.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveHelp;