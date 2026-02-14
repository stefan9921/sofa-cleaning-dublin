import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sofa Cleaning Dublin - Dublin's trusted upholstery cleaning experts since 2015. Professional, reliable, and eco-friendly cleaning services.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface py-16 md:py-24">
        <div className="container-padding">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              About <span className="text-primary">Sofa Cleaning Dublin</span>
            </h1>
            <p className="text-xl text-slate-600">
              Dublin&apos;s trusted upholstery cleaning experts. We&apos;ve been keeping Dublin&apos;s sofas spotless since 2015.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Sofa Cleaning Dublin was founded with a simple mission: to provide Dublin homeowners and businesses with professional, affordable upholstery cleaning services they can trust.
                </p>
                <p>
                  What started as a one-person operation has grown into a team of dedicated cleaning professionals, but our core values remain the same: quality workmanship, honest pricing, and exceptional customer service.
                </p>
                <p>
                  Over the years, we&apos;ve cleaned thousands of sofas, armchairs, and mattresses across Dublin. From stubborn stains to complete fabric restoration, we&apos;ve seen it all—and cleaned it all.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/about-team.jpg"
                alt="Sofa Cleaning Dublin team"
                width={600}
                height={450}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-surface">
        <div className="container-padding">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "Quality First",
                desc: "We never cut corners. Every job gets our full attention and expertise.",
              },
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "Customer Focus",
                desc: "Your satisfaction is our priority. We're not happy until you are.",
              },
              {
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
                title: "Eco-Friendly",
                desc: "Safe for your family, pets, and the planet. All our products are non-toxic.",
              },
              {
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Fair Pricing",
                desc: "Transparent quotes with no hidden fees. What we quote is what you pay.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-white py-16">
        <div className="container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "5,000+", label: "Sofas Cleaned" },
              { number: "4.9", label: "Average Rating" },
              { number: "20+", label: "Areas Covered" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-extrabold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-padding text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied Dublin customers. Get your free quote today.
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
