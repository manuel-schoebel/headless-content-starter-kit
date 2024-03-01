import Image from "next/image";
import { getImageUrl } from "@/lib/strapi";
import { Container } from "@/components/layout/Container";
import { Menu } from "@/components/navigation/Menu/Menu";
import { DarkModeToggleBtn } from "@/components/actions/DarkModeToggleBtn";
import { GlobalContextProvider } from "@/context/globalContext";
import { ConsentManager } from "@/components/actions/ConsentManager";
import { config } from "@/config";
import { ComponentRenderer } from "@/components/ComponentRenderer";
import { componentMap } from "@/config/componentMap";
import { draftMode } from "next/headers";
import { getWebsiteData } from "@/lib/api/getWebsiteData";
import { ILayoutProps } from "@/types";

export default async function SlugLayout({ children, params }: ILayoutProps) {
  const { locale } = params;
  const { isEnabled } = draftMode();
  const websiteData = await getWebsiteData(locale);

  const logo = websiteData?.global?.attributes?.Logo?.data?.attributes;
  const footerComponents = websiteData?.global?.attributes?.footer;
  const mainMenu = websiteData?.mainNavigation;

  return (
    <>
      {isEnabled && (
        <div className="absolute top-0 left-0 right-0 bg-red-500 text-white p-1 text-xs text-center">
          Draft Mode
        </div>
      )}
      <GlobalContextProvider>
        <ConsentManager
          options={{
            testing: true,
            cookieDomain: config.consent.cookieDomain,
            services: [
              {
                purposes: ["content"],
                name: "youtube",
                contextualConsentOnly: true,
              },
            ],
          }}
        ></ConsentManager>
        <div className="flex flex-col pt-4 h-full">
          <Container className="flex items-center mb-4">
            <div className="flex gap-2 items-center md:mr-24">
              {logo?.url && (
                <Image
                  className="rounded-full mr-4"
                  alt={logo?.alternativeText || "Logo"}
                  src={getImageUrl(logo.url)}
                  width={60}
                  height={60}
                />
              )}
              <div className="flex gap-x-2 flex-wrap md:flex-nowrap">
                <span className="font-source font-normal uppercase tracking-widest ">
                  Manuel
                </span>
                <span className="font-argentum font-black uppercase tracking-widest">
                  Schoebel
                </span>
              </div>
            </div>
            {mainMenu && (
              <Menu {...mainMenu}>
                <DarkModeToggleBtn />
              </Menu>
            )}
          </Container>
          <main className="flex-grow ">{children}</main>
          <div className="flex flex-col mt-12 py-8 justify-end bg-gray-200 dark:bg-stone-800">
            <Container>
              <ComponentRenderer
                components={footerComponents || []}
                componentMap={componentMap}
              />
              <div className="text-center text-xs">
                ©️ {new Date().getFullYear()} Digitale Kumpel GmbH. All rights
                reserved.
              </div>
            </Container>
          </div>
        </div>
      </GlobalContextProvider>
    </>
  );
}
