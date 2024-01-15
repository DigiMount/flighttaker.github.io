// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    css: ['~/assets/css/main.css'],
    runtimeConfig: {
      public: {
        //api 
        // backendUrl: "http://localhost:8000",
        multipleShop: "false",
        backendUrl: "https://api.meds.digimountltd.com",
        apiVersion: "/api/v1",
        frontendUrl: "http://localhost:3000",
        //local
        //type_page_for
        hrefLandingMerchant: "https://www.digimountltd.com/",
        //type_page_for
        hrefLandingRider: "https://www.digimountltd.com/",
        //type_page_for
        hrefLandingDoner: "https://www.digimountltd.com/",

         //type_page_for
         hrefLandingKachaBazarGrocery: "https://www.digimountltd.com/",
      },
    },
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      modules: [
        '@pinia/nuxt',
      ],
      
      
})

