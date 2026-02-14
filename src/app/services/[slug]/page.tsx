import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components";
import { SERVICES, BUSINESS } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.name} Dublin`,
    description: `Professional ${service.name.toLowerCase()} service in Dublin. ${service.description} ${service.price}. Same-day service available.`,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-surface py-16 md:py-24">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                Professional Service
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                {service.name} <span className="text-primary">Dublin</span>
              </h1>
              <p className="text-xl text-slate-600 mb-6">
                {service.description}
              </p>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-bold text-primary">{service.price}</span>
                <span className="text-slate-500">Starting price</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${BUSINESS.phone}`} className="btn-primary">
                  Call {BUSINESS.phoneDisplay}
                </a>
                <Link href="/contact" className="btn-secondary">
                  Get Free Quote
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src={`/images/services/${service.slug}.jpg`}
                alt={`${service.name} service in Dublin`}
                width={600}
                height={450}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                What&apos;s Included
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-600">Same-day service available</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-600">Satisfaction guaranteed</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Our Process
              </h2>
              <div className="space-y-6">
                {[
                  { step: 1, title: "Inspection", desc: "We assess the condition and fabric type" },
                  { step: 2, title: "Pre-Treatment", desc: "Stains and problem areas get special attention" },
                  { step: 3, title: "Deep Clean", desc: "Professional cleaning with eco-friendly products" },
                  { step: 4, title: "Protection", desc: "Optional fabric protection for lasting cleanliness" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface">
        <div className="container-padding">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: `How long does ${service.name.toLowerCase()} take?`,
                a: "Most jobs take 30-60 minutes depending on size and condition. Drying time is typically 2-4 hours.",
              },
              {
                q: `How much does ${service.name.toLowerCase()} cost?`,
                a: `Prices start ${service.price}. We provide free quotes based on size and condition.`,
              },
              {
                q: "Are your products safe for pets and children?",
                a: "Yes, all our cleaning products are non-toxic, eco-friendly, and safe once dry.",
              },
              {
                q: "Do you offer same-day service?",
                a: "Yes! Book before noon for same-day service in most Dublin areas.",
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

      {/* Related Services */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            You May Also Need
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link key={s.id} href={`/services/${s.slug}`} className="card group">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
                  {s.name}
                </h3>
                <p className="text-sm text-slate-600 mb-3">{s.description}</p>
                <span className="text-primary font-semibold text-sm">{s.price}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Ready to Book Your {service.name}?
              </h2>
              <p className="text-white/80 mb-6">
                Get your free quote today. Same-day service available for bookings before noon.
              </p>
              <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {BUSINESS.phoneDisplay}
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Get a Free Quote</h3>
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
