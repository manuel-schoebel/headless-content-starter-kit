import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentButtonBar extends Schema.Component {
  collectionName: 'components_content_button_bars';
  info: {
    displayName: 'ButtonBar';
    description: '';
  };
  attributes: {
    buttons: Attribute.Component<'elements.button', true>;
    align: Attribute.Enumeration<['center', 'left', 'right']> &
      Attribute.DefaultTo<'center'>;
  };
}

export interface ContentClientQuote extends Schema.Component {
  collectionName: 'components_content_client_quotes';
  info: {
    displayName: 'ClientQuote';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    position: Attribute.String;
    companyName: Attribute.String;
    avatar: Attribute.Media;
    text: Attribute.Text;
  };
}

export interface ContentCode extends Schema.Component {
  collectionName: 'components_content_codes';
  info: {
    displayName: 'Code';
  };
  attributes: {
    code: Attribute.RichText;
  };
}

export interface ContentHero extends Schema.Component {
  collectionName: 'components_content_heroes';
  info: {
    displayName: 'hero';
    icon: 'circle';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    subTitle: Attribute.Text;
    titleColor: Attribute.Enumeration<['white', 'fuchsia', 'black']> &
      Attribute.DefaultTo<'white'>;
    responsiveImage: Attribute.Component<'elements.responsive-image', true>;
  };
}

export interface ContentImageGrid extends Schema.Component {
  collectionName: 'components_content_image_grids';
  info: {
    displayName: 'ImageGrid';
  };
  attributes: {
    images: Attribute.Media;
    gap: Attribute.Enumeration<['none', 'small', 'medium', 'large']>;
  };
}

