import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const links = {
    services: [
      "Assignment Help",
      "Essay Writing",
      "Dissertation Help",
      "Thesis Writing",
      "Research Paper Help",
    ],
    company: [
      "About Us",
      "Contact Us",
      "Privacy Policy",
      "Terms & Conditions",
      "Refund Policy",
    ],
    support: [
      "FAQs",
      "How It Works",
      "Track Order",
      "Payment Options",
      "Student Resources",
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/static/images/logo-white.png"
              alt="Assignment Help"
              width={200}
              height={50}
            />
            <p className="mt-4">Your trusted partner for academic excellence</p>
          </div>
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-white font-bold mb-4 uppercase">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((item, index) => (
                  <li key={index}>
                    <Link href="#" className="hover:text-white transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© 2024 AllAssignmentHelp.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
