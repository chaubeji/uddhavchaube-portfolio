import React from "react";
import { verticals } from "../mock";

const Ventures = () => {
  return (
    <section id="ventures" className="py-24 md:py-32 bg-[#efe9dc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-[#8a6a3a]">
              <span className="h-px w-8 bg-[#c9a26a]" />
              Business Verticals
            </div>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05] text-[#1a1815] max-w-2xl">
              Five industries.
              <br />
              <span className="italic text-[#8a6a3a]">One operating playbook.</span>
            </h2>
          </div>
          <p className="text-[#4a463f] max-w-sm text-base leading-relaxed">
            Each vertical is run with the same focus on lean operations, customer experience and sustainable revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {verticals.map((v, i) => (
            <article
              key={v.id}
              className="card-soft group bg-white rounded-2xl overflow-hidden border border-[#e3dccf] flex flex-col"
            >
              <div className="img-zoom h-64 lg:h-72 bg-[#1a1815]/5 relative">
                <img
                  src={v.image}
                  alt={v.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#f5f1ea]/95 backdrop-blur px-3 py-1.5 rounded-full text-[10px] tracking-[0.25em] uppercase text-[#1a1815] font-medium">
                  0{i + 1} / 05
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-serif text-2xl md:text-[26px] text-[#1a1815] leading-snug">{v.title}</h3>
                <p className="mt-3 text-[#4a463f] text-sm md:text-[15px] leading-relaxed">{v.summary}</p>
                <div className="mt-6 pt-5 border-t border-[#e3dccf]">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-[#8a6a3a]">{v.metric}</div>
                  <div className="mt-1.5 font-serif text-[#1a1815] text-lg">{v.metricValue}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventures;
