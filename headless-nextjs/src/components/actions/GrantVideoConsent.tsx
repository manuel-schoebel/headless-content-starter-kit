import { Maybe, UploadFileEntityResponse } from "@/graphql/generated/graphql";
import { useLocale } from "@/hooks/useLocale";
import Image from "next/image";
import { Button } from "./Button";
import { getImageUrl } from "@/lib/strapi";
import { PlayIcon } from "@heroicons/react/24/solid";
import { Paragraph } from "../elements/Paragraph";
import { Headline } from "../elements/Headline";

interface IGrantVideoConsent {
  consentBackgroundImage: Maybe<UploadFileEntityResponse> | undefined;
  onOneTimeConsentClick: () => void;
  onAlwaysConsentClick: () => void;
}

export function GrantVideoConsent({
  onOneTimeConsentClick,
  onAlwaysConsentClick,
  consentBackgroundImage,
}: IGrantVideoConsent) {
  return (
    <div
      className={`w-full relative text-center bg-gray-200 h-full grid grid-cols-1 place-content-center`}
    >
      {consentBackgroundImage?.data?.attributes?.url && (
        <>
          <Image
            alt={
              consentBackgroundImage?.data?.attributes?.alternativeText || ""
            }
            width={consentBackgroundImage?.data?.attributes?.width as number}
            height={consentBackgroundImage?.data?.attributes?.height as number}
            src={getImageUrl(
              consentBackgroundImage?.data?.attributes?.url || ""
            )}
            className="inset-0 object-cover w-full h-full"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 py-2 px-6 rounded-lg">
            <PlayIcon className="w-12 h-12 text-white" />
          </div>
        </>
      )}
      {!consentBackgroundImage?.data?.attributes?.url && (
        <div className="w-full h-96" />
      )}
      <div className={`flex flex-col justify-end absolute top-0 bottom-0`}>
        <div className="px-2 md:px-8 py-2 bg-gray-200 dark:bg-gray-600 bg-opacity-80 dark:bg-opacity-80">
          <Headline variant="h3" className="text-left">
            We need your consent
          </Headline>
          <p className="text-left">
            This content is provided by YouTube. If you activate the content,
            personal data may be processed and cookies may be set.
          </p>
          <div>
            <div className="max-w-32 mt-2 flex justify-center gap-8">
              <Button onClick={onOneTimeConsentClick} variant="outlined">
                Accept
              </Button>
              <Button onClick={onAlwaysConsentClick}>
                Always accept for YouTube!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
