import { URLsModel } from '../database/Models/URLsModel';
import initialDBData from '../../../config/initialDBData.json';

export const cleanUpAndSeedMiddleware = async (req, res, next) => {
  URLsModel.remove({}, function () {
    console.log('Database cleanup - SUCCESS');

    URLsModel.insertMany(initialDBData, function (err) {
      if (err) {
        res.end(JSON.stringify(err));
      } else {
        URLsModel.find(function (error) {
          if (error) {
            res.end(JSON.stringify(error));
          } else {
            console.log('Database seed - SUCCESS');
            res.end('ok');
          }
        });
      }
    });
  });
};
