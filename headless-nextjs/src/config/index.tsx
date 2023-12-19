import { local } from "./environments/local";

const environmentConfigs = {
  local,
};

const environment =
  environmentConfigs[(process.env.NEXT_PUBLIC_ENV as "local") || "local"];

export const config: any = {
  ...environment,
};
