import Image from "next/image";

export default function LandingPageFeatures() {
  const features = [
    {
      title: "Quality Guaranteed",
      description: "100% Original Content with Zero Plagiarism",
      icon: "/static/images/features/quality.svg",
    },
    {
      title: "PhD Experts",
      description: "500+ Subject Matter Experts",
      icon: "/static/images/features/expert.svg",
    },
    {
      title: "On-Time Delivery",
      description: "Never Miss a Deadline",
      icon: "/static/images/features/delivery.svg",
    },
    {
      title: "24/7 Support",
      description: "Round the Clock Customer Service",
      icon: "/static/images/features/support.svg",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-xl transition"
            >
              <div className="mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
