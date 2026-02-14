import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "@/components";
import { SERVICES, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Professional upholstery cleaning services in Dublin. Sofa cleaning, armchair cleaning, mattress cleaning, leather care, and more. Get your free quote today.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface py-16 md:py-24">
        <div className="container-padding">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Our Professional <span className="text-primary">Cleaning Services</span>
            </h1>
            <p className="text-xl text-slate-600">
              From sofas to mattresses, we offer comprehensive upholstery cleaning solutions for your home or business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-surface">
        <div className="container-padding">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Our 4-Step Cleaning Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Inspection",
                desc: "We thoroughly inspect your furniture to identify fabric type, stains, and areas requiring special attention.",
              },
              {
                step: 2,
                title: "Pre-Treatment",
                desc: "Problem areas and stains receive targeted pre-treatment with specialised solutions.",
              },
              {
                step: 3,
                title: "Deep Clean",
                desc: "Professional deep cleaning using hot water extraction or dry cleaning methods as appropriate.",
              },
              {
                step: 4,
                title: "Protection",
                desc: "Optional fabric protection treatment to guard against future stains and spills.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Transparent Pricing
            </h2>
            <p className="text-slate-600 text-center mb-8">
              No hidden fees. The price we quote is the price you pay.
            </p>

            <div className="card">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 font-bold text-slate-900">Service</th>
                    <th className="text-right py-3 font-bold text-slate-900">Starting From</th>
                  </tr>
                </thead>
                <tbody>
                  {SERVICES.map((service) => (
                    <tr key={service.id} className="border-b border-slate-100 last:border-0">
                      <td className="py-3 text-slate-600">{service.name}</td>
                      <td className="py-3 text-right font-semibold text-primary">{service.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-slate-500 mt-4">
                * Final pricing depends on furniture size, condition, and fabric type. We provide free, no-obligation quotes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-primary text-white py-16">
        <div className="container-padding text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4">100% Satisfaction Guaranteed</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Not happy with our service? We&apos;ll come back and re-clean for free. That&apos;s our promise to you.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-padding text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Book Your Cleaning?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote. Same-day service available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${BUSINESS.phone}`} className="btn-primary">
              Call {BUSINESS.phoneDisplay}
            </a>
            <Link href="/contact" className="btn-secondary">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
