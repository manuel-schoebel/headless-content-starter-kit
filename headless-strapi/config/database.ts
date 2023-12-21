import environmentConfigs from "./environments";

export default ({ env }) => {
  const environmentConfig = environmentConfigs[env("STRAPI_ENV", "local")](env);
  return environmentConfig.database;
};
