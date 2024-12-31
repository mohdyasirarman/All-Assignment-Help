import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

export default function Flags() {
  const phoneNumbers = [
    {
      country: "US",
      flag: "/static/images/flags/us.png",
      number: "+1-817-968-5551",
    },
    {
      country: "AU",
      flag: "/static/images/flags/au.png",
      number: "+61-488-839-671",
    },
    {
      country: "GB",
      flag: "/static/images/flags/gb.png",
      number: "+44-7480-542904",
    },
  ];

  return (
    <div className="bg-white border-gray-200">
      <div className="container mx-auto">
        <div className="flex justify-end items-center h-8">
          <div className="flex items-center">
            {phoneNumbers.map((item, index) => (
              <a
                key={index}
                href={`tel:${item.number}`}
                className="flex items-center mx-[15px] hover:text-blue-600 transition-colors"
              >
                <Image
                  src={item.flag}
                  alt={item.country}
                  width={16}
                  height={11}
                  className="rounded-sm mr-2"
                />
                <span className="text-[12px] leading-[32px] font-bold text-gray-600">
                  {item.number}
                </span>
              </a>
            ))}
          </div>
          <div className="flex items-center">
            <Link
              href="/account"
              className="flex items-center mx-[15px] text-[12px] leading-[32px] font-bold text-gray-600 hover:text-blue-600"
            >
              <FaUserCircle className="mr-2" height={12} width={12} />
              <span>My Account</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
