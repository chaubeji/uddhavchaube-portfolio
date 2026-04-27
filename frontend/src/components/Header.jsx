import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Focus", href: "#focus" },
  { label: "Ventures", href: "#ventures" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" }
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-[#f5f1ea]/85 backdrop-blur-md border-b border-[#e3dccf]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-[#1a1815] text-[#f5f1ea] grid place-items-center font-serif text-lg">U</div>
          <div className="leading-tight">
            <div className="font-serif text-lg text-[#1a1815]">Uddhav Chaube</div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-[#6b6760]">Entrepreneur</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-underline text-sm tracking-wide text-[#1a1815]">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-[#1a1815] text-[#f5f1ea] btn-lift hover:bg-[#2a2620]"
        >
          Get in touch
        </a>

        <button
          className="md:hidden text-[#1a1815] p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#e3dccf] bg-[#f5f1ea]">
          <div className="px-6 py-5 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-[#1a1815]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium bg-[#1a1815] text-[#f5f1ea]"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
