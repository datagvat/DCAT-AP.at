rdforms_specs.default({
  language: 'de',
  bundles: [
    ['../dcatapat.json'],
  ],
  main: [
    'dcatat:OnlyCatalog',
    'dcatat:OnlyDataset',
    'dcatat:OnlyDistribution',
    'dcatat:OnlyDataService',
    'dcatat:OnlyCatalogRecord'
  ],
  language: document.targetLanguage,
  supportive: [
  ]
});
