import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  css: [
    '~/assets/css/tailwind.css',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    },
    transpile: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/vue-fontawesome'
    ]
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/dayjs'
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.APP_API_DOMAIN
    }
  }
})
