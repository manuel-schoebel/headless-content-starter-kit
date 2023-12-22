import { ButtonBar } from "@/components/content/ButtonBar";
import { ClientQuote } from "@/components/content/ClientQuote";
import { Code } from "@/components/content/Code";
import { Faq } from "@/components/content/Faq";
import { Hero } from "@/components/content/Hero";
import { ImageText } from "@/components/content/ImageText";
import {
  IPagePreviewList,
  PagePreviewList,
} from "@/components/content/PagePreviewList";
import { Pricing } from "@/components/content/Pricing";
import { SectionHeadline } from "@/components/content/SectionHeadline";
import { SocialProofBar } from "@/components/content/SocialProofBar";
import { Video } from "@/components/content/Video";
import { RichText } from "@/components/elements/RichText";
import { Spacer } from "@/components/elements/Spacer";
import { Container } from "@/components/layout/Container";
import { SidebarLayout } from "@/components/layout/SidebarLayout";
import { Dropdown } from "@/components/navigation/Dropdown";
import { LinkList } from "@/components/navigation/LinkList";
import { TableOfContents } from "@/components/navigation/TableOfContents/TableOfContents";
import { TextLink } from "@/components/navigation/TextLink";
import {
  ButtonBarFragment,
  CodeFragment,
  DropdownFragment,
  FaqFragment,
  ImageTextFragment,
  LinkFragment,
  LinkListFragment,
  PricingFragment,
  RichTextFragment,
  SectionHeadlineFragment,
  VideoFragment,
} from "@/graphql/generated/graphql";
import {
  getDropdownProps,
  getLinkListProps,
  getTextLinkProps,
} from "@/lib/strapi";

export const componentMap = {
  // Content
  ComponentContentButtonBar: (props: ButtonBarFragment) => (
    <div className="my-8">
      <ButtonBar {...props} />
    </div>
  ),
  ComponentContentClientQuote: ClientQuote,
  ComponentContentCode: (props: CodeFragment) => <Code {...props} />,
  ComponentContentFaq: (props: FaqFragment) => (
    <Container>
      <Faq {...props} />
    </Container>
  ),
  ComponentContentHero: Hero,
  ComponentContentImageText: (props: ImageTextFragment) => (
    <Container>
      <ImageText {...props} />
    </Container>
  ),
  ComponentContentPagePreviewList: (props: IPagePreviewList) => (
    <Container>
      <PagePreviewList {...props} />
    </Container>
  ),
  ComponentContentPricing: (props: PricingFragment) => <Pricing {...props} />,
  ComponentContentSectionHeadline: (props: SectionHeadlineFragment) => (
    <Container className="mt-36 mb-12">
      <SectionHeadline {...props} />
    </Container>
  ),
  ComponentContentSocialProofBar: SocialProofBar,
  ComponentContentVideo: (props: VideoFragment) => (
    <div className="flex justify-center">
      <Video {...props} />
    </div>
  ),

  // Elements
  ComponentElementsRichText: (props: RichTextFragment) => (
    <Container className="">
      <RichText {...props} />
    </Container>
  ),
  ComponentElementsSpacer: Spacer,

  // Layouts
  ComponentLayoutsSidebarLayout: SidebarLayout,

  // Navigation
  ComponentNavigationDropdown: (props: DropdownFragment) => (
    <Dropdown {...getDropdownProps(props)} />
  ),
  ComponentNavigationLink: (props: LinkFragment) => (
    <TextLink {...getTextLinkProps(props)} />
  ),
  ComponentNavigationLinkList: (props: LinkListFragment) => (
    <LinkList {...getLinkListProps(props)} />
  ),
  ComponentNavigationTableOfContents: TableOfContents,
};
