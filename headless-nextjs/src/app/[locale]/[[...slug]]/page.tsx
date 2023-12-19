import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComponentRenderer } from "@/components/ComponentRenderer";
import { componentMap } from "@/config/componentMap";
import { ILocales } from "@/config/i18n";
import { getWebsiteData } from "@/lib/strapi";
import { getPagePathFromSlug } from "@/lib/utils";
import { Enum_Page_Metarobots } from "@/graphql/generated/graphql";
import { getPageByPath } from "@/lib/api/getPageByPath";
import { draftMode } from "next/headers";

export async function generateMetadata({
  params,
}: {
  params: { slug: string[]; locale: string };
}): Promise<Metadata> {
  const { locale, slug } = params;
  const pageData = await getPageByPath(getPagePathFromSlug(slug), locale);
  const websiteData = await getWebsiteData(locale);

  if (!pageData?.attributes) return {};

  const { metaDescription, metaKeywords, metaRobots, metaTitle, previewImage } =
    pageData?.attributes;

  let metaData: Metadata = {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    robots:
      metaRobots === Enum_Page_Metarobots.DoNotShowInSearchEngines
        ? "noindex, nofollow"
        : "index, follow",
    openGraph: {
      type: "website",
      images: [],
    },
    twitter: {
      card: "summary_large_image",
      images: {
        url: previewImage?.data?.attributes?.url || "",
        alt: previewImage?.data?.attributes?.alternativeText || "",
        height: previewImage?.data?.attributes?.height || 1,
        width: previewImage?.data?.attributes?.width || 1,
      },
      site: websiteData?.global?.attributes?.twitterHandle || "",
    },
  };

  if (previewImage && metaData?.openGraph?.images) {
    (metaData?.openGraph?.images as any)?.push({
      url: previewImage.data?.attributes?.url,
      alt: previewImage.data?.attributes?.alternativeText,
      height: previewImage.data?.attributes?.height,
      width: previewImage.data?.attributes?.width,
    });
  }

  return metaData;
}

export default async function Page({
  params,
}: {
  params: { locale: ILocales; slug?: string[] };
}) {
  const { locale, slug } = params;
  const pageData = await getPageByPath(getPagePathFromSlug(slug), locale);

  if (!pageData) {
    notFound();
  }

  const components = pageData.attributes?.components;

  return (
    <>
      {!components && <div>Nothing found</div>}
      {components && (
        <ComponentRenderer
          locale={locale}
          componentMap={componentMap}
          components={components}
        />
      )}
    </>
  );
}
