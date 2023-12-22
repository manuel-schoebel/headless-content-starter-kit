import { GetPagesDocument } from "@/graphql/generated/graphql";
import { getClient } from "@/lib/graphqlRequestClient";

export async function getPages({
  limit = 3,
  locale,
  start,
  hierarchyIds,
}: {
  limit: number;
  locale: string;
  start: number;
  hierarchyIds: string[];
}) {
  const client = getClient({});

  const response = await client.request(GetPagesDocument, {
    limit,
    locale,
    start,
    hierarchyIds,
  });

  return response.pages?.data;
}
