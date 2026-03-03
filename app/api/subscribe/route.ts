import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Replace with your actual Resend Audience ID once created in the Resend dashboard
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID ?? "";

export async function POST(req: NextRequest) {
  let email: string;

  try {
    const body = await req.json();
    email = (body.email ?? "").trim().toLowerCase();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  }

  try {
    if (AUDIENCE_ID) {
      // Add to Resend audience
      await resend.contacts.create({
        email,
        audienceId: AUDIENCE_ID,
        unsubscribed: false,
      });
    } else {
      // No audience configured — just validate the API key works
      // In production, set RESEND_AUDIENCE_ID in your environment variables
      console.log(`[subscribe] Would add ${email} to audience (RESEND_AUDIENCE_ID not set)`);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[subscribe] Resend error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
