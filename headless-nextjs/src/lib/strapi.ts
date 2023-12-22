import { IDropdown } from "@/components/navigation/Dropdown";
import { ILinkButton } from "@/components/navigation/LinkButton";
import { ILinkList } from "@/components/navigation/LinkList";
import { ITextLink } from "@/components/navigation/TextLink";
import { config } from "@/config";
import {
  ButtonFragment,
  DropdownFragment,
  Enum_Componentelementsbutton_Style,
  Enum_Componentelementsbutton_Target,
  Enum_Componentnavigationlink_Target,
  LinkFragment,
  LinkListFragment,
} from "@/graphql/generated/graphql";

export function getImageUrl(url: string): string {
  const modifiedUrl = url.replace("http://localhost", "http://127.0.0.1");
  if (modifiedUrl.startsWith("http")) {
    return modifiedUrl;
  }
  return `${config.strapi.url}${url}`;
}

export function getTextLinkProps({
  url,
  label,
  target,
  page,
}: LinkFragment): ITextLink {
  return {
    href: page?.data?.attributes?.path
      ? page.data?.attributes?.path
      : url || "",
    label: label || "",
    target:
      target === Enum_Componentnavigationlink_Target.Blank ? "_blank" : "_self",
  };
}

export function getDropdownProps({ links }: DropdownFragment): IDropdown {
  return {
    links:
      links?.map((link) => ({
        ...getTextLinkProps(link as LinkFragment),
      })) || [],
  };
}

export function getLinkListProps({
  linkListHeadline,
  linkListAlign,
  orientation,
  links,
}: LinkListFragment): ILinkList {
  return {
    linkListHeadline,
    linkListAlign,
    orientation,
    links:
      links?.map((link) => ({
        ...getTextLinkProps(link as LinkFragment),
        description: link?.description,
        image: {
          url: link?.image?.data?.attributes?.url || "",
          alt: link?.image?.data?.attributes?.alternativeText || "",
        },
      })) || [],
  };
}

export function getLinkButtonProps({
  externalUrl,
  label,
  page,
  style,
  target,
  variant,
}: ButtonFragment): ILinkButton {
  return {
    href: page?.data?.attributes?.path || externalUrl || "#",
    linkTarget:
      target === Enum_Componentelementsbutton_Target.Blank ? "_blank" : "_self",
    style:
      style === Enum_Componentelementsbutton_Style.Primary
        ? "primary"
        : style === Enum_Componentelementsbutton_Style.Secondary
        ? "secondary"
        : "primary",
    variant: variant || "filled",
  };
}
