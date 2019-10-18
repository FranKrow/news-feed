const baseDataProvider = require('./baseDataProvider');

const SOURCE = {
  name: 'QUADRATIN',
  url: 'https://queretaro.quadratin.com.mx/',
  map: {
    addUrlToPath: false,
    addUrlToIMG: false,
    container: '.main-slider .slider',
    title: { find: '.inside-title', attr: 'value' },
    prev: { find: '.inside-title', attr: 'value' },
    link: { find: '.inside-link', attr: 'value' },
    datePost: { find: '.hour-hide' },
    img: { find: '.wp-post-image', attr: 'src' }
  }
};

const dataProvider = {
  getNews: async () => {
    return baseDataProvider.getNews(SOURCE);
  }
};

module.exports = dataProvider;
