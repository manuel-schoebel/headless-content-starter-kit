import {
  Enum_Componentelementsresponsiveimage_Screensize,
  ComponentElementsResponsiveImage,
} from "@/graphql/generated/graphql";

const orderedScreenSizes = [
  Enum_Componentelementsresponsiveimage_Screensize.SmallMobile,
  Enum_Componentelementsresponsiveimage_Screensize.MediumMobile,
  Enum_Componentelementsresponsiveimage_Screensize.LargeMobile,
  Enum_Componentelementsresponsiveimage_Screensize.Tablet,
  Enum_Componentelementsresponsiveimage_Screensize.Desktop,
];

const classes = {
  small_mobile: {
    self: "",
    larger: "sm:hidden",
  },
  medium_mobile: {
    self: "hidden sm:inline",
    larger: "md:hidden",
  },
  large_mobile: {
    self: "hidden md:inline",
    larger: "lg:hidden",
  },
  tablet: {
    self: "hidden lg:inline",
    larger: "xl:hidden",
  },
  desktop: { self: "hidden xl:inline", larger: "" },
};

export function getNextLarger(
  image: ComponentElementsResponsiveImage,
  images: ComponentElementsResponsiveImage[]
) {
  const startIndex = orderedScreenSizes.indexOf(image.screenSize) + 1;
  for (let i = startIndex; i < orderedScreenSizes.length; i++) {
    const foundImage = images.find((image) => {
      return image.screenSize === orderedScreenSizes[i];
    });
    if (foundImage) {
      return foundImage;
    }
  }
  return null;
}

export function getNextSmaller(
  image: ComponentElementsResponsiveImage,
  images: ComponentElementsResponsiveImage[]
) {
  const reversed = orderedScreenSizes.slice().reverse();
  const startIndex = reversed.indexOf(image.screenSize) + 1;
  for (let i = startIndex; i < reversed.length; i++) {
    const foundImage = images.find((image) => {
      return image.screenSize === reversed[i];
    });
    if (foundImage) {
      return foundImage;
    }
  }
  return null;
}

export function getResponsiveImageClasses(
  images: ComponentElementsResponsiveImage[]
) {
  const response = {} as Record<
    Enum_Componentelementsresponsiveimage_Screensize,
    string
  >;

  // those screenSizes needs to exist
  images.forEach((i) => {
    response[i.screenSize] = "";
    // get smallest existing for this image
    const nextSmallerImage = getNextSmaller(i, images);
    if (nextSmallerImage) {
      const nextSmallerIndex = orderedScreenSizes.indexOf(
        nextSmallerImage.screenSize
      );
      if (orderedScreenSizes[nextSmallerIndex + 1]) {
        response[i.screenSize] =
          classes[orderedScreenSizes[nextSmallerIndex + 1]].self || "";
      }
    } else {
      // is there a larger one?
      const nextLarger = getNextLarger(i, images);
      if (nextLarger) {
        //response[i.screenSize] = classes[i.screenSize].self;
      } else {
        response[i.screenSize] = "";
      }
    }

    const nextLarger = getNextLarger(i, images);
    if (nextLarger) {
      response[i.screenSize] = (
        response[i.screenSize] +
        " " +
        classes[i.screenSize].larger
      ).trim();
    }
  });

  return response;
}
