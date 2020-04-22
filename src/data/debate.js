const baseDataProvider = require('./baseDataProvider');

const SOURCE = {
  name: 'DEBATE',
  url: 'http://www.debate.com.mx',
  map: {
    addUrlToPath: true,
    addUrlToIMG: false,
    container: '.row__container article',
    title: { find: '.news__title>a' },
    prev: { find: '.news__data a' },
    link: { find: '.news__media>a', attr: 'href' },
    datePost: { find: '.news__time', attr: 'datetime' },
    img: { find: '.news__media>a img', attr: 'src' },
  },
};

const dataProvider = {
  getNews: async () => {
    return baseDataProvider.getNews(SOURCE);
  },
};

module.exports = dataProvider;
