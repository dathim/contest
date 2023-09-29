import * as config from "./default.config.json";

export const defaultConfig: JSON = config as unknown as JSON;
export type ConfigType = typeof config;