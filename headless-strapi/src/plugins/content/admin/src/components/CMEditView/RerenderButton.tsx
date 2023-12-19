import React, { useState } from "react";
import { useCMEditViewDataManager } from "@strapi/helper-plugin";
import get from "lodash/get";
import { useIntl } from "react-intl";

import { Button } from "@strapi/design-system/Button";
import { Loader } from "@strapi/design-system/Loader";
import Refresh from "@strapi/icons/Refresh";
import Cross from "@strapi/icons/Cross";
import Check from "@strapi/icons/Check";
import { revalidate } from "../../utils/api";
import { getTrad } from "../../utils";

export function RerenderButton(): JSX.Element {
  const { layout, modifiedData } = useCMEditViewDataManager();
  const { formatMessage } = useIntl();
  const [state, setState] = useState<"none" | "success" | "error" | "loading">(
    "none"
  );

  const hasRevalidationEnabled = get(
    layout,
    ["pluginOptions", "content", "revalidation"],
    false
  );
  const handleRevalidationClick = async () => {
    const path = modifiedData.path;
    const locale = modifiedData.locale;

    setState("loading");
    try {
      await revalidate(path, locale);
      setState("success");
    } catch (e: any) {
      console.log("error", e.message);
      setState("error");
    } finally {
      setTimeout(() => {
        setState("none");
      }, 2000);
    }
  };

  if (!hasRevalidationEnabled) return <></>;

  const buttonVariantByState = {
    none: "secondary",
    loading: "secondary",
    success: "success-light",
    error: "danger-light",
  };
  const iconByState = {
    loading: <Loader small />,
    none: <Refresh />,
    success: <Check />,
    error: <Cross />,
  };
  const textByState = {
    success: "Button.success",
    loading: "Button.loading",
    none: "Button.revalidate",
    error: "Button.error",
  };

  return (
    <Button
      onClick={handleRevalidationClick}
      fullWidth
      startIcon={iconByState[state]}
      variant={buttonVariantByState[state]}
    >
      {formatMessage({
        id: getTrad(textByState[state]),
        defaultMessage: "Rerender Page",
      })}
    </Button>
  );
}
