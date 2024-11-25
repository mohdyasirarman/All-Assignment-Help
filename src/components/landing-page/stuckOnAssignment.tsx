import Image from "next/image";



interface stuckprops{
  changeTitle:String,
  changeInP:String
}

const StuckOnAssignment = ({changeTitle,changeInP}:stuckprops) => {
  return (
    <div className="bg-[#DEEDFD] w-full py-16 my-16">
      <div className="container px-4 py-10 lg:w-[1400px] mx-auto flex justify-between gap-5 lg:gap-0">
        {/* Left Section */}
        <div className="font-poppins pl-10 w-2/4">
          {changeTitle?<><span className=" font-bold font-inter text-[#0A090F] text-6xl  block"> {changeTitle}</span></>:<><span className=" font-bold font-inter text-[#0A090F] text-6xl  block">
            Stuck on Your Assignment! <br /> Need Expert Help?
          </span>
          </>}
          {changeInP?<><span className="mt-8 font-normal text-lg text-[#5F5F5F] block">{changeInP}</span></>:<><span className="mt-8 font-normal text-lg text-[#5F5F5F]  block">
            Enjoy all kinds of assignment writing help from reputed academic
            <br />
            scholars.
          </span>
          </>}
          <div className="w-full mt-5"> 
            <button className="w-2/6 h-10 rounded text-white bg-[#09B14F] ">
              Click to Connect
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-2/4 flex justify-center items-center">
          <Image
            src={"/static/images/happy-users.svg"}
            alt="Happy Users"
            height={330}
            width={528}
          />
        </div>
      </div>
    </div>
  );
};

export default StuckOnAssignment;
