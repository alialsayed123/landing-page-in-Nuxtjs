export default defineNuxtConfig({
  ssr: false,

  devServer: {
    host: 'localhost',
    port: 6060,
  },

  devtools: { enabled: true },

  css: [
    '@/assets/scss/main.scss',
    'animate.css/animate.min.css',
    '@/assets/scss/tailwind.scss',
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    'vue-toastification/dist/index.css',
  ],

  modules: ['nuxt-icons', '@nuxt/image', 'nuxt-swiper','@pinia/nuxt'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    optimizeDeps: {
      exclude: ['bootstrap'],
    },
  },

  app: {
    head: {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
          type: 'text/javascript',
        },
      ],
    },
  },

  build: {
    transpile: ['vue-toastification'],
  },

  image: {
    dir: 'assets/images',
  },

  compatibilityDate: '2024-08-25',
});