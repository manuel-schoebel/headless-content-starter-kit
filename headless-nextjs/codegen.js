const generate = require("@graphql-codegen/cli").generate;

async function doSomething() {
  await generate(
    {
      schema: "http://127.0.0.1:1337" + "/graphql",
      documents: ["./src/graphql/**/*.graphql"],
      generates: {
        [process.cwd() + "/src/graphql/generated/graphql.tsx"]: {
          plugins: [
            "typescript",
            "typescript-operations",
            "typed-document-node",
          ],
          config: {
            omitOperationSuffix: true,
            preResolveTypes: true,
            dedupeFragments: true,
          },
        },
      },
    },
    true
  );
}
doSomething();
