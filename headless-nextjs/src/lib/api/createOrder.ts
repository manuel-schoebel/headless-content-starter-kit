"use server";
import {
  CreateOrderDocument,
  CreateOrderVariables,
  OrderEntity,
} from "@/graphql/generated/graphql";
import { getClient } from "@/lib/graphqlRequestClient";

export async function createOrder({
  address,
  city,
  country,
  email,
  firstName,
  lastName,
  zip,
  address1,
  company,
  githubUsername,
  vatId,
}: CreateOrderVariables): Promise<OrderEntity> {
  const client = getClient({});

  const result = await client.request(CreateOrderDocument, {
    address,
    city,
    country,
    email,
    firstName,
    lastName,
    zip,
    address1,
    company,
    githubUsername,
    vatId,
  });

  if (!result?.createOrder?.data) {
    throw Error("Error creating order");
  }

  return result.createOrder.data;
}
