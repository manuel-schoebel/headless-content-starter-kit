"use client";
import React from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ITextLink } from "@/components/navigation/TextLink";

export interface IDropdown {
  links: ITextLink[];
}

function Dropdown({ links }: IDropdown) {
  const pathname = usePathname();
  const currentLink = links?.find((l) => l.href == pathname);

  return (
    <div className="flex justify-end">
      <Menu as="div" className="relative flex justify-end flex-col">
        <Menu.Button className="flex gap-2 items-center justify-end font-bold border-b-4 px-6 pb-2">
          {currentLink?.label}
          <ChevronDownIcon
            className="h-5 w-5 text-gray-400 mt-1"
            aria-hidden="true"
          />
        </Menu.Button>
        <Menu.Items className="absolute top-8 w-full flex flex-col border mt-4 border-gray-300 p-2 gap-y-2 rounded-sm bg-white shadow-lg">
          {links?.map((link) => (
            <Menu.Item key={link?.href}>
              {() => (
                <Link
                  className="text-sm hover:font-bold"
                  href={link.href || "#"}
                >
                  {link?.label}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
}

export { Dropdown };
