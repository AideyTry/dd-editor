/*
 * @Author: Aiden
 * @Date: 2021-01-16 23:03:43
 * @LastEditTime: 2021-01-16 23:35:04
 * @LastEditors: Aiden
 * @Description: 
 */
const custom = require("../config/webpack.config.js")();

module.exports = {
  "stories": ["../src/**/*.stories.@(mdx)", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: custom.module.rules,
      },
    };
  },
};
