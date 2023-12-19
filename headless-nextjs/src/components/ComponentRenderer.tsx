import { ILocales } from "@/config/i18n";
import React from "react";

interface IComponentRenderer {
  components: any[];
  componentMapOverrides?: any;
  componentMap?: any;
  locale?: ILocales;
}

export function ComponentRenderer({
  components,
  componentMap,
  locale,
}: IComponentRenderer) {
  if (!components || components.length === 0) {
    return <p>No components to render</p>;
  }

  return (
    <>
      {components.map((componentData) => {
        const { __typename, id } = componentData;
        if (!__typename) return <p>no __typename</p>;
        if (!id) return <p>no id</p>;

        const componentKey = `${__typename}_${id}`;
        if (!componentMap[__typename])
          return (
            <p key={componentKey}>
              {`Component ${__typename} was used but has not been implemented
            yet.`}
            </p>
          );
        const Comp = componentMap[__typename];

        return <Comp key={componentKey} {...componentData} locale={locale} />;
      })}
    </>
  );
}
