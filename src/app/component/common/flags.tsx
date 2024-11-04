import Image from "next/image";

export default function Flags() {
  const countries = [
    { name: "USA", flag: "/static/images/flags/usa.svg", code: "+1" },
    { name: "UK", flag: "/static/images/flags/uk.svg", code: "+44" },
    { name: "AUS", flag: "/static/images/flags/australia.svg", code: "+61" },
    { name: "UAE", flag: "/static/images/flags/uae.svg", code: "+971" },
  ];

  return (
    <div className="bg-gray-100 border-b">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-10 px-4">
          <div className="flex items-center space-x-6">
            {countries.map((country, index) => (
              <div key={index} className="flex items-center space-x-1">
                <Image
                  src={country.flag}
                  alt={country.name}
                  width={16}
                  height={12}
                  className="rounded-sm"
                />
                <span className="text-xs text-gray-600">{country.code}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="tel:+18882847287"
              className="text-xs text-gray-600 hover:text-blue-600"
            >
              <span className="font-medium">Toll Free:</span> +1-888-284-7287
            </a>
            <a
              href="mailto:contact@allassignmenthelp.com"
              className="text-xs text-gray-600 hover:text-blue-600"
            >
              <span className="font-medium">Email:</span>{" "}
              contact@allassignmenthelp.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
