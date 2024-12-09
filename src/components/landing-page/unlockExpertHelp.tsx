import React from "react";
import Image from "next/image";

const UnlockExpertHelp: React.FC = () => {
  return (
    <div className="relative w-full h-auto">
     
      <div className="absolute top-[-190px] left-[50%] -translate-x-[50%] w-[936px] bg-gradient-to-r from-green-500 to-blue-400 p-10 px-12 rounded-xl text-white flex flex-wrap justify-between items-center mx-auto shadow-xl z-10">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold leading-tight">
            <span className="text-[#2C2C2C]">Unlock</span> Expert Help <br />
            and Save Big!
          </h1>
          <p className="mt-4 text-lg">
            Enjoy <span className="text-[#2C2C2C] font-bold">20% cashback</span> on your first order.
          </p>
        </div>

      
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
          
          <div className="flex flex-col items-start space-y-2">
            <Image
              src="/static/images/apple-bar.svg"
              alt="Download on App Store"
              width={150}
              height={45}
            />
            <Image
              src="/static/images/google-bar.svg"
              alt="Get it on Google Play"
              width={150}
              height={45}
            />
          </div>

        
          <div className="flex items-center justify-center">
            <Image
              src="/static/images/qr.svg"
              alt="QR Code"
              width={120}
              height={120}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockExpertHelp;
