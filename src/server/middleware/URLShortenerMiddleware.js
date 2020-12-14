const { nanoid } = require('nanoid');
const { URLsModel } = require('../database/Models/URLsModel');

const URLShortenerMiddleware = async (req, res, next) => {
  const { body } = req;

  const URLNormalize = (URL) => {
    if (URL.indexOf('://') != -1) {
      return URL;
    }
    return `https://${URL}`;
  };

  const originalURL = URLNormalize(body.URL);
  const shortURLCode = body.code;

  await URLsModel.findOne({ shortURLCode }, function (err, found) {
    if (err) {
      console.log('err', err);
    }

    if (found) {
      res.status(500);
      res.end(JSON.stringify({ error: 'custom URL already in use. Try another one' }));
    }

    const newURL = new URLsModel({
      originalURL,
      shortURLCode: shortURLCode || nanoid(10),
    });

    newURL.save(function (error) {
      if (error) next(error);
      res.end(JSON.stringify(newURL));
    });
  });
};

module.exports = { URLShortenerMiddleware };
