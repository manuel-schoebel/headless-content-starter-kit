import { cache as reactCache } from "react";
import { GetPagesDocument } from "@/graphql/generated/graphql";
import { getClient } from "../graphqlRequestClient";

export const getPages = reactCache(
  async ({
    limit = 3,
    locale,
    start,
    hierarchyIds,
  }: {
    limit: number;
    locale: string;
    start: number;
    hierarchyIds: string[];
  }) => {
    const client = getClient();

    const response = await client.request(GetPagesDocument, {
      limit,
      locale,
      start,
      hierarchyIds,
    });

    return response.pages?.data;
  }
);
