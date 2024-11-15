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
      <div className="container px-4 py-10 lg:w-[1400px] mx-auto flex flex-col justify-between gap-5 lg:gap-0">
        {/* Heading */}
        <div className="w-full text-center font-poppins space-y-5 px-44 mb-10">
          <div className="font-bold text-5xl text-[#2C2C2C] leading-[56px]">
            Comprehensive Help for Every{" "}
            <span className="text-[#09B14F]">Assignment</span> Type
          </div>
          <div className="font-normal text-lg text-[#5F5F5F] ">
            Get tailored expert help for essays, case studies, research papers,
            and more
          </div>
        </div>
        {/* Cards */}
        <div className="flex justify-center items-center">
          <div className="w-full grid grid-cols-3 grid-rows-2 justify-items-center">
            {comprehensiveHelpData.map((data) => (
              <div key={data.id} className="mb-[30px]">
                <ComprehensiveHelpCard
                  key={data.id}
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
