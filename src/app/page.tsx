"use client";

import { useState } from "react";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", phone: "", service: "Sofa Cleaning" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, email: "", message: "" }),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl font-bold">chair</span>
              <span className="text-xl font-bold tracking-tight text-primary">SofaClean<span className="text-slate-900">Dublin</span></span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors" href="#services">Services</a>
              <a className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors" href="#process">Process</a>
              <a className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors" href="#areas">Areas</a>
              <a className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors" href="#contact">Contact</a>
            </nav>
            <div className="flex items-center gap-6">
              <a className="hidden lg:flex items-center gap-2 text-sm font-bold text-slate-900" href={`tel:${BUSINESS.phone}`}>
                <span className="material-symbols-outlined text-primary">phone_in_talk</span>
                {BUSINESS.phoneDisplay}
              </a>
              <a className="bg-primary hover:bg-teal-dark text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md" href="#quote">
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                <span className="material-symbols-outlined text-sm">verified</span> Dublin&apos;s Top-Rated Upholstery Cleaners
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Professional <span className="text-primary">Sofa Cleaning</span> in Dublin
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
                Expert same-day upholstery cleaning across Dublin. We restore your furniture to its former glory using eco-friendly, family-safe technology.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">task_alt</span>
                  <span className="text-sm font-bold text-slate-700">Same-Day Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">security</span>
                  <span className="text-sm font-bold text-slate-700">Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">eco</span>
                  <span className="text-sm font-bold text-slate-700">Non-Toxic Products</span>
                </div>
              </div>
              <div className="hidden lg:block">
                <img alt="Professional sofa cleaning process" className="rounded-2xl shadow-2xl w-full h-[400px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzKLM3kzEAVXngGlDnqV4vzeIO30vAPu4JDMliVNrNuRR98UB1TrU8HPplI-YvBJcHhpTlBz1cb4023dCVxXEhpddpz2DdqiW_uuXA_yWkin3WxmnUA7KnVi8N5Of1qxXIcamXID5sD4Wy5QU87a3xWelNlcmj3I-FnsQvOlu4cNSEcZT_9YEnncq9qQ2_Z-vPC5xFvIvQFvsocinHop5bAAc_isI5x3qFcUbAzpceBZKjjlUXXRum2wlqYOqp0vuOPBrDlrAn2ybL"/>
              </div>
            </div>
            <div className="lg:col-span-5" id="quote">
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 lg:p-10 relative">
                <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-1 rounded-lg text-sm font-bold shadow-lg">
                  Free Estimates
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Get a Free Quote</h3>
                {status === "success" ? (
                  <div className="text-center py-8">
                    <span className="material-symbols-outlined text-green-500 text-5xl mb-4">check_circle</span>
                    <p className="text-lg font-bold text-slate-900">Thank you!</p>
                    <p className="text-slate-600">We&apos;ll be in touch within 15 minutes.</p>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                      <input 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-primary focus:border-primary transition-all" 
                        placeholder="John Doe" 
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number</label>
                      <input 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-primary focus:border-primary transition-all" 
                        placeholder="(08x) 123 4567" 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Service Type</label>
                      <select 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-primary focus:border-primary transition-all"
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                      >
                        <option>Sofa Cleaning</option>
                        <option>Armchair Cleaning</option>
                        <option>Mattress Cleaning</option>
                        <option>Carpet Cleaning</option>
                      </select>
                    </div>
                    <button 
                      className="w-full bg-primary hover:bg-teal-dark text-white py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-cyan-200 mt-4 disabled:opacity-50" 
                      type="submit"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? "Sending..." : "Get My Quote Now"}
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-4">
                      We usually respond within 15 minutes during business hours.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Our Professional Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Specialized care for all your home fabrics using industry-leading deep extraction methods.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "chair", title: "Sofa Cleaning", desc: "Revitalize your fabric or leather sofas with our deep-steam extraction that removes embedded dirt and allergens." },
              { icon: "event_seat", title: "Armchair Cleaning", desc: "Dedicated stain removal and fabric conditioning for armchairs, recliners, and specialized lounge seating." },
              { icon: "bed", title: "Mattress Cleaning", desc: "Ensure a hygienic sleep environment with our medical-grade cleaning that eliminates dust mites and bacteria." },
              { icon: "layers", title: "Carpet Cleaning", desc: "From area rugs to wall-to-wall carpets, we provide high-pressure steam cleaning for a total home refresh." },
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-primary transition-all group">
                <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Our 5-Step Cleaning Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">We use a thorough, scientifically-proven method to ensure deep cleaning and hygiene.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: "search", title: "1. Pre-Inspection", desc: "Assessing fabric type and stains." },
              { icon: "vacuum", title: "2. Industrial Vacuuming", desc: "Removing loose dust and allergens." },
              { icon: "science", title: "3. Pre-Treatment", desc: "Breaking down tough stains with eco-solutions." },
              { icon: "hot_tub", title: "4. Steam Extraction", desc: "High-pressure hot water extraction for a deep clean." },
              { icon: "content_cut", title: "5. Grooming", desc: "Restoring the fabric's pile and appearance." },
            ].map((step, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:border-primary/50 hover:shadow-lg transition-all text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-primary">
                  <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-xs text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Trusted by Dublin Families</h2>
            <div className="flex justify-center gap-1 text-yellow-400 mb-2">
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
            </div>
            <p className="text-slate-500 font-medium">Over 500+ five-star reviews from local residents</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", area: "Rathmines, Dublin 6", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCC-vFLULsnQlZbVVoLf9Y3BMaPVaSJK9_e2TbCJcZY_YX8VkF98PW1DJ-mVI08E3sFt6qKzt8fwJZOrAY2EMjcDh7NvqYWJkZMnDf_0B5wOIMeF3mCsCDbsPde4Nloo6YNQv4MfRd-iU9SysT5PuIredGYMofm6VHuOXFpTJPDSKxYEkWbZH971cwuFWaSHMjYRs3Lmhhb1IZVDdifVRZ_wUAuHzuMqzncTZD4nVh78HYVh2ELYc5Ajg5oe--Kubd2Q6D5SK3myz8b", text: "Outstanding service! My cream sofa looks brand new again. The technician was extremely professional and arrived exactly when he said he would." },
              { name: "Mark O'Reilly", area: "Blackrock, Co. Dublin", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxhMOvrIl_6duN6LTuebYNgCZJGiWiC-iXpLxCJ3I2oKwSCyZKImQqUJcYhxSW0qvC43XMWeYq4DkK65QWp3Qwi-YrljMyYK_9mUu_nSBpHNEVBnITf7-kKiQ1aSTGO2QA-uDMPFIvQ3mDsUxJLME3BvBYVPCTmVqLShEtd58YtwVE5aVzo1fRWYG3yN1wrHFrjRsHtbpA1X7TxIfhLHEEyjur87v42-veuEGsSbSmSJwlmJPTdljvB2YCMBdJhRY9vK1k_Fm5ishY", text: "Highly recommend for mattress cleaning. Efficient, thorough, and very reasonably priced for Dublin. It has made a huge difference to my sleep quality." },
              { name: "Emma Byrne", area: "Swords, North Dublin", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYzbgTG-9V4Lrj7ZSmRwc_QYzV5xbubZvXmkopsUHOIiToA25ow7JUm15gwyu0TLTwvMCRJHUw0JPDXq_GqQwmJs4_lEx9nWJQ-Kn_RRMjgr7cdhrMgOpmADX4fsCcmCYY_zNEy_8Pk38Iu44D1oyQChKVinNdld4hnB_acirVuFC1WP8qKdmYwSQoDfuR1oz71IrlHKqwA2RATOEfLRGjghJWKtSBgioa7yCJRaENcmFo_jurddNdaVbXXn0t0_iqdj8-W5xl5bUP", text: "They managed to remove red wine stains that I thought were permanent. Absolute lifesavers! Quick, clean, and no chemical smell." },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <img alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" src={testimonial.img}/>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-xs text-primary font-bold">{testimonial.area}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 text-xs mb-3">
                  <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span>
                </div>
                <p className="text-slate-600 italic leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-24 bg-white" id="areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                <span className="material-symbols-outlined text-sm">location_on</span> We Are Local
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6">Serving All of Dublin</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our team of mobile technicians covers the entirety of County Dublin, bringing professional upholstery care directly to your doorstep. From city center apartments to suburban family homes, we are just a call away.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6">
                {["Rathmines", "Clontarf", "Lucan", "Blackrock", "Dundrum", "Terenure", "Swords", "Malahide", "Howth", "Tallaght", "Dalkey", "Stillorgan"].map((area) => (
                  <div key={area} className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span> {area}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <p className="text-sm text-slate-500 italic">And many more surrounding areas...</p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform rotate-3 group-hover:rotate-2 transition-transform duration-500"></div>
              <div className="relative bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden min-h-[400px] flex items-center justify-center bg-slate-50">
                <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(#0891b2 1px, transparent 1px)", backgroundSize: "20px 20px"}}></div>
                <div className="relative z-10 text-center">
                  <span className="material-symbols-outlined text-[12rem] text-primary/20">map</span>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="material-symbols-outlined text-4xl text-red-500 animate-bounce">location_on</span>
                    <div className="bg-white px-3 py-1 rounded-full shadow-lg text-xs font-bold text-slate-800 mt-2 border border-slate-200">
                      Serving All Dublin
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl shadow-cyan-200">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <span className="material-symbols-outlined text-[15rem]">cleaning_services</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 relative z-10">Ready for a Fresh, Clean Sofa?</h2>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto relative z-10">Get your instant estimate and book your same-day slot in seconds.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 relative z-10">
              <a className="text-white text-3xl font-extrabold flex items-center gap-3" href={`tel:${BUSINESS.phone}`}>
                <span className="material-symbols-outlined text-4xl bg-white/20 p-3 rounded-full">call</span>
                {BUSINESS.phoneDisplay}
              </a>
              <a className="bg-white text-primary hover:bg-slate-50 px-10 py-5 rounded-2xl text-xl font-extrabold transition-all shadow-xl" href="#quote">
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl font-bold">chair</span>
                <span className="text-xl font-bold tracking-tight text-primary">SofaClean<span className="text-slate-900">Dublin</span></span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">Your local Dublin upholstery specialists. Providing top-tier cleaning services to homes and businesses across the city for over 10 years.</p>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#">
                  <span className="material-icons text-xl">facebook</span>
                </a>
                <a className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#">
                  <span className="material-icons text-xl">camera_alt</span>
                </a>
                <a className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#">
                  <span className="material-icons text-xl">alternate_email</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Services</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-500">
                <li><Link className="hover:text-primary transition-colors" href="/services/sofa-cleaning">Sofa Cleaning</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="/services/armchair-cleaning">Armchair Cleaning</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="/services/mattress-cleaning">Mattress Cleaning</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="/services/rug-cleaning">Carpet Cleaning</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Business Hours</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-500">
                <li className="flex justify-between"><span>Mon - Fri</span> <span>08:00 - 19:00</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span>09:00 - 17:00</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
                <li className="text-primary font-bold">24/7 Emergency Calls</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Contact Us</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-500">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                  <span>{BUSINESS.fullAddress}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">mail</span>
                  <span>{BUSINESS.email}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">phone_iphone</span>
                  <span>{BUSINESS.phoneDisplay}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 text-center text-xs text-slate-400">
            <p>© {new Date().getFullYear()} Sofa Cleaning Dublin. Professional Local Upholstery Care. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