export interface ContentImageText extends Schema.Component {
  collectionName: 'components_content_image_texts';
  info: {
    displayName: 'imageText';
    icon: 'circle';
    description: '';
  };
  attributes: {
    text: Attribute.RichText;
    textAlign: Attribute.Enumeration<['left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
    image: Attribute.Media;
    imagePriority: Attribute.Boolean;
    mediaPosition: Attribute.Enumeration<['left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
    fixedHeight: Attribute.Integer;
    screenHeight: Attribute.Boolean;
    imageColumns: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<1>;
    textColumns: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<1>;
    headline: Attribute.Component<'elements.headline'>;
  };
}

export interface ContentPagePreviewList extends Schema.Component {
  collectionName: 'components_content_page_preview_lists';
  info: {
    displayName: 'PagePreviewList';
    description: '';
  };
  attributes: {
    pages: Attribute.Relation<
      'content.page-preview-list',
      'oneToMany',
      'api::page.page'
    >;
    hierarchy: Attribute.Relation<
      'content.page-preview-list',
      'oneToOne',
      'api::hierarchy.hierarchy'
    >;
    limit: Attribute.Integer & Attribute.DefaultTo<3>;
  };
}

export interface ContentPricing extends Schema.Component {
  collectionName: 'components_content_pricings';
  info: {
    displayName: 'pricing';
    icon: 'shoppingCart';
    description: '';
  };
  attributes: {
    plans: Attribute.Component<'elements.pricing-plan', true>;
  };
}

export interface ContentSectionHeadline extends Schema.Component {
  collectionName: 'components_content_section_headlines';
  info: {
    displayName: 'SectionHeadline';
    description: '';
  };
  attributes: {
    headline: Attribute.Component<'elements.headline'>;
    useInTableOfContents: Attribute.Boolean;
  };
}

export interface ContentSocialProofBar extends Schema.Component {
  collectionName: 'components_content_social_proof_bars';
  info: {
    displayName: 'SocialProofBar';
  };
  attributes: {
    avatars: Attribute.Media;
    text: Attribute.Text;
  };
}

export interface ContentVideo extends Schema.Component {
  collectionName: 'components_content_videos';
  info: {
    displayName: 'Video';
    icon: 'play';
  };
  attributes: {
    youtubeId: Attribute.String;
    consentBackgroundImage: Attribute.Media;
  };
}

export interface ElementsButton extends Schema.Component {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    target: Attribute.Enumeration<['_self', '_blank']> &
      Attribute.DefaultTo<'_self'>;
    externalUrl: Attribute.String;
    variant: Attribute.Enumeration<['text', 'outlined', 'filled']> &
      Attribute.DefaultTo<'filled'>;
    style: Attribute.Enumeration<['primary', 'secondary']>;
    page: Attribute.Relation<'elements.button', 'oneToOne', 'api::page.page'>;
  };
}

export interface ElementsHeadline extends Schema.Component {
  collectionName: 'components_elements_headlines';
  info: {
    displayName: 'headline';
    icon: 'heading';
    description: '';
  };
  attributes: {
    text: Attribute.Text;
    variant: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5']>;
    align: Attribute.Enumeration<['left', 'center', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
  };
}

export interface ElementsPricingPlan extends Schema.Component {
  collectionName: 'components_elements_pricing_plans';
  info: {
    displayName: 'pricingPlan';
    description: '';
  };
  attributes: {
    price: Attribute.String;
    name: Attribute.String;
    features: Attribute.Text;
    href: Attribute.String;
    btnLabel: Attribute.String;
    highlightedText: Attribute.String;
  };
}

export interface ElementsResponsiveImage extends Schema.Component {
  collectionName: 'components_elements_responsive_images';
  info: {
    displayName: 'responsiveImage';
    icon: 'circle';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    screenSize: Attribute.Enumeration<
      ['small mobile', 'medium mobile', 'large mobile', 'tablet', 'desktop']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'desktop'>;
  };
}

export interface ElementsRichText extends Schema.Component {
  collectionName: 'components_elements_rich_texts';
  info: {
    displayName: 'richText';
    icon: 'circle';
    description: '';
  };
  attributes: {
    text: Attribute.RichText;
    align: Attribute.Enumeration<['left', 'center', 'right']> &
      Attribute.DefaultTo<'left'>;
  };
}

export interface ElementsSpacer extends Schema.Component {
  collectionName: 'components_elements_spacers';
  info: {
    displayName: 'Spacer';
    icon: 'expand';
  };
  attributes: {
    spaceTop: Attribute.Enumeration<['small', 'medium', 'large']>;
    spaceBottom: Attribute.Enumeration<['small', 'medium', 'large']>;
  };
}

export interface LayoutsSidebarLayout extends Schema.Component {
  collectionName: 'components_layouts_sidebar_layouts';
  info: {
    displayName: 'SidebarLayout';
  };
  attributes: {
    sidebar_layout: Attribute.Relation<
      'layouts.sidebar-layout',
      'oneToOne',
      'api::sidebar-layout.sidebar-layout'
    >;
  };
}

export interface NavigationDropdown extends Schema.Component {
  collectionName: 'components_navigation_dropdowns';
  info: {
    displayName: 'Dropdown';
  };
  attributes: {
    links: Attribute.Component<'navigation.link', true>;
  };
}

export interface NavigationLinkList extends Schema.Component {
  collectionName: 'components_navigation_link_lists';
  info: {
    displayName: 'LinkList';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'navigation.link', true>;
    headline: Attribute.String;
    orientation: Attribute.Enumeration<['horizontal', 'vertical']> &
      Attribute.DefaultTo<'horizontal'>;
    align: Attribute.Enumeration<['left', 'center', 'right']> &
      Attribute.DefaultTo<'left'>;
  };
}

export interface NavigationLink extends Schema.Component {
  collectionName: 'components_navigation_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
    image: Attribute.Media;
    target: Attribute.Enumeration<['_self', '_blank']> &
      Attribute.DefaultTo<'_self'>;
    page: Attribute.Relation<'navigation.link', 'oneToOne', 'api::page.page'>;
    description: Attribute.Text;
  };
}

export interface NavigationTableOfContents extends Schema.Component {
  collectionName: 'components_navigation_table_of_contents';
  info: {
    displayName: 'TableOfContents';
    icon: 'bulletList';
  };
  attributes: {
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.button-bar': ContentButtonBar;
      'content.client-quote': ContentClientQuote;
      'content.code': ContentCode;
      'content.hero': ContentHero;
      'content.image-grid': ContentImageGrid;
      'content.image-text': ContentImageText;
      'content.page-preview-list': ContentPagePreviewList;
      'content.pricing': ContentPricing;
      'content.section-headline': ContentSectionHeadline;
      'content.social-proof-bar': ContentSocialProofBar;
      'content.video': ContentVideo;
      'elements.button': ElementsButton;
      'elements.headline': ElementsHeadline;
      'elements.pricing-plan': ElementsPricingPlan;
      'elements.responsive-image': ElementsResponsiveImage;
      'elements.rich-text': ElementsRichText;
      'elements.spacer': ElementsSpacer;
      'layouts.sidebar-layout': LayoutsSidebarLayout;
      'navigation.dropdown': NavigationDropdown;
      'navigation.link-list': NavigationLinkList;
      'navigation.link': NavigationLink;
      'navigation.table-of-contents': NavigationTableOfContents;
    }
  }
}
