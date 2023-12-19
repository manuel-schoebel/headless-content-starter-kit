import shodown from "showdown";
import * as prism from "prismjs";

const converter = new shodown.Converter();

export default (strapi) =>
  ({ nexus }) => ({
    types: [
      nexus.extendType({
        type: "ComponentContentHero",
        definition(t) {
          t.string("titleHtml", {
            resolve(root) {
              const text = root.title;
              return converter.makeHtml(text || "");
            },
          });
        },
      }),
      nexus.extendType({
        type: "ComponentContentCode",
        definition(t) {
          t.string("html", {
            async resolve(root) {
              const text = root.code;
              const code = prism.highlight(
                text,
                prism.languages.javascript,
                "javascript"
              );
              return code;
            },
          });
        },
      }),
      nexus.extendType({
        type: "ComponentElementsRichText",
        definition(t) {
          t.string("html", {
            resolve(root) {
              const text = root.text;
              return converter.makeHtml(text || "");
            },
          });
        },
      }),
      nexus.extendType({
        type: "ComponentContentImageText",
        definition(t) {
          t.string("html", {
            resolve(root) {
              const text = root.text;
              return converter.makeHtml(text || "");
            },
          });
        },
      }),
      nexus.extendType({
        type: "ComponentContentSocialProofBar",
        definition(t) {
          t.string("html", {
            resolve(root) {
              const text = root.text;
              return converter.makeHtml(text || "");
            },
          });
        },
      }),
    ],
  });
