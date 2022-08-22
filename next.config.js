/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media.rawg.io"],
  },
};

const withTM = require("next-transpile-modules")(["react-icons"]);

module.exports = withTM(nextConfig);
