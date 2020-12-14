import { URLsModel } from '../database/Models/URLsModel';

export const mostVisitedURLsMiddleware = async (req, res, next) => {
  URLsModel.find().exec(function (err, data) {
    if (err) return next(err);

    const sorted = data.sort((a, b) => {
      if (a.visitDates.length > b.visitDates.length) {
        return -1;
      }
      if (b.visitDates.length > a.visitDates.length) return 1;
      return 0;
    });

    const parsedData = sorted.slice(0, 5).map((document) => ({
      originalURL: document.originalURL,
      shortURLCode: document.shortURLCode,
      visitCount: document.visitDates.length,
    }));

    res.status(200).send(parsedData);
  });
};
