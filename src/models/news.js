const unocero = require('./../data/unocero');
const debate = require('./../data/debate');
const asisucede = require('./../data/asisucede');
const quadratin = require('./../data/cuadratin');

const Model = {
  getAll: async () => {
    return await Promise.all([
      unocero.getNews(),
      debate.getNews(),
      asisucede.getNews(),
      quadratin.getNews()
    ]).then(function(values) {
      return values;
    });
  }
};

module.exports = Model;
