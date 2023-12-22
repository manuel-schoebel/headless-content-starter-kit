import {
  ButtonBarFragment,
  Enum_Componentcontentbuttonbar_Align,
} from "@/graphql/generated/graphql";
import React, { Fragment } from "react";
import { LinkButton } from "@/components/navigation/LinkButton";
import { getLinkButtonProps } from "@/lib/strapi";
import { Container } from "@/components/layout/Container";

function ButtonBar({ align, buttons }: ButtonBarFragment) {
  return (
    <Container
      className={`flex flex-wrap gap-8 ${
        align === Enum_Componentcontentbuttonbar_Align.Center &&
        "justify-center"
      }`}
    >
      {buttons?.map((button) => (
        <Fragment key={button?.id}>
          {button && (
            <LinkButton {...getLinkButtonProps(button)}>
              {button.label}
            </LinkButton>
          )}
        </Fragment>
      ))}
    </Container>
  );
}

export { ButtonBar };
