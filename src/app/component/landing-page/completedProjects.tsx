import Image from "next/image";

export default function CompletedProjects() {
  const stats = [
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: "/static/images/icons/satisfaction.svg",
    },
    {
      number: "15K+",
      label: "Projects Completed",
      icon: "/static/images/icons/projects.svg",
    },
    {
      number: "4.9/5",
      label: "Average Rating",
      icon: "/static/images/icons/rating.svg",
    },
    {
      number: "2K+",
      label: "Expert Writers",
      icon: "/static/images/icons/writers.svg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Students Worldwide
          </h2>
          <p className="text-lg text-gray-600">
            Our numbers speak for themselves
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  width={32}
                  height={32}
                />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
