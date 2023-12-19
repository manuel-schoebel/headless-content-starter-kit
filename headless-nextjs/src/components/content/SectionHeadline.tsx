import {
  Enum_Componentelementsheadline_Align,
  SectionHeadlineFragment,
} from "@/graphql/generated/graphql";
import React from "react";
import { Headline } from "../elements/Headline";

function SectionHeadline({
  headline,
  useInTableOfContents,
  __typename,
}: SectionHeadlineFragment) {
  if (!headline) return <></>;
  const { text, align, variant } = headline;

  return (
    <div
      data-component-name={__typename}
      data-toc-active={useInTableOfContents || "false"}
    >
      <Headline
        className={`
        ${
          align === Enum_Componentelementsheadline_Align.Center
            ? "text-center"
            : ""
        }
        ${
          align === Enum_Componentelementsheadline_Align.Right
            ? "text-right"
            : ""
        }
        `}
        variant={variant || "h2"}
      >
        {text}
      </Headline>
    </div>
  );
}

export { SectionHeadline };
