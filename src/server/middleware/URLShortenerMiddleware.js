import { nanoid } from 'nanoid';
import { URLsModel } from '../database/Models/URLsModel';
import { lengthModel } from '../database/Models/lengthModel';

export const URLShortenerMiddleware = async (req, res, next) => {
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

    newURL.save(async function (error) {
      if (error) next(error);
      let currLength = await lengthModel.findOne({});

      await lengthModel.findOneAndUpdate(
        {},
        { totalURLsCreated: currLength ? currLength.totalURLsCreated + 1 : 1 }
      );
      res.end(JSON.stringify(newURL));
    });
  });
};
