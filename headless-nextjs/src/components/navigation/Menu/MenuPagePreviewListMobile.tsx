import { PagePreviewListFragment } from "@/graphql/generated/graphql";
import React from "react";
import Image from "next/image";
import { getImageUrl } from "@/lib/strapi";
import Link from "next/link";

function MenuPagePreviewListMobile({ pages }: PagePreviewListFragment) {
  if (!pages || pages.data.length === 0) return <></>;

  return (
    <>
      {pages.data.map((page) => (
        <Link
          href={page.attributes?.path || "#"}
          className="flex relative bg-gray-100 dark:bg-stone-700 rounded-md"
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
              width={240}
              height={240}
              className={"object-cover w-[120px] h-[120px] rounded-md"}
            />
          )}
          <div className="px-4 py-2">
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

export { MenuPagePreviewListMobile };
