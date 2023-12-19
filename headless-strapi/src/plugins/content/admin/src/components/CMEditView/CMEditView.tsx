import React from "react";

import { RerenderButton } from "./RerenderButton";
import { PreviewButton } from "./PreviewButton";
import { DisablePreviewButton } from "./DisablePreviewButton";

export function CMEditView(props: any): JSX.Element {
  return (
    <>
      <PreviewButton />
      <DisablePreviewButton />
      <RerenderButton />
    </>
  );
}
