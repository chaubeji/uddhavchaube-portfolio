import React from "react";
import { ArrowDownRight, MapPin } from "lucide-react";
import { profile } from "../mock";
import SafeImage from "./SafeImage";

const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8 text-[11px] tracking-[0.3em] uppercase text-[#6b6760]">
              <span className="h-px w-10 bg-[#c9a26a]" />
              Portfolio · 2026
            </div>

            <h1 className="font-serif text-[44px] sm:text-6xl lg:text-[88px] leading-[1.02] text-[#1a1815] tracking-tight">
              Building <em className="italic font-medium text-[#8a6a3a]">scalable</em>
              <br />
              businesses across
              <br />
              essential industries.
            </h1>

            <p className="mt-8 max-w-xl text-[#4a463f] text-base md:text-lg leading-relaxed">
              I&apos;m {profile.name.split(" ")[0]}, an entrepreneur turning operational gaps in
              logistics, real estate, petroleum and hospitality into practical, profitable ventures.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#focus"
                className="inline-flex items-center gap-2 rounded-full bg-[#1a1815] text-[#f5f1ea] px-6 py-3.5 text-sm font-medium btn-lift hover:bg-[#2a2620]"
              >
                See current focus
                <ArrowDownRight size={16} />
              </a>
              <a
                href="#ventures"
                className="inline-flex items-center gap-2 rounded-full border border-[#1a1815]/20 text-[#1a1815] px-6 py-3.5 text-sm font-medium btn-lift hover:border-[#1a1815] hover:bg-[#1a1815] hover:text-[#f5f1ea]"
              >
                Explore ventures
              </a>
            </div>

            <div className="mt-14 flex items-center gap-3 text-sm text-[#6b6760]">
              <MapPin size={14} className="text-[#c9a26a]" />
              Based in India
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[1.5rem] bg-[#1a1815]/5 -z-10" />
              <div className="img-zoom rounded-[1.25rem] overflow-hidden border border-[#e3dccf] shadow-[0_30px_80px_-30px_rgba(26,24,21,0.35)]">
                <SafeImage
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-[460px] md:h-[540px] object-cover hero-photo"
                  fallbackLabel="Portrait"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid mt-20 md:mt-28 grid grid-cols-3 gap-y-10 gap-x-6 border-t border-b border-[#e3dccf] py-10">
          {[
            { v: profile.industries + "+", l: "Industries Operated" },
            { v: profile.ventures, l: "Active Companies" },
            { v: profile.acres, l: "Acres Under Mgmt." }
          ].map((s, i) => (
            <div key={i}>
              <div className="font-serif text-4xl md:text-5xl text-[#1a1815]">{s.v}</div>
              <div className="mt-2 text-xs tracking-[0.2em] uppercase text-[#6b6760]">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
