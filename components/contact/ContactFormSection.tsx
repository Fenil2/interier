"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "../animations/FadeIn";

const regions = [
  { state: "Tamil Nadu",        cities: "Chennai, Madurai, Coimbatore" },
  { state: "Karnataka",         cities: "Bengaluru, Mysuru" },
  { state: "Kerala",            cities: "Kochi, Thiruvananthapuram" },
  { state: "Andhra/Telangana",  cities: "Hyderabad, Visakhapatnam" },
];
const socialIcons = [
  { icon: "public",      label: "Website" },
  { icon: "camera",      label: "Instagram" },
  { icon: "description", label: "LinkedIn" },
];

export default function ContactFormSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="bg-[#f0ede9] py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

      {/* Ambient glow */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(230,194,117,0.08) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Contact Form */}
          <FadeIn direction="left" className="lg:col-span-7">
            <div className="bg-white rounded-sm shadow-xl border border-[#131b2e]/5 relative overflow-hidden">
              <motion.div
                className="h-[3px] bg-gradient-to-r from-[#e6c275] via-[#f5d78a] to-transparent"
                initial={{ width: 0 }}
                animate={inView ? { width: "100%" } : {}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="p-8 md:p-12">
                <span className="eyebrow mb-5 block">Get In Touch</span>
                <h2 className="text-[2rem] leading-[1.2] tracking-[-0.01em] font-bold mb-10 text-[#131b2e]"
                  style={{ fontFamily: "var(--font-noto-serif), serif" }}>
                  Inquiry Form
                </h2>
                <form className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { label: "Full Name", type: "text", placeholder: "Arch. Julian Vane" },
                      { label: "Email Address", type: "email", placeholder: "julian@excellence.com" },
                    ].map(({ label, type, placeholder }, i) => (
                      <motion.div
                        key={label}
                        className="space-y-2"
                        initial={{ opacity: 0, y: 16 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <label className="font-label text-xs text-[#3c475a] uppercase tracking-widest block">{label}</label>
                        <input type={type} placeholder={placeholder}
                          className="w-full border-0 border-b-2 border-[#131b2e]/15 bg-transparent py-3 text-[#131b2e] placeholder:text-[#131b2e]/25 focus:border-[#e6c275] focus:ring-0 outline-none transition-colors duration-300 text-base" />
                      </motion.div>
                    ))}
                  </div>

                  <motion.div className="space-y-2"
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}>
                    <label className="font-label text-xs text-[#3c475a] uppercase tracking-widest block">Project Type</label>
                    <select className="w-full border-0 border-b-2 border-[#131b2e]/15 bg-transparent py-3 text-[#131b2e] appearance-none focus:border-[#e6c275] focus:ring-0 outline-none transition-colors duration-300 text-base">
                      <option>Residential Estate</option>
                      <option>Commercial Development</option>
                      <option>Interior Renovation</option>
                      <option>Institutional Design</option>
                    </select>
                  </motion.div>

                  <motion.div className="space-y-2"
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 }}>
                    <label className="font-label text-xs text-[#3c475a] uppercase tracking-widest block">Vision Narrative</label>
                    <textarea rows={4} placeholder="Briefly describe your spatial requirements..."
                      className="w-full border-0 border-b-2 border-[#131b2e]/15 bg-transparent py-3 text-[#131b2e] placeholder:text-[#131b2e]/25 focus:border-[#e6c275] focus:ring-0 outline-none transition-colors duration-300 resize-none text-base" />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="group flex items-center gap-4 bg-[#131b2e] text-[#e6c275] px-10 py-4 rounded-sm font-semibold relative overflow-hidden"
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.02, backgroundColor: "#1e2d48", gap: "1.5rem" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="font-label text-xs uppercase tracking-widest relative">Initiate Collaboration</span>
                    <span className="material-symbols-outlined relative">arrow_forward</span>
                  </motion.button>
                </form>
              </div>
            </div>
          </FadeIn>

          {/* Info Sidebar */}
          <div className="lg:col-span-4 lg:col-start-9 space-y-6">
            {/* HQ Card */}
            <FadeIn direction="right" delay={0.2}>
              <div className="bg-white rounded-sm border border-[#131b2e]/8 p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#e6c275]/60" />
                <h3 className="font-label text-xs border-l-2 border-[#e6c275] pl-4 uppercase tracking-widest text-[#3c475a] mb-6">
                  Chennai Headquarters
                </h3>
                <p className="text-[1.2rem] font-bold text-[#131b2e] mb-3"
                  style={{ fontFamily: "var(--font-noto-serif), serif" }}>The Aurelian Atelier</p>
                <address className="not-italic text-[#3c475a] leading-relaxed text-sm mb-6">
                  42 Khader Nawaz Khan Road,<br />Nungambakkam, Chennai 600006<br />Tamil Nadu, India
                </address>
                <div className="flex flex-col gap-3">
                  {[
                    { icon: "call",  href: "tel:+914420001000",    text: "+91 (44) 2000 1000" },
                    { icon: "mail",  href: "mailto:studio@aurelian.in", text: "studio@aurelian.in" },
                  ].map(({ icon, href, text }) => (
                    <motion.a key={icon} href={href}
                      className="flex items-center gap-3 text-[#131b2e] font-semibold text-sm hover:text-[#e6c275] transition-colors"
                      whileHover={{ x: 4 }}>
                      <span className="material-symbols-outlined text-[18px] text-[#e6c275]">{icon}</span>
                      {text}
                    </motion.a>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Regions */}
            <FadeIn direction="right" delay={0.35}>
              <div className="bg-white rounded-sm border border-[#131b2e]/8 p-8 shadow-sm">
                <h3 className="font-label text-xs border-l-2 border-[#e6c275] pl-4 uppercase tracking-widest text-[#3c475a] mb-6">
                  South India Operations
                </h3>
                <div className="grid grid-cols-2 gap-y-5">
                  {regions.map(({ state, cities }) => (
                    <div key={state}>
                      <p className="font-bold text-[#131b2e] text-sm">{state}</p>
                      <p className="text-xs text-[#3c475a] mt-0.5 leading-relaxed">{cities}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Social */}
            <FadeIn direction="right" delay={0.5}>
              <div className="bg-white rounded-sm border border-[#131b2e]/8 p-8 shadow-sm">
                <h3 className="font-label text-xs border-l-2 border-[#e6c275] pl-4 uppercase tracking-widest text-[#3c475a] mb-6">
                  Connect Digital
                </h3>
                <div className="flex gap-3">
                  {socialIcons.map(({ icon, label }, i) => (
                    <motion.a
                      key={icon} href="#" aria-label={label}
                      className="w-11 h-11 flex items-center justify-center rounded-sm bg-[#f0ede9] border border-[#131b2e]/8 group"
                      whileHover={{ backgroundColor: "#e6c275", borderColor: "#e6c275", y: -3 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <span className="material-symbols-outlined text-[#3c475a] group-hover:text-[#131b2e] text-[20px] transition-colors">{icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
