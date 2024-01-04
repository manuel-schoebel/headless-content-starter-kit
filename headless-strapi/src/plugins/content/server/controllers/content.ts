import { Strapi } from "@strapi/strapi";
import axios from "axios";

export default ({ strapi }: { strapi: Strapi }) => ({
  async preview(ctx, next) {
    let path = ctx.request.body.path;
    const locale = ctx.request.body.locale;

    const { config } = strapi.plugin("content");
    const enablePreviewUrl = config("enablePreviewUrl");
    const frontendRevalidationApiToken = config<string, string>(
      "frontendRevalidationApiToken"
    );

    ctx.body = {
      success: true,
      previewUrl: `${enablePreviewUrl}?path=${path}&locale=${locale}&secret=${encodeURIComponent(
        frontendRevalidationApiToken
      )}`,
    };
  },
  async disablePreview(ctx, next) {
    const { config } = strapi.plugin("content");
    const enablePreviewUrl = config("enablePreviewUrl");
    const frontendRevalidationApiToken = config<string, string>(
      "frontendRevalidationApiToken"
    );

    ctx.body = {
      success: true,
      disablePreviewUrl: `${enablePreviewUrl}?disable=true&secret=${encodeURIComponent(
        frontendRevalidationApiToken
      )}`,
    };
  },
  async revalidate(ctx) {
    let path = ctx.request.body.path;
    let locale = ctx.request.body.locale;

    const { config } = strapi.plugin("content");
    const revalidationUrl = config("revalidationUrl");
    const frontendRevalidationApiToken =
      config<string, string>("frontendRevalidationApiToken") || "";
    const payload = {
      path,
      locale,
      secret: frontendRevalidationApiToken,
    };

    try {
      await axios.post(`${revalidationUrl}`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      ctx.body = { success: true };
    } catch (e: any) {
      console.log("error revalidating", e);
      throw e;
    }
  },
});
