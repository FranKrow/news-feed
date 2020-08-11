const baseDataProvider = require('./baseDataProvider');

const SOURCE = {
  name: 'LIGA-MX',
  url: 'https://ligamx.net/',
  map: {
    addUrlToPath: true,
    addUrlToIMG: false,
    container: '#BrraMrcdr>li',
    title: { find: '.televisoraW' },
    prev: { find: '.schedule>.hour' },
    link: { find: '.mxmM', attr: 'href' },
    datePost: { find: '.schedule>.date' },
    img: { find: '.loadershow>.local', attr: 'src' },
  },
};

const dataProvider = {
  getNews: async () => {
    return baseDataProvider.getNews(SOURCE);
  },
};

module.exports = dataProvider;
