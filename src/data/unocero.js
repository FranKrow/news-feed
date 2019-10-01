const cheerio = require('cheerio');
const fs = require('fs');
const axios = require('axios');

const dataProvider = {
  getNews: async () => {
    const news = await axios.get('https://www.unocero.com/');

    let postsInfo = {
      source: 'UNOCERO',
      news: []
    };

    const $ = cheerio.load(news.data);

    fs.writeFile('data/unocero.html', news.data, function(err) {
      if (err) {
        return console.log(err);
      }

      console.log('The file was saved!');
    });

    $('.post ').each((i, e) => {
      const title = $(e)
        .find('a.title')
        .text();
      const prev = $(e)
        .find('.excerpt')
        .text();
      const link = $(e)
        .find('a.title')
        .attr('href');
      const datePost = $(e)
        .find('.date')
        .text();
      const img = $(e)
        .find('.image')
        .attr('data-src');
      const dateDiff = Math.round(
        (new Date() - new Date(datePost)) / (24 * 3600 * 1000)
      );
      if (title && prev && dateDiff <= 1) {
        let info = {
          title,
          prev,
          link,
          datePost,
          img
        };

        postsInfo.news.push(info);
      }
    });

    console.log(postsInfo);

    return postsInfo;
  }
};

module.exports = dataProvider;
