"use client";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    "grid.svg",
    "img_front_page_review_4.jpeg",
  ];

  const [formData, setFormData] = useState({  
    email: "",
    subject: "",
    deadline: "",
    assignmentType: "",
  });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      assignmentType: value,
    }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
                              //add api endpoint


    console.log("Form Submitted:", formData);


    setFormData({
      email: "",
      subject: "",
      deadline: "",
      assignmentType: "",
    })
  };

  return (
    <>
      <div className="w-full h-screen bg-hero-pattern_new bg-no-repeat bg-cover rotate-180 bg-[-500px_100px] absolute top-0 left-0"></div>
      <div className="absolute left-[491px] -top-10 h-[466px] w-[466px] blur-3xl bg-gradient-to-t from-transparent to-[#2BAFFC] opacity-55" />
      <div className="w-full h-screen backdrop-blur-[100px] absolute top-0 left-0"></div>
      <div className="relative w-full h-screen flex justify-center items-center">
        <div className="right absolute bottom-16 left-[50%] drop-shadow-xl transition-all">
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
                loading="lazy"
                className="overflow-hidden"
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

          <div className="absolute top-[15%] left-[73%] mr-5 font-poppins bg-white rounded-xl shadow-xl px-4 py-8">
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

          <h1 className="font-inter max-w-2xl break-words tracking-[-1px] hyphens-auto leading-[69px] text-[65px] font-bold text-black mb-2">
            {changeInH ? (
              <>
                {changeInH
                  .split(" ")
                  .reduce((acc: string[][], word, index) => {
                    const chunkIndex = Math.floor(index / 2);
                    if (!acc[chunkIndex]) acc[chunkIndex] = [];
                    acc[chunkIndex].push(word);
                    return acc;
                  }, [] as string[][])
                  .map((chunk, index) => (
                    <span key={index}>
                      {chunk.join(" ")}
                      <br />
                    </span>
                  ))}
              </>
            ) : (
              <>
                <div className="font-inter max-w-2xl break-words hyphens-auto leading-[62px] text-[65px] font-bold text-black mb-2">
                  Ace Your
                  <br />
                  Assignments with
                  <br />
                  Expert Help
                </div>
                <Image src={"/static/images/heroTitle.svg"} height={400} width={400} alt="line"  className="absolute top-[39%]" />
              </>
            )}
          </h1>
          <div className="form flex w-[242px] mt-8">
            <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
              <div className="flex items-center gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="flex-1 h-[52px] text-gray-400 rounded-full border-2 border-black pl-4 w-[242px] pr-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />

                <Select  onValueChange={handleSelectChange}>
                  <SelectTrigger className="flex-1 h-[52px] text-gray-400 rounded-full border-2 w-[242px] border-black pl-4 text-left">
                    <SelectValue placeholder="Assignment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="course">Course</SelectItem>
                    <SelectItem value="homework">Homework</SelectItem>
                    <SelectItem value="online-test">Online Test</SelectItem>
                    <SelectItem value="essay">Essay</SelectItem>
                    <SelectItem value="project">Project</SelectItem>
                    <SelectItem value="exam">Exam</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-4 relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="flex-1 h-[52px] text-gray-400 rounded-full border-2 border-black pl-4 w-[242px] pr-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />

                <input
                  placeholder="Deadline"
                  className="flex-1 h-[52px] text-gray-400 rounded-full border-2 border-black w-[242px] pl-4 pr-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  type={inputTypeCalen}
                  name="deadline"
                  value={formData.deadline}
                  onFocus={handleFocusCalen}
                  onBlur={handleBlurCalen}
                  onChange={handleChange}
                  id="date"
                />
              </div>

              <div className="flex-col">
                <button
                  type="submit"
                  className="h-[50px] w-[200px] bg-[#55C360] hover:bg-green-600 text-white font-bold  rounded-[50px] focus:outline-none"
                >
                  Get a Free Quote
                </button>

                <div className="font-poppins text-gray-600 mt-6  ">
                  100% Satisfied Students
                </div>
                <div className="mt-1 flex -space-x-5">
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
                  <div className="bg-blue-600 h-10 w-10 rounded-full overflow-hidden shadow-md z-40 flex justify-center items-center font-poppins font-semibold text-white">
                    93+
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
