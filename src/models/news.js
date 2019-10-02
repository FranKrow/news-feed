const unocero = require('./../data/unocero');
const debate = require('./../data/debate');
const asisucede = require('./../data/asisucede');

const Model = {
  getAll: async () => {
    return await Promise.all([
      unocero.getNews(),
      debate.getNews(),
      asisucede.getNews()
    ]).then(function(values) {
      return values;
    });
  }
};

module.exports = Model;
