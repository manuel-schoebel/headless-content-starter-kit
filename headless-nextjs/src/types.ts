import React from "react";
import { ILocales } from "./config/i18n";

export interface IPageProps {
  params: {
    slug: string[];
    locale: ILocales;
  };
}

export interface ILayoutProps extends IPageProps {
  children: React.ReactNode;
}
