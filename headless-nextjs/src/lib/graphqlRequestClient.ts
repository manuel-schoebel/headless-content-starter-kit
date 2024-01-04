import { GraphQLClient } from "graphql-request";
import { config } from "@/config";

const getClient = () => {
  return new GraphQLClient(config.strapi?.graphqlUrl || "", {
    headers: {
      Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  });
};

export { getClient };
