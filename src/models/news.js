const unocero = require('./../data/unocero');
const debate = require('./../data/debate');
const asisucede = require('./../data/asisucede');
const quadratin = require('./../data/cuadratin');
//const universal = require('./../data/universal');
// const ligamx = require('./../data/ligamx');

const Model = {
  getAll: async () => {
    return await Promise.all([
      unocero.getNews(),
      //debate.getNews(),
      asisucede.getNews(),
      quadratin.getNews(),
      //universal.getNews(),
      // ligamx.getNews(),
    ]).then(function (values) {
      return values;
    });
  },
};

module.exports = Model;
