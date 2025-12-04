/// <reference types="vite/client" />

declare module "virtual:vueless/vue-i18n" {
  import type { I18n } from "vue-i18n";
  export type { I18n };
  export type VueMessageType = Record<string, any>;
}
