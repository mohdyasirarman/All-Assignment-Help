export default function Offers() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Claim Your Offer
            </h2>
            <p className="text-gray-600 mb-8">
              Hello, We have a special ongoing offer for our new customers to
              avail 30% OFF & 150% Cashback on their first assignment with us.
              We are committed to delivering the premium service despite an
              affordable price. Enter your phone number below to get the coupon
              code. (We do not spam)
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Susan White
              </h3>
              <p className="text-blue-600">Head of Sales Department</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-4xl font-bold mb-2">
              <span className="text-blue-600">30% OFF & 150% Cashback</span>
            </h3>
            <p className="text-gray-700 mb-2">on your First order !</p>
            <p className="text-gray-600 mb-6">
              Type your whatsapp number to get an exclusive code.
            </p>

            <div className="flex">
              <div className="flex-shrink-0">
                <select className="h-12 px-3 bg-gray-50 border border-gray-200 rounded-l focus:outline-none">
                  <option>+1</option>
                  <option>+44</option>
                  <option>+91</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="Enter Your Whats App No."
                className="flex-1 h-12 px-4 border border-l-0 border-gray-200 focus:outline-none"
              />
              <button className="h-12 px-6 bg-[#25D366] text-white rounded-r hover:bg-[#128C7E] transition-colors flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
                Get Offer on whatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
