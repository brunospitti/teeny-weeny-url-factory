const { URLsModel } = require('../database/Models/URLsModel');

const redirectMiddleware = async (req, res, next) => {
  const { shortURLCode } = req.params;
  const { BASE_URL } = process.env;

  URLsModel.findOne({ shortURLCode }, (err, URLObjectFromDB) => {
    if (err || !URLObjectFromDB) {
      res.redirect(`${BASE_URL}?notFound=true`);
    } else {
      URLObjectFromDB.visitDates.push(Date.now());
      URLObjectFromDB.dateModified = Date.now();

      URLObjectFromDB.save();

      res.redirect(URLObjectFromDB.originalURL);
    }
  });
};

module.exports = { redirectMiddleware };
