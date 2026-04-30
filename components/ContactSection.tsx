"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./animations/FadeIn";

const contactDetails = [
  { icon: "call",          label: "Phone",    value: "+91 99940 95771" },
  { icon: "location_on",   label: "Office",   value: "Isha Complex, 2/801, Mambakkam - Medavakkam Main Rd" },
  { icon: "map",           label: "Landmark", value: "Near to Sbioa Unity Enclave, Mambakkam" },
  { icon: "pin_drop",      label: "Pincode",  value: "Tamil Nadu 600127" },
];

const socialLinks = [
  { icon: "photo_camera", label: "Instagram" },
  { icon: "groups",       label: "Facebook" },
  { icon: "work",         label: "LinkedIn" },
  { icon: "smart_display",label: "YouTube" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-10 md:py-20 bg-[#f6f3ee] relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14">
          {/* Contact Info Column */}
          <FadeIn direction="left">
            <div className="space-y-10">
              <div className="max-w-3xl">
                <span className="eyebrow mb-5 block">Contact Us</span>
                <h2
                  className="text-4xl md:text-5xl text-[#012c3d] font-bold tracking-tight mb-6"
                  style={{ fontFamily: "var(--font-noto-serif), serif" }}
                >
                  Get In Touch
                </h2>
                <p className="text-[#3c475a] text-lg leading-relaxed max-w-xl">
                  Have a project in mind? Reach out to Fourwalls Interiors &amp;
                  Constructions and let us help you bring your vision to life.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {contactDetails.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-5 p-5 bg-white border border-[#012c3d]/8 rounded-sm group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    whileHover={{ x: 4, borderColor: "rgba(1,193,255,0.4)" }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-[#012c3d] shrink-0">
                      <span className="material-symbols-outlined text-[#01c1ff] text-[20px]">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#fa693a] mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-[#012c3d] font-semibold text-sm">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#3c475a] mb-4">
                  Follow Us
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={social.label}
                      href="#"
                      aria-label={social.label}
                      className="inline-flex items-center gap-2.5 rounded-sm bg-white border border-[#012c3d]/10 px-5 py-3 text-sm text-[#012c3d] font-semibold group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.65 + i * 0.08 }}
                      whileHover={{
                        backgroundColor: "#012c3d",
                        borderColor: "#012c3d",
                        y: -3,
                      }}
                    >
                      <span className="material-symbols-outlined text-[16px] group-hover:text-[#01c1ff] transition-colors">
                        {social.icon}
                      </span>
                      <span className="group-hover:text-[#01c1ff] transition-colors text-xs uppercase tracking-wider font-bold">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </FadeIn>

          {/* Contact Form Column */}
          <FadeIn direction="right" delay={0.2}>
            <motion.form
              className="bg-white border border-[#012c3d]/8 rounded-sm p-8 shadow-sm space-y-5"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              onSubmit={(e) => e.preventDefault()}
            >
              {/* <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#01c1ff] via-[#18d4cf] to-[#ffc309] rounded-t-sm" /> */}

              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#fa693a] mb-4">
                  Send Us a Message
                </p>
                <h3
                  className="text-2xl font-bold text-[#012c3d]"
                  style={{ fontFamily: "var(--font-noto-serif), serif" }}
                >
                  Start Your Project
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Full Name", "Phone Number"].map((placeholder) => (
                  <div key={placeholder}>
                    <input
                      type={placeholder === "Phone Number" ? "tel" : "text"}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 border border-[#012c3d]/12 rounded-sm text-sm text-[#012c3d] placeholder:text-[#8a96a8] focus:outline-none focus:border-[#01c1ff] transition-colors bg-[#fafaf8]"
                    />
                  </div>
                ))}
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-[#012c3d]/12 rounded-sm text-sm text-[#012c3d] placeholder:text-[#8a96a8] focus:outline-none focus:border-[#01c1ff] transition-colors bg-[#fafaf8]"
              />

              <select className="w-full px-4 py-3 border border-[#012c3d]/12 rounded-sm text-sm text-[#012c3d] focus:outline-none focus:border-[#01c1ff] transition-colors bg-[#fafaf8]">
                <option value="" disabled selected>Service Interested In</option>
                <option>Interior Design</option>
                <option>Construction Services</option>
                <option>Modular Kitchen &amp; Wardrobe</option>
                <option>Renovation &amp; Remodeling</option>
                <option>Turnkey Project</option>
              </select>

              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 border border-[#012c3d]/12 rounded-sm text-sm text-[#012c3d] placeholder:text-[#8a96a8] focus:outline-none focus:border-[#01c1ff] transition-colors bg-[#fafaf8] resize-none"
              />

              <motion.button
                type="submit"
                className="group relative w-full inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-sm bg-[#012c3d] px-6 py-4 text-sm font-bold uppercase tracking-widest text-[#01c1ff]"
                whileHover={{ scale: 1.01, backgroundColor: "#02364b" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 shimmer opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative">Send Message</span>
                <span className="material-symbols-outlined relative text-[18px] transition-transform group-hover:translate-x-1">
                  send
                </span>
              </motion.button>
            </motion.form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
