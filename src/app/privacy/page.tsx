import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${BUSINESS.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-surface py-16">
        <div className="container-padding">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-600">Last updated: February 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h2>Introduction</h2>
            <p>
              {BUSINESS.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Fill out a contact form or request a quote</li>
              <li>Call us or communicate with us via email</li>
              <li>Book a cleaning service</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Address</li>
              <li>Service requirements</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device.
            </p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you quotes and booking confirmations</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy or as required by law.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>Under GDPR, you have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings, but this may affect the functionality of the website.
            </p>

            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li>Phone: {BUSINESS.phoneDisplay}</li>
              <li>Email: {BUSINESS.email}</li>
              <li>Address: {BUSINESS.fullAddress}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
