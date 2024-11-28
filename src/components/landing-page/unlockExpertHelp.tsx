import Image from "next/image";

const unlockExpertHelp = () => {
  return (
    <div>
      <div className="  w-full -my-10">
        <div className="flex justify-center px-28 text-lg font-dmSans font-bold">
          <div className="flex justify-between items-center bg-[#2C2C2C] p-6 rounded-[16px] w-[936px] h-[241px]">
            <div className="font-poppins  font-bold leading-[60px] text-left decoration-none">
            <h1 className="text-[50px] font-bold ml-[67px] font-poppins  w-[489.42px] h-[91px] ">
                <span className="text-[#0DCC5C] ">Unlock</span>{" "}
                <span className="text-[#FFFFFF]">Expert Help</span> <br />
                <span className="text-[#FFFFFF]">and Save Big!</span>
              </h1>
              <p className="leading-[27px] ml-[67px] mt-[36.6px] font-poppins w-[387px] h-[30px]">
              <><span className="text-[18px] text-[#FFFFFF]">Enjoy</span>{" "}
                <span className="text-[#0DCC5C] text-[20px]">20% cashback</span>{" "}
                <span className="text-[20px] text-[#FFFFFF]">
                  on your first order.
                </span>
                </>
              </p>
            </div>

            <div className="flex flex-col rounded-lg space-y-4 mt-[-10px] mr-[50px]">
              <div className="space-y-4 ">
                <Image
                  src="/static/images/apple-bar.svg"
                  alt="App Store"
                  width={123}
                  height={36}
                  className="mt-[7.5px] "
                />
                <Image
                  src="/static/images/google-bar.svg"
                  alt="Google play Store"
                  width={123}
                  height={36}
                  className="mt-[111.5.5px] "
                />
              </div>

              <div className="w-[259.11px] h-[15px]">
                <p className="font-poppins font-[400px] text-[10px] text-center mt-[10px] text-[#FFFFFF] leading-[10px]">
                  *Offer eligible for first 3 orders ordered through app!
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[57.5px] ml-[-170px] ">
            <Image
              src="/static/images/qr.svg"
              alt="QR Code"
              width={100}
              height={100}
              className="flex"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default unlockExpertHelp;
