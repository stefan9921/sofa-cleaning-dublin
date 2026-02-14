import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";
import { BUSINESS } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sofacleaningdublin.ie"),
  title: {
    default: "Sofa Cleaning Dublin | Professional Upholstery Cleaning",
    template: "%s | Sofa Cleaning Dublin",
  },
  description:
    "Dublin's trusted professional sofa and upholstery cleaning service. Same-day service, eco-friendly products, fully insured. Get your free quote today!",
  keywords: [
    "sofa cleaning dublin",
    "upholstery cleaning dublin",
    "couch cleaning dublin",
    "sofa cleaners",
    "upholstery cleaners",
    "furniture cleaning dublin",
    "professional sofa cleaning",
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://sofacleaningdublin.ie",
    siteName: BUSINESS.name,
    title: "Sofa Cleaning Dublin | Professional Upholstery Cleaning",
    description:
      "Dublin's trusted professional sofa and upholstery cleaning service. Same-day service, eco-friendly products, fully insured.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sofa Cleaning Dublin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sofa Cleaning Dublin | Professional Upholstery Cleaning",
    description:
      "Dublin's trusted professional sofa and upholstery cleaning service. Same-day service, eco-friendly products, fully insured.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sofacleaningdublin.ie",
  },
};

// JSON-LD for LocalBusiness
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://sofacleaningdublin.ie/#business",
  name: BUSINESS.name,
  description:
    "Professional sofa and upholstery cleaning service in Dublin. Same-day service, eco-friendly products, fully insured.",
  url: "https://sofacleaningdublin.ie",
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    postalCode: BUSINESS.address.postcode,
    addressCountry: "IE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.3448,
    longitude: -6.2388,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "€€",
  image: "https://sofacleaningdublin.ie/og-image.jpg",
  sameAs: [BUSINESS.social.facebook, BUSINESS.social.instagram, BUSINESS.social.google],
  areaServed: {
    "@type": "City",
    name: "Dublin",
    "@id": "https://www.wikidata.org/wiki/Q1761",
  },
  serviceType: [
    "Sofa Cleaning",
    "Upholstery Cleaning",
    "Couch Cleaning",
    "Mattress Cleaning",
    "Leather Cleaning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
