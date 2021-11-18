export default {
  target: "static",
  head: {
    title: "Артократия",
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: 'Аристократ внутри - аристократ снаружи' },
      { hid: "author", name: "author", content: "github.com/SugarF0x" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }],
  },
  css: ["~/assets/global.sass"],
  plugins: ["@/plugins/fragment.ts"],
  components: true,
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/vuetify",
    "@nuxtjs/composition-api/module",
    "@nuxt/image",
    "nuxt-compress",
    ["nuxt-storm", { nested: true, alias: true }],
  ],
  modules: ["@nuxtjs/robots", "@nuxtjs/sitemap"],
  robots: {},
  sitemap: {
    hostname: "https://artocracy.sugarfox.ru",
  },
  content: {},
  image: {
    dir: "assets/img",
  },
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
  },
  build: {},
  generate: {
    interval: 1000,
  },
}
