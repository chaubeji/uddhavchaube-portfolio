import React from "react";
import { Target, Settings, TrendingUp, Compass, Search, LineChart, Check } from "lucide-react";
import { strengths, differentiators } from "../mock";

const iconMap = { Target, Settings, TrendingUp, Compass, Search, LineChart };

const Approach = () => {
  return (
    <section id="approach" className="py-24 md:py-32 bg-[#efe9dc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          <div>
            <div className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-[#8a6a3a]">
              <span className="h-px w-8 bg-[#c9a26a]" />
              Core Strengths
            </div>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-tight text-[#1a1815]">
              What I bring to the table.
            </h2>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {strengths.map((s, i) => {
                const Icon = iconMap[s.icon] || Target;
                return (
                  <div
                    key={i}
                    className="group bg-white rounded-xl border border-[#e3dccf] p-5 flex items-start gap-4 card-soft"
                  >
                    <div className="shrink-0 h-10 w-10 rounded-lg bg-[#f5f1ea] grid place-items-center text-[#8a6a3a] group-hover:bg-[#1a1815] group-hover:text-[#c9a26a] transition-colors duration-500">
                      <Icon size={18} />
                    </div>
                    <div className="font-serif text-[17px] text-[#1a1815] leading-snug">{s.title}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-[#8a6a3a]">
              <span className="h-px w-8 bg-[#c9a26a]" />
              What Sets Me Apart
            </div>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-tight text-[#1a1815]">
              Practical over <em className="italic text-[#8a6a3a]">theoretical.</em>
            </h2>
            <p className="mt-6 text-[#4a463f] leading-relaxed">
              A practical approach to entrepreneurship — focused on execution, profitability, and real-world impact rather than just ideas.
            </p>

            <ul className="mt-8 space-y-4">
              {differentiators.map((d, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 h-6 w-6 rounded-full bg-[#1a1815] text-[#c9a26a] grid place-items-center">
                    <Check size={13} />
                  </span>
                  <span className="text-[#1a1815] text-[17px] leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
