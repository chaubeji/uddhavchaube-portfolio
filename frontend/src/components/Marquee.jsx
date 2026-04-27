import React from "react";

const items = [
  "Cold Chain Logistics",
  "Real Estate",
  "Petroleum",
  "Agriculture",
  "Food & Beverage",
  "Hospitality",
  "Operations",
  "Strategy"
];

const Marquee = () => {
  return (
    <div className="py-10 bg-[#1a1815] border-y border-[#3a352d] overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-8 font-serif text-3xl md:text-5xl text-[#f5f1ea]"
          >
            {it}
            <span className="text-[#c9a26a]">❖</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
