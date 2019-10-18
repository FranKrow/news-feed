const baseDataProvider = require('./baseDataProvider');

const SOURCE = {
  name: 'ASISUCEDE',
  url: 'http://asisucedegto.mx',
  map: {
    addUrlToPath: false,
    addUrlToIMG: false,
    container: '.td-big-grid-post',
    title: { find: 'a', attr: 'title' },
    prev: { find: 'a', attr: 'title' },
    link: { find: 'a', attr: 'href' },
    datePost: { find: '.entry-date', attr: 'datetime' },
    img: { find: 'img.entry-thumb', attr: 'src' }
  }
};

const dataProvider = {
  getNews: async () => {
    return baseDataProvider.getNews(SOURCE);
  }
};

module.exports = dataProvider;
