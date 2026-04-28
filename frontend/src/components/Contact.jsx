import React, { useEffect, useState } from "react";
import { Mail, Phone, ArrowUpRight, Send, CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { profile } from "../mock";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("xgorbrkw");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message sent",
        description: "Thank you. Uddhav will get back to you shortly."
      });
      setForm({ name: "", email: "", company: "", message: "" });
    }
  }, [state.succeeded, toast]);

  useEffect(() => {
    if (state.errors && Array.isArray(state.errors) && state.errors.length > 0) {
      toast({
        title: "Couldn't send",
        description: "Please check your inputs and try again."
      });
    }
  }, [state.errors, toast]);

  const onSubmit = (e) => {
    if (!form.name || !form.email || !form.message) {
      e.preventDefault();
      toast({ title: "Missing details", description: "Please fill in name, email and message." });
      return;
    }
    handleSubmit(e);
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

              <input type="hidden" name="_subject" value="New enquiry from portfolio website" />

              <div className="grid md:grid-cols-2 gap-5">
                <Field
                  label="Your Name"
                  name="name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  placeholder="e.g. Arjun Mehta"
                />
                <div>
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    placeholder="name@company.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400 mt-1" />
                </div>
              </div>
              <Field
                label="Company / Organization"
                name="company"
                value={form.company}
                onChange={(v) => setForm({ ...form, company: v })}
                placeholder="Optional"
                className="mt-5"
              />
              <div className="mt-5">
                <label className="block text-[10px] tracking-[0.3em] uppercase text-[#c9a26a] mb-2">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can I help?"
                  className="w-full bg-transparent border-b border-[#3a352d] focus:border-[#c9a26a] outline-none py-3 text-[#f5f1ea] placeholder:text-[#6b6760] resize-none transition-colors"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-400 mt-1" />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#c9a26a] text-[#1a1815] px-6 py-3.5 text-sm font-medium btn-lift hover:bg-[#d8b27c] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {state.succeeded ? (
                  <>
                    <CheckCircle2 size={16} /> Sent. Thank you
                  </>
                ) : state.submitting ? (
                  <>Sending…</>
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

const Field = ({ label, name, value, onChange, type = "text", placeholder, className = "" }) => (
  <div className={className}>
    <label className="block text-[10px] tracking-[0.3em] uppercase text-[#c9a26a] mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-[#3a352d] focus:border-[#c9a26a] outline-none py-3 text-[#f5f1ea] placeholder:text-[#6b6760] transition-colors"
    />
  </div>
);

export default Contact;
