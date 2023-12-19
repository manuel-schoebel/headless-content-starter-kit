import React from "react";

interface IRichText {
  html?: string | null;
  richTextAlign?: "left" | "center" | "right" | null;
  size?: "small" | "regular" | "large";
}

function RichText({ html, richTextAlign, size }: IRichText): JSX.Element {
  return (
    <div
      className={`componentText prose text-lg dark:prose-invert dark:text-white font-source
        ${richTextAlign === "center" && "text-center mx-auto"}
        ${richTextAlign === "right" && "text-right"}
      `}
      dangerouslySetInnerHTML={{ __html: html || "" }}
    />
  );
}

export { RichText };
