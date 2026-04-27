import React, { useState } from "react";
import { Mail, Phone, ArrowUpRight, Send, CheckCircle2 } from "lucide-react";
import { profile } from "../mock";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Missing details", description: "Please fill in name, email and message." });
      return;
    }
    // mock save in localStorage
    try {
      const existing = JSON.parse(localStorage.getItem("uc_messages") || "[]");
      existing.push({ ...form, ts: new Date().toISOString() });
      localStorage.setItem("uc_messages", JSON.stringify(existing));
    } catch (err) { /* ignore */ }
    setSent(true);
    toast({ title: "Message received", description: "Thank you. I will reach out shortly." });
    setForm({ name: "", email: "", company: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-[#8a6a3a]">
              <span className="h-px w-8 bg-[#c9a26a]" />
              Contact
            </div>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05] text-[#1a1815]">
              Let&apos;s build
              <br />
              <span className="italic text-[#8a6a3a]">something useful.</span>
            </h2>
            <p className="mt-6 text-[#4a463f] leading-relaxed max-w-md">
              Open to partnerships, investments and conversations around logistics, real estate and operationally-driven ventures.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center justify-between group border border-[#e3dccf] rounded-xl p-5 hover:bg-[#1a1815] hover:text-[#f5f1ea] transition-colors duration-500"
              >
                <div className="flex items-center gap-4">
                  <Mail size={18} className="text-[#8a6a3a] group-hover:text-[#c9a26a]" />
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-[#8a6a3a] group-hover:text-[#c9a26a]">Email</div>
                    <div className="font-serif text-lg">{profile.email}</div>
                  </div>
                </div>
                <ArrowUpRight size={18} className="opacity-60 group-hover:opacity-100" />
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-between group border border-[#e3dccf] rounded-xl p-5 hover:bg-[#1a1815] hover:text-[#f5f1ea] transition-colors duration-500"
              >
                <div className="flex items-center gap-4">
                  <Phone size={18} className="text-[#8a6a3a] group-hover:text-[#c9a26a]" />
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-[#8a6a3a] group-hover:text-[#c9a26a]">Phone</div>
                    <div className="font-serif text-lg">{profile.phone}</div>
                  </div>
                </div>
                <ArrowUpRight size={18} className="opacity-60 group-hover:opacity-100" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="bg-[#1a1815] text-[#f5f1ea] rounded-2xl p-8 md:p-10"
            >
              <div className="font-serif text-2xl md:text-3xl mb-8">Send a message</div>
              <div className="grid md:grid-cols-2 gap-5">
                <Field
                  label="Your Name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  placeholder="e.g. Arjun Mehta"
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  placeholder="name@company.com"
                />
              </div>
              <Field
                label="Company / Organization"
                value={form.company}
                onChange={(v) => setForm({ ...form, company: v })}
                placeholder="Optional"
                className="mt-5"
              />
              <div className="mt-5">
                <label className="block text-[10px] tracking-[0.3em] uppercase text-[#c9a26a] mb-2">Message</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can I help?"
                  className="w-full bg-transparent border-b border-[#3a352d] focus:border-[#c9a26a] outline-none py-3 text-[#f5f1ea] placeholder:text-[#6b6760] resize-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#c9a26a] text-[#1a1815] px-6 py-3.5 text-sm font-medium btn-lift hover:bg-[#d8b27c]"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={16} /> Sent
                  </>
                ) : (
                  <>
                    Send message <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, value, onChange, type = "text", placeholder, className = "" }) => (
  <div className={className}>
    <label className="block text-[10px] tracking-[0.3em] uppercase text-[#c9a26a] mb-2">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-[#3a352d] focus:border-[#c9a26a] outline-none py-3 text-[#f5f1ea] placeholder:text-[#6b6760] transition-colors"
    />
  </div>
);

export default Contact;
