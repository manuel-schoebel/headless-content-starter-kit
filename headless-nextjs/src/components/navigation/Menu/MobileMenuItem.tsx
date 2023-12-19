import React from "react";
import { MenuItem } from "./MenuItem";
import { TextLink } from "../TextLink";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ComponentRenderer } from "../../ComponentRenderer";
import { componentMap } from "@/config/componentMap";
import { PagePreviewListFragment } from "@/graphql/generated/graphql";
import { MenuPagePreviewListMobile } from "./MenuPagePreviewListMobile";

function MobileMenuItem({ page, url, label, target, components }: MenuItem) {
  const href = page?.data?.attributes?.path || url;

  if (href) {
    return (
      <TextLink
        href={href}
        label={label || ""}
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-gray-500 dark:hover:text-gray-300"
      />
    );
  }

  return (
    <Disclosure as="div" className="-mx-3">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7">
            {label}
            <ChevronDownIcon
              className={`h-5 w-5 flex-none ${open ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 space-y-2 px-4">
            <ComponentRenderer
              components={components?.filter(Boolean) || []}
              componentMap={{
                ...componentMap,
                ComponentContentPagePreviewList: (
                  props: PagePreviewListFragment
                ) => <MenuPagePreviewListMobile {...props} />,
              }}
            />
            {/* {[...products, ...callsToAction].map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >
            {item.name}
          </Disclosure.Button>
        ))} */}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export { MobileMenuItem };
