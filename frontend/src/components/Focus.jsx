import React from "react";
import { Snowflake, Truck, Network, ArrowUpRight } from "lucide-react";
import { currentFocus } from "../mock";

const icons = [Snowflake, Truck, Network];

const Focus = () => {
  return (
    <section id="focus" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-[#8a6a3a]">
              <span className="h-px w-8 bg-[#c9a26a]" />
              {currentFocus.subtitle}
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05] text-[#1a1815]">
              Cold Chain
              <br />
              <span className="italic text-[#8a6a3a]">Logistics.</span>
            </h2>
            <p className="mt-6 text-[#4a463f] text-base md:text-lg leading-relaxed max-w-md">
              {currentFocus.description}
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#1a1815] border-b border-[#1a1815] pb-1 hover:gap-3 transition-all"
            >
              Discuss the venture
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#1a1815] text-[#f5f1ea] p-8 md:p-10 mb-6 relative overflow-hidden">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#c9a26a]/10 blur-3xl" />
              <div className="text-[11px] tracking-[0.3em] uppercase text-[#c9a26a]">Mission</div>
              <div className="mt-3 font-serif text-2xl md:text-3xl leading-snug">
                Make temperature-controlled transportation more efficient, reliable and cost-effective for businesses across India.
              </div>
            </div>

            <div className="space-y-4">
              {currentFocus.objectives.map((obj, i) => {
                const Icon = icons[i];
                return (
                  <div
                    key={i}
                    className="card-soft group bg-white rounded-2xl border border-[#e3dccf] p-6 md:p-7 flex gap-5 items-start"
                  >
                    <div className="shrink-0 h-12 w-12 rounded-xl bg-[#f5f1ea] grid place-items-center text-[#8a6a3a] group-hover:bg-[#1a1815] group-hover:text-[#c9a26a] transition-colors duration-500">
                      <Icon size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] tracking-[0.25em] uppercase text-[#8a6a3a] mb-1">
                        Key Objective 0{i + 1}
                      </div>
                      <div className="font-serif text-xl text-[#1a1815] leading-snug">{obj}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Focus;
