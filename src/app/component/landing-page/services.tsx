import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Assignment Writing",
      description: "Get help with any type of assignment across all subjects",
      icon: "/static/images/services/assignment.svg",
      subjects: ["Management", "Engineering", "Programming", "Nursing", "Law"],
    },
    {
      title: "Dissertation Help",
      description: "Expert PhD writers for complete dissertation support",
      icon: "/static/images/services/dissertation.svg",
      subjects: [
        "PhD Thesis",
        "Research Proposal",
        "Literature Review",
        "Methodology",
      ],
    },
    {
      title: "Essay Writing",
      description: "Professional essay writing and editing services",
      icon: "/static/images/services/essay.svg",
      subjects: ["Academic Essays", "Admission Essays", "Research Essays"],
    },
    {
      title: "Programming Help",
      description: "Expert coding help in all programming languages",
      icon: "/static/images/services/programming.svg",
      subjects: ["Python", "Java", "C++", "JavaScript", "PHP"],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Premium Assignment Writing Services
          </h2>
          <p className="text-lg text-gray-600">
            Choose from our wide range of academic writing services tailored to
            your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.subjects.map((subject, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-500 flex items-center"
                    >
                      <svg
                        className="w-4 h-4 text-blue-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t px-8 py-4">
                <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
