import { URLsModel } from '../database/Models/URLsModel';

export const redirectMiddleware = async (req, res, next) => {
  const { shortURLCode } = req.params;

  URLsModel.findOne({ shortURLCode }, (err, URLObjectFromDB) => {
    if (err || !URLObjectFromDB) {
      res.redirect(`/?notFound=true`);
    } else {
      URLObjectFromDB.visitDates.push(Date.now());
      URLObjectFromDB.dateModified = Date.now();

      URLObjectFromDB.save();

      res.redirect(URLObjectFromDB.originalURL);
    }
  });
};
