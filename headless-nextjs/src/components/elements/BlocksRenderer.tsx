import React from "react";
import {
  BlocksRenderer as StrapiBlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import { Headline } from "@/components/elements/Headline";
import { Paragraph } from "@/components/elements/Paragraph";
import Image from "next/image";
import { getImageUrl } from "@/lib/strapi";
import Link from "next/link";
import { TextLink } from "../navigation/TextLink";

export interface IBlocksRenderer {
  content: BlocksContent;
}

function BlocksRenderer({ content }: IBlocksRenderer) {
  return (
    <StrapiBlocksRenderer
      content={content}
      blocks={{
        heading: ({ children, level }) => {
          return (
            <Headline className="mb-2 mt-6" variant={`h${level}`}>
              {children}
            </Headline>
          );
        },
        paragraph: ({ children }) => {
          return <Paragraph>{children}</Paragraph>;
        },
        image: ({ children, image }) => {
          return (
            <Image
              alt={image.alternativeText || ""}
              src={getImageUrl(image.url) || ""}
              width={image.width || 0}
              height={image.height || 0}
            />
          );
        },
        link: ({ children, url, plainText }) => {
          const modifiedUrl = url.match("mailto:")
            ? url.replace("http://", "")
            : url;
          return (
            <TextLink href={modifiedUrl} label={plainText || ""}>
              {children}
            </TextLink>
          );
        },
        list: (props) => {
          if (props.format === "ordered") {
            return (
              <ol className="list-decimal list-inside">{props.children}</ol>
            );
          }

          return <ul className="list-disc list-inside">{props.children}</ul>;
        },
        "list-item": (props) => (
          <li className="font-source dark:text-light">{props.children}</li>
        ),
      }}
    />
  );
}

export { BlocksRenderer };
