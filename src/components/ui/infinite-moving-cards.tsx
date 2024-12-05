"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaStar } from "react-icons/fa";

type InfiniteMovingCardsProps = {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const setAnimationProperties = useCallback(() => {
    if (!containerRef.current) return;

    const animationDirection = direction === "left" ? "forwards" : "reverse";
    const animationDuration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";

    containerRef.current.style.setProperty("--animation-direction", animationDirection);
    containerRef.current.style.setProperty("--animation-duration", animationDuration);
  }, [direction, speed]);

  const duplicateItems = useCallback(() => {
    if (scrollerRef.current) {
      const items = Array.from(scrollerRef.current.children);

      items.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
    }
  }, []);

  useEffect(() => {
    setAnimationProperties();
    duplicateItems();
    setStart(true);
  }, [setAnimationProperties, duplicateItems]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="w-[250px] h-[240px] max-w-full bg-white rounded-xl border-2 border-[#2E2F35] px-8 py-6 md:w-[350px] relative flex-shrink-0"
          >
            <blockquote>
              <div className="flex items-center relative z-20">
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
                  <span className="font-poppins font-bold text-xs leading-[21px] text-[#2C2C2C]">
                    {item.title}
                  </span>
                </span>
                <div className="flex pl-10">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color="#F16700" />
                  ))}
                </div>
              </div>
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
