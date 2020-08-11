const baseDataProvider = require('./baseDataProvider');

const SOURCE = {
  name: 'UNIVERSAL',
  url: 'https://www.eluniversal.com.mx',
  map: {
    addUrlToPath: true,
    addUrlToIMG: false,
    container: 'article.type-article',
    title: { find: '.ce6-Tipo1_Titulo>a' },
    prev: { find: '.ce6-Tipo1_Titulo>a' },
    link: { find: '.ce6-Tipo1_Titulo>a', attr: 'href' },
    datePost: { find: '.ce6-Tipo1_Hora' },
    img: { find: '.ce6-Tipo1_Imagen:first-of-type', attr: 'data-src' },
  },
};

const dataProvider = {
  getNews: async () => {
    return baseDataProvider.getNews(SOURCE);
  },
};

module.exports = dataProvider;
