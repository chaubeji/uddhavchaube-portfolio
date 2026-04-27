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
    <div className="py-5 bg-[#1a1815] border-y border-[#3a352d] overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 px-6 text-[11px] md:text-xs tracking-[0.32em] uppercase text-[#d8d2c5] font-light"
          >
            {it}
            <span className="text-[#c9a26a] text-[8px]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
