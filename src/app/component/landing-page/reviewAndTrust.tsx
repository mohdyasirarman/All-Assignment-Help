import Image from "next/image";

export default function ReviewAndTrust() {
  const reviews = [
    {
      name: "STEFENIE KETCH",
      rating: 5,
      date: "March 20, 2023",
      title:
        "I have been utilizing their services for a few months and have been blown away by their quality and ability to complete projects on time.",
      comment:
        "Due to my hockey practice, I never had time to complete my projects and submit them on time. My professors criticized me, but aah.com helped me address my difficulty. I've been utilizing their services for a few months and have been blown away by their quality and ability to complete projects on time....",
      avatar: "/static/images/reviews/avatar1.png",
    },
    // Add more reviews as needed
  ];

  return (
    <section className="py-16 bg-[#f5f9ff]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Reviews and Trust Go Hand In Hand
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Allassignmenthelp.com has garnered nothing but praise from the
          clients. Any trustworthy review platform has positive review about our
          service and gives us motivation to improve.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Review Platforms */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <Image
                src="/static/images/logo.png"
                alt="AllAssignmentHelp"
                width={200}
                height={40}
              />
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <Image
                src="/static/images/reviews/trustpilot.svg"
                alt="Trustpilot"
                width={200}
                height={40}
              />
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <Image
                src="/static/images/reviews/sitejabber.svg"
                alt="Sitejabber"
                width={200}
                height={40}
              />
            </div>
          </div>

          {/* Reviews Slider */}
          <div className="lg:col-span-9">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {reviews.map((review, index) => (
                <div key={index} className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <h3 className="ml-4 font-bold text-lg">{review.name}</h3>
                    </div>
                    <span className="text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{review.title}</h4>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 space-x-4">
              <button className="p-2 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors">
                ←
              </button>
              <button className="p-2 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
