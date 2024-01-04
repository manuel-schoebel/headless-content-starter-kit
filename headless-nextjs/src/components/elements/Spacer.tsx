import {
  Enum_Componentelementsspacer_Size,
  SpacerFragment,
} from "@/graphql/generated/graphql";
import React from "react";

function Spacer({ size }: SpacerFragment) {
  return (
    <div
      className={`
    ${size === Enum_Componentelementsspacer_Size.Small ? `mt-8` : ""}
    ${size === Enum_Componentelementsspacer_Size.Medium ? `mt-24` : ""}
    ${size === Enum_Componentelementsspacer_Size.Large ? `mt-48` : ""}
    
  `.trim()}
    />
  );
}

export { Spacer };
