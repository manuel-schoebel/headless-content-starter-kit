"use client";
import { FaqFragment } from "@/graphql/generated/graphql";
import React from "react";
import { Disclosure } from "@headlessui/react";
import {
  ChevronRightIcon,
  MinusSmallIcon,
  PlusSmallIcon,
} from "@heroicons/react/24/outline";
import { BlocksRenderer } from "@/components/elements/BlocksRenderer";
import { Headline } from "../elements/Headline";

function Faq({ faq }: FaqFragment) {
  const questions = faq?.data?.attributes?.questions;
  const description = faq?.data?.attributes?.description;

  console.log("questions", questions);

  if (!questions) {
    return null;
  }

  return (
    <div className="flex flex-col md:flex-row gap-12">
      {description && (
        <div className="basis-1/2">
          <BlocksRenderer content={description} />
        </div>
      )}
      <dl className="md:mt-4 space-y-4 divide-y divide-white/10 basis-1/2">
        {questions.map((question) => (
          <Disclosure as="div" key={question?.id} className="pt-4">
            {({ open }) => (
              <>
                <dt>
                  <Disclosure.Button className="flex w-full items-start justify-between text-left">
                    <Headline variant="h4">{question?.question}</Headline>
                    <span className="ml-6 flex h-7 items-center">
                      {open ? (
                        <MinusSmallIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                  <BlocksRenderer content={question?.answer} />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </div>
  );
}

export { Faq };
