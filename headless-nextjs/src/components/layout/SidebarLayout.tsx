import {
  LinkListFragment,
  RichTextFragment,
  SectionHeadlineFragment,
  SidebarLayoutFragment,
  VideoFragment,
} from "@/graphql/generated/graphql";
import React from "react";
import { Container } from "./Container";
import { ComponentRenderer } from "../ComponentRenderer";
import { componentMap } from "@/config/componentMap";
import { RichText } from "../elements/RichText";
import { SectionHeadline } from "../content/SectionHeadline";
import { Video } from "../content/Video";
import { LinkList } from "../navigation/LinkList";
import { getLinkListProps } from "@/lib/strapi";

function SidebarLayout({ sidebar_layout }: SidebarLayoutFragment) {
  if (!sidebar_layout?.data?.attributes) return <></>;

  const { stickySidebar, contentComponents, sidebarComponents } =
    sidebar_layout?.data?.attributes;

  const sideBarComponentMap = {
    ...componentMap,
    ComponentNavigationLinkList: (props: LinkListFragment) => (
      <div className="mt-24 mb-8">
        <LinkList {...getLinkListProps(props)} />
      </div>
    ),
  };
  const contentComponentMap = {
    ...componentMap,
    ComponentElementsRichText: (props: RichTextFragment) => (
      <div className="my-8">
        <RichText {...props} />
      </div>
    ),
    ComponentContentSectionHeadline: (props: SectionHeadlineFragment) => (
      <div className="[&:not(:first-child)]:mt-8 mb-6">
        <SectionHeadline {...props} />
      </div>
    ),
    ComponentContentVideo: (props: VideoFragment) => (
      <div className="my-8">
        <Video {...props} />
      </div>
    ),
  };

  return (
    <Container className="relative sidebarLayout grid my-12 grid-cols-1 md:grid-cols-4 lg:grid-cols-3 md:gap-12 lg:gap-24">
      <div
        className={`sidebar py 
          ${stickySidebar ? "self-start sticky top-0" : ""}
          hidden md:block
          md:col-span-1
          before:content-[' '] before:absolute before:-z-10 before:top-0 before:right-0 before:bottom-0 before:-left-[9999px]`}
      >
        <ComponentRenderer
          componentMap={sideBarComponentMap}
          components={sidebarComponents || []}
        />
      </div>
      <div className="md:col-span-3 lg:col-span-2">
        <ComponentRenderer
          componentMap={contentComponentMap}
          components={contentComponents || []}
        />
      </div>
    </Container>
  );
}

export { SidebarLayout };
