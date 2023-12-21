import { ILocales } from "@/config/i18n";
import {
  PagePreviewFragment,
  PagePreviewListFragment,
} from "@/graphql/generated/graphql";
import { getImageUrl } from "@/lib/strapi";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Headline } from "../elements/Headline";
import { getPages } from "@/lib/api/getPages";

export interface IPagePreviewList extends PagePreviewListFragment {
  locale: ILocales;
}

async function PagePreviewList({
  pages,
  hierarchy,
  limit,
  locale,
}: IPagePreviewList) {
  let pagePreviews: (PagePreviewFragment & { id: string })[] = [];

  if (pages?.data && pages.data.length > 0) {
    pagePreviews = [
      ...pages.data.map((p) => ({
        ...(p.attributes as PagePreviewFragment),
        id: p.id || "",
      })),
    ];
  }

  if (hierarchy) {
    const hierarchyIds =
      ((hierarchy?.data?.id && [
        hierarchy?.data?.id,
        ...(hierarchy?.data?.childIds || []),
      ]) as string[]) || [];
    const pagesFromHierarchy = await getPages({
      hierarchyIds,
      limit: limit ?? 3,
      locale,
      start: 0,
    });

    if (pagesFromHierarchy && pagesFromHierarchy?.length > 0) {
      pagePreviews = [
        ...pagePreviews,
        ...pagesFromHierarchy.map((p) => ({
          ...(p.attributes as PagePreviewFragment),
          id: p.id || "",
        })),
      ];
    }
  }

  if (pagePreviews.length === 0) return <></>;

  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
      {pagePreviews.map((page) => (
        <Link key={page?.id} href={page.path}>
          {page?.previewImage?.data?.attributes?.url && (
            <Image
              alt={page?.previewImage?.data?.attributes?.alternativeText || ""}
              src={getImageUrl(page?.previewImage?.data?.attributes?.url) || ""}
              width={800}
              height={800 * (9 / 16)}
              className={"object-contain w-full rounded-md"}
            />
          )}
          <Headline variant="h3" className="my-3">
            {page.title}
          </Headline>
          <p className="text-gray-600">{page?.synopsis}</p>
        </Link>
      ))}
    </div>
  );
}

export { PagePreviewList };
