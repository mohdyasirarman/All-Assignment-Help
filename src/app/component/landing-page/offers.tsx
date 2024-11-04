import Image from "next/image";

export default function Offers() {
  const offers = [
    {
      title: "First Order Special",
      discount: "50% OFF",
      code: "FIRST50",
      validUntil: "Limited Time Offer",
      description: "Get 50% off on your first assignment",
      icon: "/static/images/offers/new-user.svg",
    },
    {
      title: "Bulk Orders",
      discount: "40% OFF",
      code: "BULK40",
      validUntil: "On 3+ Assignments",
      description: "Save more when you order multiple assignments",
      icon: "/static/images/offers/bulk.svg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
            Limited Time
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Exclusive Offers
          </h2>
          <p className="text-lg text-gray-600">
            Take advantage of our special discounts and save big on your
            assignments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-2 rounded-bl-lg">
                {offer.discount}
              </div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <Image
                      src={offer.icon}
                      alt={offer.title}
                      width={32}
                      height={32}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {offer.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">{offer.description}</p>
                <div className="bg-gray-50 p-4 rounded-xl mb-6">
                  <p className="text-sm text-gray-500 mb-2">Use Code:</p>
                  <div className="font-mono text-lg font-bold text-orange-600">
                    {offer.code}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {offer.validUntil}
                  </span>
                  <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    Claim Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
