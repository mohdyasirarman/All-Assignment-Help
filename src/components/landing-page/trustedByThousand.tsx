import Image from "next/image";

const TrustedByThousand = () => {
  const brands = [
    {
      logo: "/static/images/placeHolderBrand.png",
      name: "Name 1",
    },
    {
      logo: "/static/images/placeHolderBrand.png",
      name: "Name 2",
    },
    {
      logo: "/static/images/placeHolderBrand.png",
      name: "Name 3",
    },
    {
      logo: "/static/images/placeHolderBrand.png",
      name: "Name 4",
    },
  ];
  return (
    <div className="w-full my-28">
      <div className="container px-4 lg:w-[1400px] mx-auto flex flex-col lg:flex-col gap-5 lg:gap-0">
        <div className="w-full flex justify-center mb-20">
          {/* Headings */}
          <div className="font-inter font-bold text-6xl text-[#2E2F35] leading-[73px] text-center">
            <div>Trusted by thousands of top DTC</div>
            <div className="font-coveredByYourGrace text-[#09B14F]">
              brands.
            </div>
          </div>
        </div>
        {/* DTC Brands */}
        <div className="w-full ">
          <div className="flex flex-wrap justify-center gap-12">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-evenly bg-white "
              >
                <Image
                  width={280}
                  height={190}
                  src={brand.logo}
                  alt={brand.name}
                  className="mb-5"
                />
                <div className="font-coveredByYourGrace font-semibold text-xl ">
                  {brand.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedByThousand;
