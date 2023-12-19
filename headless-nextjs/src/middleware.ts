import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { defaultLocale, locales } from "./config/i18n";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const excludePaths = [
  "/api",
  "/_next/image",
  "/_next/static",
  "/favicon.ico",
  "/prism.css",
];

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  const locale = matchLocale(languages, locales, defaultLocale);
  return locale;
}

function getLocaleFromPath(path: string): string | null {
  const regex = /^\/(\w{2})(?:\/|$)/;
  const match = path.match(regex);
  const localePathPrefix = match ? match[1] : null;
  return localePathPrefix;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (excludePaths.some((path) => request.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  const queryString = request.nextUrl.search;
  const localeFromPath = getLocaleFromPath(pathname);

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  const locale = getLocale(request);

  if (pathnameIsMissingLocale) {
    if (locale === defaultLocale) {
      const newPath = `/${defaultLocale}${pathname}`;
      const url = new URL(newPath, request.url);
      return NextResponse.rewrite(`${url}${queryString}`);
    }

    return NextResponse.redirect(
      new URL(
        `/${locale}${
          pathname.startsWith("/") ? "" : "/"
        }${pathname}${queryString}`,
        request.url
      )
    );
  }

  if (localeFromPath === defaultLocale) {
    const newPath = pathname.replace(new RegExp(`^\\/${localeFromPath}`), "");
    const url = new URL(newPath, request.nextUrl.origin);
    return NextResponse.redirect(`${url}${queryString}`);
  }
}
