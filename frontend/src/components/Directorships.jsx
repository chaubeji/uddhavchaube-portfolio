import React from "react";
import { Building2, Briefcase } from "lucide-react";
import { directorships } from "../mock";

const Directorships = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-[#8a6a3a]">
              <span className="h-px w-8 bg-[#c9a26a]" />
              Directorships & Associations
            </div>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.1] text-[#1a1815]">
              Strategic decision-making across <em className="italic text-[#8a6a3a]">multiple ventures.</em>
            </h2>
            <p className="mt-6 text-[#4a463f] leading-relaxed max-w-md">
              Actively involved in growth planning, governance and operational oversight, ensuring each entity scales with discipline and compliance.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-[#e3dccf] border-y border-[#e3dccf]">
              {directorships.map((d, i) => (
                <div
                  key={i}
                  className="group flex items-center justify-between py-7 hover:px-3 transition-all duration-500"
                >
                  <div className="flex items-center gap-5">
                    <div className="font-serif text-2xl text-[#c9a26a] w-10">0{i + 1}</div>
                    <div className="h-11 w-11 rounded-xl border border-[#e3dccf] grid place-items-center text-[#1a1815] group-hover:bg-[#1a1815] group-hover:text-[#c9a26a] transition-colors duration-500">
                      <Building2 size={18} />
                    </div>
                    <div>
                      <div className="font-serif text-xl md:text-2xl text-[#1a1815] leading-tight">{d.name}</div>
                      <div className="mt-1 flex items-center gap-2 text-xs text-[#6b6760]">
                        <Briefcase size={12} />
                        {d.role}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block text-[10px] tracking-[0.25em] uppercase text-[#8a6a3a]">Active</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directorships;
