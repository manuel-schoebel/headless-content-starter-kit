import React, { FC } from "react";

export interface IContainer {
  className?: string;
  children?: any;
  el?: HTMLElement;
  clean?: boolean;
}

const Container: FC<IContainer> = ({
  children,
  className = "",
  el = "div",
}) => {
  let Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> =
    el as any;

  return (
    <Component
      className={`mx-auto px-4 md:px-10 w-full max-w-screen-2xl ${className}`}
    >
      {children}
    </Component>
  );
};

export { Container };
