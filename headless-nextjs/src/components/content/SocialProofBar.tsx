import { SocialProofBarFragment } from "@/graphql/generated/graphql";
import React, { Fragment } from "react";
import { Avatar } from "../elements/Avatar";
import { getImageUrl } from "@/lib/strapi";
import { Container } from "../layout/Container";

function SocialProofBar({ avatars, html }: SocialProofBarFragment) {
  return (
    <Container className="flex flex-wrap justify-center items-center gap-4 my-12">
      <div className="flex -space-x-4 overflow-hidden">
        {avatars?.data &&
          avatars.data?.map((avatar) => {
            if (!avatar?.attributes?.url) return <></>;
            return (
              <Avatar
                key={avatar.id}
                alt={avatar?.attributes?.alternativeText || ""}
                src={getImageUrl(avatar?.attributes?.url)}
              />
            );
          })}
      </div>
      <div
        className="text-center"
        dangerouslySetInnerHTML={{ __html: html || "" }}
      />
    </Container>
  );
}

export { SocialProofBar };
