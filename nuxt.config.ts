// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  runtimeConfig: {
    public: {
      serverApiKey: "",
      appId: "",
      db: "",
      collection: "",
      googleAnalyticsId: "",
    },
  },
  app: {
    head: {
      title: "Resource Planner",
      meta: [
        {
          name: "description",
          content:
            "We assist businesses in achieving growth, solving problems, enhancing productivity, and optimising efficiency through the application of AI, Automation, and Digital technologies.",
        },
      ],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/logo-saveefforts-2.png" },
      ],
    },
  },
  image: {
    provider: "netlify",
  },
  plugins: [],
});
