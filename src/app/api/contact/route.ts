import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are all required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Forward to Resend if RESEND_API_KEY is configured in environment
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: ["reshieaaqib@gmail.com"],
          reply_to: email,
          subject: `Portfolio Inquiry from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Resend delivery failed:", errText);
        return NextResponse.json(
          { error: "Email delivery service returned an error. Please use direct email." },
          { status: 502 }
        );
      }
    } else {
      // Log inquiry in server logs when no external email provider key is set
      console.info("[Portfolio Contact Inquiry]", {
        name,
        email,
        message,
        receivedAt: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { ok: true, deliveredViaEmail: Boolean(resendKey) },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Unable to process request. Please try emailing directly." },
      { status: 500 }
    );
  }
}
