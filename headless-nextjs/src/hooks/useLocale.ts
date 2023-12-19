"use client";
import { usePathname } from "next/navigation";
import { getLanguageCodeFromPathname } from "../lib/getLanguageCodeFromPathname";
import { defaultLocale, locales } from "@/config/i18n";

export function useLocale() {
  const pathname = usePathname();

  return {
    locale: getLanguageCodeFromPathname(pathname, locales, defaultLocale),
    defaultLocale,
    availableLocales: locales,
  };
}
