import { PagePreviewListFragment } from "@/graphql/generated/graphql";
import React from "react";
import Image from "next/image";
import { getImageUrl } from "@/lib/strapi";
import Link from "next/link";

export interface IMenuPagePreviewList {}

function MenuPagePreviewList({ pages }: PagePreviewListFragment) {
  if (!pages || pages.data.length === 0) return <></>;

  return (
    <>
      {pages.data.map((page) => (
        <Link
          href={page.attributes?.path || "#"}
          className="relative -mx-4"
          key={page.attributes?.path}
        >
          {page?.attributes?.previewImage?.data?.attributes?.url && (
            <Image
              alt={
                page?.attributes?.previewImage?.data?.attributes
                  ?.alternativeText || ""
              }
              src={
                getImageUrl(
                  page?.attributes?.previewImage?.data?.attributes?.url
                ) || ""
              }
              width={500}
              height={200}
              className={"object-cover h-[200px]"}
            />
          )}
          <div className="px-4">
            <p className="font-semibold relative">{page.attributes?.title}</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {page.attributes?.synopsis}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
}

export { MenuPagePreviewList };
