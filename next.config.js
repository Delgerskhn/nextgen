const nextTranslate = require("next-translate");

const nextConfig = {
  distDir: "build",
  eslint: {
    // We'll want to take this out once we fix the eslint errors
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
};

module.exports = nextTranslate(nextConfig);
