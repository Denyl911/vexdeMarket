// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'maz-ui/nuxt'],
  mazUi: {
    injectUseToast: true,
  },
  ssr: false,
  app: {
    baseURL: '/vexdeMarket/',
    buildAssetsDir: '/assets/',
  },
});
