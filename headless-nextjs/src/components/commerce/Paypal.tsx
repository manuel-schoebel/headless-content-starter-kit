"use client";
import React, { useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  ReactPayPalScriptOptions,
} from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";
import { config } from "@/config";
import {
  CreatePaypalOrderVariables,
  PaypalCreateOrderResponse,
} from "@/graphql/generated/graphql";
import { capturePaypalOrder } from "@/lib/api/capturePaypalOrder";

interface IPayPal {
  createOrder: (
    params: CreatePaypalOrderVariables
  ) => Promise<PaypalCreateOrderResponse>;
  orderId: string;
}

function Paypal({ createOrder, orderId }: IPayPal) {
  const { push } = useRouter();
  const [message, setMessage] = useState("");

  const paypalClientId = config.paypal.clientId;

  if (!paypalClientId) {
    throw new Error("paypalClientId is undefined");
  }

  const initialOptions: ReactPayPalScriptOptions = {
    clientId: paypalClientId,
    "enable-funding": "card",
    "disable-funding": "",
    "data-sdk-integration-source": "integrationbuilder_sc",
    currency: "USD",
    intent: "capture",
    dataPageType: "checkout",
    commit: true,
    locale: "en_US",
  };

  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            shape: "rect",
            layout: "vertical",
          }}
          createOrder={async (data) => {
            try {
              console.log("data", data);
              // setpaymentMethod by its name
              const paypalPaymentMethodName = data.paymentSource;
              console.log("paying with", paypalPaymentMethodName);

              const result = await createOrder({
                amount: "299",
                currency: "USD",
                orderId,
              });

              if (!result.id) {
                throw new Error(`Could not create order`);
              }

              return result.id;
            } catch (error) {
              console.error(error);
              return "";
            }
          }}
          onApprove={async (data, actions) => {
            console.log("onApprove", data, actions);

            try {
              const response = await capturePaypalOrder({
                paypalOrderId: data.orderID,
                orderId,
              });
              console.log("response", response);
            } catch (error) {
              console.error(error);
            }
            push("/checkout/success");
          }}
        />{" "}
      </PayPalScriptProvider>
    </>
  );
}

export { Paypal };
