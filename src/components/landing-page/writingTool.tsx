import { WritingToolCard } from "@/components/ui/assignment-expert-card";

const WritingTool = () => {
  const writingToolData = [
    {
      id: 1,
      title: "Plagiarism Checker",
      description: `Submit plagiarism-free work
        with our AI plagiarism-
        checking tool. Unique
        solutions are guaranteed.`,
    },
    {
      id: 2,
      title: "Paraphrase Tool",
      description: `Submit plagiarism-free work
        with our AI plagiarism-
        checking tool. Unique
        solutions are guaranteed.`,
    },
    {
      id: 3,
      title: "Equation Solver",
      description: `Submit plagiarism-free work
        with our AI plagiarism-
        checking tool. Unique
        solutions are guaranteed.`,
    },
    {
      id: 4,
      title: "Spell Checker",
      description: `Don&apos;t let incorrect spellings
        keep you from top grades.
        Try our spell checker for
        perfect writing!`,
    },
    {
      id: 5,
      title: "Grammar Checker",
      description: `Leave your worries about
        grammatical errors behind
        by making the most of our
        grammar checker.`,
    },
    {
      id: 6,
      title: "Word Counter",
      description: `Keep track of your task's
        length with accurate word
        count, paragraph count,
        page count, and more.`,
    },
    {
      id: 7,
      title: "Resume Builder",
      description: `Impress all working
        professionals with a custom-
        built resume generated from
        our resume builder.`,
    },
    {
      id: 8,
      title: "Other Tools",
      description: `Try out our other free tools
        like citation generators,
        essay typer, PDF summarizer,
        and more.`,
    },
  ];
  return (
    <div className="w-full my-20">
      <div className="w-full flex flex-col px-28 gap-10 font-poppins">
        {/* Heading */}
        <div className="w-full text-center">
          <div className="font-bold text-[#2C2C2C] text-5xl leading-[56px]">
            Assignment Help & Writing{" "}
            <span className="text-[#09B14F]">Tools</span>
          </div>
          <div className="font-normal text-[#5F5F5F] text-base leading-6 mt-5">
            Assignment Help & Writing Tools
          </div>
        </div>
        {/* Cards */}
        <div className="my-10">
          <div className="grid grid-cols-4 gap-10">
            {writingToolData.map((data) => (
              <div key={data.id}>
                <WritingToolCard
                  key={data.id}
                  title={data.title}
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

export default WritingTool;
