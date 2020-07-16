const baseDataProvider = require('./baseDataProvider');

const SOURCE = {
  name: 'UNOCERO',
  url: 'http://www.unocero.com',
  map: {
    addUrlToPath: false,
    addUrlToIMG: false,
    container: '.notas02',
    title: { find: '.data h2' },
    prev: { find: '.data h2' },
    link: { find: '.image a', attr: 'href' },
    datePost: { find: '.postDate' },
    img: { find: '.bgImage ', attr: 'data-bg' },
  },
};

const dataProvider = {
  getNews: async () => {
    return baseDataProvider.getNews(SOURCE);
  },
};

module.exports = dataProvider;
