// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    '~/plugins/axios'
  ],
   modules: ['@nuxtjs/tailwindcss']
})
