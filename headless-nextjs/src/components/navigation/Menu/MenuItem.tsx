"use client";
import {
  Enum_Menuitem_Target,
  MenuItem,
  PagePreviewListFragment,
} from "@/graphql/generated/graphql";
import React, { Fragment } from "react";
import { TextLink } from "../TextLink";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ComponentRenderer } from "../../ComponentRenderer";
import { componentMap } from "@/config/componentMap";
import { MenuPagePreviewList } from "./MenuPagePreviewList";
import { MenuLink } from "./MenuLink";

function MenuItem({ page, url, label, target, components }: MenuItem) {
  const href = page?.data?.attributes?.path || url;

  if (href) {
    return (
      <MenuLink active={false}>
        <TextLink
          className="px-2 py-1 hover:bg-gray-200 dark:hover:bg-stone-700 rounded-md"
          href={href}
          label={label || ""}
          target={target === Enum_Menuitem_Target.Blank ? "_blank" : "_self"}
        />
      </MenuLink>
    );
  }

  return (
    <Popover className={`relative flex items-center`}>
      {({}) => (
        <div>
          <Popover.Button
            className={`flex px-2 py-1 items-center gap-1 focus-visible:outline-none hover:bg-gray-200 dark:hover:bg-stone-700 rounded-md`}
          >
            <span>{label}</span>
            <ChevronDownIcon
              className={`ml-1 h-4 w-4 text-gray-900 dark:text-white`}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            appear={false}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              className={`absolute left-1/2 z-10 mt-4 flex w-screen max-w-md -translate-x-1/2 px-4`}
            >
              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}

              <div
                className={`grid grid-cols-1 gap-6 max-w-md p-4 overflow-hidden rounded-xl bg-white dark:bg-stone-800 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 dark:ring-gray-100/20`}
              >
                <ComponentRenderer
                  components={components?.filter(Boolean) || []}
                  componentMap={{
                    ...componentMap,
                    ComponentContentPagePreviewList: (
                      props: PagePreviewListFragment
                    ) => {
                      return <MenuPagePreviewList {...props} />;
                    },
                  }}
                />
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  );
}

export { MenuItem };
