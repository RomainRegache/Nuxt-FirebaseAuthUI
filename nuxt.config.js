import colors from "vuetify/es5/util/colors";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - nuxt-firebase",
    title: "nuxt-firebase",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/firebase",
      {/*
        config: {
          apiKey: "AIzaSyA9j9hOaUk-eIpQd_seFyg4ZjjzzazQQVs",
          authDomain: "reservation-place.firebaseapp.com",
          projectId: "reservation-place",
          storageBucket: "reservation-place.appspot.com",
          messagingSenderId: "690311015165",
          appId: "1:690311015165:web:5232986e7a19f35c28ec94",
          measurementId: "G-PTKV21W9ZV",
          databaseURL: "https://reservation-place-default-rtdb.europe-west1.firebasedatabase.app/"
        },
        services: {
          auth: {
            initialize: {
              onAuthStateChangedMutation: "ON_AUTH_STATE_CHANGED_MUTATION",
            },
            database: {
              location: "https://reservation-place-default-rtdb.europe-west1.firebasedatabase.app/"
            }
          },
        },*/
        config: {
          apiKey: "AIzaSyACzjFNg_jHIP1lklThhasmY5kXB9t2MnI",
          authDomain: "lmbackyard.firebaseapp.com",
          databaseURL: "https://lmbackyard-default-rtdb.europe-west1.firebasedatabase.app",
          projectId: "lmbackyard",
          storageBucket: "lmbackyard.appspot.com",
          messagingSenderId: "581546464216",
          appId: "1:581546464216:web:0a3977ccf5daa9ad7598ad",
          measurementId: "G-552YG7Q05Q",
          databaseURL: "https://lmbackyard-default-rtdb.europe-west1.firebasedatabase.app/"
        },
        services: {
          auth: {
            initialize: {
              onAuthStateChangedMutation: "ON_AUTH_STATE_CHANGED_MUTATION",
            },
            database: {
              location: "https://lmbackyard-default-rtdb.europe-west1.firebasedatabase.app/"
            }
          },
        },
      },
    ],
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
