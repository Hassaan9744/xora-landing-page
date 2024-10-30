import clsx from "clsx";
import React, { useState } from "react";
import SlideDown from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const FaqItem = ({ item, index }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative z-2 mb-16">
      <div
        className="group flex cursor-pointer items-center justify-between gap-10 px-7"
        onClick={() => setIsActive((prev) => !prev)}
      >
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
            {index < 10 ? "0" : ""} {index}
          </div>
          <div
            className={clsx(
              "h6 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
              isActive && "text-p1"
            )}
          >
            {item.question}
          </div>
        </div>
        <div
          className={clsx(
            "faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4",
            isActive && "before:bg-p1 after:rotate-0 after:bg-p1"
          )}
        >
          <div className="g4 size-11/12 rounded-full shadow-300" />
        </div>
      </div>
      <SlideDown>
        {isActive && <div className="body-3 px-7 py-3.5">{item.answer}</div>}
      </SlideDown>
      <div
        className={clsx(
          "g5 absolute -z-1 -bottom-7 -top-7 right-0 left-0 rounded-3xl opacity-0 transition-opacity duration-500",
          isActive && "opacity-100"
        )}
      >
        <div className="g4 absolute inset-0.5 -z-1 rounded-3xl" />
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-p1" />
      </div>
    </div>
  );
};

export default FaqItem;