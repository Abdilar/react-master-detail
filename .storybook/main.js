module.exports = {
  core: {
    builder: "webpack5",
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
    "@storybook/preset-scss",
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify")
    }

    return config;
  }
}
