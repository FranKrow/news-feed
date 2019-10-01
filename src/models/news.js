const dataProvider = require('./../data/unocero');

const Model = {
  getAll: async () => {
    return await dataProvider.getNews();
  }
};

module.exports = Model;
