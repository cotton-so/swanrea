import { NextRequest, NextResponse } from "next/server";

const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY || "1x0000000000000000000000000000000AA";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const token = formData.get("cf-turnstile-response") as string;

  // Verify Turnstile token
  const verifyRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: TURNSTILE_SECRET,
        response: token,
      }),
    }
  );

  const verification = await verifyRes.json();
  if (!verification.success) {
    return NextResponse.json(
      { error: "Verification failed" },
      { status: 400 }
    );
  }

  // Extract form data
  const booking = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    address: formData.get("address"),
    service: formData.get("service"),
    message: formData.get("message"),
    submitted: new Date().toISOString(),
  };

  // TODO: Send email notification (Resend, SendGrid, etc.)
  // For now, log to console
  console.log("New booking request:", booking);

  return NextResponse.json({ success: true });
}
