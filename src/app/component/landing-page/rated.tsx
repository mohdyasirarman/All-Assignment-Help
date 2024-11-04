import Image from "next/image";

export default function Rated() {
  const ratings = [
    {
      platform: "Trustpilot",
      rating: "4.9/5",
      reviews: "2,500+",
      logo: "/static/images/ratings/trustpilot.svg",
      color: "bg-[#00b67a]",
    },
    {
      platform: "SiteJabber",
      rating: "4.8/5",
      reviews: "1,800+",
      logo: "/static/images/ratings/sitejabber.svg",
      color: "bg-[#2d91fb]",
    },
    {
      platform: "Google Reviews",
      rating: "4.9/5",
      reviews: "3,000+",
      logo: "/static/images/ratings/google.svg",
      color: "bg-[#4285f4]",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Highly Rated on All Platforms
          </h2>
          <p className="text-lg text-gray-600">
            See why thousands of students trust us with their assignments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ratings.map((platform, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <Image
                  src={platform.logo}
                  alt={platform.platform}
                  width={120}
                  height={40}
                />
                <div
                  className={`${platform.color} text-white px-3 py-1 rounded-full text-sm`}
                >
                  {platform.rating}
                </div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600">{platform.reviews} Reviews</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
