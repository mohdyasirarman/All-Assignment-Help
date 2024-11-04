export default function Prices() {
  const plans = [
    {
      name: "Basic",
      price: "$12",
      perWord: "per page",
      delivery: "10 Days",
      popular: false,
      features: [
        "Free Title Page",
        "Free Bibliography",
        "Unlimited Revisions",
        "24/7 Support",
        "Quality Check",
        "Plagiarism Report",
      ],
    },
    {
      name: "Premium",
      price: "$18",
      perWord: "per page",
      delivery: "5 Days",
      popular: true,
      features: [
        "All Basic Features",
        "Priority Support",
        "Expert Writer",
        "Advanced Plagiarism Check",
        "Premium Quality",
        "Free Proofreading",
      ],
    },
    {
      name: "Platinum",
      price: "$25",
      perWord: "per page",
      delivery: "3 Days",
      popular: false,
      features: [
        "All Premium Features",
        "Top 10 Writers",
        "1-on-1 Expert Session",
        "Priority Order",
        "SMS Updates",
        "Research Assistance",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Affordable Pricing Plans
          </h2>
          <p className="text-lg text-gray-600">
            Choose the perfect plan for your academic needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 ${
                plan.popular ? "border-2 border-blue-500" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-2">{plan.perWord}</span>
                </div>
                <div className="mb-6 pb-6 border-b">
                  <p className="text-gray-500">
                    Delivery Time: {plan.delivery}
                  </p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 px-8 rounded-xl font-semibold transition-colors ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
