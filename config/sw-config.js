module.exports = {
  cache: {
    cacheId: "test-app",
    runtimeCaching: [
      {
        handler: "fastest",
        urlPattern: "/$"
      }
    ],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "test-app",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
