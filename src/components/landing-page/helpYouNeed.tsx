import Image from "next/image";

interface helpYouNeedProps {
  changeInYouNeedTitle: string
  changeInYouNeedbtn: string
}

const HelpYouNeed = ({ changeInYouNeedTitle, changeInYouNeedbtn }: helpYouNeedProps) => {
  const helpNeeded = [
    {
      id: 1,
      image: "/static/images/shareYourRequirement.png",
      title: "Share Your Requirements",
      description: `
        Provide specific instructions
        when filling out the order form,
        such as the deadline,
        assignment length, etc.`,
    },
    {
      id: 2,
      image: "/static/images/payForService.png",
      title: "Pay for Services",
      description: `
        Complete the payment
        process to confirm your order.
        Our multiple payment options
        add to your convenience`,
    },
    {
      id: 3,
      image: "/static/images/getYourAssingment.png",
      title: "Get Your Assignment",
      description: `
        Once the assignment writer is
        done, they waste no time
        updating you. View the solution
        from your account.`,
    },
  ];
  const changedHelpNeeded = [
    {
      id: 1,
      image: "/static/images/shareYourRequirement.png",
      title: "Share requirement",
      description: `
        Fill out the order form by selecting discipline, 
        word count, format, academic level,
         and other details.`,
    },
    {
      id: 2,
      image: "/static/images/payForService.png",
      title: "Secure order payment",
      description: `
        Your will receive quote regarding your order,
         process the payment to get expert start working
          on your order.`,
    },
    {
      id: 3,
      image: "/static/images/getYourAssingment.png",
      title: "Get timely solution",
      description: `
        Get your paper written according to the terms of your order. 
        Give us your feedback about our cooperation.`,
    },
  ]
  return (
    <>
      <div className="bg-[#F3FAFA] w-full mt-0 pb-10 rounded-[40px_40px_0px_0px]">
        <div className="container px-4 lg:w-[1400px] mx-auto flex flex-col lg:flex-col gap-5 lg:gap-0">
          {/* Heading */}
          <div className="font-poppins text-center my-5">
            <div className="font-bold text-5xl leading-[55px] mb-3">
              {changeInYouNeedTitle ? <p>{changeInYouNeedTitle}</p> : <p>Getting the Help You Need is Quick and Easy</p>}
            </div>
            {!changeInYouNeedTitle && <div className="font-normal text-lg text-[#5F5F5F] leading-7">
              Just 3 Steps to Get Your Perfect Assignment – Tailored for Your
              Success!
            </div>}
          </div>
          {/* Needed Help */}
          <div className="flex justify-evenly text-center">
            {changeInYouNeedTitle
              ? changedHelpNeeded.map((help) => (
                <div
                  key={help.id}
                  className="flex flex-col lg:flex-col items-center p-3 mx-auto gap-3 lg:gap-0"
                >
                  <div className="w-64 h-64 lg:w-48 lg:h-48 flex justify-center items-center">
                    <Image
                      src={help.image}
                      alt={help.title}
                      className={`${help.id !== 3 ? "pl-8" : "h-[108px] w-[108px]"
                        }`}
                      width={140}
                      height={140}
                    />
                    {help.id !== 3 && (
                      <Image
                        src="/static/images/arrow-how-it-work.png"
                        alt="arrow"
                        width={50}
                        height={50}
                        className="relative left-32"
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-3 text-center h-64 w-64">
                    <div className="font-bold text-xl">{help.title}</div>
                    <div className="font-normal text-md text-[#5F5F5F] leading-7">
                      {help.description}
                    </div>
                  </div>
                </div>
              ))
              : helpNeeded.map((help) => (
                <div
                  key={help.id}
                  className="flex flex-col lg:flex-col items-center p-3 mx-auto gap-3 lg:gap-0"
                >
                  <div className="w-64 h-64 lg:w-48 lg:h-48 flex justify-center items-center">
                    <Image
                      src={help.image}
                      alt={help.title}
                      className={`${help.id !== 3 ? "pl-8" : "h-[108px] w-[108px]"
                        }`}
                      width={140}
                      height={140}
                    />
                    {help.id !== 3 && (
                      <Image
                        src="/static/images/arrow-how-it-work.png"
                        alt="arrow"
                        width={50}
                        height={50}
                        className="relative left-32"
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-3 text-center h-64 w-64">
                    <div className="font-bold text-xl">{help.title}</div>
                    <div className="font-normal text-md text-[#5F5F5F] leading-7">
                      {help.description}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Recieve Button  */}
          <div className="w-full flex justify-center font-poppins font-normal text-lg leading-7 -mt-10">
            <button className="bg-[#09B14F] text-white w-[270px] h-[50px] rounded-md">
              {changeInYouNeedbtn ? <p>{changeInYouNeedbtn}</p> : <p>Receive My Assignment</p>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpYouNeed;
