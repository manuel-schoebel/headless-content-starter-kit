import React from "react";
import { Paypal } from "./Paypal";
import { createPaypalOrder } from "@/lib/api/createPaypalOrder";

export interface IPaypalRSC {
  orderId: string;
}

function PaypalRSC({ orderId }: IPaypalRSC) {
  return (
    <>
      <Paypal orderId={orderId} createOrder={createPaypalOrder} />
    </>
  );
}

export { PaypalRSC };
