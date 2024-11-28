"use client";

import Link from "next/link";
import Image from "next/image";
import { FaCog, FaTh, FaUser, FaHandshake } from "react-icons/fa";

export default function LandingPageNavbar() {
  return (
    <nav className=" shadow-md sticky top-3 mx-[10%] rounded-lg  px-2 z-50   backdrop-filter backdrop-blur-lg border border-gray-200 ">
      <div className="container mx-auto px-4  ">
        <div className="flex justify-between items-center h-16 ">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/static/images/logo1.png"
              alt="AllAssignmentHelp"
              width={42}
              height={35}
              priority
            />
            <span className="ml-2 text-[18px] font-bold text-gray-700">
              <i>AllAssignmentHelp</i>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center mr-40 ">
            <div className="relative group ">
              <button className="flex items-center space-x-1 text-black font-semibold px-5 py-[22px] pb-5 bg-transparent">
                <FaCog />
                <span>Services</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Dropdown Menu for Services */}
              <div className="absolute  hidden group-hover:block  ">
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg p-4 w-[800px] rounded-xl">
                  <div className="grid grid-cols-3 gap-8 ">
                    {/* Writing Column */}
                    <div>
                      <h3 className="font-bold text-md text-gray-900 mb-4">Writing</h3>
                      <ul className="space-y-1">
                        <li>
                          <Link
                            href="/services/writing/write-my-essay-for-me"
                            className="block text-gray-700 hover:text-[#09b14f]"
                          >
                            Write My Essay for Me
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/writing/essay-editing-service"
                            className="block text-gray-700 hover:text-[#09b14f]"
                          >
                            Essay Editing Service
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/writing/cheap-essay-writing-services"
                            className="block text-gray-700 hover:text-[#09b14f]"
                          >
                            Cheap Essay Writing Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/writing/mba-essay-writing-service"
                            className="block text-gray-700 hover:text-[#09b14f]"
                          >
                            MBA Essay Writing Service
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/writing/essay-help"
                            className="block text-gray-700 hover:text-[#09b14f]"
                          >
                            Essay Help
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/writing/research-proposal-writing-service"
                            className="block text-gray-700 hover:text-[#09b14f]"
                          >
                            Research Proposal Writing Service
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/writing/research-paper-writing"
                            className="block text-gray-700 hover:text-[#09b14f]"
                          >
                            Research Paper Writing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/writing/write-my-paper"
                            className="block text-gray-700 hover:text-[#09b14f]"
                          >
                            Write My Paper
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/writing/ghost-writer"
                            className="block text-gray-700 hover:text-[#09b14f]"
                          >
                            Ghost Writer
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/writing/academic-writing"
                            className="block text-gray-700 hover:text-[#09b14f]"
                          >
                            Academic Writing
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Problem Solving Column */}
                    <div>
                      <h3 className="font-bold text-md text-gray-900 mb-4">Problem Solving</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/services/problem-solving/programming-assignment-help"
                            className="block text-gray-700 hover:text-[#09b14f]"
                          >
                            Programming Assignment Help
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/problem-solving/assessment-help"
                            className="block text-gray-700 hover:text-[#09b14f]"
                          >
                            Assessment Help
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/problem-solving/do-my-assignment"
                            className="block text-gray-700 hover:text-[#09b14f]"
                          >
                            Do My Assignment
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/problem-solving/college-homework-help"
                            className="block text-gray-700 hover:text-[#09b14f]"
                          >
                            College Homework Help
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/problem-solving/urgent-assignment-help"
                            className="block text-gray-700  hover:text-[#09b14f]"
                          >
                            Urgent Assignment Help
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/problem-solving/pay-someone-to-do-my-homework"
                            className="block text-gray-700  hover:text-[#09b14f]"
                          >
                            Pay Someone To Do My Homework
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/problem-solving/do-my-coursework"
                            className="block text-gray-700  hover:text-[#09b14f]"
                          >
                            Do My Coursework
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/problem-solving/do-my-homework"
                            className="block text-gray-700  hover:text-[#09b14f]"
                          >
                            Do My Homework
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/problem-solving/take-my-online-class"
                            className="block text-gray-700  hover:text-[#09b14f]"
                          >
                            Take My Online Class
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* More Services Column */}
                    <div>
                      <h3 className="font-bold text-md text-gray-900 mb-4">More Services</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/services/more-services/take-my-online-exam"
                            className="block text-gray-700  hover:text-[#09b14f]"
                          >
                            Take My Online Exam
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/more-services/dissertation-help"
                            className="block text-gray-700  hover:text-[#09b14f]"
                          >
                            Dissertation Help
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/more-services/term-paper-help"
                            className="block text-gray-700  hover:text-[#09b14f]"
                          >
                            Term Paper Help
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/more-services/homework-help"
                            className="block text-gray-700  hover:text-[#09b14f]"
                          >
                            Homework Help
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/more-services/case-study-help"
                            className="block text-gray-700  hover:text-[#09b14f]"
                          >
                            Case Study Help
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/more-services/coursework-help"
                            className="block text-gray-700  hover:text-[#09b14f]"
                          >
                            Coursework Help
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/more-services/thesis-help"
                            className="block text-gray-700  hover:text-[#09b14f]"
                          >
                            Thesis Help
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/more-services/powerpoint-presentation-services"
                            className="block text-gray-700  hover:text-[#09b14f]"
                          >
                            PowerPoint Presentation Services
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-black font-semibold px-5 py-[22px] pb-5 bg-transparent">
                <FaTh />
                <span>Resources</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-black font-semibold px-5 py-[22px] pb-5 bg-transparent">
                <FaUser />
                <span>Experts</span>
              </button>
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/earn"
              className="hidden lg:flex items-center font-semibold text-[14px] leading-[20px] text-gray-700 hover:text-blue-600"
            >
              <FaHandshake className="mr-2" />
              <span>Earn $1500</span>
            </Link>

            <Link
              href="/reviews"
              className="hidden lg:block px-[8px] py-[11px] font-bold rounded-[6px] bg-[#09b14f] border border-[] text-white uppercase shadow-[2px_2px_8px_rgba(111,142,179,0.8)] hover:bg-blue-500"
            >
              REVIEWS 4.92/5
            </Link>

            <Link
              href="/order"
              className="bg-transparent text-[#232e45] uppercase font-bold px-[8px] py-[10px] rounded-[6px] shadow-[inset_0_0_8px_rgba(186,206,230,0.8),2px_2px_8px_rgba(186,206,230,0.8)] [text-shadow:0_0_8px_rgba(186,206,230,0.8)] border-2 border-[#232e45]"
            >
              ORDER NOW
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
