import { ConnectionString } from "connection-string";

export default (env) => {
  const dbUrl = env("DATABASE_URL", "");
  const connectionString = new ConnectionString(dbUrl);
  const { hostname, port, user, password, path } = connectionString;
  const connection: any = { host: hostname, user, password, database: path[0] };
  if (port) connection.port = port;
  connection.ssl = env.bool("STRAPI_DB_SSL", false);

  return {
    enablePreviewUrl: "htts://www.manuel-schoebel.com/api/draft",
    revalidationUrl: "https://www.manuel-schoebel.com/api/revalidate",
    database: {
      connection: {
        client: "mysql",
        connection: connection,
      },
    },
  };
};
