import Image from "next/image";

const HelpYouNeed = () => {
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
  return (
    <>
      <div className="w-full mt-36">
        <div className="container px-4 lg:w-[1400px] mx-auto flex flex-col lg:flex-col gap-5 lg:gap-0">
          {/* Heading */}
          <div className="font-poppins text-center my-5">
            <div className="font-bold text-5xl leading-[55px] mb-3">
              Getting the Help You Need is Quick and Easy
            </div>
            <div className="font-normal text-lg text-[#5F5F5F] leading-7">
              Just 3 Steps to Get Your Perfect Assignment – Tailored for Your
              Success!
            </div>
          </div>
          {/* Needed Help */}
          <div className="flex justify-evenly mt-10 text-center">
            {helpNeeded.map((help) => (
              <div
                key={help.id}
                className="flex flex-col  lg:flex-col items-center p-3 mx-auto gap-3 lg:gap-5"
              >
                <div className="w-64 h-64 lg:w-48 lg:h-48 flex justify-center items-center">
                  <Image
                    src={help.image}
                    alt={help.title}
                    className={`
                        ${help.id !== 3 ? "pl-8" : "h-[108px] w-[108px]"}
                    `}
                    width={140}
                    height={140}
                  />
                  {help.id !== 3 ? (
                    <Image
                      src="/static/images/arrow-how-it-work.png"
                      alt="arrow"
                      width={50}
                      height={50}
                      className="relative left-32"
                    />
                  ) : null}
                </div>
                <div className="flex flex-col gap-3 text-center h-64 w-64">
                  <div className="font-bold text-xl">{help.title}</div>
                  <div className="font-normal text-md text-[#5F5F5F] leading-7">
                    {help.description}
                  </div>
                </div>
                <div></div>
              </div>
            ))}
          </div>
          {/* Recieve Button  */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default HelpYouNeed;
