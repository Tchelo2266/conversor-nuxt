// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
//   modules: [
//     // Simple usage
//     ['@nuxtjs/google-adsense', {
//       id: 'ca-pub-4371041600593889'
//     }]
//  ],
  app: {
    head: {
      script: [
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
          async: true,
          'data-ad-client': 'ca-pub-4371041600593889', // Substitua pelo seu ID do AdSense
        },
      ],
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '@/assets/css/main.css'
  ],
  components: true,
})
