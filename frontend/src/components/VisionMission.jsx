import React from "react";
import { visionMission } from "../mock";
import { Eye, Flag } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="py-24 md:py-32 bg-[#1a1815] text-[#f5f1ea]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-[#c9a26a] mb-8">
          <span className="h-px w-8 bg-[#c9a26a]" />
          Vision & Mission
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[#3a352d] border border-[#3a352d] rounded-2xl overflow-hidden">
          <div className="bg-[#1a1815] p-10 md:p-14 hover:bg-[#23201b] transition-colors duration-500">
            <div className="flex items-center gap-3 mb-5">
              <Eye size={20} className="text-[#c9a26a]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#c9a26a]">Vision</span>
            </div>
            <h3 className="font-serif text-3xl md:text-[40px] leading-[1.15]">
              {visionMission.vision}
            </h3>
          </div>
          <div className="bg-[#1a1815] p-10 md:p-14 hover:bg-[#23201b] transition-colors duration-500">
            <div className="flex items-center gap-3 mb-5">
              <Flag size={20} className="text-[#c9a26a]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#c9a26a]">Mission</span>
            </div>
            <h3 className="font-serif text-3xl md:text-[40px] leading-[1.15]">
              {visionMission.mission}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
