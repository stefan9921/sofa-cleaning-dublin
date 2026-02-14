import Image from "next/image";
import Link from "next/link";
import { ContactForm, ServiceCard, AreaCard } from "@/components";
import { BUSINESS, SERVICES, AREAS } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* Hero Section with Contact Form Above the Fold */}
      <section className="relative bg-gradient-to-b from-surface to-white">
        <div className="container-padding py-12 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column - Content */}
            <div className="lg:col-span-7 lg:pr-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Dublin&apos;s Top-Rated Upholstery Cleaners
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Professional{" "}
                <span className="text-primary">Sofa Cleaning</span>
                {" "}in Dublin
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
                Expert same-day upholstery cleaning across Dublin. We restore your furniture to its former glory using eco-friendly, family-safe technology.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-semibold text-slate-600">Same-Day Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm font-semibold text-slate-600">Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                  <span className="text-sm font-semibold text-slate-600">Eco-Friendly</span>
                </div>
              </div>

              {/* Hero Image - Hidden on mobile, shown on lg */}
              <div className="hidden lg:block mt-8">
                <Image
                  src="/images/hero-sofa.jpg"
                  alt="Professional sofa cleaning in Dublin"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 lg:p-8 relative">
                <div className="absolute -top-3 -right-3 bg-primary text-white px-4 py-1 rounded-lg text-sm font-bold shadow-lg">
                  Free Estimates
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Get a Free Quote
                </h2>
                <ContactForm compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white" id="services">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Cleaning Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Professional cleaning solutions for all your upholstery needs. From sofas to mattresses, we&apos;ve got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-surface">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our 4-Step Process
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We follow a proven process to ensure the best results for your furniture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Inspection", desc: "We assess your furniture to determine the best cleaning approach" },
              { step: 2, title: "Pre-Treatment", desc: "Stains and high-traffic areas get special pre-treatment" },
              { step: 3, title: "Deep Clean", desc: "Professional deep cleaning using eco-friendly solutions" },
              { step: 4, title: "Protection", desc: "Optional fabric protection to keep your furniture cleaner longer" },
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

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Choose Sofa Cleaning Dublin?
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Experienced Professionals", desc: "Our team has cleaned thousands of sofas across Dublin with consistently excellent results." },
                  { title: "Same-Day Service", desc: "Need it cleaned today? We offer same-day service for most bookings made before noon." },
                  { title: "Eco-Friendly Products", desc: "Safe for children, pets, and the environment. Our cleaning solutions are non-toxic and biodegradable." },
                  { title: "Satisfaction Guaranteed", desc: "If you're not happy with our service, we'll come back and re-clean for free." },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/why-choose-us.jpg"
                alt="Professional sofa cleaning team"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="section-padding bg-surface" id="areas">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Areas We Cover
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We provide professional sofa cleaning services across Dublin and surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {AREAS.slice(0, 8).map((area) => (
              <AreaCard key={area.slug} {...area} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/areas" className="btn-secondary">
              View All Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sarah M.", area: "Ranelagh", text: "Absolutely fantastic service! My sofa looks brand new. The team was professional, on time, and the results exceeded my expectations." },
              { name: "John D.", area: "Blackrock", text: "Had a stubborn red wine stain that I thought was permanent. These guys removed it completely! Highly recommend." },
              { name: "Emma K.", area: "Drumcondra", text: "Great value for money. They cleaned our 3-seater and armchair in under an hour. Will definitely use again." },
            ].map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="font-bold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for a Cleaner Sofa?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get your free quote today. Same-day service available for bookings before noon.
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
