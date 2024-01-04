"use client";
import React, { useEffect, useState } from "react";
import { Headings } from "./Headings";
import { TableOfContentsFragment } from "@/graphql/generated/graphql";
import { Headline } from "@/components/elements/Headline";

export type IHeading = {
  id: string;
  title: string;
  items: IHeading[];
  offsetTop: number;
};

const getNestedHeadings = (headingElements: any): IHeading[] => {
  const nestedHeadings: any = [];

  headingElements.forEach((heading: any, index: number) => {
    const { innerText: title, id } = heading;

    if (heading.nodeName === "H2") {
      nestedHeadings.push({
        id,
        title,
        items: [],
        offsetTop: heading.getBoundingClientRect().top + window.scrollY,
      });
    } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1]?.items.push({
        id,
        title,
        offsetTop: heading.getBoundingClientRect().top + window.scrollY,
      });
    }
  });

  return nestedHeadings;
};

export function TableOfContents({
  name,
}: TableOfContentsFragment): JSX.Element {
  // structure existing headlines
  const [nestedHeadings, setNestedHeadings] = useState<IHeading[]>([]);

  useEffect(() => {
    const headingHtmlNodes = document.querySelectorAll(
      '[data-component-name="ComponentContentSectionHeadline"][data-toc-active="true"] h2, [data-component-name="ComponentContentSectionHeadline"][data-toc-active="true"] h3'
    );
    const headingElements = Array.from(headingHtmlNodes);
    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return (
    <div id="table-of-content">
      <nav aria-label="Table of contents">
        {name && (
          <Headline variant="h3" className="mb-4">
            {name}
          </Headline>
        )}
        {nestedHeadings && nestedHeadings.length > 0 && (
          <Headings headings={nestedHeadings} />
        )}
      </nav>
    </div>
  );
}
