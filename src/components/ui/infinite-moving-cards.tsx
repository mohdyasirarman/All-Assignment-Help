"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaStar } from "react-icons/fa";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="w-[250px] h-[240px] max-w-full relative bg-white rounded-xl border-2 flex-shrink-0 border-[#2E2F35] px-8 py-6 md:w-[350px]"
            key={item.name}
          >
            <blockquote>
              <div className="relative z-20 flex flex-row items-center">
                <Avatar>
                  <AvatarImage
                    src="/static/images/Profile_avatar_placeholder_large.png"
                    alt="Avatar"
                    className="w-12 h-12"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="flex flex-col px-3">
                  <span className="font-inter font-medium text-base leading-[18px] text-[#2E2F35]">
                    {item.name}
                  </span>
                  <span className="font-poppins font-bold text-xs leading-[21px] text-[#2C2C2C] ">
                    {item.title}
                  </span>
                </span>
                <div className="flex pl-10">
                  <FaStar color="#F16700" />
                  <FaStar color="#F16700" />
                  <FaStar color="#F16700" />
                  <FaStar color="#F16700" />
                  <FaStar color="#F16700" />
                </div>
              </div>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="py-5">
                <span className="relative z-20 text-sm leading-[170%] text-[#2C2C2C] font-normal font-poppins">
                  {item.quote}
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
