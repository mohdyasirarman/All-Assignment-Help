import Image from "next/image";

export default function LandingPageFeatures() {
  const features = [
    {
      title: "Order Preview Before Final Work",
      description: "You get a preview before making final payment.",
      icon: "/static/images/features/preview.svg",
      side: "left",
    },
    {
      title: "Pay Using different channels",
      description:
        "You can pay using multiple secure channels, such as PayPal or Credit Cards.",
      icon: "/static/images/features/payment.svg",
      side: "left",
    },
    {
      title: "Plagiarism Free Work Guaranteed",
      description: "We sent unique content with no plagiarism.",
      icon: "/static/images/features/plagiarism.svg",
      side: "left",
    },
    {
      title: "Ping Us On Live Chat",
      description:
        "You can talk to us anytime around the clock. We are up for the support.",
      icon: "/static/images/features/chat.svg",
      side: "right",
    },
    {
      title: "Choose Your Own Expert",
      description: "We let you chose from the pool of 2000 PhDs tutors.",
      icon: "/static/images/features/expert.svg",
      side: "right",
    },
    {
      title: "Go Mobile",
      description:
        "You do not need to be on laptop all the time, our mobile interface is great to use.",
      icon: "/static/images/features/mobile.svg",
      side: "right",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why students order last minute
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          assistance with assignments from us
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          You have the flexibility to chose an assignment expert that suits your
          budget and quality parameters. We have more than 2000 PhD experts
          available to assist with assignments.
        </p>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Features */}
            <div className="space-y-12">
              {features
                .filter((f) => f.side === "left")
                .map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-end text-right"
                  >
                    <div className="mr-4">
                      <h3 className="text-xl font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                ))}
            </div>

            {/* Center Image */}
            <div className="flex justify-center items-center">
              <Image
                src="/static/images/features/students-working.svg"
                alt="Students Working"
                width={400}
                height={400}
                className="max-w-full"
              />
            </div>

            {/* Right Features */}
            <div className="space-y-12">
              {features
                .filter((f) => f.side === "right")
                .map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#e17055] text-white px-6 py-3 rounded hover:bg-[#d65d43] transition-colors">
            View all Features →
          </button>
        </div>
      </div>
    </section>
  );
}
