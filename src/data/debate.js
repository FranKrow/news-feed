const baseDataProvider = require('./baseDataProvider');

const SOURCE = {
  name: 'DEBATE',
  url: 'https://www.debate.com.mx',
  map: {
    addUrlToPath: true,
    container: '.col__main article',
    title: { find: '.news__media>a', attr: 'title' },
    prev: { find: '.news__excerpt p' },
    link: { find: '.news__media>a', attr: 'href' },
    datePost: { find: '.news__time', attr: 'datetime' },
    img: { find: '.news__media>a>img', attr: 'src' }
  }
};

const dataProvider = {
  getNews: async () => {
    return baseDataProvider.getNews(SOURCE);
  }
};

module.exports = dataProvider;
