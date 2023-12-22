"use client";
import {
  MenuFragment,
  MenuItem as MenuItemType,
} from "@/graphql/generated/graphql";
import { Dialog, Popover } from "@headlessui/react";
import React, { Fragment, ReactNode, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MenuItem } from "./MenuItem";
import { MobileMenuItem } from "./MobileMenuItem";

function Menu({
  attributes,
  children,
}: MenuFragment & { children?: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!attributes) return <></>;

  const { menu_items } = attributes;

  if (!menu_items || menu_items?.data?.length === 0) {
    return <></>;
  }

  return (
    <div className="flex flex-grow">
      {/* md Menu */}
      <Popover.Group
        className={`hidden md:gap-x-8 flex-grow md:flex gap-y-2 h-full justify-start`}
      >
        {menu_items.data.filter(Boolean).map((menuItem) => (
          <Fragment key={menuItem.id}>
            {menuItem?.attributes && (
              <MenuItem {...(menuItem?.attributes as MenuItemType)} />
            )}
          </Fragment>
        ))}
        <div className="flex flex-grow justify-end">{children}</div>
      </Popover.Group>
      {/* sm Menu */}
      <div className="md:hidden gap-4 flex flex-grow justify-end">
        {children}
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel
          className="fixed inset-y-0 px-6 py-6 right-0 z-10 w-full overflow-y-auto
         bg-white dark:bg-stone-800
        sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-gray-300/10"
        >
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="text-dark dark:text-light h-6 w-6"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {menu_items.data.filter(Boolean).map((menuItem) => (
                  <MobileMenuItem
                    key={menuItem.id}
                    {...(menuItem?.attributes as MenuItemType)}
                  />
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}

export { Menu };
