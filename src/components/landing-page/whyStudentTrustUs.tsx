const WhyStudentTrustUs = () => {
  const studentTrustData = [
    {
      id: 1,
      number: "0%",
      description: "Plagiarism and AI Free, We deliver original content",
    },
    {
      id: 2,
      number: "24/7",
      description: "Talk to Expert Support",
    },
    {
      id: 3,
      number: "98%",
      description: "On-Time Delivery Rate",
    },
  ];
  return (
    <>
      <div className="w-full mt-32 mb-16">
        <div className="container px-4 lg:w-[1400px] mx-auto flex flex-col lg:flex-col gap-5 lg:gap-0">
          {/* Heading */}
          <div className="w-full text-center space-y-4 mb-5">
            <div className="font-inter font-bold text-[#2E2F35] text-6xl">
              Why Students Trust Us?
            </div>
            <div className="font-poppins font-normal text-[#5F5F5F] text-lg">
              Experience Hassle-Free, High-Quality Assignment Help
            </div>
          </div>
          {/* Stats */}
          <div className="w-full flex justify-evenly mt-10">
            {studentTrustData.map((data) => (
              <div
                className="flex flex-col items-center text-center gap-3 p-3 font-inter w-[18%]"
                key={data.id}
              >
                <div className="font-bold text-[#09B14F] text-[63px] leading-[120%] tracking-[-2px]">
                  {data.number}
                </div>
                <div className="font-normal text-[#58595D] text-sm leading-5 p-2">
                  {data.description}
                </div>
              </div>
            ))}
            ;
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyStudentTrustUs;
