import type { Metadata } from "next";
import Link from "next/link";
import { AreaCard } from "@/components";
import { AREAS, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Areas We Cover",
  description:
    "Professional sofa cleaning services across Dublin. We cover Dublin 1-24, Dún Laoghaire, Blackrock, Malahide, Swords, and more. Same-day service available.",
};

export default function AreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface py-16 md:py-24">
        <div className="container-padding">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Areas We <span className="text-primary">Cover</span>
            </h1>
            <p className="text-xl text-slate-600">
              Professional sofa cleaning services across Dublin and surrounding counties. Same-day service available in most areas.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-white py-8">
        <div className="container-padding">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold">20+</div>
              <div className="text-sm text-white/80">Areas Covered</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">Same-Day</div>
              <div className="text-sm text-white/80">Service Available</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">Free</div>
              <div className="text-sm text-white/80">Quotes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dublin Areas */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Dublin Postcodes</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {AREAS.filter((a) => a.slug.startsWith("dublin")).map((area) => (
              <AreaCard key={area.slug} {...area} />
            ))}
          </div>
        </div>
      </section>

      {/* Greater Dublin */}
      <section className="section-padding bg-surface">
        <div className="container-padding">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Greater Dublin</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {AREAS.filter((a) => !a.slug.startsWith("dublin")).map((area) => (
              <AreaCard key={area.slug} {...area} />
            ))}
          </div>
        </div>
      </section>

      {/* Counties */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            We Also Serve
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Dublin", "Wicklow", "Kildare", "Meath"].map((county) => (
              <span
                key={county}
                className="px-6 py-2 bg-primary/10 text-primary font-semibold rounded-full"
              >
                {county}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="section-padding bg-surface">
        <div className="container-padding">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Don&apos;t See Your Area?
            </h2>
            <p className="text-slate-600 mb-6">
              Contact us anyway! We may still cover your location or can arrange service for larger jobs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${BUSINESS.phone}`} className="btn-primary">
                Call {BUSINESS.phoneDisplay}
              </a>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            What Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Mark T.", area: "Dublin 4", text: "Quick service, excellent results. My sofa looks brand new!" },
              { name: "Lisa O.", area: "Malahide", text: "Very professional team. They arrived on time and did a fantastic job." },
              { name: "David C.", area: "Dublin 15", text: "Best sofa cleaning service in Dublin. Highly recommend." },
            ].map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 text-sm mb-3">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-xs text-slate-500">{testimonial.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
