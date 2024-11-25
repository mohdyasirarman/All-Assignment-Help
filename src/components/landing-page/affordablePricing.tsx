import { PricingCard } from "@/components/ui/assignment-expert-card";
import { strict } from "assert";

interface PricingProps {
  changeTitle: String,
  changeInP: String
}

const AffordablePricing = ({ changeTitle, changeInP }: PricingProps) => {

  const essayTypes = [
    "College Essay",
    "History",
    "Law",
    "Philosophy",
    "Proposal",
    "Illustration",
    "Business",
    "Literature",
    "Nursing",
    "Analysis",
    "Analytical",
    "Sample Classification",
  ];

  return (
    <>
      <div className="w-full my-20">
        <div className="w-full flex px-28 gap-10">
          {/* Left Section */}
          <div className="font-poppins text-start w-2/4 p-3">
            {changeTitle ? <div className="font-bold text-6xl text-[#2C2C2C]">{changeTitle}</div> : <div className="font-bold text-6xl text-[#2C2C2C]">
              Top-Rated Assignment Help with Affordable Pricing
            </div>}
            {changeInP ? <div className="font-medium text-lg text-[#58595D] mt-7">{changeInP}</div> : <div className="font-medium text-lg text-[#58595D] mt-7">
              Get expert assignment help that combines high-quality writing with
              affordable, student-friendly pricing.
            </div>}
            <div className="text-center my-12">
              <h2 className="text-2xl font-bold mb-4">
                Essays For All Academic Subjects &amp; Types
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8">
                {essayTypes.map((type, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-[#09b14f] text-lg mr-2">●</span>
                    <span className="text-gray-800 font-medium">{type}</span>
                  </div>
                ))}
              </div>
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
