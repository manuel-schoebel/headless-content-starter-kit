import { GraphQLClient } from "graphql-request";
import { config } from "@/config";

const getClient = ({
  next,
  cache = "force-cache",
}: {
  next?: NextFetchRequestConfig;
  cache?: RequestCache;
}) => {
  return new GraphQLClient(config.strapi?.graphqlUrl || "", {
    fetch, // Need to pass fetch here because of Next.js cache
    next, // Allows us to control the cache on a per-request basis
    cache,
  });
};

const client = new GraphQLClient(config.strapi?.graphqlUrl || "", {
  fetch,
});
export { client, getClient };
