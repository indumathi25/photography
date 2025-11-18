import { defineUnlighthouseConfig } from 'unlighthouse/config';

export default defineUnlighthouseConfig({
  // Keep single-worker puppeteer cluster to reduce flakiness in CI
  puppeteerClusterOptions: {
    maxConcurrency: 1,
  },

  // Scanner defaults used in CI: mobile throttling gives realistic scores
  scanner: {
    device: 'mobile',
    throttle: true,
    samples: 1,
  },

  // Only collect performance and accessibility categories in CI
  lighthouseOptions: {
    onlyCategories: ['performance', 'accessibility'],
  },

  // CI settings — match options used by the CI command
  ci: {
    // Fail CI if any page scores below these budgets
    budget: {
      performance: 80,
      accessibility: 90,
    },
    // When running in CI we want static output (the CLI flag --build-static also covers this)
    buildStatic: true,
    // Reporter to use for CI output
    reporter: 'jsonExpanded',
  },

  debug: true,
});
