import { CodeFragment } from "@/graphql/generated/graphql";
import React from "react";

export interface ICode {}

function Code({ html }: CodeFragment) {
  return (
    <div
      className="whitespace-pre p-4 text-light bg-stone-900 max-w-prose rounded-md"
      dangerouslySetInnerHTML={{ __html: html || "" }}
    />
  );
}

export { Code };
