const baseDataProvider = require('./baseDataProvider');

const SOURCE = {
  name: '1|0',
  url: 'http://www.unocero.com',
  map: {
    addUrlToPath: false,
    addUrlToIMG: false,
    container: '.post',
    title: { find: 'a.title' },
    prev: { find: '.excerpt' },
    link: { find: 'a.title', attr: 'href' },
    datePost: { find: '.date' },
    img: { find: '.image', attr: 'data-src' }
  }
};

const dataProvider = {
  getNews: async () => {
    return baseDataProvider.getNews(SOURCE);
  }
};

module.exports = dataProvider;
