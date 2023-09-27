// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css : ['~/assets/css/main.scss'],
  modules: ["@unocss/nuxt", "nuxt-swiper", "@pinia/nuxt", "nuxt-icon"],
  app: {
    head: {
      title: "Library Market | Golden",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico?v=2" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
        },
      ],
    },
  },
  swiper: {
    // Swiper options
    //----------------------
    prefix: "Swiper",
    styleLang: "css",
    modules: ["navigation", "pagination"], // all modules are imported by default
  },
});
