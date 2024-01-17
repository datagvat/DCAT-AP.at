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
    'dcatat:foaf:Agent',
    'dcatat:dcat:contactPoint',
  ],
  language: document.targetLanguage,
  supportive: [
  ],
  extras: {
    mapping: {
      de: 'Entsprechung in metadaten-data.gv.at 2.6'
    }
  }
});
