import axios from "axios";

const FRONTEND_API_TOKEN = "12345";
const FRONTEND_API_URL = "http://localhost:3010";
const PATH = "/in-draft";
const LOCALE = "en";

export default (strapi) =>
  ({ nexus }) => ({
    types: [
      nexus.objectType({
        name: "EnablePreviewResponse",
        definition(t) {
          t.boolean("success");
        },
      }),
      nexus.extendType({
        type: "Mutation",
        definition(t) {
          t.string("enablePreview", {
            type: "EnablePreviewResponse",
            args: {
              locale: "I18NLocaleCode",
              path: "String",
            },
            async resolve(_root, args, ctx) {
              const { locale, path } = args;
              console.log("ctx", ctx);
              console.log("enablePreview", args);

              const result = await axios.get(
                `${FRONTEND_API_URL}/api/draft?secret=${FRONTEND_API_TOKEN}&path=${PATH}&locale=${LOCALE}`
              );

              console.log(result);

              return true;
            },
          });
        },
      }),
    ],
    resolversConfig: {
      "Mutation.enablePreview": {
        policies: [
          "admin::isAuthenticatedAdmin",
          (context, { strapi }) => {
            console.log("hello", context.context.state.auth);
            /**
             * If 'categories' have a parent, the function returns true,
             * so the request won't be blocked by the policy.
             */
            return context.parent !== undefined;
          },
        ],
        auth: false,
      },
    },
  });
