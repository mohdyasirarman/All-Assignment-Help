import Image from "next/image";
import Link from "next/link";

export default function Flags() {
  const phoneNumbers = [
    {
      country: "US",
      flag: "/static/images/flags/usa.svg",
      number: "+1-817-968-5551",
    },
    {
      country: "AU",
      flag: "/static/images/flags/australia.svg",
      number: "+61-488-839-671",
    },
    {
      country: "UK",
      flag: "/static/images/flags/uk.svg",
      number: "+44-7480-542904",
    },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-8">
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
                  width={20}
                  height={15}
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
              <Image
                src="/static/images/icons/user.svg"
                alt="Account"
                width={16}
                height={16}
                className="mr-2"
              />
              <span>My Account</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
