import React from "react";
import Image from "next/image";


interface PricingFeature {
  name: string;
  originalPrice: string;
  discountedPrice: string;
}


interface AffordablePricingProps {
  pricingFeatures?: PricingFeature[];  
}

const AffordablePricing: React.FC<AffordablePricingProps> = ({ pricingFeatures = [] }) => {
 
  const defaultPricingFeatures: PricingFeature[] = [
    { name: "Referencing", originalPrice: "20.99", discountedPrice: "FREE" },
    { name: "Formatting", originalPrice: "12.99", discountedPrice: "FREE" },
    { name: "Revision", originalPrice: "19.99", discountedPrice: "FREE" },
    { name: "Proofreading and Editing", originalPrice: "10.99", discountedPrice: "FREE" },
    { name: "Plagiarism Checks", originalPrice: "14.99", discountedPrice: "FREE" },
    { name: "Unlimited Edits", originalPrice: "6.99", discountedPrice: "FREE" },
  ];

 
  const featuresToDisplay = pricingFeatures.length > 0 ? pricingFeatures : defaultPricingFeatures;

  return (
    <div className="bg-white py-8 px-5 flex flex-col items-center">
      <h2 className="text-[48px] w-[671px] font-bold font-poppins leading-[57px] text-[#010101] text-center mb-4">
        Top-Rated Assignment
      </h2>
      <h2 className="text-[48px] w-[671px] font-bold font-poppins leading-[57px] text-[#010101] text-center mb-4">
        Help with Affordable Pricing
      </h2>
      <p className="text-[18px] text-[#666666] text-center w-[586px] mb-8 font-poppins font-[500] leading-[24px]">
        Get expert assignment help that combines high-quality writing with
        affordable, student-friendly pricing.
      </p>

      
      <div className="grid grid-cols-2 gap-[50px] max-w-[800px]">
        {featuresToDisplay.map((feature, index) => (
          <div key={index} className="ml-[20px] flex items-start">
            <Image
              src="/static/images/tick.svg"
              alt="Referencing Icon"
              width={24}
              height={24}
              className="mr-4"
            />
            <div>
              <h3 className="text-[24px] font-[400] font-poppins leading-[24px] text-[#5F5F5F] mb-1">
                {feature.name}
              </h3>
              <div className="flex flex-row items-center mt-[15px]">
                <p className="text-[20px] font-poppins font-[400] leading-[24px] line-through text-[#5F5F5F]">
                  {feature.originalPrice}
                </p>
                <p className="text-[white] bg-[#55C360] ml-[20px] w-[80px] flex justify-center p-2 text-[15px] font-[400] font-poppins leading-[24px] rounded-[40px]">
                  {feature.discountedPrice}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="bg-[#55C360] mt-[70px] text-white mr-[25px] text-[16px] font-semibold py-3 px-6 rounded-[40px]">
        Unlock Now
      </button>
    </div>
  );
};

export default AffordablePricing;
