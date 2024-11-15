import { PricingCard } from "@/components/ui/assignment-expert-card";

const AffordablePricing = () => {
  return (
    <>
      <div className="w-full my-20">
        <div className="w-full flex px-28 gap-10">
          {/* Left Section */}
          <div className="font-poppins text-start w-2/4 p-3">
            <div className="font-bold text-6xl text-[#2C2C2C]">
              Top-Rated Assignment Help with Affordable Pricing
            </div>
            <div className="font-medium text-lg text-[#58595D] mt-7">
              Get expert assignment help that combines high-quality writing with
              affordable, student-friendly pricing.
            </div>
          </div>
          {/* Right Section */}
          <div className="w-2/4 flex justify-end">
            <PricingCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default AffordablePricing;
