import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD for LocalBusiness
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://sofacleaningdublin.ie/#business",
  name: BUSINESS.name,
  description: "Professional sofa and upholstery cleaning service in Dublin.",
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
  areaServed: {
    "@type": "City",
    name: "Dublin",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
