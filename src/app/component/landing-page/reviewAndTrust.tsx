import Image from "next/image";

export default function ReviewAndTrust() {
  const reviews = [
    {
      name: "Sarah Johnson",
      university: "University of London",
      course: "Management Studies",
      rating: 5,
      comment:
        "Excellent service! The assignment was delivered before the deadline and met all requirements.",
      image: "/static/images/reviews/student1.jpg",
      date: "March 15, 2024",
    },
    {
      name: "Michael Chen",
      university: "MIT",
      course: "Computer Science",
      rating: 5,
      comment:
        "Very professional writing service. The quality exceeded my expectations.",
      image: "/static/images/reviews/student2.jpg",
      date: "March 14, 2024",
    },
    {
      name: "Emma Watson",
      university: "Harvard University",
      course: "Business Administration",
      rating: 5,
      comment: "Reliable and efficient service. Will definitely use again!",
      image: "/static/images/reviews/student3.jpg",
      date: "March 13, 2024",
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by 50,000+ Students Worldwide
          </h2>
          <p className="text-lg text-gray-600">
            See what our customers say about our assignment writing services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-500">{review.university}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
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
                <p className="text-gray-600 mb-4">{review.comment}</p>
                <div className="text-sm text-gray-500">{review.date}</div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t">
                <p className="text-sm text-gray-500">Course: {review.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
