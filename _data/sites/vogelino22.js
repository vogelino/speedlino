module.exports = {
  name: "vogelino22.vercel.app", // optional, falls back to object key
  description: "Lucas’s Personal future web site",
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
    "https://vogelino22.vercel.app/",
    "https://vogelino22.vercel.app/about/",
    "https://vogelino22.vercel.app/inspirations/",
    "https://vogelino22.vercel.app/inspirations/2/",
    "https://vogelino22.vercel.app/inspirations/3/",
    "https://vogelino22.vercel.app/inspirations/4/",
    "https://vogelino22.vercel.app/inspirations/5/",
    "https://vogelino22.vercel.app/inspirations/6/",
    "https://vogelino22.vercel.app/inspirations/7/",
    "https://vogelino22.vercel.app/projects/airbnb-vs-berlin/",
    "https://vogelino22.vercel.app/projects/bdrive/",
    "https://vogelino22.vercel.app/projects/charlotte-stuby/",
    "https://vogelino22.vercel.app/projects/design-job-2030/",
    "https://vogelino22.vercel.app/projects/faf/",
    "https://vogelino22.vercel.app/projects/hidden-perspectives/",
    "https://vogelino22.vercel.app/projects/hilf-mir-berlin/",
    "https://vogelino22.vercel.app/projects/letterstories/",
    "https://vogelino22.vercel.app/projects/multigen-living/",
    "https://vogelino22.vercel.app/projects/open-circle/",
    "https://vogelino22.vercel.app/projects/public-design/",
    "https://vogelino22.vercel.app/projects/refreshment-map/",
    "https://vogelino22.vercel.app/projects/stadtpuls/",
    "https://vogelino22.vercel.app/projects/ubermetrics/",
  ],
};
