// route handler enabling draft mode
import { getPageByPath } from "@/lib/api/getPageByPath";
import { defaultLocale } from "@/config/i18n";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { secret, path, locale } = await request.json();

  console.log("revalidate", {
    secret,
    path,
    locale,
    token: process.env.FRONTEND_API_TOKEN,
  });

  // Check the secret and next parameters
  // This secret should only be known to this route handler and the CMS
  if (secret !== process.env.FRONTEND_API_TOKEN) {
    return new Response("Invalid token", { status: 401 });
  }

  if (!path) {
    return new Response("Invalid path", { status: 401 });
  }

  const page = await getPageByPath(path, locale || defaultLocale);

  if (!page?.attributes?.path) {
    return new Response("invalid path", { status: 401 });
  }

  console.log("revalidatePath", path);

  const revalidationPath = `/${locale}${path}`;
  console.log("revalidationPath", revalidationPath);
  console.log("path", path);
  try {
    // revalidatePath(revalidationPath);
    revalidatePath(path);
  } catch (e) {
    console.log("error revalidating", e);
    throw e;
  }
  return NextResponse.json({ revalidate: true });
}
