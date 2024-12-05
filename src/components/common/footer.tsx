import Link from "next/link";
// import phsvg from "/static/images/footer-ph.svg.svg";
// import ph from "/static/images/Link.svg";
import Image from "next/image";

export default function Footer() {
  const getToKnowUs = [
    "Blog",
    "FAQs",
    "How It Works",
    "Reviews",
    "Contact Us",
    "Resources",
    "Our Offers",
  ];

  const subjects = [
    "Finance Assignment Help",
    "Artificial Intelligence Assignment Help",
    "Autocad Assignment Help",
    "R Assignment Help",
    "Accounting Assignment Help",
    "Nursing Assignment Help",
    "MBA Assignment Help",
    "SPSS Assignment Help",
    "ArcGIS Assignment Help",
    "Law Assignment Help",
    "Economics Assignment Help",
    "Statistics Assignment Help",
    "Annotated Bibliography Maker",
    "Java Assignment Help",
    "Financial Accounting Assignment Help",
    "C++ Assignment Help",
  ];

  const essays = [
    "Persuasive Essay Writing",
    "Expository Essay Writing",
    "Descriptive Essay Writing",
    "Scholarship Essay Writing",
    "Write Essay For Money",
    "Order An Essay",
    "Pay For Essay",
    "Essay Writers",
    "Essays For Sale",
    "College Essay Writing Service",
  ];

  const citationTools = [
    "APA Citation",
    "Chicago Citation",
    "Harvard Citation",
    "MLA Citation",
    "Vancouver Citation",
    "Oxford Citation",
    "Swinburne Citation",
    "ASIC Citation",
    "Deakin Citation",
    "UWS Citation",
    "Griffith Citation",
  ];

  const countries = [
    "Americas ",
    "Asia Pacific",
    "Europe",
    "Middle East/Africa",
  ];

  return (
    <footer className="bg-[#F1F1F1] text-gray-700 py-12">
      <div className="w-full my-10">
        <div className="flex justify-between px-28 gap-10 text-[#303A42] text-lg font-dmSans font-bold">
          {/* Main Footer Container */}
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
              {/* Get to Know Us Section */}
              <div className="">
                <h3 className="font-semibold font-poppins text-[#2C2C2C] text-[16px] leading-[24px] mb-4">
                  Get to Know Us
                </h3>
                <ul className="space-y-0">
                  {getToKnowUs.map((item, index) => (
                    <li key={index}>
                      <Link
                        href="#"
                        className="text-xs leading-[21px] font-poppins text-[#8A8A8A] font-normal"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subjects Section */}
              <div>
                <h3 className="font-semibold font-poppins text-[#2C2C2C] text-[16px] leading-[24px] mb-4">
                  Subjects
                </h3>
                <ul className="space-y-0">
                  {subjects.slice(0, 8).map((subject, index) => (
                    <li key={index}>
                      <Link
                        href="#"
                        className="text-xs leading-[21px] font-poppins text-[#8A8A8A] font-normal"
                      >
                        {subject}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* More Subjects Section */}
              <div>
                <ul className="space-y-0 mt-8">
                  {subjects.slice(8).map((subject, index) => (
                    <li key={index}>
                      <Link
                        href="#"
                        className="text-xs leading-[21px] font-poppins text-[#8A8A8A] font-normal"
                      >
                        {subject}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Essay Section */}
              <div>
                <h3 className="font-semibold font-poppins text-[#2C2C2C] text-[16px] leading-[24px] mb-4">
                  Essay
                </h3>
                <ul className="space-y-0">
                  {essays.map((essay, index) => (
                    <li key={index}>
                      <Link
                        href="#"
                        className="text-xs leading-[21px] font-poppins text-[#8A8A8A] font-normal"
                      >
                        {essay}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Citation Tools Section */}
              <div>
                <h3 className="font-semibold font-poppins text-[#2C2C2C] text-[16px] leading-[24px] mb-4">
                  Citation Tools
                </h3>
                <ul className="space-y-0">
                  {citationTools.map((tool, index) => (
                    <li key={index}>
                      <Link
                        href="#"
                        className="text-xs leading-[21px] font-poppins text-[#8A8A8A] font-normal"
                      >
                        {tool}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best in Countries Section */}
              <div>
                <h3 className="font-semibold font-poppins text-[#2C2C2C] text-[16px] leading-[24px] mb-4">
                  Best in Countries
                </h3>
                <ul className="flex flex-col  space-y-0 ">
                  {countries.map((country, index) => (
                    <li
                      key={index}
                      className="flex  justify-between items-center"
                    >
                      <Link
                        href="#"
                        className="text-xs leading-[21px] font-poppins text-[#8A8A8A] font-normal"
                      >
                        {country}
                      </Link>
                      <span className="text-[#8A8A8A] font-poppins font-extralight rotate-90">
                        &#62;
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-10 border-t border-[#8A8A8A] relative pt-6">
              {/* Image Placeholder Section */}
              <div className="flex justify-between items-center mb-6">
                <div className=" flex items-center justify-center">
                  {/* phone svg symbol */}
                  <div className="flex items-center">
                    <div className="flex justify-between">
                      <Image
                      src="/static/images/footer-ph.svg (1).png"
                      alt="Phone"
                      width={14}
                      height={15}
                      
                      />
                      <Image
                        src="/static/images/+1-205-350-5700.png"
                        alt="Phone Number"
                        width={100}
                        height={5}
                      />
                    </div>
                     <div className="ml-20 flex   items-center gap-1">
                    <Image
                      src="/static/images/Twittericon.svg.png"
                      alt="Twitter"
                      width={14}
                      height={14}
                    />
                    <Image
                      src="/static/images/facebook.svg.png"
                      alt="Facebook"
                      width={9}
                      height={24}
                    />

                    <svg
                      width="15"
                      height="25"
                      viewBox="0 0 15 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_206_4702)">
                        <g clip-path="url(#clip1_206_4702)">
                          <g clip-path="url(#clip2_206_4702)">
                            <path
                              d="M14.154 9.51249C13.7597 8.81071 13.3316 8.68124 12.4621 8.62975C11.5926 8.57825 9.39826 8.54883 7.5011 8.54883C5.60393 8.54883 3.40885 8.5731 2.53935 8.63122C1.66985 8.68933 1.24024 8.80923 0.842275 9.51396C0.444306 10.2187 0.226562 11.4177 0.226562 13.5459V13.5532C0.226562 15.6696 0.435478 16.8863 0.842275 17.58C1.24907 18.2737 1.66838 18.4061 2.53861 18.4679C3.40885 18.5297 5.60026 18.5488 7.50183 18.5488C9.40341 18.5488 11.5889 18.5187 12.4614 18.4686C13.3338 18.4186 13.7612 18.2825 14.1533 17.5808C14.563 16.8871 14.7705 15.6681 14.7705 13.554V13.5466C14.7727 11.4177 14.5652 10.2135 14.154 9.51249Z"
                              fill="#AAAAAA"
                            />
                            <path
                              d="M5.12012 15.7614V11.3359L10.6946 13.5487L5.12012 15.7614Z"
                              fill="white"
                            />
                          </g>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_206_4702">
                          <rect
                            width="15"
                            height="10"
                            fill="white"
                            transform="translate(0 8.54883)"
                          />
                        </clipPath>
                        <clipPath id="clip1_206_4702">
                          <rect
                            width="15"
                            height="10"
                            fill="white"
                            transform="translate(0 8.54883)"
                          />
                        </clipPath>
                        <clipPath id="clip2_206_4702">
                          <rect
                            width="14.5461"
                            height="10"
                            fill="white"
                            transform="translate(0.226562 8.54883)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="12"
                      height="25"
                      viewBox="0 0 12 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_206_4708)">
                        <g clip-path="url(#clip1_206_4708)">
                          <g clip-path="url(#clip2_206_4708)">
                            <path
                              d="M6.20078 6.11719C2.15292 6.11719 -0.00292969 8.72781 -0.00292969 11.5745C-0.00292969 12.8944 0.729969 14.5406 1.90336 15.0631C2.08151 15.1442 2.17848 15.1097 2.21832 14.9435C2.25365 14.8173 2.40774 14.2084 2.48216 13.922C2.4955 13.8772 2.49668 13.8296 2.48559 13.7842C2.47449 13.7387 2.45152 13.6971 2.41902 13.6634C1.96774 13.0734 1.7222 12.3518 1.71995 11.609C1.72924 11.0697 1.84778 10.5379 2.06841 10.0457C2.28903 9.55353 2.60716 9.11118 3.00357 8.74541C3.39998 8.37963 3.86644 8.09803 4.37475 7.91761C4.88307 7.7372 5.42268 7.66172 5.96099 7.69574C8.26868 7.69574 9.88332 9.20438 9.88332 11.3625C9.88332 13.801 8.60093 15.4885 6.93443 15.4885C6.72631 15.5044 6.51739 15.4708 6.32467 15.3907C6.13195 15.3106 5.96087 15.186 5.82535 15.0273C5.68982 14.8686 5.59369 14.6801 5.54477 14.4772C5.49585 14.2743 5.49552 14.0627 5.5438 13.8596C5.89065 12.884 6.15148 11.8799 6.32331 10.8589C6.34055 10.695 6.32238 10.5294 6.27003 10.3733C6.21768 10.2171 6.13237 10.074 6.01988 9.95364C5.90739 9.83331 5.77036 9.73857 5.61806 9.67583C5.46575 9.61309 5.30174 9.58382 5.13714 9.59C4.19827 9.59 3.43681 10.5259 3.43681 11.7819C3.43111 12.2426 3.52683 12.6989 3.71719 13.1184C3.71719 13.1184 2.78885 16.8942 2.61596 17.5993C2.45821 18.6933 2.48132 19.8059 2.68437 20.8924C2.686 20.9125 2.69384 20.9316 2.70681 20.947C2.71979 20.9624 2.73724 20.9734 2.75675 20.9785C2.77626 20.9835 2.79686 20.9824 2.81568 20.9752C2.8345 20.968 2.85061 20.9551 2.86177 20.9383C3.50451 20.0487 4.01918 19.0732 4.39071 18.0405C4.50496 17.6158 4.97477 15.8944 4.97477 15.8944C5.22188 16.2294 5.54733 16.4987 5.92265 16.6788C6.29796 16.8588 6.71169 16.9442 7.12761 16.9273C9.95623 16.9273 12.0001 14.4256 12.0001 11.3204C11.9896 8.3437 9.45861 6.11719 6.20078 6.11719Z"
                              fill="#AAAAAA"
                            />
                          </g>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_206_4708">
                          <rect
                            width="12"
                            height="15"
                            fill="white"
                            transform="translate(0 6.04883)"
                          />
                        </clipPath>
                        <clipPath id="clip1_206_4708">
                          <rect
                            width="12"
                            height="15"
                            fill="white"
                            transform="translate(0 6.04883)"
                          />
                        </clipPath>
                        <clipPath id="clip2_206_4708">
                          <rect
                            width="12"
                            height="14.8632"
                            fill="white"
                            transform="translate(0 6.11719)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <svg
                      width="15"
                      height="25"
                      viewBox="0 0 15 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_206_4718)">
                        <g clip-path="url(#clip1_206_4718)">
                          <g clip-path="url(#clip2_206_4718)">
                            <path
                              d="M14.0821 9.80473C13.258 9.80608 12.456 9.53804 11.7984 9.04144C11.3335 8.69232 10.9554 8.24069 10.6935 7.72166C10.4316 7.20263 10.2929 6.63018 10.2882 6.04883H7.83933V12.7409V16.4065C7.84028 16.8761 7.69233 17.3338 7.41675 17.714C7.14117 18.0942 6.75215 18.3772 6.3056 18.5224C5.85905 18.6675 5.37798 18.6674 4.93152 18.5219C4.48507 18.3765 4.09623 18.0932 3.82089 17.7129C3.54555 17.3325 3.3979 16.8747 3.39915 16.4051C3.4004 15.9356 3.5505 15.4785 3.82786 15.0996C4.10523 14.7207 4.49558 14.4396 4.9428 14.2965C5.39002 14.1534 5.8711 14.1558 6.31686 14.3034V11.8166C6.08149 11.7816 5.84385 11.7641 5.6059 11.7642C4.93946 11.762 4.28018 11.9017 3.67187 12.1739C3.06356 12.4461 2.52015 12.8447 2.07775 13.3431C1.29033 14.2249 0.872408 15.3758 0.910609 16.5574C0.94881 17.7389 1.44021 18.8604 2.28294 19.6895C2.42226 19.8274 2.56993 19.9565 2.72511 20.0763C3.55097 20.7109 4.56436 21.053 5.6059 21.0488C5.84214 21.0487 6.07805 21.0312 6.31173 20.9965C7.30073 20.8509 8.21714 20.3925 8.92681 19.6885C9.36174 19.2625 9.70748 18.7542 9.94386 18.1932C10.1802 17.6321 10.3025 17.0297 10.3036 16.4209L10.2913 10.9466C11.3789 11.7849 12.7139 12.2388 14.0872 12.2372V9.8037H14.08L14.0821 9.80473Z"
                              fill="#AAAAAA"
                            />
                          </g>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_206_4718">
                          <rect
                            width="15"
                            height="15"
                            fill="white"
                            transform="translate(0 6.04883)"
                          />
                        </clipPath>
                        <clipPath id="clip1_206_4718">
                          <rect
                            width="15"
                            height="15"
                            fill="white"
                            transform="translate(0 6.04883)"
                          />
                        </clipPath>
                        <clipPath id="clip2_206_4718">
                          <rect
                            width="13.179"
                            height="15"
                            fill="white"
                            transform="translate(0.910156 6.04883)"
                          />
                        </clipPath>
                        
                      </defs>
                    </svg>
                    </div>
                  </div>
                </div>
                <div className=" flex items-center justify-center">
                  <Image
                    src="/static/images/Link (3).png"
                    alt="Link"
                    width={117}
                    height={30}
                  />
                  <Image
                    src="/static/images/Link (4).png"
                    alt="Link"
                    width={101}
                    height={30}
                  />
                </div>
                <div className=" flex items-center justify-center">
                  <Image
                    src="/static/images/secure-payment.png"
                    alt="Secure Payment"
                    width={190}
                    height={26}
                  />
                  <Image
                    src="/static/images/Link (2).png"
                    alt="Link"
                    width={150}
                    height={23}
                  />
                </div>
              </div>

              {/* Copyright */}
              <p className="text-center text-[10px] leading-[15px] font-poppins text-[#2C2C2C] font-normal">
                Copyright © 2024 MyAssignmenthelp.com. All rights reserved
              </p>
              <p className="text-center  text-[10px] leading-[15px] font-poppins text-[#2C2C2C] font-normal">
                Disclaimer: The reference papers provided by
                MyAssignmentHelp.com serve as model papers for students and are
                not to be submitted as it is. These papers are intended to be
                used for research and reference purposes only.
              </p>
              <div className="flex  justify-center my-3 items-center gap-2">
                <Link
                  href="#"
                  className="text-[12px] leading-[18px] font-poppins text-[#8A8A8A] font-normal"
                >
                  Terms & Conditions
                </Link>
                <span className="text-[12px] leading-[18px] font-poppins text-[#8A8A8A] font-normal">
                  |
                </span>
                <Link
                  href="#"
                  className="text-[12px] leading-[18px] font-poppins text-[#8A8A8A] font-normal"
                >
                  Privacy Policy
                </Link>
                <span className="text-[12px] leading-[18px] font-poppins text-[#8A8A8A] font-normal">
                  |
                </span>
                <Link
                  href="#"
                  className="text-[12px] leading-[18px] font-poppins text-[#8A8A8A] font-normal"
                >
                  Revision & Refund policy
                </Link>
                <span className="text-[12px] leading-[18px] font-poppins text-[#8A8A8A] font-normal">
                  |
                </span>
                <Link
                  href="#"
                  className="text-[12px] leading-[18px] font-poppins text-[#8A8A8A] font-normal"
                >
                  Fair use policy
                </Link>
              </div>
              <div className=" absolute -bottom-[20px] right-[10px]">
                <Image width={100} height={100} src="/static/images/Container.png" alt="Container" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
