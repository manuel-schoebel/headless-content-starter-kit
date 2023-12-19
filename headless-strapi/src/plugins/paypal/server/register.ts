import { Strapi } from "@strapi/strapi";
import graphql from "./graphql";

export default ({ strapi }: { strapi: Strapi }) => {
  // register phase
  graphql(strapi);
};
