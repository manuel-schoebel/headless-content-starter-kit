"use server";
import {
  CapturePaypalOrderDocument,
  CapturePaypalOrderVariables,
  PaypalCaptureOrderResponse,
} from "@/graphql/generated/graphql";
import { getClient } from "../graphqlRequestClient";

export async function capturePaypalOrder({
  paypalOrderId,
  orderId,
}: CapturePaypalOrderVariables): Promise<PaypalCaptureOrderResponse> {
  const client = getClient({});

  const result = await client.request(CapturePaypalOrderDocument, {
    paypalOrderId,
    orderId,
  });

  if (!result?.capturePaypalOrder) {
    throw Error("Error creating order");
  }

  return result.capturePaypalOrder;
}
