import {
  Enum_Componentelementsspacer_Spacebottom,
  Enum_Componentelementsspacer_Spacetop,
  SpacerFragment,
} from "@/graphql/generated/graphql";
import React from "react";

function Spacer({ spaceBottom, spaceTop }: SpacerFragment) {
  return (
    <div
      className={`
    ${spaceTop === Enum_Componentelementsspacer_Spacetop.Small ? `mt-8` : ""}
    ${spaceTop === Enum_Componentelementsspacer_Spacetop.Medium ? `mt-24` : ""}
    ${spaceTop === Enum_Componentelementsspacer_Spacetop.Large ? `mt-48` : ""}
    ${
      spaceBottom === Enum_Componentelementsspacer_Spacebottom.Large
        ? `mb-8`
        : ""
    }
    ${
      spaceBottom === Enum_Componentelementsspacer_Spacebottom.Large
        ? `mb-24`
        : ""
    }
    ${
      spaceBottom === Enum_Componentelementsspacer_Spacebottom.Large
        ? `mb-48`
        : ""
    }
    
  `.trim()}
    />
  );
}

export { Spacer };
