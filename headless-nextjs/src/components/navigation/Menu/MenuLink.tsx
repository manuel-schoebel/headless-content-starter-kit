import React, { ReactNode } from "react";

export interface IMenuLink {
  children: ReactNode;
  active: boolean;
}

function MenuLink({ children }: IMenuLink) {
  return (
    <div className={`flex items-center px-2 py-1 rounded-md`}>{children}</div>
  );
}

export { MenuLink };
