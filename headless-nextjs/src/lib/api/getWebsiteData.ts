import { cache as reactCache } from "react";
import { GetWebsiteDataDocument } from "@/graphql/generated/graphql";
import { getClient } from "../graphqlRequestClient";

export const getWebsiteData = async (locale: string) => {
  // todo: add mainMenu caching tag
  const client = getClient();

  const response = await client.request(GetWebsiteDataDocument, {
    locale,
  });

  if (!response?.menus?.data || response?.menus?.data.length === 0) {
    return;
  }

  const mainNavigation = response?.menus?.data.find(
    (m) => m.attributes?.name === "main"
  );
  const global = response?.global?.data;
  return { mainNavigation, global };
};
