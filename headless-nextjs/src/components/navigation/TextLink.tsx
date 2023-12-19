import Link from "next/link";
import React from "react";

export interface ITextLink {
  href: string;
  target?: "_blank" | "_self" | null;
  label: string;
  className?: string;
}

function TextLink({ label, href, target, className }: ITextLink) {
  return (
    <Link className={className ? className : ""} href={href}>
      {label}
    </Link>
  );
}

export { TextLink };
