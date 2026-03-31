import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.ADDRESSABLE_API_KEY;

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q");

  if (!q || q.length < 3) {
    return NextResponse.json([]);
  }

  const res = await fetch(
    `https://api.addressable.dev/v1/autocomplete?q=${encodeURIComponent(q)}&country=nz&api_key=${API_KEY}`,
    { headers: { Accept: "application/json" } }
  );

  if (!res.ok) {
    return NextResponse.json([], { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
