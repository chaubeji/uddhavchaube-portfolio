import React from "react";
import { aboutParagraphs, principles } from "../mock";
import { Quote } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#1a1815] text-[#f5f1ea] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-[#c9a26a]">
              <span className="h-px w-8 bg-[#c9a26a]" />
              About
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight">
              Practical entrepreneur,
              <br />
              <span className="italic text-[#c9a26a]">execution-first</span> mindset.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {aboutParagraphs.map((p, i) => (
              <p key={i} className="text-base md:text-lg leading-relaxed text-[#d8d2c5]">
                {p}
              </p>
            ))}

            <div className="pt-6 mt-6 border-t border-[#3a352d]">
              <Quote size={28} className="text-[#c9a26a] mb-3" />
              <p className="font-serif text-2xl md:text-3xl leading-snug italic text-[#f5f1ea]">
                “Build businesses that are not only innovative, but also operationally strong and financially viable.”
              </p>
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#3a352d] border border-[#3a352d] rounded-2xl overflow-hidden">
          {principles.map((p, i) => (
            <div
              key={i}
              className="bg-[#1a1815] p-7 hover:bg-[#23201b] transition-colors duration-500"
            >
              <div className="font-serif text-2xl text-[#c9a26a] mb-3">0{i + 1}</div>
              <div className="font-serif text-xl text-[#f5f1ea] mb-2">{p.title}</div>
              <p className="text-sm text-[#a8a298] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
