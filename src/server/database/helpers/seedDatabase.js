import initialDBData from '../../../../config/initialDBData.json';
import { URLsModel } from '../Models/URLsModel';

export const seedDatabase = () => {
  return URLsModel.insertMany(initialDBData, function (err) {
    if (err) return console.error(err);
    URLsModel.find(function (error) {
      if (error) return console.error(error);
      console.log('Database seed - SUCCESS');
    });
  });
};
