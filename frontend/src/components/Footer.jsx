import React from "react";
import { profile } from "../mock";

const Footer = () => {
  return (
    <footer className="bg-[#0f0e0c] text-[#a8a298] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 pb-14 border-b border-[#2a2620]">
          <div className="md:col-span-5">
            <div className="font-serif text-4xl md:text-5xl text-[#f5f1ea] leading-tight">
              Building the next chapter
              <br />
              <span className="italic text-[#c9a26a]">in essential industries.</span>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#c9a26a] mb-4">Navigate</div>
            <ul className="space-y-2 text-[#d8d2c5]">
              <li><a href="#about" className="link-underline">About</a></li>
              <li><a href="#focus" className="link-underline">Current Focus</a></li>
              <li><a href="#ventures" className="link-underline">Ventures</a></li>
              <li><a href="#approach" className="link-underline">Approach</a></li>
              <li><a href="#contact" className="link-underline">Contact</a></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#c9a26a] mb-4">Reach Out</div>
            <a href={`mailto:${profile.email}`} className="block text-[#f5f1ea] font-serif text-xl hover:text-[#c9a26a] transition-colors">{profile.email}</a>
            <a href={`tel:${profile.phone.replace(/\s/g,"")}`} className="block mt-2 text-[#d8d2c5] hover:text-[#c9a26a] transition-colors">{profile.phone}</a>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-[#6b6760]">
          <div>© {new Date().getFullYear()} Uddhav Chaube. All rights reserved.</div>
          <div className="tracking-[0.25em] uppercase">Entrepreneur · Strategist · Builder</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
