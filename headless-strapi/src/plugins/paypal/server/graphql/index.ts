import paypal from "./paypal";

const extensions: any = [paypal];

export default (strapi: any) => {
  const extensionService = strapi.plugin("graphql").service("extension");
  for (const extension of extensions) {
    extensionService.use(extension(strapi));
  }
};
