import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ContactForm, ServiceCard } from "@/components";
import { AREAS, SERVICES, BUSINESS } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return AREAS.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = AREAS.find((a) => a.slug === slug);
  
  if (!area) return { title: "Area Not Found" };

  return {
    title: `Sofa Cleaning ${area.name}`,
    description: `Professional sofa and upholstery cleaning in ${area.name}. Same-day service, eco-friendly products, fully insured. Serving ${area.neighborhoods.join(", ")}. Get your free quote today!`,
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = AREAS.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  const nearbyAreas = AREAS.filter((a) => a.slug !== area.slug).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="bg-surface py-16 md:py-24">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                Local Service
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                Professional Sofa Cleaning in <span className="text-primary">{area.name}</span>
              </h1>
              <p className="text-xl text-slate-600 mb-6">
                Expert upholstery cleaning services for homes and businesses in {area.name}. Same-day service available, eco-friendly products, fully insured.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold text-sm">5-Star Rated</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold text-sm">Same-Day Service</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945" />
                  </svg>
                  <span className="font-semibold text-sm">Eco-Friendly</span>
                </div>
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
                src="/images/hero-sofa.jpg"
                alt={`Sofa cleaning service in ${area.name}`}
                width={600}
                height={450}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services in Area */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Services Available in {area.name}
          </h2>
          <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
            We offer a full range of upholstery cleaning services to homes and businesses in {area.name} and surrounding areas.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-surface">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Why Choose Us in {area.name}?
              </h2>
              <div className="space-y-4">
                {[
                  { title: `Local ${area.name} Team`, desc: "Our team knows the area and can respond quickly to your needs." },
                  { title: "Fast Response Times", desc: "We offer same-day service for bookings made before noon." },
                  { title: "Competitive Pricing", desc: "Quality service at fair prices with no hidden fees." },
                  { title: "Satisfaction Guaranteed", desc: "Not happy? We'll come back and re-clean for free." },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Get a Free Quote in {area.name}
              </h3>
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Areas We Serve in {area.name}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {area.neighborhoods.map((neighborhood) => (
              <span
                key={neighborhood}
                className="px-4 py-2 bg-surface rounded-full text-slate-600 font-medium"
              >
                {neighborhood}
              </span>
            ))}
          </div>
          <p className="text-center text-slate-600 max-w-2xl mx-auto">
            Don&apos;t see your specific area listed? Contact us anyway — we likely cover your location!
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-surface">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-12 h-12 text-primary/20 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-2xl font-medium text-slate-900 mb-6">
              &ldquo;Excellent service! The team arrived on time, were very professional, and my sofa looks brand new. Highly recommend for anyone in {area.name}.&rdquo;
            </blockquote>
            <div>
              <p className="font-bold text-slate-900">Happy Customer</p>
              <p className="text-slate-500">{area.name} resident</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            We Also Serve Nearby Areas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nearbyAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="card text-center group"
              >
                <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {a.name}
                </h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/areas" className="text-primary font-semibold hover:underline">
              View all areas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="container-padding text-center">
          <h2 className="text-3xl font-bold mb-4">
            Book Your {area.name} Sofa Cleaning Today
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Get your free quote. Same-day service available for bookings before noon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${BUSINESS.phone}`} className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors">
              Call {BUSINESS.phoneDisplay}
            </a>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
