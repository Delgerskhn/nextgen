module.exports = {
  locales: ["mn"],
  defaultLocale: "mn",
  pages: {
    "*": ["auth"],
    "/": ["auth"],
    "rgx:^/auth": ["auth"],
    "/account/profile": ["account"],
    "/account/credentials": ["account"],
  },
  interpolation: {
    prefix: "${",
    suffix: "}",
  },
  loadLocaleFrom: (locale, namespace) =>
    import(`./locales/${locale}/${namespace}`).then((m) => m.default),
};
