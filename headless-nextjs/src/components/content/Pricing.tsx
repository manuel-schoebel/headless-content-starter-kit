import { PricingFragment } from "@/graphql/generated/graphql";
import { CheckIcon } from "@heroicons/react/20/solid";
import React from "react";
import { LinkButton } from "../navigation/LinkButton";
import { Paragraph } from "../elements/Paragraph";
import { Paypal } from "../commerce/Paypal";
import { PaypalRSC } from "../commerce/PaypalRSC";

function Pricing({ plans }: PricingFragment) {
  if (!plans || plans.length === 0) {
    return null;
  }

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        className={`isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none
          ${plans.length === 2 ? "lg:grid-cols-2" : ""}
          ${plans.length === 3 ? "lg:grid-cols-3" : ""}
        `.trim()}
      >
        {plans.map((plan, tierIdx) => (
          <div
            key={plan?.id as string}
            className={`mx-auto flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10
              ${plan?.highlightedText ? "border-primary border-2" : ""}
            `}
          >
            <div>
              {plan?.highlightedText ? (
                <div className="flex justify-center mb-4">
                  <Paragraph
                    size="small"
                    className="inline-block mx-auto rounded-full bg-stone-100 px-2.5 py-1 font-semibold leading-5 text-primary"
                  >
                    {plan?.highlightedText}
                  </Paragraph>
                </div>
              ) : null}
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={plan?.id} className={"text-lg font-semibold leading-8"}>
                  {plan?.name}
                </h3>
              </div>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {plan?.price}
                </span>
              </p>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
              >
                {plan?.features
                  ?.trim()
                  .split("\n")
                  .map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="mt-8">
              <LinkButton
                href={plan?.href as string}
                className="w-full bg-primary border border-transparent rounded-md py-2 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-primary-700"
              >
                {plan?.btnLabel}
              </LinkButton>
              <PaypalRSC />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Pricing };
