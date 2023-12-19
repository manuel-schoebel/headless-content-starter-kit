import React, { useState } from "react";
import { useCMEditViewDataManager } from "@strapi/helper-plugin";
import get from "lodash/get";
import { useIntl } from "react-intl";

import { Button } from "@strapi/design-system/Button";
import { Loader } from "@strapi/design-system/Loader";
import Cross from "@strapi/icons/Cross";
import Check from "@strapi/icons/Check";
import Link from "@strapi/icons/Link";
import { preview } from "../../utils/api";
import { getTrad } from "../../utils";

export function PreviewButton(): JSX.Element {
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

  const handleOpenPreviewClick = async () => {
    // load path
    let param = modifiedData.path;
    const locale = modifiedData.locale;

    setState("loading");
    try {
      const response = await preview(param, locale);
      setState("success");
      if (response?.data?.previewUrl) {
        window.open(response?.data?.previewUrl, "_blank");
      }
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
    none: <Link />,
    success: <Check />,
    error: <Cross />,
  };
  const textByState = {
    success: "Button.success",
    loading: "Button.loading",
    none: "Button.preview",
    error: "Button.error",
  };

  return (
    <Button
      onClick={handleOpenPreviewClick}
      fullWidth
      startIcon={iconByState[state]}
      variant={buttonVariantByState[state]}
    >
      {formatMessage({
        id: getTrad(textByState[state]),
        defaultMessage: "Open Preview",
      })}
    </Button>
  );
}
