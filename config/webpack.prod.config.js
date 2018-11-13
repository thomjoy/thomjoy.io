/* eslint-disable */
const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const baseConfig = require("./webpack.base.config");

// Production module exports
module.exports = [
  merge(baseConfig, {
    mode: "production",
    devtool: "source-map"
  })
];
