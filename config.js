rdforms_specs.init({
  language: 'de',
  bundles: [
    ['dcatapat.json'],
  ],
  main: [
    'dcatat:Catalog',
    'dcatat:Dataset',
    'dcatat:Distribution',
    'dcatat:DataService',
    'dcatat:CatalogRecord',
    'dcatat:foaf:Agent'
  ],
  language: document.targetLanguage,
  supportive: [
  ]
});
