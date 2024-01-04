import {
  Enum_Componentcontentimagegrid_Gap,
  ImageGridFragment,
} from "@/graphql/generated/graphql";
import { getImageUrl } from "@/lib/strapi";
import Image from "next/image";
import React from "react";

function ImageGrid({ gap, images }: ImageGridFragment) {
  const imageCount = images?.data?.length || 0;
  return (
    <div
      className={`grid grid-cols-1
    ${imageCount === 2 ? "md:grid-cols-2" : ""}
    ${imageCount > 2 ? "md:grid-cols-2 lg:grid-cols-3" : ""}
    ${gap === Enum_Componentcontentimagegrid_Gap.Small ? "gap-4" : ""}
    ${gap === Enum_Componentcontentimagegrid_Gap.Medium ? "gap-8" : ""}
    ${gap === Enum_Componentcontentimagegrid_Gap.Large ? "gap-12" : ""}
  `.trim()}
    >
      {images?.data?.map((image) => (
        <figure key={image.id}>
          <Image
            key={image.id}
            alt={image?.attributes?.alternativeText || ""}
            src={getImageUrl(image?.attributes?.url || "")}
            width={800}
            height={800}
            className="w-full"
          />
          {image.attributes?.caption && (
            <figcaption className="mt-2 text-right text-gray-500 dark:text-gray-300 text-sm">
              {image.attributes?.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

export { ImageGrid };
