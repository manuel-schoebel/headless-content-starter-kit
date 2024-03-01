import { GetPageDocument, PublicationState } from "@/graphql/generated/graphql";
import { getClient } from "@/lib/graphqlRequestClient";
import { draftMode } from "next/headers";
import { cache as reactCache } from "react";

export const getPageByPath = async (
  path: string,
  locale: string,
  isDraft?: boolean
) => {
  const { isEnabled } = draftMode();

  const client = getClient();

  const filters = {
    path: {
      eq: path,
    },
  };

  const response = await client.request(GetPageDocument, {
    locale,
    filters,
    limit: 1,
    offset: 0,
    publicationState:
      isDraft || isEnabled ? PublicationState.Preview : PublicationState.Live,
  });

  if (!response?.pages?.data || response?.pages?.data.length === 0) {
    return;
  }

  const [page] = response?.pages?.data;
  return page;
};
