import React from "react";
import Image from "next/image";
import {
  Enum_Componentelementsheadline_Align,
  Enum_Componentelementsheadline_Variant,
  ImageTextFragment,
} from "@/graphql/generated/graphql";
import { Headline } from "@/components/elements/Headline";
import { RichText } from "@/components/elements/RichText";
import { getImageUrl } from "@/lib/strapi";

export function ImageText({
  imageColumns,
  mediaPosition,
  textAlign,
  textColumns,
  fixedHeight,
  headline,
  html,
  image,
  imagePriority,
  screenHeight,
}: ImageTextFragment): JSX.Element {
  const gridCols = textColumns + imageColumns;
  const headlineVariant =
    headline?.variant || Enum_Componentelementsheadline_Variant.H2;
  const headlineText = headline?.text || "";
  return (
    <>
      <Headline
        className="text-center mb-8 lg:hidden"
        variant={headlineVariant || "h2"}
      >
        {headlineText}
      </Headline>

      <div
        className={`lg:grid grid-cols-1 lg:auto-rows-fr lg:items-center
      ${gridCols === 2 ? "lg:grid-cols-2" : ""}
      ${gridCols === 3 ? "lg:grid-cols-3" : ""}
      ${gridCols === 4 ? "lg:grid-cols-4" : ""}
      ${gridCols === 5 ? "lg:grid-cols-5" : ""}
      ${gridCols === 6 ? "lg:grid-cols-6" : ""}
      `}
      >
        {/* Mobile Headline */}

        {/* Text left */}
        <div
          className={`
          ${mediaPosition === "left" ? `hidden` : "hidden lg:flex"}
          ${textColumns === 1 && `md:col-span-1`}
          ${textColumns === 2 && `md:col-span-2`}        
          ${screenHeight && `min-h-screen`}`.trim()}
          style={{
            height: `${fixedHeight ? fixedHeight + "px" : "auto"}`.trim(),
          }}
        >
          <ContentBlock
            headline={headlineText}
            headlineVariant={headlineVariant}
            headlineAlignment={headline?.align}
            textAlign={textAlign}
            html={html || ""}
            textColor={``}
          />
        </div>

        {/* Image */}
        <div
          className={`my-4
          ${imageColumns === 2 ? "lg:col-span-2" : ""}
          ${imageColumns === 3 ? "lg:col-span-3" : ""}
          ${imageColumns === 4 ? "lg:col-span-4" : ""}
          ${imageColumns === 5 ? "lg:col-span-5" : ""}
          ${imageColumns === 6 ? "lg:col-span-6" : ""}
        `.trim()}
        >
          {image?.data && (
            <Image
              src={getImageUrl(image.data?.attributes?.url || "")}
              className="w-full object-cover rounded-lg shadow-md dark:shadow-stone-600"
              alt=""
              width={image.data?.attributes?.width as number}
              height={image.data?.attributes?.height as number}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={Boolean(imagePriority)}
            />
          )}
        </div>

        {/* Text right */}
        <div
          className={`
            ${mediaPosition === "right" ? `lg:hidden` : "flex"}
            ${textColumns === 1 && `md:col-span-1`}
            ${textColumns === 2 && `md:col-span-2`}
           ${screenHeight && `min-h-screen`}`.trim()}
          style={{ height: `${fixedHeight ? fixedHeight + "px" : "auto"}` }}
        >
          <ContentBlock
            headline={headline?.text || ""}
            headlineVariant={
              headline?.variant || Enum_Componentelementsheadline_Variant.H2
            }
            headlineAlignment={headline?.align}
            textAlign={textAlign}
            html={html || ""}
            textColor={``}
          />
        </div>
      </div>
    </>
  );
}

function ContentBlock({
  textAlign,
  headlineAlignment,
  headlineVariant,
  html,
  headline,
  children,
}: {
  textAlign: "left" | "right";
  textColor?: string;
  html?: string;
  headline?: string;
  headlineVariant?: Enum_Componentelementsheadline_Variant;
  children?: React.ReactNode;
  headlineAlignment?: Enum_Componentelementsheadline_Align;
}) {
  return (
    <div
      className={`max-w-prose mx-auto  lg:mx-12 my-auto ${
        textAlign === "right" ? `md:text-right` : ""
      }`}
    >
      {headline && (
        <div
          className={`hidden lg:block mb-8 ${
            headlineAlignment === Enum_Componentelementsheadline_Align.Center
              ? `md:text-center`
              : ""
          }
        ${
          headlineAlignment === Enum_Componentelementsheadline_Align.Right
            ? `md:text-right`
            : ""
        }
        `}
        >
          <Headline variant={headlineVariant || "h2"}>{headline}</Headline>
        </div>
      )}
      <RichText html={html} />
      {children && <div className="mt-8">{children}</div>}
    </div>
  );
}
