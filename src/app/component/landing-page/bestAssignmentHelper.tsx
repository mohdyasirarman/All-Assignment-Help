import Image from "next/image";

export default function BestAssignmentHelper() {
  const benefits = [
    {
      title: "Expert Writers",
      description: "All our writers are PhD holders with years of experience",
      icon: "/static/images/benefits/expert.svg",
    },
    {
      title: "Plagiarism Free",
      description: "100% original content with free Turnitin report",
      icon: "/static/images/benefits/plagiarism.svg",
    },
    {
      title: "On-Time Delivery",
      description: "Never miss a deadline with our timely delivery",
      icon: "/static/images/benefits/delivery.svg",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why We Are The Best Assignment Helper?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We take pride in delivering high-quality academic assistance that
              helps students achieve their goals.
            </p>
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <Image
                      src={benefit.icon}
                      alt={benefit.title}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-10 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Assignment Help
            </button>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/static/images/best-helper.png"
              alt="Best Assignment Helper"
              width={600}
              height={500}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
