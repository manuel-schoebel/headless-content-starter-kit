"use client";

import { templateConfig } from "@/config/klaro";
import { useGlobal } from "@/context/globalContext";
import isArray from "lodash/isArray";
import Script from "next/script";

let klaroConf: any = templateConfig;

declare global {
  interface Window {
    klaro: any;
    klaroConfig: any;
  }
}

export enum ConsentPurpose {
  ANALYTICS = "analytics",
  SECURITY = "security",
  LIVECHAT = "livechat",
  ADVERTISING = "advertising",
  STYLING = "styling",
}

export function ConsentManager(props: any) {
  const { options, children = {} } = props;
  const { setConsentManagerInitialized } = useGlobal();

  klaroConf = {
    ...klaroConf,
    ...options,
  };

  const scripts = isArray(children?.props?.children)
    ? children?.props?.children
    : children?.props?.children
    ? [children?.props?.children]
    : [];

  const requiredProps = ["data-name", "data-title", "data-purposes"];

  if (
    scripts.some((c: any) => {
      return requiredProps.some((p) => !Object.keys(c?.props).includes(p));
    })
  ) {
    console.warn(
      'At least one of the scripts does not have all the required properties: "data-name", "data-title", "data-purposes"'
    );
  }

  const loadKlaro = () => {
    if (typeof window === "undefined") {
      return;
    }
    let newProps: any[] = [];
    for (const service of scripts) {
      const prop = Object.keys(service.props).reduce(
        (acc: any, curr: any) => {
          return !curr.startsWith("data-")
            ? acc
            : { ...acc, [curr.split("data-")[1]]: service.props[curr] };
        },

        {}
      );
      newProps.push(prop);
    }

    klaroConf.services = [...klaroConf.services, ...newProps];

    // since you cannot pass a regexp directly as a prop
    // we need to transform all that come as
    // { type: "regexp", value: '/expression/' } and transform
    // them to a regexp so klaro can use it
    klaroConf.services = klaroConf.services.map((s: any) => {
      const service = s;
      if (service.cookies) {
        service.cookies = service.cookies.map((c: any) => {
          if (c?.type === "regexp") {
            return new RegExp(c.value);
          }
          return c;
        });
      }
      return service;
    });
    window.klaroConfig = klaroConf;
    let manager;
    try {
      manager = getConsentManager();
    } catch (e) {
      console.warn("error getting consent manager", e);
    }
    // never once executed
    if (Object.keys(manager.executedOnce).length === 0 && !options.testing) {
      window.klaro.show(klaroConf);
    }
    setConsentManagerInitialized(true);
  };

  return (
    <>
      <Script
        src="https://cdn.kiprotect.com/klaro/v0.7/klaro.js"
        onLoad={loadKlaro}
      />
    </>
  );
}

export function getConsentManager() {
  if (typeof window === "undefined") return null;
  if (!window.klaro) return null;
  return window.klaro.getManager(klaroConf);
}
