"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

interface AssignmentHelpProps {
  changeInH: string;
  changeInP: string;
  isboy: boolean;
  isReviewPage?: boolean; 
}

export default function HeroSectionNew({
  changeInH,
  changeInP,
  isboy,
  isReviewPage,
}: AssignmentHelpProps) {
  const [inputTypeCalen, setInputTypeCalen] = useState("text");

  const handleFocusCalen = () => setInputTypeCalen("date");
  const handleBlurCalen = () => setInputTypeCalen("text");

  const statsData = [
    { number: "200+", label: "Experts", color: "text-[#2BAFFC]" },
    { number: "⭐4.6", label: "1k+ Reviews", color: "text-[#2BAFFC]" },
    { number: "2k+", label: "Students", color: "text-[#2BAFFC]" },
  ];
  const photoList = [
    "img_front_page_review_1.jpeg",
    "img_front_page_review_2.jpeg",
    "img_front_page_review_3.jpeg",
    "img_front_page_review_4.jpeg",
  ];

  return (
    <>
      <div className="w-full h-full bg-hero-pattern_new bg-no-repeat overflow-hidden bg-cover absolute rotate-[40] -top-[550px] -right-[900px]"></div>
      <div className="absolute left-[491px] -top-10 h-[466px] w-[466px] blur-3xl bg-gradient-to-t from-transparent to-[#2BAFFC] opacity-55" />
      <div className="w-full h-screen backdrop-blur-[100px] absolute top-0 left-0"></div>
      <div className="relative w-full h-screen flex justify-center items-center">
        <div className="right absolute bottom-16 left-[50%]  drop-shadow-xl hover:drop-shadow-2xl transition-all">
          <div>
            {isReviewPage ? (
              <Image
                src="/static/images/review.png"
                alt="review"
                width={600}
                height={600}
                quality={100}
                priority
              />
            ) : isboy ? (
              <Image
                src="/static/images/girl.png"
                alt="girl"
                width={600}
                height={600}
                quality={100}
                priority
              />
            ) : (
              <Image
                src="/static/images/boy.png"
                alt="boy"
                width={1500}
                height={1500}
                quality={100}
                priority
              />
            )}
          </div>

          <div className="absolute top-[15%] left-[73%] font-poppins bg-white rounded-xl shadow-xl px-4 py-8">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-[#313131] justify-center mb-12 last:mb-0"
              >
                <div className={`text-4xl font-extrabold ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-[#313131] text-md font-semibold mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute left-[5%] top-[8%]">
          <div className="flex items-center mb-4">
            <Image
              src="/static/images/pencilOnMainPage.png"
              width={30}
              height={30}
              alt="pencil"
            />
            <h2 className="font-poppins text-[#55C360] text-md font-[550] tracking-wide">
              {changeInP || "Grow Your Future With Us"}
            </h2>
          </div>

          <h1 className="font-poppins max-w-2xl break-words hyphens-auto leading-[69px] text-[65px] font-bold text-black mb-2">
            {changeInH ? (
              changeInH
                .split(" ")
                .reduce((acc: string[][], word, index) => {
                  const chunkIndex = Math.floor(index / 3);
                  if (!acc[chunkIndex]) acc[chunkIndex] = [];
                  acc[chunkIndex].push(word);
                  return acc;
                }, [] as string[][])
                .map((chunk, index) => (
                  <>
                    <span
                      className=" font-inter drop-shadow-[0_45px_55px_rgba(0,0,0,.1)] leading-[62px]"
                      key={index}
                    >
                      {chunk.join(" ")}
                      <br />
                    </span>
                  </>
                ))
            ) : (
              <>
                <div className=" font-inter drop-shadow-[0_45px_55px_rgba(0,0,0,.1)] leading-[62px]">
                  Ace Your
                  <br />
                  Assignments with
                  <br />
                  Expert Help
                </div>
                <svg
                  className="absolute top-[39%]"
                  width="392"
                  height="23"
                  viewBox="0 0 362 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M64.3647 4.68622C60.4122 5.24711 56.7026 6.05912 53.3573 7.19762C52.993 7.32319 52.8824 7.49895 52.8493 7.57429C52.7939 7.70824 52.8162 7.83387 52.9045 7.95107C52.9596 8.02641 53.0481 8.11851 53.2358 8.17711C53.3682 8.21896 53.7104 8.25242 54.1632 8.24405C54.9361 8.23567 56.1284 8.16873 56.7026 8.16873C58.6677 8.18548 60.6331 8.17704 62.5982 8.20214C68.8583 8.28586 69.9512 8.35283 77.9999 8.3026C87.3954 8.244 96.8131 8.14355 106.22 7.99286C76.3216 9.24857 46.4678 10.7136 16.7685 12.0781C16.4373 12.0948 16.1834 12.3126 16.2055 12.5637C16.2165 12.8232 16.5145 13.0157 16.8458 12.999C86.1477 9.81788 156.212 6.06749 226.043 5.82471C229.489 5.88331 232.923 5.94188 236.344 6.00047C257.024 6.36882 277.713 6.81253 298.37 7.49898C305.095 7.72501 311.818 7.97613 318.552 8.21052C320.54 8.2775 322.538 8.34446 324.538 8.41143C326.148 8.46166 330.301 8.64586 330.885 8.65423C331.416 8.6626 331.548 8.30268 331.559 8.28594C331.592 8.16874 331.571 8.03474 331.437 7.90917C331.404 7.87569 331.316 7.78364 331.117 7.74179C331.084 7.74179 330.929 7.725 330.609 7.69989C314.005 6.67021 297.355 5.95865 280.672 5.5066C282.913 5.52334 285.154 5.53175 287.397 5.5485C304.676 5.64895 321.998 6.00892 339.265 5.5485C343.195 5.44803 347.137 5.33079 351.058 5.18848C353.695 5.0964 360.485 5.21361 361.446 4.99595C361.887 4.90387 361.986 4.66945 361.998 4.55225C362.009 4.41831 361.977 4.26762 361.778 4.13369C361.69 4.06671 361.412 3.95794 360.895 3.87422C343.946 1.08657 324.118 1.87342 306.861 1.09488C259.994 -1.03981 213.293 0.383377 166.435 1.68094C125.993 2.80269 85.5517 2.86128 45.1318 4.38487C30.3373 4.93738 15.0793 4.30119 0.494651 6.41076C0.163432 6.461 -0.0464105 6.6953 0.00879277 6.94644C0.0750367 7.19759 0.395243 7.36506 0.726461 7.31484C15.2449 5.21363 30.4478 5.8582 45.1872 5.30569C51.5796 5.06292 57.9721 4.86202 64.3647 4.68622ZM189.4 5.30569C164.636 5.0127 139.872 4.86198 115.086 4.95406C98.0828 5.01265 73.3077 2.55995 56.4155 7.24791C56.5369 7.24791 56.6361 7.24791 56.7244 7.24791C58.6898 7.26465 60.6551 7.24784 62.6202 7.28132C68.8692 7.36504 69.9623 7.432 77.9888 7.38177C98.5134 7.24783 119.093 6.91303 139.607 6.39401C156.223 5.97544 172.817 5.59869 189.4 5.30569ZM356.918 4.22575C340.899 2.09944 322.737 2.73574 306.784 2.01581C259.96 -0.118883 213.293 1.30421 166.48 2.60176C145.557 3.18775 124.647 3.48074 103.747 3.84071C107.754 3.9579 111.586 4.0416 115.086 4.03323C150.515 3.89929 185.933 4.25932 221.362 4.82857C243.367 4.57743 265.371 4.48535 287.407 4.61929C304.676 4.72812 321.965 5.07972 339.232 4.62766C343.151 4.52721 347.081 4.40996 351.002 4.26766C352.337 4.2258 354.756 4.23413 356.918 4.22575Z"
                    fill="#55C360"
                  />
                </svg>
              </>
            )}
          </h1>
          <div className="form flex w-[242px] mt-8">
            <form className="space-y-6 mt-4">
              <div className="flex items-center gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-3xl px-10 font-poppins flex-1 py-[14px] placeholder:text-[#333333] focus:outline-none border-black border-2 focus:ring focus:ring-blue-300"
                  required
                />
                <input
                  type="text"
                  placeholder="Assignment (Any Type)"
                  className="border-black border-2 font-poppins rounded-3xl px-10 py-[14px] placeholder:text-[#333333] focus:outline-none flex-1 focus:ring focus:ring-blue-300"
                  required
                />
              </div>

              <div className="flex gap-4 relative">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex-1 rounded-3xl px-10 text-[#333333] border-black border-2 py-[25px]"
                    >
                      Subject
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Subject</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <input
                  placeholder="Deadline"
                  className="border-black border-2 font-poppins placeholder:text-[#333333] flex-1 rounded-3xl px-10 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                  type={inputTypeCalen}
                  onFocus={handleFocusCalen}
                  onBlur={handleBlurCalen}
                  id="date"
                />
              </div>

              <div className="flex-col">
                <button
                  type="submit"
                  className=" bg-[#55C360] hover:bg-green-600 text-white font-bold py-3 px-8 rounded-[50px] focus:outline-none"
                >
                  Get a Free Quote
                </button>

                <div className="font-poppins text-gray-600 mt-4  ">
                  100% Satisfied Students
                </div>
                <div className="mt-0 flex -space-x-3">
                  {photoList.map((img, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full overflow-hidden shadow-md flex justify-center items-center"
                    >
                      <div className="relative w-10 h-10">
                        <Image
                          src={`/static/images/${img}`}
                          alt={`Student ${i + 1}`}
                          layout="fill"
                          objectFit="cover"
                          quality={100}
                        />
                      </div>
                    </div>
                  ))}
                  <div className="bg-blue-600 h-10 w-10 rounded-full overflow-hidden shadow-md z-50 flex justify-center items-center font-poppins font-semibold text-white">
                    4+
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
