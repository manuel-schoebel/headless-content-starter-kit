import React, { ReactNode } from "react";

export type IParagraph = {
  children?: ReactNode;
  className?: string;
  size?: "small" | "regular" | "large" | "very large";
};

export function Paragraph({
  children,
  className,
  size = "regular",
}: IParagraph): JSX.Element {
  return (
    <p
      className={`font-source dark:text-light ${className}
      ${size === "small" ? "text-sm" : ""}
      ${size === "regular" ? "text-base" : ""}
      ${size === "large" ? "text-lg" : ""}
      ${size === "very large" ? "text-xl" : ""}
  `.trim()}
    >
      {children}
    </p>
  );
}
