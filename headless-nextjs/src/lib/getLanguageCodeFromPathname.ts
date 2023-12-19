export function getLanguageCodeFromPathname(
  pathname: string,
  locales: string[],
  defaultLocale: string
): string {
  const parts = pathname.split("/").filter((part) => part !== ""); // Remove empty parts

  if (parts.length > 0 && locales.includes(parts[0])) {
    // Check if the first part is a valid language code
    return parts[0];
  }

  return defaultLocale; // Return the default language
}
