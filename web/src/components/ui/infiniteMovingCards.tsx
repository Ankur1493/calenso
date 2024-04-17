import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../../utils/cn";

interface Item {
  quote: string;
  name: string;
  title: string;
  image: string;
}

interface Props {
  items: Item[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

const InfiniteMovingCards: React.FC<Props> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
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
  };

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:animation-play-state:paused"
        )}
      >
        {items.map((item) => (
          <li
            className="w-[600px] md:w-[350px] max-w-full font-heading relative rounded-2xl shadow-md border flex-shrink-0 border-slate-700 px-8 py-3 flex justify-center items-center md:w-[450px] lg:w-[600px] h-[300px]"
            style={{
              background: "#1E1F20",
            }}
            key={item.title}
          >
            <div className="flex justify-center items-center">
              <div className="flex flex-row h-[200px]">
                <div className="w-1/2 h-200px flex justify-center items-center ">
                  <img
                    src={item.image}
                    alt="Description of the image"
                    className="h-full w-full rounded-md"
                  />
                </div>
                <div className="w-2/3 flex flex-col ml-6">
                  <div className="flex items-left">
                    <span className="text-2xl leading-[1.6] text-left text-mainText font-heading">
                      {item.title}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-sm text-justify leading-[1.6] text-gray-400 font-heading">
                      {item.quote}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;
