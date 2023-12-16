// https://nuxt.com/docs/api/configuration/nuxt-config

import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);
const API_URL = process.env.BASE_API_URL;

export default defineNuxtConfig({
  devtools: { enabled: true },
  dev: process.env.NODE_ENV !== "production",
  vite: {
    define: {
      API_URL: JSON.stringify(API_URL),
    },
  },
  // app config
  app: {
    // global transition
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  typescript: {
    strict: true,
  },
  // modules
  modules: [
    // styling & ui
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/content",

    // todo: feat/localization
    // '@nuxtjs/i18n'
  ],
});
