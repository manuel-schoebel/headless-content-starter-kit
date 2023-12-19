export function getPagePathFromSlug(slug?: string[]) {
  if (!slug) {
    return "/";
  }

  return `/${slug.join("/")}`;
}
