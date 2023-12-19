import { join } from "path";
import environmentConfigs from "./environments";

const plugins = ({ env }) => {
  console.log("environment", env("STRAPI_ENV"));
  const environmentConfig = environmentConfigs[env("STRAPI_ENV", "local")](env);
  return {
    content: {
      enabled: true,
      resolve: "./src/plugins/content",
      config: {
        enablePreviewUrl: environmentConfig.enablePreviewUrl,
        revalidationUrl: environmentConfig.revalidationUrl,
        frontendRevalidationApiToken:
          process.env.FRONTEND_REVALIDATION_API_TOKEN,
      },
    },
    paypal: {
      enabled: true,
      resolve: "./src/plugins/paypal",
      config: {
        baseUrl: environmentConfig.paypal.baseUrl,
        clientId: environmentConfig.paypal.clientId,
        secret: environmentConfig.paypal.secret,
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
