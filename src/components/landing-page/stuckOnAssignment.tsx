import Image from "next/image";

interface StuckProps {
  changeTitle: string;
  changeInP: string;
}

const StuckOnAssignment = ({ changeTitle, changeInP }: StuckProps) => {
  return (
    <div className="bg-[#F5F6FB] w-full py-8 my-12">
      <div className="container px-4 py-10 lg:w-[1400px]  mx-auto flex justify-between gap-5 lg:gap-0">
        <div className="font-poppins pl-10 w-2/4">
          {changeTitle ? (
            <>
              <span className=" font-bold font-poppins text-[#000000] text-6xl  block">
                {" "}
                {changeTitle}
              </span>
            </>
          ) : (
            <>
              <span className=" font-bold font-poppins text-[#0A090F] text-6xl  block">
                    <>
                      {"Didn't find"}
                      <br />
                      <div className="font-poppins font-normal text-[#0A090F] text-6xl  block">what you are Looking for?</div>
                    </>
              </span>
            </>
          )}
          {changeInP ? (
            <>
              <span className="mt-8 font-normal font-poppins text-md text-[#000000dd] block">
                {changeInP}
              </span>
            </>
          ) : (
            <>
              <span className="mt-8 font-normal text-lg text-[#5F5F5F]  block">
                Enjoy all kinds of assignment writing help from reputed academic
                <br />
                scholars.
              </span>
            </>
          )}
          <div className="w-full mt-5">
            <button className="px-5 py-3 rounded-3xl text-white bg-[#55C360] hover:bg-[#45a350]">
              Let us Know
            </button>
          </div>
        </div>

        <div className="w-2/4 flex justify-center items-center">
          <Image
            src={"/static/images/headphoneGirl.png"}
            alt="Happy Users"
            height={330}
            width={528}
            quality={100}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default StuckOnAssignment;
