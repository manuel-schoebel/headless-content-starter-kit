import React, { ReactNode } from "react";

interface IHeadline {
  variant: "h1" | "h2" | "h3" | "h4" | "h5";
  className?: string;
  children?: ReactNode;
}

export function Headline({
  variant = "h2",
  className = "",
  children,
}: IHeadline): JSX.Element {
  switch (variant) {
    case "h1":
      return (
        <h1
          className={`text-black font-argentum font-black dark:text-light text-4xl sm:text-5xl ${className}`}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`text-black font-argentum font-semibold dark:text-light text-2xl md:text-4xl ${className}`}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={`text-black dark:text-light text-xl ${className}`}>
          {children}
        </h3>
      );
    case "h4":
      return <h4 className={`${className}`}>{children}</h4>;
    case "h5":
      return <h5 className={`${className}`}>{children}</h5>;
  }
}
