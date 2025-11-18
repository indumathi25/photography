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
    // Generate static reports
    buildStatic: true,
    // Set performance budgets
    budget: {
      performance: 90,
      accessibility: 95,
      'best-practices': 90,
      seo: 90,
    },
  },
  scanner: {
    // Faster scans for CI
    samples: 1,
    throttle: false,
  },

  debug: true,
});
