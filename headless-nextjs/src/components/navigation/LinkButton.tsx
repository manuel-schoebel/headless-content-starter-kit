import React from "react";
import Link from "next/link";
import { Button } from "@/components/actions/Button";

export interface ILinkButton {
  disabled?: boolean;
  className?: string;
  buttonClassName?: string;
  fullWidth?: boolean;
  children?: React.ReactNode;
  href?: string;
  linkTarget?: string | null;
  style?: "primary" | "secondary";
  testId?: string;
  variant?: "filled" | "outlined" | "text";
}

export function LinkButton({
  children,
  disabled = false,
  className = "",
  fullWidth = false,
  href = "#",
  linkTarget = "_self",
  style = "primary",
  buttonClassName = "",
  testId = "linkButton",
  variant = "filled",
}: ILinkButton) {
  return (
    <Link
      href={href}
      target={linkTarget || "#"}
      className={`${className && className}`}
    >
      <Button
        variant={variant}
        style={style}
        disabled={disabled}
        fullWidth={fullWidth}
        className={buttonClassName}
        testId={testId}
      >
        {children}
      </Button>
    </Link>
  );
}
