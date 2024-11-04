import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="bg-[#1a4f7e] relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/static/images/hero-bg-pattern.png"
          alt="Background Pattern"
          fill
          className="opacity-10 object-cover"
        />
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-blue-500/20 text-white px-6 py-2 rounded-full text-sm">
              30% Discount on All Orders
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mt-8 leading-tight">
              Assignment Help by PhD Experts
            </h1>
            <p className="text-xl text-white/80 mt-6">
              Get assignment help from world's most trusted assignment help
              website
            </p>
            <div className="bg-white/10 rounded-xl p-6 mt-8">
              <ul className="space-y-4">
                {[
                  "4.9/5 Client Rating",
                  "100% Plagiarism Free",
                  "24/7 Live Support",
                  "On-Time Delivery",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-white">
                    <svg
                      className="w-5 h-5 text-green-400 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="bg-[#ff6b6b] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#ff5252] transition-colors">
                Order Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors">
                Live Chat
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/static/images/hero-student.png"
              alt="Student with laptop"
              width={600}
              height={500}
              className="rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
