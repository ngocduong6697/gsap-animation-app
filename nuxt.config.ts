// https://nuxt.com/docs/api/configuration/nuxt-config

const BASE_URL = process.env.VITE_APP_BASE_URL;
const API_URL = process.env.VITE_APP_API_URL;

export default defineNuxtConfig({
  devServer: {
    port: 4000,
    host: BASE_URL,
  },
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
