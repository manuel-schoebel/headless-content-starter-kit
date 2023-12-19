import components from "./components";
import hierarchy from "./hierarchy";
import content from "./content";

const extensions: any = [components, hierarchy, content];

export default (strapi: any) => {
  const extensionService = strapi.plugin("graphql").service("extension");
  for (const extension of extensions) {
    extensionService.use(extension(strapi));
  }
};
