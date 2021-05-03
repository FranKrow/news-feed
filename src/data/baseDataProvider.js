const cheerio = require('cheerio');
const fs = require('fs');
const axios = require('axios');

const dataProvider = {
  getNews: async (SOURCE) => {
    const news = await axios.get(SOURCE.url);

    let postsInfo = {
      source: SOURCE.name,
      news: [],
    };

    const $ = cheerio.load(news.data);

    /*
    fs.writeFile(
      __dirname + `/pages/${SOURCE.name}.html`,
      $(SOURCE.map.container).html(),
      function (err) {
        if (err) {
          return console.log(err);
        }

        // console.log('The file was saved!');
      }
    );
    */

    $(SOURCE.map.container).each((i, e) => {
      const title = SOURCE.map.title.attr
        ? $(e).find(SOURCE.map.title.find).attr(SOURCE.map.title.attr)
        : $(e).find(SOURCE.map.title.find).text();
      const prev = SOURCE.map.prev.attr
        ? $(e).find(SOURCE.map.prev.find).attr(SOURCE.map.prev.attr)
        : $(e).find(SOURCE.map.prev.find).text();
      const link = SOURCE.map.addUrlToPath
        ? SOURCE.url +
          (SOURCE.map.link.attr
            ? $(e).find(SOURCE.map.link.find).attr(SOURCE.map.link.attr)
            : $(e).find(SOURCE.map.link.find).text())
        : SOURCE.map.link.attr
        ? $(e).find(SOURCE.map.link.find).attr(SOURCE.map.link.attr)
        : $(e).find(SOURCE.map.link.find).text();
      const datePost = SOURCE.map.datePost.attr
        ? $(e).find(SOURCE.map.datePost.find).attr(SOURCE.map.datePost.attr)
        : $(e).find(SOURCE.map.datePost.find).text();
      const img = SOURCE.map.addUrlToIMG
        ? SOURCE.url +
          (SOURCE.map.img.attr
            ? $(e).find(SOURCE.map.img.find).attr(SOURCE.map.img.attr)
            : $(e).find(SOURCE.map.img.find).text())
        : SOURCE.map.img.attr
        ? $(e).find(SOURCE.map.img.find).attr(SOURCE.map.img.attr)
        : $(e).find(SOURCE.map.img.find).text();

      const dateDiff = Math.round(
        (Date() - Date(datePost)) / (24 * 3600 * 1000)
      );

      if (title && prev) {
        let info = {
          title,
          prev,
          link,
          datePost,
          img,
        };

        postsInfo.news.push(info);
      }
    });

    // console.log(postsInfo);

    return postsInfo;
  },
};

module.exports = dataProvider;
