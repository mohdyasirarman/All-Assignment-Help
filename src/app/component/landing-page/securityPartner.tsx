import Image from "next/image";

export default function SecurityPartner() {
  const partners = [
    {
      name: "Norton Secured",
      logo: "/static/images/security/norton.svg",
      description: "Protected by Norton Security",
    },
    {
      name: "SSL Encryption",
      logo: "/static/images/security/ssl.svg",
      description: "256-bit SSL Encryption",
    },
    {
      name: "McAfee Secure",
      logo: "/static/images/security/mcafee.svg",
      description: "Verified by McAfee Secure",
    },
    {
      name: "Secure Payment",
      logo: "/static/images/security/payment.svg",
      description: "100% Secure Payment",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Secure & Trusted Platform
          </h2>
          <p className="text-gray-600">
            Your security and privacy are our top priorities
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div key={index} className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={80}
                  height={80}
                  className="mx-auto mb-4"
                />
                <div className="text-sm text-gray-600">
                  {partner.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
