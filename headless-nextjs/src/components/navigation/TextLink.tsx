import Link from "next/link";
import React from "react";

export interface ITextLink {
  href: string;
  target?: "_blank" | "_self" | null;
  label: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children?: React.ReactNode;
}

function TextLink({
  label,
  href,
  target,
  className,
  onClick,
  children,
}: ITextLink) {
  return (
    <Link
      className={className ? className : "underline dark:text-white"}
      href={href}
      onClick={onClick}
    >
      {label ? label : children}
    </Link>
  );
}

export { TextLink };
