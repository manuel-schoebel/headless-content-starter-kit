import path from "path";

export default (env) => {
  const filename = path.join(
    __dirname,
    "..",
    "..",
    "..",
    env("DATABASE_FILENAME", ".tmp/data.db")
  );
  return {
    enablePreviewUrl: "http://localhost:3000/api/draft",
    revalidationUrl: "http://localhost:3000/api/revalidate",
    database: {
      connection: {
        client: "sqlite",
        connection: {
          filename,
        },
        useNullAsDefault: true,
        acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
      },
    },
  };
};
