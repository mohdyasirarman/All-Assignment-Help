import Image from "next/image";

export default function AcademicStress() {
  const benefits = [
    {
      title: "24/7 Expert Support",
      description: "Get instant help anytime",
      icon: "/static/images/benefits/support.svg",
    },
    {
      title: "Plagiarism-Free",
      description: "100% original content",
      icon: "/static/images/benefits/plagiarism.svg",
    },
    {
      title: "On-Time Delivery",
      description: "Never miss a deadline",
      icon: "/static/images/benefits/delivery.svg",
    },
    {
      title: "Affordable Prices",
      description: "Best rates in industry",
      icon: "/static/images/benefits/price.svg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/static/images/stress-pattern.png"
          alt="Pattern"
          fill
          className="object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-blue-500/20 text-white px-4 py-1 rounded-full text-sm mb-6">
              Student Success
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">
              Say Goodbye to Academic Stress
            </h2>
            <p className="text-xl text-white/80 mb-12">
              Let our experts handle your assignments while you focus on what
              matters most
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Image
                      src={benefit.icon}
                      alt={benefit.title}
                      width={24}
                      height={24}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Started Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/static/images/student-success.png"
              alt="Student Success"
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
