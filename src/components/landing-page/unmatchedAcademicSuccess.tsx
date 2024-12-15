import { AcademicSuccessCard } from "@/components/ui/assignment-expert-card";

interface unmatchedProps {
  changeInUnmatedTite: string
  changeInUnmatedp: string
}

const UnmatchedAcademicSuccess = ({changeInUnmatedTite,changeInUnmatedp}: unmatchedProps) => {
  const AcademicSuccessData = [
    {
      id: 1,
      color: "blue",
      image: "/static/images/quality-5-svgrepo-com.svg",
      title: "Quality Writing, No AI",
      description: `Get quality writing with zero AI,
      crafted by real experts holding
      scholarly degrees and extensive
      academic insights.`,
    },
    {
      id: 2,
      color: "green",
      image: "/static/images/Group.svg",
      title: "Timely Submissions",
      description: `
        If you need assignments on
      time, we are the best option for
      you. 
      `,
    },
    {
      id: 3,
      color: "blue",
      image: "/static/images/privacy-policy-pana.svg",
      title: "Friendly Policies",
      description: `
     Our student-friendly policies
    include a money-back
    guarantee. 
      `,
    },
    {
      id: 4,
      color: "green",
      image: "/static/images/experts-amico.svg",
      title: "Reliable Experts",
      description: `Every assignment writer on our
      website has completed their
      Master’s or Doctorate degree. `,
    },
    {
      id: 5,
      color: "blue",
      image: "/static/images/Currency-pana.svg",
      title: "Pocket-Friendly Services",
      description: `
       We always ensure to provide
      affordable services through our
      dynamic pricing system
      `,
    },
    {
      id: 6,
      color: "green",
      image: "/static/images/service-24_7-pana.svg",
      title: "24/7 Support",
      description: `
      24/7 Availability
      Feel free to get in touch with our academic
      writers whenever you want. 
      `,
    },
  ];
  const changedAcademicSuccessData = [
    {
      id: 1,
      color: "green",
      image: "/static/images/quality-5-svgrepo-com.svg",
      title: "Timely Delivery",
      description: `We rank #1 when it comes to delivering custom essays in a short timeframe.
       Whenever you say, 'I need help in writing my essay,’ 
     ,you can turn in papers on time, always.`,
    },
    {
      id: 2,
      color: "blue",
      image: "/static/images/Group.svg",
      title: "Plagiarism-Free Solutions",
      description: `
        Whenever you place your order by saying, 'Write my essays for me,’
         we ensure that we deliver completely original content and top-quality writing. 
      `,
    },
    {
      id: 3,
      color: "green",
      image: "/static/images/privacy-policy-pana.svg",
      title: "Unlimited Revisions and Reworks",
      description: `
      If you are not head over heels for our final product,
      then you can always request free revisions. 
      Request  within 31 days of receiving the final version of  paper.
      `,
    },
    {
      id: 4,
      color: "green",
      image: "/static/images/experts-amico.svg",
      title: "Economical Prices and Deals",
      description: `You can avail of our professional writing solutions at prices that you can truly afford.
       Top  slashed process with yearlong discounts and cashback deals`,
    },
    {
      id: 5,
      color: "blue",
      image: "/static/images/Currency-pana.svg",
      title: "Live Alerts and Updates",
      description: `
      When you place an essay request with us by saying,you will never have to miss out on any updates.
       You can subscribe to our SMS alerts and updates,We promise to keep you in  loop at  times.
      `,
    },
    {
      id: 6,
      color: "green",
      image: "/static/images/service-24_7-pana.svg",
      title: "24/7 Assistance",
      description: `
      24/7 Availability
      When you place essay paper writing request with us, you will never have to miss out on  updates. 
      You can subscribe to SMS alerts and updates.
      `,
    },
  ];
  return (
    <>
      <div className="w-full mt-32 mb-16">
        <div className="container px-4 lg:w-[1400px] mx-auto flex flex-col lg:flex-col gap-5 lg:gap-0">
          {/* Heading */}
          <div className="w-full text-center mb-16 px-48  font-inter ">
            {changeInUnmatedTite?<p className="text-[#2E2F35]  tracking-[-2px] leading-[76px] text-6xl font-bold">{changeInUnmatedTite}</p>:<div><span className=" text-6xl  tracking-[-2px] leading-[76px] font-bold text-[#2E2F35]">
              Our Unmatched Features – Built for Your
            </span>
            <span className="text-[#09B14F] text-6xl font-bold  tracking-[-2px] leading-[76px]">{"  "} Academic Success</span></div>
            }
            {
              changeInUnmatedp && <p className=" mt-5 text-gray-500 text-[18px] ">{ changeInUnmatedp}</p>
            }     
          </div>
          {/* Cards */}
          <div className="flex flex-col space-y-[30px] justify-center items-center mx-20">
            {!changeInUnmatedTite?<><div className="w-full flex justify-center space-x-[30px]">
              <AcademicSuccessCard
                title={AcademicSuccessData[0].title}
                image={AcademicSuccessData[0].image}
                description={AcademicSuccessData[0].description}
                color={AcademicSuccessData[0].color}
              />
              <AcademicSuccessCard
                title={AcademicSuccessData[1].title}
                image={AcademicSuccessData[1].image}
                description={AcademicSuccessData[1].description}
                color={AcademicSuccessData[1].color}
              />
              <AcademicSuccessCard
                title={AcademicSuccessData[2].title}
                image={AcademicSuccessData[2].image}
                description={AcademicSuccessData[2].description}
                color={AcademicSuccessData[2].color}
              />
            </div>
            <div className="w-full flex justify-center space-x-[30px]">
              <AcademicSuccessCard
                title={AcademicSuccessData[3].title}
                image={AcademicSuccessData[3].image}
                description={AcademicSuccessData[3].description}
                color={AcademicSuccessData[3].color}
              />
              <AcademicSuccessCard
                title={AcademicSuccessData[4].title}
                image={AcademicSuccessData[4].image}
                description={AcademicSuccessData[4].description}
                color={AcademicSuccessData[4].color}
              />
              <AcademicSuccessCard
                title={AcademicSuccessData[5].title}
                image={AcademicSuccessData[5].image}
                description={AcademicSuccessData[5].description}
                color={AcademicSuccessData[5].color}
              />
            </div></>:<><div className="w-full flex justify-center space-x-[30px]">
              <AcademicSuccessCard
                title={changedAcademicSuccessData[0].title}
                image={changedAcademicSuccessData[0].image}
                description={changedAcademicSuccessData[0].description}
                color={changedAcademicSuccessData[0].color}
              />
              <AcademicSuccessCard
                title={changedAcademicSuccessData[1].title}
                image={changedAcademicSuccessData[1].image}
                description={changedAcademicSuccessData[1].description}
                color={changedAcademicSuccessData[1].color}
              />
              <AcademicSuccessCard
                title={changedAcademicSuccessData[2].title}
                image={changedAcademicSuccessData[2].image}
                description={changedAcademicSuccessData[2].description}
                color={changedAcademicSuccessData[2].color}
              />
            </div>
            <div className="w-full flex justify-center space-x-[30px]">
              <AcademicSuccessCard
                title={changedAcademicSuccessData[3].title}
                image={changedAcademicSuccessData[3].image}
                description={changedAcademicSuccessData[3].description}
                color={changedAcademicSuccessData[3].color}
              />
              <AcademicSuccessCard
                title={changedAcademicSuccessData[4].title}
                image={changedAcademicSuccessData[4].image}
                description={changedAcademicSuccessData[4].description}
                color={changedAcademicSuccessData[4].color}
              />
              <AcademicSuccessCard
                title={changedAcademicSuccessData[5].title}
                image={changedAcademicSuccessData[5].image}
                description={changedAcademicSuccessData[5].description}
                color={changedAcademicSuccessData[5].color}
              />
            </div></>}
          </div>
          <div className="w-full mt-20 flex justify-center font-poppins">
            {changeInUnmatedTite?<button className="bg-[#09B14F] text-white hover:bg-[#45a350] font-normal text-lg px-8 py-2 rounded-md">
              Get Price Quote
            </button>:<button className="bg-[#09B14F] text-white hover:bg-[#45a350] font-normal text-lg px-8 py-2 rounded-md">
              Hire Real Writers
            </button>}
          </div>
        </div>
      </div>
    </>
  );
};

export default UnmatchedAcademicSuccess;
