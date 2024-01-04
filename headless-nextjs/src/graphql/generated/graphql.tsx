import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  GlobalFooterDynamicZoneInput: { input: any; output: any; }
  I18NLocaleCode: { input: any; output: any; }
  JSON: { input: any; output: any; }
  MenuItemComponentsDynamicZoneInput: { input: any; output: any; }
  PageComponentsDynamicZoneInput: { input: any; output: any; }
  SidebarLayoutContentComponentsDynamicZoneInput: { input: any; output: any; }
  SidebarLayoutSidebarComponentsDynamicZoneInput: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Breadcrumb = {
  __typename?: 'Breadcrumb';
  current?: Maybe<Scalars['Boolean']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

export type ComponentContentButtonBar = {
  __typename?: 'ComponentContentButtonBar';
  align?: Maybe<Enum_Componentcontentbuttonbar_Align>;
  buttons?: Maybe<Array<Maybe<ComponentElementsButton>>>;
  id: Scalars['ID']['output'];
};


export type ComponentContentButtonBarButtonsArgs = {
  filters?: InputMaybe<ComponentElementsButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentContentClientQuote = {
  __typename?: 'ComponentContentClientQuote';
  avatar?: Maybe<UploadFileEntityResponse>;
  companyName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type ComponentContentCode = {
  __typename?: 'ComponentContentCode';
  code?: Maybe<Scalars['String']['output']>;
  html?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentContentFaq = {
  __typename?: 'ComponentContentFaq';
  faq?: Maybe<FaqEntityResponse>;
  id: Scalars['ID']['output'];
};

export type ComponentContentHero = {
  __typename?: 'ComponentContentHero';
  id: Scalars['ID']['output'];
  responsiveImage?: Maybe<Array<Maybe<ComponentElementsResponsiveImage>>>;
  subTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  titleColor?: Maybe<Enum_Componentcontenthero_Titlecolor>;
  titleHtml?: Maybe<Scalars['String']['output']>;
};


export type ComponentContentHeroResponsiveImageArgs = {
  filters?: InputMaybe<ComponentElementsResponsiveImageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentContentImageGrid = {
  __typename?: 'ComponentContentImageGrid';
  gap?: Maybe<Enum_Componentcontentimagegrid_Gap>;
  id: Scalars['ID']['output'];
  images?: Maybe<UploadFileRelationResponseCollection>;
};


export type ComponentContentImageGridImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentContentImageText = {
  __typename?: 'ComponentContentImageText';
  fixedHeight?: Maybe<Scalars['Int']['output']>;
  headline?: Maybe<ComponentElementsHeadline>;
  html?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  imageColumns: Scalars['Int']['output'];
  imagePriority?: Maybe<Scalars['Boolean']['output']>;
  mediaPosition: Enum_Componentcontentimagetext_Mediaposition;
  screenHeight?: Maybe<Scalars['Boolean']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  textAlign: Enum_Componentcontentimagetext_Textalign;
  textColumns: Scalars['Int']['output'];
};

export type ComponentContentPagePreviewList = {
  __typename?: 'ComponentContentPagePreviewList';
  hierarchy?: Maybe<HierarchyEntityResponse>;
  id: Scalars['ID']['output'];
  limit?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<PageRelationResponseCollection>;
};


export type ComponentContentPagePreviewListPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentContentPricing = {
  __typename?: 'ComponentContentPricing';
  id: Scalars['ID']['output'];
  plans?: Maybe<Array<Maybe<ComponentElementsPricingPlan>>>;
};


export type ComponentContentPricingPlansArgs = {
  filters?: InputMaybe<ComponentElementsPricingPlanFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentContentSectionHeadline = {
  __typename?: 'ComponentContentSectionHeadline';
  headline?: Maybe<ComponentElementsHeadline>;
  id: Scalars['ID']['output'];
  useInTableOfContents?: Maybe<Scalars['Boolean']['output']>;
};

export type ComponentContentSocialProofBar = {
  __typename?: 'ComponentContentSocialProofBar';
  avatars?: Maybe<UploadFileRelationResponseCollection>;
  html?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
};


export type ComponentContentSocialProofBarAvatarsArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentContentVideo = {
  __typename?: 'ComponentContentVideo';
  consentBackgroundImage?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  youtubeId?: Maybe<Scalars['String']['output']>;
};

export type ComponentElementsButton = {
  __typename?: 'ComponentElementsButton';
  externalUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  page?: Maybe<PageEntityResponse>;
  style?: Maybe<Enum_Componentelementsbutton_Style>;
  target?: Maybe<Enum_Componentelementsbutton_Target>;
  variant?: Maybe<Enum_Componentelementsbutton_Variant>;
};

export type ComponentElementsButtonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsButtonFiltersInput>>>;
  externalUrl?: InputMaybe<StringFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsButtonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsButtonFiltersInput>>>;
  page?: InputMaybe<PageFiltersInput>;
  style?: InputMaybe<StringFilterInput>;
  target?: InputMaybe<StringFilterInput>;
  variant?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsHeadline = {
  __typename?: 'ComponentElementsHeadline';
  align: Enum_Componentelementsheadline_Align;
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Enum_Componentelementsheadline_Variant>;
};

export type ComponentElementsPricingPlan = {
  __typename?: 'ComponentElementsPricingPlan';
  btnLabel?: Maybe<Scalars['String']['output']>;
  features?: Maybe<Scalars['String']['output']>;
  highlightedText?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
};

export type ComponentElementsPricingPlanFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsPricingPlanFiltersInput>>>;
  btnLabel?: InputMaybe<StringFilterInput>;
  features?: InputMaybe<StringFilterInput>;
  highlightedText?: InputMaybe<StringFilterInput>;
  href?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsPricingPlanFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsPricingPlanFiltersInput>>>;
  price?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsQuestionAndAnswer = {
  __typename?: 'ComponentElementsQuestionAndAnswer';
  answer: Scalars['JSON']['output'];
  id: Scalars['ID']['output'];
  question: Scalars['String']['output'];
};

export type ComponentElementsQuestionAndAnswerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsQuestionAndAnswerFiltersInput>>>;
  answer?: InputMaybe<JsonFilterInput>;
  not?: InputMaybe<ComponentElementsQuestionAndAnswerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsQuestionAndAnswerFiltersInput>>>;
  question?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsQuestionAndAnswerInput = {
  answer?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentElementsResponsiveImage = {
  __typename?: 'ComponentElementsResponsiveImage';
  id: Scalars['ID']['output'];
  image: UploadFileEntityResponse;
  screenSize: Enum_Componentelementsresponsiveimage_Screensize;
};

export type ComponentElementsResponsiveImageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsResponsiveImageFiltersInput>>>;
  not?: InputMaybe<ComponentElementsResponsiveImageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsResponsiveImageFiltersInput>>>;
  screenSize?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsRichText = {
  __typename?: 'ComponentElementsRichText';
  align?: Maybe<Enum_Componentelementsrichtext_Align>;
  html?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
};

export type ComponentElementsSpacer = {
  __typename?: 'ComponentElementsSpacer';
  id: Scalars['ID']['output'];
  size?: Maybe<Enum_Componentelementsspacer_Size>;
};

export type ComponentLayoutsSidebarLayout = {
  __typename?: 'ComponentLayoutsSidebarLayout';
  id: Scalars['ID']['output'];
  sidebar_layout?: Maybe<SidebarLayoutEntityResponse>;
};

export type ComponentNavigationDropdown = {
  __typename?: 'ComponentNavigationDropdown';
  id: Scalars['ID']['output'];
  links?: Maybe<Array<Maybe<ComponentNavigationLink>>>;
};


export type ComponentNavigationDropdownLinksArgs = {
  filters?: InputMaybe<ComponentNavigationLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentNavigationLink = {
  __typename?: 'ComponentNavigationLink';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  label?: Maybe<Scalars['String']['output']>;
  page?: Maybe<PageEntityResponse>;
  target?: Maybe<Enum_Componentnavigationlink_Target>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentNavigationLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentNavigationLinkFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentNavigationLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentNavigationLinkFiltersInput>>>;
  page?: InputMaybe<PageFiltersInput>;
  target?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentNavigationLinkList = {
  __typename?: 'ComponentNavigationLinkList';
  align?: Maybe<Enum_Componentnavigationlinklist_Align>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  links?: Maybe<Array<Maybe<ComponentNavigationLink>>>;
  orientation?: Maybe<Enum_Componentnavigationlinklist_Orientation>;
};


export type ComponentNavigationLinkListLinksArgs = {
  filters?: InputMaybe<ComponentNavigationLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentNavigationTableOfContents = {
  __typename?: 'ComponentNavigationTableOfContents';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Componentcontentbuttonbar_Align {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

export enum Enum_Componentcontenthero_Titlecolor {
  Black = 'black',
  Fuchsia = 'fuchsia',
  White = 'white'
}

export enum Enum_Componentcontentimagegrid_Gap {
  Large = 'large',
  Medium = 'medium',
  None = 'none',
  Small = 'small'
}

export enum Enum_Componentcontentimagetext_Mediaposition {
  Left = 'left',
  Right = 'right'
}

export enum Enum_Componentcontentimagetext_Textalign {
  Left = 'left',
  Right = 'right'
}

export enum Enum_Componentelementsbutton_Style {
  Primary = 'primary',
  Secondary = 'secondary'
}

export enum Enum_Componentelementsbutton_Target {
  Blank = 'blank',
  Self = 'self'
}

export enum Enum_Componentelementsbutton_Variant {
  Filled = 'filled',
  Outlined = 'outlined',
  Text = 'text'
}

export enum Enum_Componentelementsheadline_Align {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

export enum Enum_Componentelementsheadline_Variant {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5'
}

export enum Enum_Componentelementsresponsiveimage_Screensize {
  Desktop = 'desktop',
  LargeMobile = 'large_mobile',
  MediumMobile = 'medium_mobile',
  SmallMobile = 'small_mobile',
  Tablet = 'tablet'
}

export enum Enum_Componentelementsrichtext_Align {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

export enum Enum_Componentelementsspacer_Size {
  Large = 'large',
  Medium = 'medium',
  Small = 'small'
}

export enum Enum_Componentnavigationlinklist_Align {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

export enum Enum_Componentnavigationlinklist_Orientation {
  Horizontal = 'horizontal',
  Vertical = 'vertical'
}

export enum Enum_Componentnavigationlink_Target {
  Blank = 'blank',
  Self = 'self'
}

export enum Enum_Menuitem_Target {
  Blank = 'blank',
  Self = 'self'
}

export enum Enum_Page_Metarobots {
  DoNotShowInSearchEngines = 'Do_not_show_in_search_engines',
  ShowInSearchEngines = 'Show_in_search_engines'
}

export type EnablePreviewResponse = {
  __typename?: 'EnablePreviewResponse';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type Faq = {
  __typename?: 'Faq';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  questions?: Maybe<Array<Maybe<ComponentElementsQuestionAndAnswer>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type FaqQuestionsArgs = {
  filters?: InputMaybe<ComponentElementsQuestionAndAnswerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FaqEntity = {
  __typename?: 'FaqEntity';
  attributes?: Maybe<Faq>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type FaqEntityResponse = {
  __typename?: 'FaqEntityResponse';
  data?: Maybe<FaqEntity>;
};

export type FaqEntityResponseCollection = {
  __typename?: 'FaqEntityResponseCollection';
  data: Array<FaqEntity>;
  meta: ResponseCollectionMeta;
};

export type FaqFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FaqFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<JsonFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<FaqFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FaqFiltersInput>>>;
  questions?: InputMaybe<ComponentElementsQuestionAndAnswerFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FaqInput = {
  description?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<Array<InputMaybe<ComponentElementsQuestionAndAnswerInput>>>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = ComponentContentButtonBar | ComponentContentClientQuote | ComponentContentCode | ComponentContentFaq | ComponentContentHero | ComponentContentImageGrid | ComponentContentImageText | ComponentContentPagePreviewList | ComponentContentPricing | ComponentContentSectionHeadline | ComponentContentSocialProofBar | ComponentContentVideo | ComponentElementsButton | ComponentElementsHeadline | ComponentElementsPricingPlan | ComponentElementsQuestionAndAnswer | ComponentElementsResponsiveImage | ComponentElementsRichText | ComponentElementsSpacer | ComponentLayoutsSidebarLayout | ComponentNavigationDropdown | ComponentNavigationLink | ComponentNavigationLinkList | ComponentNavigationTableOfContents | Faq | Global | Hierarchy | I18NLocale | Menu | MenuItem | Page | SidebarLayout | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Global = {
  __typename?: 'Global';
  Logo?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  footer?: Maybe<Array<Maybe<GlobalFooterDynamicZone>>>;
  twitterHandle?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GlobalEntity = {
  __typename?: 'GlobalEntity';
  attributes?: Maybe<Global>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type GlobalEntityResponse = {
  __typename?: 'GlobalEntityResponse';
  data?: Maybe<GlobalEntity>;
};

export type GlobalFooterDynamicZone = ComponentElementsRichText | ComponentNavigationLinkList | Error;

export type GlobalInput = {
  Logo?: InputMaybe<Scalars['ID']['input']>;
  footer?: InputMaybe<Array<Scalars['GlobalFooterDynamicZoneInput']['input']>>;
  twitterHandle?: InputMaybe<Scalars['String']['input']>;
};

export type Hierarchy = {
  __typename?: 'Hierarchy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  page?: Maybe<PageEntityResponse>;
  parent?: Maybe<HierarchyEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HierarchyEntity = {
  __typename?: 'HierarchyEntity';
  attributes?: Maybe<Hierarchy>;
  childIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['ID']['output']>;
  parents?: Maybe<Array<Maybe<Breadcrumb>>>;
};

export type HierarchyEntityResponse = {
  __typename?: 'HierarchyEntityResponse';
  data?: Maybe<HierarchyEntity>;
};

export type HierarchyEntityResponseCollection = {
  __typename?: 'HierarchyEntityResponseCollection';
  data: Array<HierarchyEntity>;
  meta: ResponseCollectionMeta;
};

export type HierarchyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<HierarchyFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<HierarchyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<HierarchyFiltersInput>>>;
  page?: InputMaybe<PageFiltersInput>;
  parent?: InputMaybe<HierarchyFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type HierarchyInput = {
  page?: InputMaybe<Scalars['ID']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Menu = {
  __typename?: 'Menu';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<MenuRelationResponseCollection>;
  menu_items?: Maybe<MenuItemRelationResponseCollection>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type MenuLocalizationsArgs = {
  filters?: InputMaybe<MenuFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MenuMenu_ItemsArgs = {
  filters?: InputMaybe<MenuItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MenuEntity = {
  __typename?: 'MenuEntity';
  attributes?: Maybe<Menu>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type MenuEntityResponse = {
  __typename?: 'MenuEntityResponse';
  data?: Maybe<MenuEntity>;
};

export type MenuEntityResponseCollection = {
  __typename?: 'MenuEntityResponseCollection';
  data: Array<MenuEntity>;
  meta: ResponseCollectionMeta;
};

export type MenuFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MenuFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<MenuFiltersInput>;
  menu_items?: InputMaybe<MenuItemFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<MenuFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MenuFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MenuInput = {
  menu_items?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MenuItem = {
  __typename?: 'MenuItem';
  components?: Maybe<Array<Maybe<MenuItemComponentsDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<MenuItemRelationResponseCollection>;
  name?: Maybe<Scalars['String']['output']>;
  page?: Maybe<PageEntityResponse>;
  target?: Maybe<Enum_Menuitem_Target>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type MenuItemLocalizationsArgs = {
  filters?: InputMaybe<MenuItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MenuItemComponentsDynamicZone = ComponentContentPagePreviewList | ComponentNavigationLinkList | Error;

export type MenuItemEntity = {
  __typename?: 'MenuItemEntity';
  attributes?: Maybe<MenuItem>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type MenuItemEntityResponse = {
  __typename?: 'MenuItemEntityResponse';
  data?: Maybe<MenuItemEntity>;
};

export type MenuItemEntityResponseCollection = {
  __typename?: 'MenuItemEntityResponseCollection';
  data: Array<MenuItemEntity>;
  meta: ResponseCollectionMeta;
};

export type MenuItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MenuItemFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<MenuItemFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<MenuItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MenuItemFiltersInput>>>;
  page?: InputMaybe<PageFiltersInput>;
  target?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type MenuItemInput = {
  components?: InputMaybe<Array<Scalars['MenuItemComponentsDynamicZoneInput']['input']>>;
  label?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['ID']['input']>;
  target?: InputMaybe<Enum_Menuitem_Target>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MenuItemRelationResponseCollection = {
  __typename?: 'MenuItemRelationResponseCollection';
  data: Array<MenuItemEntity>;
};

export type MenuRelationResponseCollection = {
  __typename?: 'MenuRelationResponseCollection';
  data: Array<MenuEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createFaq?: Maybe<FaqEntityResponse>;
  createHierarchy?: Maybe<HierarchyEntityResponse>;
  createMenu?: Maybe<MenuEntityResponse>;
  createMenuItem?: Maybe<MenuItemEntityResponse>;
  createMenuItemLocalization?: Maybe<MenuItemEntityResponse>;
  createMenuLocalization?: Maybe<MenuEntityResponse>;
  createPage?: Maybe<PageEntityResponse>;
  createPageLocalization?: Maybe<PageEntityResponse>;
  createSidebarLayout?: Maybe<SidebarLayoutEntityResponse>;
  createSidebarLayoutLocalization?: Maybe<SidebarLayoutEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteFaq?: Maybe<FaqEntityResponse>;
  deleteGlobal?: Maybe<GlobalEntityResponse>;
  deleteHierarchy?: Maybe<HierarchyEntityResponse>;
  deleteMenu?: Maybe<MenuEntityResponse>;
  deleteMenuItem?: Maybe<MenuItemEntityResponse>;
  deletePage?: Maybe<PageEntityResponse>;
  deleteSidebarLayout?: Maybe<SidebarLayoutEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  enablePreview?: Maybe<EnablePreviewResponse>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateFaq?: Maybe<FaqEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGlobal?: Maybe<GlobalEntityResponse>;
  updateHierarchy?: Maybe<HierarchyEntityResponse>;
  updateMenu?: Maybe<MenuEntityResponse>;
  updateMenuItem?: Maybe<MenuItemEntityResponse>;
  updatePage?: Maybe<PageEntityResponse>;
  updateSidebarLayout?: Maybe<SidebarLayoutEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateFaqArgs = {
  data: FaqInput;
};


export type MutationCreateHierarchyArgs = {
  data: HierarchyInput;
};


export type MutationCreateMenuArgs = {
  data: MenuInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateMenuItemArgs = {
  data: MenuItemInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateMenuItemLocalizationArgs = {
  data?: InputMaybe<MenuItemInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateMenuLocalizationArgs = {
  data?: InputMaybe<MenuInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreatePageArgs = {
  data: PageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreatePageLocalizationArgs = {
  data?: InputMaybe<PageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateSidebarLayoutArgs = {
  data: SidebarLayoutInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateSidebarLayoutLocalizationArgs = {
  data?: InputMaybe<SidebarLayoutInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteFaqArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteHierarchyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMenuArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteMenuItemArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeletePageArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteSidebarLayoutArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationEnablePreviewArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateFaqArgs = {
  data: FaqInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGlobalArgs = {
  data: GlobalInput;
};


export type MutationUpdateHierarchyArgs = {
  data: HierarchyInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateMenuArgs = {
  data: MenuInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateMenuItemArgs = {
  data: MenuItemInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdatePageArgs = {
  data: PageInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateSidebarLayoutArgs = {
  data: SidebarLayoutInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Page = {
  __typename?: 'Page';
  components?: Maybe<Array<Maybe<PageComponentsDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  hierarchy?: Maybe<HierarchyEntityResponse>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<PageRelationResponseCollection>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  metaRobots?: Maybe<Enum_Page_Metarobots>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  previewImage?: Maybe<UploadFileEntityResponse>;
  publicationDate?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  structuredData?: Maybe<Scalars['JSON']['output']>;
  synopsis?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PageLocalizationsArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageComponentsDynamicZone = ComponentContentButtonBar | ComponentContentClientQuote | ComponentContentFaq | ComponentContentHero | ComponentContentImageGrid | ComponentContentImageText | ComponentContentPagePreviewList | ComponentContentPricing | ComponentContentSectionHeadline | ComponentContentSocialProofBar | ComponentContentVideo | ComponentElementsRichText | ComponentElementsSpacer | ComponentLayoutsSidebarLayout | ComponentNavigationLinkList | Error;

export type PageEntity = {
  __typename?: 'PageEntity';
  attributes?: Maybe<Page>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PageEntityResponse = {
  __typename?: 'PageEntityResponse';
  data?: Maybe<PageEntity>;
};

export type PageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection';
  data: Array<PageEntity>;
  meta: ResponseCollectionMeta;
};

export type PageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  hierarchy?: InputMaybe<HierarchyFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PageFiltersInput>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaKeywords?: InputMaybe<StringFilterInput>;
  metaRobots?: InputMaybe<StringFilterInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  path?: InputMaybe<StringFilterInput>;
  publicationDate?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  structuredData?: InputMaybe<JsonFilterInput>;
  synopsis?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
  components?: InputMaybe<Array<Scalars['PageComponentsDynamicZoneInput']['input']>>;
  hierarchy?: InputMaybe<Scalars['ID']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaKeywords?: InputMaybe<Scalars['String']['input']>;
  metaRobots?: InputMaybe<Enum_Page_Metarobots>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  previewImage?: InputMaybe<Scalars['ID']['input']>;
  publicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  structuredData?: InputMaybe<Scalars['JSON']['input']>;
  synopsis?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageRelationResponseCollection = {
  __typename?: 'PageRelationResponseCollection';
  data: Array<PageEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  faq?: Maybe<FaqEntityResponse>;
  faqs?: Maybe<FaqEntityResponseCollection>;
  global?: Maybe<GlobalEntityResponse>;
  hierarchies?: Maybe<HierarchyEntityResponseCollection>;
  hierarchy?: Maybe<HierarchyEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  menu?: Maybe<MenuEntityResponse>;
  menuItem?: Maybe<MenuItemEntityResponse>;
  menuItems?: Maybe<MenuItemEntityResponseCollection>;
  menus?: Maybe<MenuEntityResponseCollection>;
  page?: Maybe<PageEntityResponse>;
  pages?: Maybe<PageEntityResponseCollection>;
  sidebarLayout?: Maybe<SidebarLayoutEntityResponse>;
  sidebarLayouts?: Maybe<SidebarLayoutEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryFaqArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFaqsArgs = {
  filters?: InputMaybe<FaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHierarchiesArgs = {
  filters?: InputMaybe<HierarchyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHierarchyArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMenuArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryMenuItemArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryMenuItemsArgs = {
  filters?: InputMaybe<MenuItemFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMenusArgs = {
  filters?: InputMaybe<MenuFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySidebarLayoutArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QuerySidebarLayoutsArgs = {
  filters?: InputMaybe<SidebarLayoutFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type SidebarLayout = {
  __typename?: 'SidebarLayout';
  contentComponents?: Maybe<Array<Maybe<SidebarLayoutContentComponentsDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<SidebarLayoutRelationResponseCollection>;
  name?: Maybe<Scalars['String']['output']>;
  sidebarComponents?: Maybe<Array<Maybe<SidebarLayoutSidebarComponentsDynamicZone>>>;
  stickySidebar?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type SidebarLayoutLocalizationsArgs = {
  filters?: InputMaybe<SidebarLayoutFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SidebarLayoutContentComponentsDynamicZone = ComponentContentCode | ComponentContentImageGrid | ComponentContentSectionHeadline | ComponentContentVideo | ComponentElementsRichText | Error;

export type SidebarLayoutEntity = {
  __typename?: 'SidebarLayoutEntity';
  attributes?: Maybe<SidebarLayout>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SidebarLayoutEntityResponse = {
  __typename?: 'SidebarLayoutEntityResponse';
  data?: Maybe<SidebarLayoutEntity>;
};

export type SidebarLayoutEntityResponseCollection = {
  __typename?: 'SidebarLayoutEntityResponseCollection';
  data: Array<SidebarLayoutEntity>;
  meta: ResponseCollectionMeta;
};

export type SidebarLayoutFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SidebarLayoutFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<SidebarLayoutFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SidebarLayoutFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SidebarLayoutFiltersInput>>>;
  stickySidebar?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SidebarLayoutInput = {
  contentComponents?: InputMaybe<Array<Scalars['SidebarLayoutContentComponentsDynamicZoneInput']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  sidebarComponents?: InputMaybe<Array<Scalars['SidebarLayoutSidebarComponentsDynamicZoneInput']['input']>>;
  stickySidebar?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SidebarLayoutRelationResponseCollection = {
  __typename?: 'SidebarLayoutRelationResponseCollection';
  data: Array<SidebarLayoutEntity>;
};

export type SidebarLayoutSidebarComponentsDynamicZone = ComponentNavigationLinkList | ComponentNavigationTableOfContents | Error;

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type GlobalFragment = { __typename?: 'GlobalEntity', attributes?: { __typename?: 'Global', twitterHandle?: string | null, Logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null, footer?: Array<{ __typename: 'ComponentElementsRichText', id: string, html?: string | null, richTextAlign?: Enum_Componentelementsrichtext_Align | null } | { __typename: 'ComponentNavigationLinkList', id: string, orientation?: Enum_Componentnavigationlinklist_Orientation | null, linkListHeadline?: string | null, linkListAlign?: Enum_Componentnavigationlinklist_Align | null, links?: Array<{ __typename: 'ComponentNavigationLink', id: string, label?: string | null, description?: string | null, url?: string | null, target?: Enum_Componentnavigationlink_Target | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null, page?: { __typename: 'PageEntityResponse', data?: { __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', path: string } | null } | null } | null } | null> | null } | { __typename?: 'Error' } | null> | null } | null };

export type MenuFragment = { __typename: 'MenuEntity', id?: string | null, attributes?: { __typename?: 'Menu', name?: string | null, menu_items?: { __typename?: 'MenuItemRelationResponseCollection', data: Array<{ __typename?: 'MenuItemEntity', id?: string | null, attributes?: { __typename?: 'MenuItem', label?: string | null, target?: Enum_Menuitem_Target | null, url?: string | null, page?: { __typename: 'PageEntityResponse', data?: { __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', path: string } | null } | null } | null, components?: Array<{ __typename: 'ComponentContentPagePreviewList', id: string, limit?: number | null, hierarchy?: { __typename?: 'HierarchyEntityResponse', data?: { __typename?: 'HierarchyEntity', id?: string | null, childIds?: Array<string | null> | null } | null } | null, pages?: { __typename?: 'PageRelationResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', path: string, publicationDate?: any | null, publishedAt?: any | null, synopsis?: string | null, title?: string | null, previewImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null, hierarchy?: { __typename?: 'HierarchyEntityResponse', data?: { __typename?: 'HierarchyEntity', id?: string | null } | null } | null } | null }> } | null } | { __typename: 'ComponentNavigationLinkList', id: string, orientation?: Enum_Componentnavigationlinklist_Orientation | null, linkListHeadline?: string | null, linkListAlign?: Enum_Componentnavigationlinklist_Align | null, links?: Array<{ __typename: 'ComponentNavigationLink', id: string, label?: string | null, description?: string | null, url?: string | null, target?: Enum_Componentnavigationlink_Target | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null, page?: { __typename: 'PageEntityResponse', data?: { __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', path: string } | null } | null } | null } | null> | null } | { __typename?: 'Error' } | null> | null } | null }> } | null } | null };

export type PagePreviewFragment = { __typename?: 'Page', path: string, publicationDate?: any | null, publishedAt?: any | null, synopsis?: string | null, title?: string | null, previewImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null, hierarchy?: { __typename?: 'HierarchyEntityResponse', data?: { __typename?: 'HierarchyEntity', id?: string | null } | null } | null };

export type ButtonBarFragment = { __typename: 'ComponentContentButtonBar', id: string, align?: Enum_Componentcontentbuttonbar_Align | null, buttons?: Array<{ __typename?: 'ComponentElementsButton', id: string, label?: string | null, target?: Enum_Componentelementsbutton_Target | null, externalUrl?: string | null, style?: Enum_Componentelementsbutton_Style | null, variant?: Enum_Componentelementsbutton_Variant | null, page?: { __typename: 'PageEntityResponse', data?: { __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', path: string } | null } | null } | null } | null> | null };

export type ClientQuoteFragment = { __typename: 'ComponentContentClientQuote', id: string, name?: string | null, position?: string | null, companyName?: string | null, text?: string | null, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null };

export type CodeFragment = { __typename: 'ComponentContentCode', id: string, html?: string | null };

export type FaqFragment = { __typename: 'ComponentContentFaq', id: string, faq?: { __typename?: 'FaqEntityResponse', data?: { __typename?: 'FaqEntity', id?: string | null, attributes?: { __typename?: 'Faq', description?: any | null, questions?: Array<{ __typename?: 'ComponentElementsQuestionAndAnswer', id: string, question: string, answer: any } | null> | null } | null } | null } | null };

export type HeroComponentFragment = { __typename: 'ComponentContentHero', id: string, title?: string | null, subTitle?: string | null, titleColor?: Enum_Componentcontenthero_Titlecolor | null, responsiveImage?: Array<{ __typename: 'ComponentElementsResponsiveImage', id: string, screenSize: Enum_Componentelementsresponsiveimage_Screensize, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } } | null> | null };

export type ImageGridFragment = { __typename: 'ComponentContentImageGrid', id: string, gap?: Enum_Componentcontentimagegrid_Gap | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null }> } | null };

export type ImageTextFragment = { __typename: 'ComponentContentImageText', id: string, textAlign: Enum_Componentcontentimagetext_Textalign, html?: string | null, imagePriority?: boolean | null, mediaPosition: Enum_Componentcontentimagetext_Mediaposition, fixedHeight?: number | null, screenHeight?: boolean | null, imageColumns: number, textColumns: number, headline?: { __typename: 'ComponentElementsHeadline', id: string, text?: string | null, variant?: Enum_Componentelementsheadline_Variant | null, align: Enum_Componentelementsheadline_Align } | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null };

export type PagePreviewListFragment = { __typename: 'ComponentContentPagePreviewList', id: string, limit?: number | null, hierarchy?: { __typename?: 'HierarchyEntityResponse', data?: { __typename?: 'HierarchyEntity', id?: string | null, childIds?: Array<string | null> | null } | null } | null, pages?: { __typename?: 'PageRelationResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', path: string, publicationDate?: any | null, publishedAt?: any | null, synopsis?: string | null, title?: string | null, previewImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null, hierarchy?: { __typename?: 'HierarchyEntityResponse', data?: { __typename?: 'HierarchyEntity', id?: string | null } | null } | null } | null }> } | null };

export type PricingFragment = { __typename: 'ComponentContentPricing', id: string, plans?: Array<{ __typename?: 'ComponentElementsPricingPlan', id: string, price?: string | null, name?: string | null, features?: string | null, href?: string | null, btnLabel?: string | null, highlightedText?: string | null } | null> | null };

export type SectionHeadlineFragment = { __typename: 'ComponentContentSectionHeadline', id: string, useInTableOfContents?: boolean | null, headline?: { __typename: 'ComponentElementsHeadline', id: string, text?: string | null, variant?: Enum_Componentelementsheadline_Variant | null, align: Enum_Componentelementsheadline_Align } | null };

export type SocialProofBarFragment = { __typename: 'ComponentContentSocialProofBar', id: string, html?: string | null, avatars?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null }> } | null };

export type VideoFragment = { __typename: 'ComponentContentVideo', id: string, youtubeId?: string | null, consentBackgroundImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null };

export type ButtonFragment = { __typename?: 'ComponentElementsButton', id: string, label?: string | null, target?: Enum_Componentelementsbutton_Target | null, externalUrl?: string | null, style?: Enum_Componentelementsbutton_Style | null, variant?: Enum_Componentelementsbutton_Variant | null, page?: { __typename: 'PageEntityResponse', data?: { __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', path: string } | null } | null } | null };

export type HeadlineFragment = { __typename: 'ComponentElementsHeadline', id: string, text?: string | null, variant?: Enum_Componentelementsheadline_Variant | null, align: Enum_Componentelementsheadline_Align };

export type PagePathFragment = { __typename: 'PageEntityResponse', data?: { __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', path: string } | null } | null };

export type ResponsiveImageFragment = { __typename: 'ComponentElementsResponsiveImage', id: string, screenSize: Enum_Componentelementsresponsiveimage_Screensize, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } };

export type RichTextFragment = { __typename: 'ComponentElementsRichText', id: string, html?: string | null, richTextAlign?: Enum_Componentelementsrichtext_Align | null };

export type SpacerFragment = { __typename: 'ComponentElementsSpacer', id: string, size?: Enum_Componentelementsspacer_Size | null };

export type SidebarLayoutFragment = { __typename: 'ComponentLayoutsSidebarLayout', id: string, sidebar_layout?: { __typename?: 'SidebarLayoutEntityResponse', data?: { __typename?: 'SidebarLayoutEntity', attributes?: { __typename?: 'SidebarLayout', stickySidebar?: boolean | null, sidebarComponents?: Array<{ __typename: 'ComponentNavigationLinkList', id: string, orientation?: Enum_Componentnavigationlinklist_Orientation | null, linkListHeadline?: string | null, linkListAlign?: Enum_Componentnavigationlinklist_Align | null, links?: Array<{ __typename: 'ComponentNavigationLink', id: string, label?: string | null, description?: string | null, url?: string | null, target?: Enum_Componentnavigationlink_Target | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null, page?: { __typename: 'PageEntityResponse', data?: { __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', path: string } | null } | null } | null } | null> | null } | { __typename: 'ComponentNavigationTableOfContents', id: string, name?: string | null } | { __typename?: 'Error' } | null> | null, contentComponents?: Array<{ __typename: 'ComponentContentCode', id: string, html?: string | null } | { __typename: 'ComponentContentImageGrid', id: string, gap?: Enum_Componentcontentimagegrid_Gap | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null }> } | null } | { __typename: 'ComponentContentSectionHeadline', id: string, useInTableOfContents?: boolean | null, headline?: { __typename: 'ComponentElementsHeadline', id: string, text?: string | null, variant?: Enum_Componentelementsheadline_Variant | null, align: Enum_Componentelementsheadline_Align } | null } | { __typename: 'ComponentContentVideo', id: string, youtubeId?: string | null, consentBackgroundImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null } | { __typename: 'ComponentElementsRichText', id: string, html?: string | null, richTextAlign?: Enum_Componentelementsrichtext_Align | null } | { __typename?: 'Error' } | null> | null } | null } | null } | null };

export type DropdownFragment = { __typename: 'ComponentNavigationDropdown', id: string, links?: Array<{ __typename: 'ComponentNavigationLink', id: string, label?: string | null, description?: string | null, url?: string | null, target?: Enum_Componentnavigationlink_Target | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null, page?: { __typename: 'PageEntityResponse', data?: { __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', path: string } | null } | null } | null } | null> | null };

export type LinkFragment = { __typename: 'ComponentNavigationLink', id: string, label?: string | null, description?: string | null, url?: string | null, target?: Enum_Componentnavigationlink_Target | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null, page?: { __typename: 'PageEntityResponse', data?: { __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', path: string } | null } | null } | null };

export type LinkListFragment = { __typename: 'ComponentNavigationLinkList', id: string, orientation?: Enum_Componentnavigationlinklist_Orientation | null, linkListHeadline?: string | null, linkListAlign?: Enum_Componentnavigationlinklist_Align | null, links?: Array<{ __typename: 'ComponentNavigationLink', id: string, label?: string | null, description?: string | null, url?: string | null, target?: Enum_Componentnavigationlink_Target | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null, page?: { __typename: 'PageEntityResponse', data?: { __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', path: string } | null } | null } | null } | null> | null };

export type TableOfContentsFragment = { __typename: 'ComponentNavigationTableOfContents', id: string, name?: string | null };

export type StrapiImageFragment = { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null };

export type GetPageVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  filters?: InputMaybe<PageFiltersInput>;
  publicationState?: InputMaybe<PublicationState>;
}>;


export type GetPage = { __typename?: 'Query', pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', title?: string | null, path: string, publicationDate?: any | null, publishedAt?: any | null, metaDescription?: string | null, metaRobots?: Enum_Page_Metarobots | null, structuredData?: any | null, metaTitle?: string | null, metaKeywords?: string | null, previewImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null, components?: Array<{ __typename: 'ComponentContentButtonBar', id: string, align?: Enum_Componentcontentbuttonbar_Align | null, buttons?: Array<{ __typename?: 'ComponentElementsButton', id: string, label?: string | null, target?: Enum_Componentelementsbutton_Target | null, externalUrl?: string | null, style?: Enum_Componentelementsbutton_Style | null, variant?: Enum_Componentelementsbutton_Variant | null, page?: { __typename: 'PageEntityResponse', data?: { __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', path: string } | null } | null } | null } | null> | null } | { __typename: 'ComponentContentClientQuote', id: string, name?: string | null, position?: string | null, companyName?: string | null, text?: string | null, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null } | { __typename: 'ComponentContentFaq', id: string, faq?: { __typename?: 'FaqEntityResponse', data?: { __typename?: 'FaqEntity', id?: string | null, attributes?: { __typename?: 'Faq', description?: any | null, questions?: Array<{ __typename?: 'ComponentElementsQuestionAndAnswer', id: string, question: string, answer: any } | null> | null } | null } | null } | null } | { __typename: 'ComponentContentHero', id: string, title?: string | null, subTitle?: string | null, titleColor?: Enum_Componentcontenthero_Titlecolor | null, responsiveImage?: Array<{ __typename: 'ComponentElementsResponsiveImage', id: string, screenSize: Enum_Componentelementsresponsiveimage_Screensize, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } } | null> | null } | { __typename?: 'ComponentContentImageGrid' } | { __typename: 'ComponentContentImageText', id: string, textAlign: Enum_Componentcontentimagetext_Textalign, html?: string | null, imagePriority?: boolean | null, mediaPosition: Enum_Componentcontentimagetext_Mediaposition, fixedHeight?: number | null, screenHeight?: boolean | null, imageColumns: number, textColumns: number, headline?: { __typename: 'ComponentElementsHeadline', id: string, text?: string | null, variant?: Enum_Componentelementsheadline_Variant | null, align: Enum_Componentelementsheadline_Align } | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null } | { __typename: 'ComponentContentPagePreviewList', id: string, limit?: number | null, hierarchy?: { __typename?: 'HierarchyEntityResponse', data?: { __typename?: 'HierarchyEntity', id?: string | null, childIds?: Array<string | null> | null } | null } | null, pages?: { __typename?: 'PageRelationResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', path: string, publicationDate?: any | null, publishedAt?: any | null, synopsis?: string | null, title?: string | null, previewImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null, hierarchy?: { __typename?: 'HierarchyEntityResponse', data?: { __typename?: 'HierarchyEntity', id?: string | null } | null } | null } | null }> } | null } | { __typename: 'ComponentContentPricing', id: string, plans?: Array<{ __typename?: 'ComponentElementsPricingPlan', id: string, price?: string | null, name?: string | null, features?: string | null, href?: string | null, btnLabel?: string | null, highlightedText?: string | null } | null> | null } | { __typename: 'ComponentContentSectionHeadline', id: string, useInTableOfContents?: boolean | null, headline?: { __typename: 'ComponentElementsHeadline', id: string, text?: string | null, variant?: Enum_Componentelementsheadline_Variant | null, align: Enum_Componentelementsheadline_Align } | null } | { __typename: 'ComponentContentSocialProofBar', id: string, html?: string | null, avatars?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null }> } | null } | { __typename: 'ComponentContentVideo', id: string, youtubeId?: string | null, consentBackgroundImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null } | { __typename: 'ComponentElementsRichText', id: string, html?: string | null, richTextAlign?: Enum_Componentelementsrichtext_Align | null } | { __typename: 'ComponentElementsSpacer', id: string, size?: Enum_Componentelementsspacer_Size | null } | { __typename: 'ComponentLayoutsSidebarLayout', id: string, sidebar_layout?: { __typename?: 'SidebarLayoutEntityResponse', data?: { __typename?: 'SidebarLayoutEntity', attributes?: { __typename?: 'SidebarLayout', stickySidebar?: boolean | null, sidebarComponents?: Array<{ __typename: 'ComponentNavigationLinkList', id: string, orientation?: Enum_Componentnavigationlinklist_Orientation | null, linkListHeadline?: string | null, linkListAlign?: Enum_Componentnavigationlinklist_Align | null, links?: Array<{ __typename: 'ComponentNavigationLink', id: string, label?: string | null, description?: string | null, url?: string | null, target?: Enum_Componentnavigationlink_Target | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null, page?: { __typename: 'PageEntityResponse', data?: { __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', path: string } | null } | null } | null } | null> | null } | { __typename: 'ComponentNavigationTableOfContents', id: string, name?: string | null } | { __typename?: 'Error' } | null> | null, contentComponents?: Array<{ __typename: 'ComponentContentCode', id: string, html?: string | null } | { __typename: 'ComponentContentImageGrid', id: string, gap?: Enum_Componentcontentimagegrid_Gap | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null }> } | null } | { __typename: 'ComponentContentSectionHeadline', id: string, useInTableOfContents?: boolean | null, headline?: { __typename: 'ComponentElementsHeadline', id: string, text?: string | null, variant?: Enum_Componentelementsheadline_Variant | null, align: Enum_Componentelementsheadline_Align } | null } | { __typename: 'ComponentContentVideo', id: string, youtubeId?: string | null, consentBackgroundImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null } | { __typename: 'ComponentElementsRichText', id: string, html?: string | null, richTextAlign?: Enum_Componentelementsrichtext_Align | null } | { __typename?: 'Error' } | null> | null } | null } | null } | null } | { __typename: 'ComponentNavigationLinkList', id: string, orientation?: Enum_Componentnavigationlinklist_Orientation | null, linkListHeadline?: string | null, linkListAlign?: Enum_Componentnavigationlinklist_Align | null, links?: Array<{ __typename: 'ComponentNavigationLink', id: string, label?: string | null, description?: string | null, url?: string | null, target?: Enum_Componentnavigationlink_Target | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null, page?: { __typename: 'PageEntityResponse', data?: { __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', path: string } | null } | null } | null } | null> | null } | { __typename?: 'Error' } | null> | null } | null }> } | null };

export type GetPagesVariables = Exact<{
  hierarchyIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  start: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetPages = { __typename?: 'Query', pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', path: string, publicationDate?: any | null, publishedAt?: any | null, synopsis?: string | null, title?: string | null, previewImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null, hierarchy?: { __typename?: 'HierarchyEntityResponse', data?: { __typename?: 'HierarchyEntity', id?: string | null } | null } | null } | null }> } | null };

export type GetWebsiteDataVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetWebsiteData = { __typename?: 'Query', menus?: { __typename?: 'MenuEntityResponseCollection', data: Array<{ __typename: 'MenuEntity', id?: string | null, attributes?: { __typename?: 'Menu', name?: string | null, menu_items?: { __typename?: 'MenuItemRelationResponseCollection', data: Array<{ __typename?: 'MenuItemEntity', id?: string | null, attributes?: { __typename?: 'MenuItem', label?: string | null, target?: Enum_Menuitem_Target | null, url?: string | null, page?: { __typename: 'PageEntityResponse', data?: { __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', path: string } | null } | null } | null, components?: Array<{ __typename: 'ComponentContentPagePreviewList', id: string, limit?: number | null, hierarchy?: { __typename?: 'HierarchyEntityResponse', data?: { __typename?: 'HierarchyEntity', id?: string | null, childIds?: Array<string | null> | null } | null } | null, pages?: { __typename?: 'PageRelationResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', path: string, publicationDate?: any | null, publishedAt?: any | null, synopsis?: string | null, title?: string | null, previewImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null, hierarchy?: { __typename?: 'HierarchyEntityResponse', data?: { __typename?: 'HierarchyEntity', id?: string | null } | null } | null } | null }> } | null } | { __typename: 'ComponentNavigationLinkList', id: string, orientation?: Enum_Componentnavigationlinklist_Orientation | null, linkListHeadline?: string | null, linkListAlign?: Enum_Componentnavigationlinklist_Align | null, links?: Array<{ __typename: 'ComponentNavigationLink', id: string, label?: string | null, description?: string | null, url?: string | null, target?: Enum_Componentnavigationlink_Target | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null, page?: { __typename: 'PageEntityResponse', data?: { __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', path: string } | null } | null } | null } | null> | null } | { __typename?: 'Error' } | null> | null } | null }> } | null } | null }> } | null, global?: { __typename?: 'GlobalEntityResponse', data?: { __typename?: 'GlobalEntity', attributes?: { __typename?: 'Global', twitterHandle?: string | null, Logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null, footer?: Array<{ __typename: 'ComponentElementsRichText', id: string, html?: string | null, richTextAlign?: Enum_Componentelementsrichtext_Align | null } | { __typename: 'ComponentNavigationLinkList', id: string, orientation?: Enum_Componentnavigationlinklist_Orientation | null, linkListHeadline?: string | null, linkListAlign?: Enum_Componentnavigationlinklist_Align | null, links?: Array<{ __typename: 'ComponentNavigationLink', id: string, label?: string | null, description?: string | null, url?: string | null, target?: Enum_Componentnavigationlink_Target | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null, page?: { __typename: 'PageEntityResponse', data?: { __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', path: string } | null } | null } | null } | null> | null } | { __typename?: 'Error' } | null> | null } | null } | null } | null };

export const StrapiImageFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StrapiImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFileEntity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]} as unknown as DocumentNode<StrapiImageFragment, unknown>;
export const PagePathFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PagePathFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageEntityResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]} as unknown as DocumentNode<PagePathFragment, unknown>;
export const LinkFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PagePathFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StrapiImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFileEntity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PagePathFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageEntityResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]} as unknown as DocumentNode<LinkFragment, unknown>;
export const LinkListFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkListFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationLinkList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"linkListHeadline"},"name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"orientation"}},{"kind":"Field","alias":{"kind":"Name","value":"linkListAlign"},"name":{"kind":"Name","value":"align"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StrapiImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFileEntity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PagePathFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageEntityResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PagePathFragment"}}]}}]}}]} as unknown as DocumentNode<LinkListFragment, unknown>;
export const RichTextFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentElementsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"html"}},{"kind":"Field","alias":{"kind":"Name","value":"richTextAlign"},"name":{"kind":"Name","value":"align"}}]}}]} as unknown as DocumentNode<RichTextFragment, unknown>;
export const GlobalFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GlobalFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GlobalEntity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitterHandle"}},{"kind":"Field","name":{"kind":"Name","value":"Logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"footer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationLinkList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkListFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentElementsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StrapiImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFileEntity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PagePathFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageEntityResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PagePathFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkListFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationLinkList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"linkListHeadline"},"name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"orientation"}},{"kind":"Field","alias":{"kind":"Name","value":"linkListAlign"},"name":{"kind":"Name","value":"align"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentElementsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"html"}},{"kind":"Field","alias":{"kind":"Name","value":"richTextAlign"},"name":{"kind":"Name","value":"align"}}]}}]} as unknown as DocumentNode<GlobalFragment, unknown>;
export const PagePreviewFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PagePreviewFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"publicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"synopsis"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"previewImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"hierarchy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StrapiImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFileEntity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]} as unknown as DocumentNode<PagePreviewFragment, unknown>;
export const PagePreviewListFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PagePreviewListFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentPagePreviewList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"childIds"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PagePreviewFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StrapiImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFileEntity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PagePreviewFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"publicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"synopsis"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"previewImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"hierarchy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<PagePreviewListFragment, unknown>;
export const MenuFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuEntity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"menu_items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PagePathFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationLinkList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkListFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentPagePreviewList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PagePreviewListFragment"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StrapiImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFileEntity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PagePathFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageEntityResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PagePathFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PagePreviewFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"publicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"synopsis"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"previewImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"hierarchy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkListFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationLinkList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"linkListHeadline"},"name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"orientation"}},{"kind":"Field","alias":{"kind":"Name","value":"linkListAlign"},"name":{"kind":"Name","value":"align"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PagePreviewListFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentPagePreviewList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"childIds"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PagePreviewFragment"}}]}}]}}]}}]}}]} as unknown as DocumentNode<MenuFragment, unknown>;
export const ButtonFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentElementsButton"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"externalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PagePathFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PagePathFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageEntityResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]} as unknown as DocumentNode<ButtonFragment, unknown>;
export const ButtonBarFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBarFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentButtonBar"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"align"}},{"kind":"Field","name":{"kind":"Name","value":"buttons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PagePathFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageEntityResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentElementsButton"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"externalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PagePathFragment"}}]}}]}}]} as unknown as DocumentNode<ButtonBarFragment, unknown>;
export const ClientQuoteFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ClientQuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentClientQuote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StrapiImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFileEntity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]} as unknown as DocumentNode<ClientQuoteFragment, unknown>;
export const FaqFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FaqFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentFaq"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"faq"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FaqFragment, unknown>;
export const ResponsiveImageFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ResponsiveImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentElementsResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"screenSize"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StrapiImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFileEntity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]} as unknown as DocumentNode<ResponsiveImageFragment, unknown>;
export const HeroComponentFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroComponentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentHero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subTitle"}},{"kind":"Field","name":{"kind":"Name","value":"titleColor"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ResponsiveImageFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StrapiImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFileEntity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ResponsiveImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentElementsResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"screenSize"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}}]}}]} as unknown as DocumentNode<HeroComponentFragment, unknown>;
export const HeadlineFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadlineFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentElementsHeadline"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"align"}}]}}]} as unknown as DocumentNode<HeadlineFragment, unknown>;
export const ImageTextFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentImageText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"textAlign"}},{"kind":"Field","name":{"kind":"Name","value":"html"}},{"kind":"Field","name":{"kind":"Name","value":"imagePriority"}},{"kind":"Field","name":{"kind":"Name","value":"mediaPosition"}},{"kind":"Field","name":{"kind":"Name","value":"fixedHeight"}},{"kind":"Field","name":{"kind":"Name","value":"screenHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageColumns"}},{"kind":"Field","name":{"kind":"Name","value":"textColumns"}},{"kind":"Field","name":{"kind":"Name","value":"headline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeadlineFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadlineFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentElementsHeadline"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"align"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StrapiImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFileEntity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]} as unknown as DocumentNode<ImageTextFragment, unknown>;
export const PricingFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PricingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentPricing"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"plans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"features"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"btnLabel"}},{"kind":"Field","name":{"kind":"Name","value":"highlightedText"}}]}}]}}]} as unknown as DocumentNode<PricingFragment, unknown>;
export const SocialProofBarFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SocialProofBarFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentSocialProofBar"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"html"}},{"kind":"Field","name":{"kind":"Name","value":"avatars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StrapiImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFileEntity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]} as unknown as DocumentNode<SocialProofBarFragment, unknown>;
export const SpacerFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SpacerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentElementsSpacer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}}]} as unknown as DocumentNode<SpacerFragment, unknown>;
export const TableOfContentsFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TableOfContentsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationTableOfContents"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<TableOfContentsFragment, unknown>;
export const CodeFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CodeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentCode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]} as unknown as DocumentNode<CodeFragment, unknown>;
export const ImageGridFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageGridFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentImageGrid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gap"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StrapiImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFileEntity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]} as unknown as DocumentNode<ImageGridFragment, unknown>;
export const SectionHeadlineFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SectionHeadlineFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentSectionHeadline"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"headline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeadlineFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"useInTableOfContents"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadlineFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentElementsHeadline"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"align"}}]}}]} as unknown as DocumentNode<SectionHeadlineFragment, unknown>;
export const VideoFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"youtubeId"}},{"kind":"Field","name":{"kind":"Name","value":"consentBackgroundImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StrapiImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFileEntity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]} as unknown as DocumentNode<VideoFragment, unknown>;
export const SidebarLayoutFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SidebarLayoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentLayoutsSidebarLayout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sidebar_layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stickySidebar"}},{"kind":"Field","name":{"kind":"Name","value":"sidebarComponents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationTableOfContents"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TableOfContentsFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationLinkList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkListFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentComponents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentElementsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentCode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CodeFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentImageGrid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageGridFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentSectionHeadline"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SectionHeadlineFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoFragment"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StrapiImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFileEntity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PagePathFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageEntityResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PagePathFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadlineFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentElementsHeadline"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"align"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TableOfContentsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationTableOfContents"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkListFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationLinkList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"linkListHeadline"},"name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"orientation"}},{"kind":"Field","alias":{"kind":"Name","value":"linkListAlign"},"name":{"kind":"Name","value":"align"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentElementsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"html"}},{"kind":"Field","alias":{"kind":"Name","value":"richTextAlign"},"name":{"kind":"Name","value":"align"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CodeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentCode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageGridFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentImageGrid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gap"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SectionHeadlineFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentSectionHeadline"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"headline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeadlineFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"useInTableOfContents"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"youtubeId"}},{"kind":"Field","name":{"kind":"Name","value":"consentBackgroundImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}}]}}]} as unknown as DocumentNode<SidebarLayoutFragment, unknown>;
export const DropdownFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DropdownFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationDropdown"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StrapiImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFileEntity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PagePathFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageEntityResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PagePathFragment"}}]}}]}}]} as unknown as DocumentNode<DropdownFragment, unknown>;
export const GetPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PageFiltersInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publicationState"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationState"}},"defaultValue":{"kind":"EnumValue","value":"LIVE"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"publicationState"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publicationState"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"publicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"metaRobots"}},{"kind":"Field","name":{"kind":"Name","value":"structuredData"}},{"kind":"Field","name":{"kind":"Name","value":"previewImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaKeywords"}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentButtonBar"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBarFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentClientQuote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ClientQuoteFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentFaq"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FaqFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentPricing"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PricingFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentHero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroComponentFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentImageText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageTextFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentPagePreviewList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PagePreviewListFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentSectionHeadline"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SectionHeadlineFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentSocialProofBar"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialProofBarFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentElementsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentElementsSpacer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SpacerFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentLayoutsSidebarLayout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SidebarLayoutFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationLinkList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkListFragment"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PagePathFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageEntityResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentElementsButton"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"externalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PagePathFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StrapiImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFileEntity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ResponsiveImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentElementsResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"screenSize"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadlineFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentElementsHeadline"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"align"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PagePreviewFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"publicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"synopsis"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"previewImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"hierarchy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TableOfContentsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationTableOfContents"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PagePathFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkListFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationLinkList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"linkListHeadline"},"name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"orientation"}},{"kind":"Field","alias":{"kind":"Name","value":"linkListAlign"},"name":{"kind":"Name","value":"align"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentElementsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"html"}},{"kind":"Field","alias":{"kind":"Name","value":"richTextAlign"},"name":{"kind":"Name","value":"align"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CodeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentCode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageGridFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentImageGrid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gap"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SectionHeadlineFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentSectionHeadline"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"headline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeadlineFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"useInTableOfContents"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"youtubeId"}},{"kind":"Field","name":{"kind":"Name","value":"consentBackgroundImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBarFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentButtonBar"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"align"}},{"kind":"Field","name":{"kind":"Name","value":"buttons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ClientQuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentClientQuote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FaqFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentFaq"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"faq"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PricingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentPricing"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"plans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"features"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"btnLabel"}},{"kind":"Field","name":{"kind":"Name","value":"highlightedText"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroComponentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentHero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subTitle"}},{"kind":"Field","name":{"kind":"Name","value":"titleColor"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ResponsiveImageFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentImageText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"textAlign"}},{"kind":"Field","name":{"kind":"Name","value":"html"}},{"kind":"Field","name":{"kind":"Name","value":"imagePriority"}},{"kind":"Field","name":{"kind":"Name","value":"mediaPosition"}},{"kind":"Field","name":{"kind":"Name","value":"fixedHeight"}},{"kind":"Field","name":{"kind":"Name","value":"screenHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageColumns"}},{"kind":"Field","name":{"kind":"Name","value":"textColumns"}},{"kind":"Field","name":{"kind":"Name","value":"headline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeadlineFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PagePreviewListFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentPagePreviewList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"childIds"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PagePreviewFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SocialProofBarFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentSocialProofBar"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"html"}},{"kind":"Field","name":{"kind":"Name","value":"avatars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SpacerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentElementsSpacer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SidebarLayoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentLayoutsSidebarLayout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sidebar_layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stickySidebar"}},{"kind":"Field","name":{"kind":"Name","value":"sidebarComponents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationTableOfContents"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TableOfContentsFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationLinkList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkListFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentComponents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentElementsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentCode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CodeFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentImageGrid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageGridFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentSectionHeadline"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SectionHeadlineFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoFragment"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPage, GetPageVariables>;
export const GetPagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hierarchyIds"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hierarchy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hierarchyIds"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"publicationDate:desc","block":false},{"kind":"StringValue","value":"publishedAt:desc","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PagePreviewFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StrapiImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFileEntity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PagePreviewFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"publicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"synopsis"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"previewImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"hierarchy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetPages, GetPagesVariables>;
export const GetWebsiteDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getWebsiteData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"main","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"IntValue","value":"0"}},{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"global"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GlobalFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PagePathFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageEntityResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StrapiImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFileEntity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PagePathFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkListFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationLinkList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"linkListHeadline"},"name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"orientation"}},{"kind":"Field","alias":{"kind":"Name","value":"linkListAlign"},"name":{"kind":"Name","value":"align"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PagePreviewFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"publicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"synopsis"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"previewImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"hierarchy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PagePreviewListFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentPagePreviewList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"childIds"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PagePreviewFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentElementsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"html"}},{"kind":"Field","alias":{"kind":"Name","value":"richTextAlign"},"name":{"kind":"Name","value":"align"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuEntity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"menu_items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PagePathFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationLinkList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkListFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContentPagePreviewList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PagePreviewListFragment"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GlobalFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GlobalEntity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitterHandle"}},{"kind":"Field","name":{"kind":"Name","value":"Logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StrapiImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"footer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentNavigationLinkList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkListFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentElementsRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextFragment"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetWebsiteData, GetWebsiteDataVariables>;