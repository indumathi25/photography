import { defineUnlighthouseConfig } from 'unlighthouse/config';

export default defineUnlighthouseConfig({
  site: 'http://localhost:3000',
  scanner: {
    device: 'desktop',
    throttle: false,
    samples: 1,
  },
  lighthouseOptions: {
    onlyCategories: ['performance', 'accessibility'],
  },
  ci: {
    // Fail CI if any page scores below these budgets
    budget: {
      performance: 80,
      accessibility: 90,
    },
    reporter: 'jsonExpanded',
    outputPath: '.unlighthouse',
  },
});
