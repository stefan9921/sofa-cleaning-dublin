import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions for ${BUSINESS.name} services. Read our terms of service, booking policy, and cancellation policy.`,
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-surface py-16">
        <div className="container-padding">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Terms & Conditions</h1>
          <p className="text-slate-600">Last updated: February 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h2>1. Services</h2>
            <p>
              {BUSINESS.name} provides professional upholstery and sofa cleaning services in Dublin and surrounding areas. Our services include sofa cleaning, armchair cleaning, mattress cleaning, leather care, curtain cleaning, and rug cleaning.
            </p>

            <h2>2. Booking & Appointments</h2>
            <ul>
              <li>Bookings can be made by phone, email, or through our website contact form.</li>
              <li>We will confirm your appointment via phone or email.</li>
              <li>Same-day service is available for bookings made before 12:00 noon, subject to availability.</li>
              <li>Please ensure someone over 18 is present at the property during the service.</li>
            </ul>

            <h2>3. Pricing & Payment</h2>
            <ul>
              <li>Prices quoted are estimates based on the information provided.</li>
              <li>Final pricing may vary based on actual condition, size, and fabric type.</li>
              <li>Payment is due upon completion of the service.</li>
              <li>We accept cash, card, and bank transfer.</li>
            </ul>

            <h2>4. Cancellation Policy</h2>
            <ul>
              <li>Cancellations made 24 hours or more before the appointment: No charge.</li>
              <li>Cancellations made less than 24 hours before: A cancellation fee may apply.</li>
              <li>No-shows: Full service charge may apply.</li>
            </ul>

            <h2>5. Our Guarantee</h2>
            <p>
              We stand behind our work. If you are not satisfied with our cleaning service, please contact us within 24 hours and we will return to re-clean the affected areas at no additional charge.
            </p>

            <h2>6. Limitations</h2>
            <ul>
              <li>Some stains may be permanent and cannot be fully removed.</li>
              <li>We cannot guarantee complete removal of all stains, particularly those that have set in or been previously treated.</li>
              <li>Old or delicate fabrics may have limitations on cleaning methods.</li>
              <li>We are not liable for pre-existing damage or wear.</li>
            </ul>

            <h2>7. Liability</h2>
            <p>
              {BUSINESS.name} is fully insured. However, our liability is limited to the cost of the service provided. We are not liable for any indirect or consequential damages.
            </p>

            <h2>8. Property Access</h2>
            <p>
              Customers are responsible for providing safe and clear access to the furniture to be cleaned. Please inform us of any access issues or parking restrictions in advance.
            </p>

            <h2>9. Health & Safety</h2>
            <ul>
              <li>Please inform us of any allergies or sensitivities before the service.</li>
              <li>Keep children and pets away from the cleaning area during the service.</li>
              <li>Furniture should not be used until fully dry (typically 2-4 hours).</li>
            </ul>

            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website.
            </p>

            <h2>11. Contact</h2>
            <p>For questions about these Terms & Conditions, please contact us:</p>
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
