import { NextRequest, NextResponse } from "next/server";

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://www.yoursite.com", "https://yoursite.com"]
    : ["http://localhost:3000", "https://www.google.com"];

export function middleware(request: NextRequest) {
  // const regex = new RegExp("/api/*");
  // if (regex.test(request.url)) {
  // }

  const origin = request.headers.get("origin");
  console.log("1. origin", origin);

  // if not exist origin it means the same domain name
  if (origin && !allowedOrigins.includes(origin))
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad Request",
      headers: {
        "Content-Type": "text/plain",
      },
    });

  console.log("middleware");
  console.log("method", request.method);
  console.log("url", request.url);

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
