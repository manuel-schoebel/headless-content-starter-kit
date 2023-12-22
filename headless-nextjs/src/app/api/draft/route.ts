// route handler enabling draft mode
import { getPageByPath } from "@/lib/api/getPageByPath";
import { defaultLocale } from "@/config/i18n";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const path = searchParams.get("path");
  const locale = searchParams.get("locale");
  const disable = searchParams.get("disable");

  // Check the secret and next parameters
  // This secret should only be known to this route handler and the CMS
  if (secret !== process.env.FRONTEND_API_TOKEN) {
    return new Response("Invalid token", { status: 401 });
  }

  if (disable) {
    draftMode().disable();
    // response with disabled success message
    return new Response("disabled", { status: 200 });
  }
  if (!path) {
    return new Response("Invalid path", { status: 401 });
  }
  const page = await getPageByPath(path, locale || defaultLocale, true);
  if (!page?.attributes?.path) {
    return new Response("invalid path", { status: 401 });
  }

  draftMode().enable();

  redirect(page.attributes?.path);
}
