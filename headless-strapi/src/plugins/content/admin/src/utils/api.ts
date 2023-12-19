import axios from "axios";
import { print } from "graphql";
import gql from "graphql-tag";
import { auth } from "@strapi/helper-plugin";

export async function revalidate(path: string, locale: string) {
  const response = await axios.post(
    "/content/revalidate",
    {
      path,
      locale,
    },
    {
      headers: {
        Authorization: `Bearer ${auth.get("jwtToken")}`,
      },
    }
  );
  return response;
}

export async function preview(path: string, locale: string) {
  const response = await axios.post(
    "/content/preview",
    {
      path,
      locale,
    },
    {
      headers: {
        Authorization: `Bearer ${auth.get("jwtToken")}`,
      },
    }
  );
  return response;
}

export async function disablePreview() {
  const response = await axios.post(
    "/content/disable-preview",
    {},
    {
      headers: {
        Authorization: `Bearer ${auth.get("jwtToken")}`,
      },
    }
  );
  return response;
}
