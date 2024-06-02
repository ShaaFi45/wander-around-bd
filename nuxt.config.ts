// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    '~/plugins/axios'
  ],
  components
  : [
      {
        path
  : '~/components',
        pathPrefix
  : false,    },
    ],
   modules: ['@nuxtjs/tailwindcss']
})
