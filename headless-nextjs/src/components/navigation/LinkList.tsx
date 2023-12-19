import React from "react";
import { ITextLink } from "./TextLink";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/strapi";
import { Paragraph } from "../elements/Paragraph";
import { Headline } from "../elements/Headline";

export interface ILinkList {
  linkListHeadline?: string | null;
  links: (ITextLink & {
    description?: string | null;
    image: {
      url: string;
      alt: string;
    };
  })[];
  orientation?: "horizontal" | "vertical" | null;
  linkListAlign?: "left" | "center" | "right" | null;
}

function LinkList({
  linkListHeadline,
  links,
  orientation = "vertical",
  linkListAlign = "left",
}: ILinkList) {
  return (
    <div>
      {linkListHeadline && (
        <div className="mb-2">
          <span className="text-sm text-gray-500 prose">
            {linkListHeadline}
          </span>
        </div>
      )}
      <ul
        className={`flex gap-2 ${orientation === "vertical" ? "flex-col" : ""}
        ${linkListAlign === "center" ? "justify-center" : ""}
        `}
      >
        {links.map((link) => (
          <li
            key={link.href}
            className="rounded-md hover:bg-stone-200 dark:hover:bg-stone-700"
          >
            <Link
              className="flex gap-4 p-2 "
              href={link.href}
              target={link.target || "_self"}
            >
              {link.image.url && (
                <Image
                  alt={link.image.alt}
                  src={getImageUrl(link.image.url)}
                  width={60}
                  height={60}
                  className={"object-contain w-[30px]"}
                />
              )}
              {(link.label || link.description) && (
                <div>
                  <Headline variant="h4">{link.label}</Headline>
                  <Paragraph size="small" className="">
                    {link.description}
                  </Paragraph>
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { LinkList };
