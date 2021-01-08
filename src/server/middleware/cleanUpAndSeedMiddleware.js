import { URLsModel } from '../database/Models/URLsModel';
import { lengthModel } from '../database/Models/lengthModel';
import initialDBData from '../../../config/initialDBData.json';

export const cleanUpAndSeedMiddleware = async (req, res, next) => {
  URLsModel.remove({}, function () {
    console.log('Database cleanup - SUCCESS');

    URLsModel.insertMany(initialDBData, function (err) {
      if (err) {
        res.end(JSON.stringify(err));
      } else {
        lengthModel.remove({}, function () {
          lengthModel.create(
            { totalURLsCreated: initialDBData.length },
            function (creationsError) {
              if (creationsError) {
                res.end(JSON.stringify(creationsError));
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
            }
          );
        });
      }
    });
  });
};
