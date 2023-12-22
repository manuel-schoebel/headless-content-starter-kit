"use client";
import { useGlobal } from "@/context/globalContext";
import {
  UploadFileEntityResponse,
  VideoFragment,
} from "@/graphql/generated/graphql";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { getConsentManager } from "@/components/actions/ConsentManager";
import { GrantVideoConsent } from "@/components/actions/GrantVideoConsent";

function Video({ consentBackgroundImage, youtubeId }: VideoFragment) {
  const { isConsentManagerInitialized } = useGlobal();
  const [hasConsent, setHasConsent] = useState(false);
  function handleOneTimeConsent() {
    setHasConsent(true);
  }

  function handleAlwaysConsent() {
    getConsentManager().updateConsent("youtube", true);
  }

  useEffect(() => {
    if (!isConsentManagerInitialized) return;
    const consentManager = getConsentManager();
    const consentWatcher = {
      update(_obj: any, _name: any, data: any) {
        if (data.youtube) {
          setHasConsent(true);
          consentManager.saveConsents();
        }
      },
    };
    consentManager.watch(consentWatcher);

    const consent = consentManager?.getConsent("youtube");
    if (consent) {
      setHasConsent(true);
    }
    return () => {
      consentManager.unwatch(consentWatcher);
    };
  }, [isConsentManagerInitialized]);

  return (
    <div className="w-full max-w-[640px]">
      {youtubeId && hasConsent && (
        <YouTube
          iframeClassName="aspect-w-16 aspect-h-9 w-full"
          opts={{
            height: "390",
            width: "640",
          }}
          videoId={youtubeId}
        />
      )}
      {youtubeId && !hasConsent && (
        <GrantVideoConsent
          onOneTimeConsentClick={handleOneTimeConsent}
          onAlwaysConsentClick={handleAlwaysConsent}
          consentBackgroundImage={
            consentBackgroundImage as UploadFileEntityResponse
          }
        />
      )}
    </div>
  );
}

export { Video };
