import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const information = [
    "Terms & Condition",
    "FAQ",
    "Blog",
    "About Us",
    "Our Features",
    "Our Tutors",
    "Resources",
    "User Reviews",
    "Count Words",
    "Samples",
    "Get Free Price Quote",
  ];

  const services = [
    "Free plagiarism report",
    "Assignment Writing Services",
    "Essay Writing Services",
    "Dissertation Writing Services",
    "Programming Services",
    "Homework Help Services",
    "Casestudy Services",
    "Business Writing Services",
    "Proofreading & Editing Services",
    "Online Coursework Services",
  ];

  const contactInfo = {
    email: "enquiry@allassignmenthelp.com",
    phones: ["+1-817-968-5551", "+44-7480-542904", "+61-488-839-671"],
    whatsapp: "+1(505)966-9707",
    address:
      "Suite 508, 3/23 Junction Blvd, Cockburn Central WA 6164, Australia",
  };

  return (
    <footer className="bg-[#2A7B8E] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              {information.map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-sm hover:text-gray-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href="#" className="text-sm hover:text-gray-300">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              AllAssignmentHelp Social Media
            </h3>
            <div className="flex space-x-4 mb-8">
              {/* Add social media icons here */}
            </div>

            <h3 className="font-semibold mb-4">Reach Out to Us</h3>
            <ul className="space-y-2 text-sm">
              <li>📧 {contactInfo.email}</li>
              {contactInfo.phones.map((phone, index) => (
                <li key={index}>📞 Toll Free US: {phone}</li>
              ))}
              <li>📱 WhatsApp: {contactInfo.whatsapp}</li>
              <li>📍 Address: {contactInfo.address}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Special Offers</h3>
            <p className="text-sm mb-4">Sign Up to access our special offers</p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full px-4 py-2 bg-white/10 rounded"
              />
              <button className="w-full bg-white text-[#2A7B8E] px-4 py-2 rounded">
                Submit
              </button>
              <button className="w-full border border-[#FFB800] text-[#FFB800] px-4 py-2 rounded">
                $ Become an Affiliate
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex justify-center mb-8">
            <Image
              src="/static/images/logo.png"
              alt="AllAssignmentHelp"
              width={200}
              height={50}
            />
          </div>
          <p className="text-center text-sm">
            We Offer Assignment Writing Services In Many Countries And Cities
            Around The World
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="#">Australia</Link>
            <Link href="#">UK</Link>
            <Link href="#">USA</Link>
            <Link href="#">UAE</Link>
            <Link href="#">Singapore</Link>
            <Link href="#">Canada</Link>
            <Link href="#">New Zealand</Link>
            <Link href="#">Malaysia</Link>
          </div>
          <p className="text-center text-sm mt-8">
            Copyright © 2024 AllAssignmentHelp.com. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
