import { ClientQuoteFragment } from "@/graphql/generated/graphql";
import { getImageUrl } from "@/lib/strapi";
import Image from "next/image";
import React from "react";
import { Paragraph } from "../elements/Paragraph";

function ClientQuote({
  avatar,
  companyName,
  name,
  position,
  text,
}: ClientQuoteFragment) {
  return (
    <section className="py-8 overflow-hidden">
      <div className="relative">
        <blockquote className="mt-10">
          <div className="max-w-3xl mx-auto text-center text-xl">
            <Paragraph size="large">{`"${text}"`}</Paragraph>
          </div>
          <footer className="mt-8">
            <div className="md:flex md:items-center md:justify-center">
              {avatar?.data?.attributes?.url && (
                <div className="md:flex-shrink-0">
                  <Image
                    className="mx-auto h-12 w-12 rounded-full object-cover"
                    src={getImageUrl(avatar?.data?.attributes?.url)}
                    alt={avatar?.data?.attributes?.alternativeText || ""}
                    width={160}
                    height={160}
                  />
                </div>
              )}
              <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                <Paragraph className="text-lg">{name}</Paragraph>

                <svg
                  className="hidden md:block mx-1 h-5 w-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 0h3L9 20H6l5-20z" />
                </svg>

                <div className="text-base font-medium text-gray-500 dark:text-gray-300">
                  {`${position} ${companyName ? `, ${companyName}` : ""}`}
                </div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

export { ClientQuote };
