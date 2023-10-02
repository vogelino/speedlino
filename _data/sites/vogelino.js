module.exports = {
  name: "vogelino.com", // optional, falls back to object key
  description: "Lucas’s Personal web site",
  // skip if localhost
  // skip if this is a new fork of the speedlify (not Zach’s)
  skip: false,
  options: {
    frequency: 60 * 23, // 23 hours
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: "site",
  },
  urls: [
    "https://vogelino.com/",
    "https://vogelino.com/hidden-perspectives",
    "https://vogelino.com/design-job-2030",
    "https://vogelino.com/letter-stories-raoul-hausmann",
    "https://vogelino.com/home-heat-control-app",
    "https://vogelino.com/collaborative-solution-oriented-app",
    "https://vogelino.com/bettina-bummelt-ebook-for-children",
    "https://vogelino.com/multi-generational-living-platform",
    "https://vogelino.com/open-circle-circular-economy-platform",
  ],
};
