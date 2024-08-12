import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host");

  // Handle requests to career.example.agus.stiawan.site
  if (hostname === "career.example.agus.stiawan.site") {
    if (url.pathname === "/") {
      url.pathname = "/career";
      return NextResponse.rewrite(url);
    }

    // if (!url.pathname.startsWith('/career')) {
    //   url.pathname = `/career${url.pathname}`;
    //   return NextResponse.rewrite(url);
    // }
  }

  // Handle requests to example.agus.stiawan.site
  if (hostname === "example.agus.stiawan.site") {
    if (url.pathname.startsWith("/career")) {
      const newUrl = url
        .toString()
        .replace(
          "example.agus.stiawan.site/career",
          "career.example.agus.stiawan.site"
        );
      return NextResponse.redirect(newUrl);
    }
  }

  // Allow requests that match the correct domain and path
  return NextResponse.next();
}
