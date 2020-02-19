const baseDataProvider = require('./baseDataProvider');

const SOURCE = {
  name: 'UNIVERSAL',
  url: 'https://www.eluniversal.com.mx',
  map: {
    addUrlToPath: true,
    addUrlToIMG: false,
    container: 'div.multimedia',
    title: { find: '.field-content>a' },
    prev: { find: '.field-content.slideinfos' },
    link: { find: '.field-content>a', attr: 'href' },
    datePost: { find: '.views-field-created>.field-content' },
    img: { find: '.field-content>a img', attr: 'src' }
  }
};

const dataProvider = {
  getNews: async () => {
    return baseDataProvider.getNews(SOURCE);
  }
};

module.exports = dataProvider;
