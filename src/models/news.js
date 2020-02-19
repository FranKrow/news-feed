const unocero = require('./../data/unocero');
const debate = require('./../data/debate');
const asisucede = require('./../data/asisucede');
const quadratin = require('./../data/cuadratin');
const universal = require('./../data/universal');

const Model = {
  getAll: async () => {
    return await Promise.all([
      unocero.getNews(),
      debate.getNews(),
      asisucede.getNews(),
      quadratin.getNews(),
      universal.getNews()
    ]).then(function(values) {
      return values;
    });
  }
};

module.exports = Model;
