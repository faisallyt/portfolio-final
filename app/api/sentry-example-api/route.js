// app/api/sentry-example-api/route.js

import { NextResponse } from "next/server";

export function GET() {
  throw new Error("Sentry Example API Route Error");
  return NextResponse.json({ data: "Testing Sentry Error..." });
}
