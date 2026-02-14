import Link from "next/link";
import { BUSINESS, SERVICES, AREAS, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 8V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v2c-1.1 0-2 .9-2 2v8h1.33L4 19h1l.67-1h12.66l.67 1h1l.67-1H22v-8c0-1.1-.9-2-2-2zm-2-2v2H6V6h12z"/>
              </svg>
              <span className="text-xl font-bold">
                <span className="text-primary">SofaClean</span>
                <span className="text-white">Dublin</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm mb-4">
              Dublin&apos;s trusted upholstery cleaning experts. Professional, reliable, and eco-friendly.
            </p>
            <div className="space-y-2 text-sm">
              <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {BUSINESS.phoneDisplay}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {BUSINESS.email}
              </a>
              <p className="flex items-start gap-2 text-slate-400">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {BUSINESS.fullAddress}
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.slug}`} className="text-slate-400 hover:text-primary transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-bold text-lg mb-4">Areas We Cover</h3>
            <ul className="space-y-2 text-sm">
              {AREAS.slice(0, 8).map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}`} className="text-slate-400 hover:text-primary transition-colors">
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas" className="text-primary hover:text-primary-light transition-colors font-medium">
                  View all areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm mb-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
            
            <h3 className="font-bold text-lg mb-2">Opening Hours</h3>
            <ul className="space-y-1 text-sm text-slate-400">
              <li>Mon-Fri: {BUSINESS.hours.weekdays}</li>
              <li>Saturday: {BUSINESS.hours.saturday}</li>
              <li>Sunday: {BUSINESS.hours.sunday}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-padding py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-400 hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.17.5C10.24.5,9.25,3.11,9.25,5.39V7.46H6.5v4.33h2.75V22h5.25V11.79h3.54Z"/>
              </svg>
            </a>
            <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-400 hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2.16c3.2,0,3.58,0,4.85.07a6.64,6.64,0,0,1,2.23.41,3.72,3.72,0,0,1,1.38.9,3.72,3.72,0,0,1,.9,1.38,6.64,6.64,0,0,1,.41,2.23c.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85a6.64,6.64,0,0,1-.41,2.23,3.98,3.98,0,0,1-2.28,2.28,6.64,6.64,0,0,1-2.23.41c-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07a6.64,6.64,0,0,1-2.23-.41,3.72,3.72,0,0,1-1.38-.9,3.72,3.72,0,0,1-.9-1.38,6.64,6.64,0,0,1-.41-2.23c-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85a6.64,6.64,0,0,1,.41-2.23,3.72,3.72,0,0,1,.9-1.38,3.72,3.72,0,0,1,1.38-.9,6.64,6.64,0,0,1,2.23-.41c1.27-.06,1.65-.07,4.85-.07M12,0C8.74,0,8.33,0,7.05.07A8.8,8.8,0,0,0,4.14.63,5.88,5.88,0,0,0,2,2,5.88,5.88,0,0,0,.63,4.14,8.8,8.8,0,0,0,.07,7.05C0,8.33,0,8.74,0,12s0,3.67.07,4.95a8.8,8.8,0,0,0,.56,2.91A5.88,5.88,0,0,0,2,22a5.88,5.88,0,0,0,2.14,1.37,8.8,8.8,0,0,0,2.91.56c1.28.06,1.69.07,4.95.07s3.67,0,4.95-.07a8.8,8.8,0,0,0,2.91-.56A6.14,6.14,0,0,0,23.37,19.86a8.8,8.8,0,0,0,.56-2.91c.06-1.28.07-1.69.07-4.95s0-3.67-.07-4.95a8.8,8.8,0,0,0-.56-2.91A5.88,5.88,0,0,0,22,2,5.88,5.88,0,0,0,19.86.63,8.8,8.8,0,0,0,16.95.07C15.67,0,15.26,0,12,0Z"/>
                <path d="M12,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z"/>
                <circle cx="18.41" cy="5.59" r="1.44"/>
              </svg>
            </a>
            <a href={BUSINESS.social.google} target="_blank" rel="noopener noreferrer" aria-label="Google" className="text-slate-400 hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56,12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06,5.06,0,0,1-2.2,3.32v2.76h3.56A10.73,10.73,0,0,0,22.56,12.25Z"/>
                <path d="M12,23a10.73,10.73,0,0,0,7.44-2.72l-3.56-2.76a6.75,6.75,0,0,1-3.88,1.11,6.72,6.72,0,0,1-6.31-4.64H2v2.85A11.25,11.25,0,0,0,12,23Z"/>
                <path d="M5.69,14a6.75,6.75,0,0,1,0-4V7.16H2A11.25,11.25,0,0,0,2,16.85l3.69-2.85Z"/>
                <path d="M12,5.38a6.09,6.09,0,0,1,4.32,1.69l3.24-3.24A10.85,10.85,0,0,0,12,1,11.25,11.25,0,0,0,2,7.16l3.69,2.85A6.72,6.72,0,0,1,12,5.38Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
