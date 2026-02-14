import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Validate phone format
    const phoneRegex = /^[\d\s\+\-\(\)]{8,}$/;
    if (!phoneRegex.test(data.phone)) {
      return NextResponse.json(
        { error: "Please provide a valid phone number" },
        { status: 400 }
      );
    }

    // In production, you would:
    // 1. Send an email notification
    // 2. Store in a database
    // 3. Integrate with a CRM
    // 4. Send to a webhook

    // For now, log the submission (replace with actual implementation)
    console.log("New contact form submission:", {
      ...data,
      submittedAt: new Date().toISOString(),
    });

    // Simulate a slight delay for UX
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Example: Send email via SendGrid, Resend, etc.
    // await sendEmail({
    //   to: "info@sofacleaningdublin.ie",
    //   subject: `New Quote Request from ${data.name}`,
    //   body: `
    //     Name: ${data.name}
    //     Email: ${data.email}
    //     Phone: ${data.phone}
    //     Service: ${data.service || 'Not specified'}
    //     Message: ${data.message || 'None'}
    //   `,
    // });

    return NextResponse.json({
      success: true,
      message: "Thank you for your enquiry. We'll be in touch within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
