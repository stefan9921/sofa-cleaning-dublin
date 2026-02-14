import type { Metadata } from "next";
import { ContactForm } from "@/components";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Sofa Cleaning Dublin. Request a free quote, ask questions, or book your cleaning service. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface py-16 md:py-24">
        <div className="container-padding">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-slate-600">
              Have a question or ready to book? We&apos;re here to help. Get your free quote today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Request a Free Quote
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Phone</h3>
                    <a href={`tel:${BUSINESS.phone}`} className="text-primary hover:underline">
                      {BUSINESS.phoneDisplay}
                    </a>
                    <p className="text-sm text-slate-500 mt-1">Mon-Sat, 8am-6pm</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Email</h3>
                    <a href={`mailto:${BUSINESS.email}`} className="text-primary hover:underline">
                      {BUSINESS.email}
                    </a>
                    <p className="text-sm text-slate-500 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Address</h3>
                    <p className="text-slate-600">{BUSINESS.fullAddress}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Opening Hours</h3>
                    <div className="text-slate-600 text-sm space-y-1">
                      <p>Mon-Fri: {BUSINESS.hours.weekdays}</p>
                      <p>Saturday: {BUSINESS.hours.saturday}</p>
                      <p>Sunday: {BUSINESS.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Urgent Banner */}
              <div className="mt-8 bg-primary/10 rounded-xl p-6">
                <h3 className="font-bold text-primary mb-2">Need Urgent Cleaning?</h3>
                <p className="text-slate-600 text-sm mb-4">
                  We offer same-day service for bookings made before noon.
                </p>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-surface">
        <div className="container-padding py-8">
          <div className="bg-slate-200 rounded-xl h-[300px] flex items-center justify-center">
            <p className="text-slate-500">Map will be embedded here</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How long does sofa cleaning take?",
                a: "Most sofa cleaning jobs take 30-60 minutes depending on size and condition. Drying time is typically 2-4 hours.",
              },
              {
                q: "Do you offer same-day service?",
                a: "Yes! Book before noon for same-day service in most Dublin areas, subject to availability.",
              },
              {
                q: "Are your cleaning products safe for pets?",
                a: "Absolutely. All our cleaning solutions are non-toxic, eco-friendly, and safe for children and pets once dry.",
              },
              {
                q: "How much does sofa cleaning cost?",
                a: "Prices start from €79 for a standard sofa. We provide free quotes based on furniture type, size, and condition.",
              },
            ].map((faq, index) => (
              <div key={index} className="card">
                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
