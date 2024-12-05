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

export default function HeroSectionNew() {
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-tr from-white via-blue-200 to-green-400 absolute top-0 left-0"></div>
      <div className="w-full h-screen backdrop-blur-[50px] absolute top-0 left-0"></div>

      <div className="relative w-full h-screen flex justify-center items-center">
        <div className="right absolute bottom-16 left-[53%]">
          <Image
            src="/static/images/girl.png"
            alt="girl"
            width={600}
            height={600}
            priority
          />
        </div>

        <div className="absolute left-[5%] top-[12%]">
          <div className="flex items-center mb-4">
            <Image
              src="/static/images/pencilOnMainPage.png"
              width={30}
              height={30}
              alt="pencil"
            />
            <h2 className="font-poppins text-[#55C360] text-md font-semibold">
              Grow Your Future With Us
            </h2>
          </div>

          <h1 className="font-poppins leading-[69px] text-[70px] font-bold text-black mb-5">
            Ace Your
            <br />
            Assignments with <br /> Expert Help
          </h1>
          <svg
            width="362"
            height="13"
            viewBox="0 0 362 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-[50%]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M64.3647 4.68622C60.4122 5.24711..."
              fill="#55C360"
            />
          </svg>

          <div className="form flex w-[242px]">
            <form className="space-y-6 mt-8">
              <div className="flex items-center gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-3xl px-10 flex-1 py-[14px] focus:outline-none border-black border-2 focus:ring focus:ring-blue-300"
                  required
                />

                <input
                  type="text"
                  placeholder="Assignment (Any Type)"
                  className="border-black border-2 rounded-3xl px-10 py-[14px] focus:outline-none flex-1 focus:ring focus:ring-blue-300"
                  required
                />
              </div>

              <div className="flex gap-4 relative">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex-1 rounded-3xl px-10 border-black border-2 py-[25px]"
                    >
                      Select Account
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                  <svg
                    width="8"
                    height="10"
                    viewBox="0 0 8 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-[55%] top-[43%]"
                  >
                    <g clipPath="url(#clip0_479_1425)">
                      <path
                        d="M4 0L0 4H8L4 0ZM4 10L0 6H8L4 10Z"
                        fill="#343A40"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_479_1425">
                        <rect width="8" height="10" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </DropdownMenu>

                <input
                  type="date"
                  placeholder="Deadline"
                  className="border-black border-2 flex-1 rounded-3xl px-10 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full focus:outline-none"
                >
                  Get a Free Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
