import Image from "next/image";

export default function Prices() {
  const countries = [
    {
      name: "United Kingdom",
      flag: "/static/images/flags/uk.svg",
    },
    {
      name: "AUSTRALIA",
      flag: "/static/images/flags/australia.svg",
    },
    {
      name: "United States of America",
      flag: "/static/images/flags/usa.svg",
    },
    {
      name: "Singapore",
      flag: "/static/images/flags/singapore.svg",
    },
    {
      name: "Canada",
      flag: "/static/images/flags/canada.svg",
    },
  ];

  const features = [
    {
      title: "ASSIGNMENT HELP CHEAP",
      description:
        "We never burden students with a high price. We understand how hard is it to manage financials.",
      icon: "/static/images/prices/cheap.svg",
    },
    {
      title: "100% PLAGIARISM FREE",
      description:
        "We deliver original and unique custom assignment help. Be rest assured to get an essay written from scratch.",
      icon: "/static/images/prices/plagiarism.svg",
    },
    {
      title: "FIRST CLASS SOLUTIONS",
      description:
        "Our online assignment helpers can ensure first class custom written assignment solution.",
      icon: "/static/images/prices/solutions.svg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Best Quality Assignment Help At Cheap
          <br />
          Prices Price Worldwide
        </h2>

        <div className="flex justify-center items-center gap-8 mb-12">
          {countries.map((country, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={country.flag}
                alt={country.name}
                width={40}
                height={30}
                className="mb-2"
              />
              <span className="text-gray-600 text-sm">{country.name}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 max-w-4xl mx-auto mb-16">
          One of the factors that makes students apprehensive of assignment help
          online is the cost of the service. Most of the assignment help seekers
          think that online assignment writing is an expensive affair.
          Considering the budget of students towards assignment help, we have
          created our pricing plan with irrespective of the disparity in
          academic levels. Enjoy affordable assignment help service from the
          best online assignment helpers. You can avail our assignment help
          service across the world including Singapore, New Zealand, Canada,
          Australia, the US, the UK and rest of the world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-[#e17055] text-white px-8 py-3 rounded hover:bg-[#d65d43] transition-colors">
            Place Your Order →
          </button>
        </div>
      </div>
    </section>
  );
}
