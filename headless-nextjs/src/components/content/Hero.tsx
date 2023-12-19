import React, { Fragment } from "react";
import Image from "next/image";
import {
  ComponentElementsResponsiveImage,
  Enum_Componentcontenthero_Titlecolor,
  HeroComponentFragment,
} from "@/graphql/generated/graphql";
import { getResponsiveImageClasses } from "@/lib/getResponsiveImageClasses";
import { Container } from "@/components/layout/Container";
import { Paragraph } from "@/components/elements/Paragraph";
import { getImageUrl } from "@/lib/strapi";

export function Hero({
  title,
  titleColor,
  responsiveImage,
  subTitle,
}: HeroComponentFragment): JSX.Element {
  const responsiveImageClasses = getResponsiveImageClasses(
    (responsiveImage?.filter(Boolean) as ComponentElementsResponsiveImage[]) ||
      []
  );

  const hasHeroImage = responsiveImage && responsiveImage.length > 0;

  return (
    <div className={`relative`}>
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        {responsiveImage?.map((image) => (
          <Fragment key={image?.id}>
            {image?.image?.data?.attributes?.url && (
              <Image
                src={getImageUrl(image?.image.data?.attributes?.url || "")}
                alt={image?.image.data?.attributes?.alternativeText || ""}
                fill
                sizes="100vw"
                className={`${
                  responsiveImageClasses[image?.screenSize || ""]
                } w-full h-full object-center object-cover`}
                priority={true}
                loading="eager"
              />
            )}
          </Fragment>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 opacity-0"
      />
      <Container className="relative">
        <div
          className={`pt-12 pb-12 justify-end flex flex-col 
          ${hasHeroImage ? "px-14 min-h-[800px]" : ""}
          `}
        >
          <h1
            className={`text-4xl font-argentum font-black sm:text-5xl sm:leading-[1.2] lg:text-8xl tracking-wider lg:leading-[1.1]
            ${!hasHeroImage ? "mx-auto text-center" : ""}
            ${
              hasHeroImage &&
              titleColor === Enum_Componentcontenthero_Titlecolor.Black
                ? "text-black"
                : ""
            }
            ${
              hasHeroImage &&
              titleColor === Enum_Componentcontenthero_Titlecolor.White
                ? "text-white"
                : ""
            }
            ${
              hasHeroImage &&
              titleColor === Enum_Componentcontenthero_Titlecolor.Fuchsia
                ? "text-fuchsia-500"
                : ""
            }`}
            dangerouslySetInnerHTML={{
              __html: title || "",
            }}
          />
          {subTitle && (
            <Paragraph
              className={`mt-12 sm:text-2xl font-bold max-w-prose 
              ${
                titleColor === Enum_Componentcontenthero_Titlecolor.Black &&
                "text-black"
              }
              ${
                titleColor === Enum_Componentcontenthero_Titlecolor.White &&
                "text-white"
              }
              ${
                titleColor === Enum_Componentcontenthero_Titlecolor.Fuchsia &&
                "text-fuchsia-500"
              }
              `}
            >
              {subTitle}
            </Paragraph>
          )}
        </div>
      </Container>
    </div>
  );
}
