"use server";
import {
  CreatePaypalOrderDocument,
  CreatePaypalOrderVariables,
  PaypalCreateOrderResponse,
} from "@/graphql/generated/graphql";
import { getClient } from "../graphqlRequestClient";

export async function createPaypalOrder({
  amount,
  currency,
  orderId,
}: CreatePaypalOrderVariables): Promise<PaypalCreateOrderResponse> {
  const client = getClient({});

  const result = await client.request(CreatePaypalOrderDocument, {
    amount,
    currency,
    orderId,
  });

  if (!result?.createPaypalOrder) {
    throw Error("Error creating order");
  }

  return result.createPaypalOrder;
}
