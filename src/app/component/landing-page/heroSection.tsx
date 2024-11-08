import Image from "next/image";

export default function HeroSection() {
  const reviews = [
    {
      platform: "Client Reviews",
      rating: "4.9",
      logo: "/static/images/reviews/client-reviews.svg",
    },
    {
      platform: "Trustpilot",
      rating: "4.5",
      logo: "/static/images/reviews/trustpilot.svg",
    },
    {
      platform: "Sitejabber",
      rating: "4.2",
      logo: "/static/images/reviews/sitejabber.svg",
    },
  ];

  return (
    <div className="bg-[#f5f9ff] relative overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h1 className="text-[#0047AB] text-4xl lg:text-5xl font-bold mb-4">
              ASSIGNMENT HELP - ALLASSIGNMENTHELP.COM
            </h1>
            <p className="text-gray-700 text-xl mb-12">
              Get Online Assignment Help From Best Assignment Help Website
              Instantly!!
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-800">98.2%</h2>
                <p className="text-gray-600">Orders Arrive Timely</p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-800">9/10</h2>
                <p className="text-gray-600">Report Better Grades</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-6">
                {reviews.map((review, index) => (
                  <div key={index} className="flex items-center">
                    <Image
                      src={review.logo}
                      alt={review.platform}
                      width={100}
                      height={24}
                      className="mr-2"
                    />
                    <span className="font-bold text-xl">{review.rating}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Get Assignment Instantly
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-[#f5f9ff] border border-gray-200"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Enter Subject"
                  className="w-full p-3 rounded-lg bg-[#f5f9ff] border border-gray-200"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Deadline</label>
                <select className="w-full p-3 rounded-lg bg-[#f5f9ff] border border-gray-200">
                  <option>Select Deadline</option>
                </select>
              </div>
              <button className="w-full bg-[#e17055] text-white py-3 rounded-lg font-bold hover:bg-[#d65d43] transition-colors">
                GET FREE PRICE QUOTE →
              </button>
            </form>

            <div className="mt-6">
              <p className="text-gray-600 mb-4">Covered By :</p>
              <div className="flex items-center space-x-4">
                <Image
                  src="/static/images/universities/yale.png"
                  alt="Yale"
                  width={100}
                  height={40}
                />
                <Image
                  src="/static/images/universities/unsw.png"
                  alt="UNSW"
                  width={100}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
