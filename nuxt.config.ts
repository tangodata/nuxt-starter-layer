export default defineNuxtConfig({
  devtools: { enabled: false },

  extends: [
    '@nuxt-themes/docus',
  ],

  modules: [
    // Remove it if you don't use Plausible analytics
    // https://github.com/nuxt-modules/plausible
    //'@nuxtjs/plausible'
  ],
})
