// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push("cjs");
config.resolver.sourceExts.push("js");
config.resolver.sourceExts.push("json");
config.resolver.sourceExts.push("ts");
config.resolver.sourceExts.push("tsx");

 module.exports = config;