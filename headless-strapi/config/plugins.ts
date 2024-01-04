import { join } from "path";
import environmentConfigs from "./environments";

const plugins = ({ env }) => {
  const environmentConfig = environmentConfigs[env("STRAPI_ENV", "local")](env);
  return {
    content: {
      enabled: true,
      resolve: "./src/plugins/content",
      config: {
        enablePreviewUrl: environmentConfig.enablePreviewUrl,
        revalidationUrl: environmentConfig.revalidationUrl,
        frontendRevalidationApiToken: process.env.FRONTEND_API_TOKEN,
      },
    },
    graphql: {
      enabled: true,
      config: {
        generateArtifacts: true,
        artifacts: {
          schema: join(__dirname, "..", "..", "types/schema.graphql"),
          typegen: join(__dirname, "..", "..", "types/graphql.d.ts"),
        },
        apolloServer: {
          introspection: true,
        },
        defaultLimit: 100,
      },
    },
  };
};

export default plugins;
