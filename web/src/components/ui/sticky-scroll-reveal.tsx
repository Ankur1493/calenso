import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";

interface ContentItem {
  title: string;
  description: string;
  content?: React.ReactNode;
}

interface StickyScrollProps {
  content: ContentItem[];
  contentClassName?: string;
}

export const StickyScroll: React.FC<StickyScrollProps> = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const cardLength = content.length;

  const handleScroll = () => {
    // Assuming the ref is attached to a scrollable element,
    // this logic calculates which card should be active based on the scroll position.
    const scrollPosition = ref.current ? ref.current.scrollTop : 0;
    const scrollHeight = ref.current ? ref.current.scrollHeight - ref.current.clientHeight : 0;
    const scrollFraction = scrollHeight > 0 ? scrollPosition / scrollHeight : 0;
    const newActiveCard = Math.min(cardLength - 1, Math.floor(scrollFraction * cardLength));
    setActiveCard(newActiveCard);
  };

  useEffect(() => {
    const currentRef = ref.current;
    currentRef?.addEventListener("scroll", handleScroll);
    return () => currentRef?.removeEventListener("scroll", handleScroll);
  }, [cardLength]); // Depend on cardLength so that the effect updates if the number of items changes.

  // Directly calculate the background color and gradient based on the active card.
  // This avoids issues with useTransform and ensures the background changes with the card.
  const backgroundColor = content.length > 0 ? `var(--${content[activeCard % content.length].title.toLowerCase()}-900)` : 'transparent';
  const background = content.length > 0 ? `linear-gradient(to bottom right, var(--${content[activeCard % content.length].title.toLowerCase()}-500), var(--${content[(activeCard + 1) % content.length].title.toLowerCase()}-500))` : 'transparent';

  return (
    <motion.div
      style={{ backgroundColor }}
      className={`h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 ${cn(contentClassName)}`}
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
      {content[activeCard]?.content && (
        <motion.div
          style={{ background }}
          className={cn(
            "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
            contentClassName
          )}
        >
          {content[activeCard].content}
        </motion.div>
      )}
    </motion.div>
  );
};

