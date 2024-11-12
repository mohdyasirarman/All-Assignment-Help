import Image from "next/image";

export default function SecurityPartner() {
  const partners = [
    {
      name: "Google Apps for Work",
      logo: "/static/images/partners/google.svg",
    },
    {
      name: "Amazon Web Services",
      logo: "/static/images/partners/amazon.svg",
    },
    {
      name: "Cloudflare",
      logo: "/static/images/partners/cloudflare.svg",
    },
    {
      name: "Cisco",
      logo: "/static/images/partners/cisco.svg",
    },
    {
      name: "McAfee Secure",
      logo: "/static/images/partners/mcafee.svg",
    },
    {
      name: "PayPal",
      logo: "/static/images/partners/paypal.svg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Security Partners
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={40}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
