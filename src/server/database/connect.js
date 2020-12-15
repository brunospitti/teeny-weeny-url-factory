import mongoose from 'mongoose';
import initialDBData from '../../../config/initialDBData.json';
import { URLsModel } from './Models/URLsModel';

const {
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_URL,
  DATABASE_COLLECTION,
} = process.env;

mongoose
  .connect(
    `mongodb+srv://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_URL}/${DATABASE_COLLECTION}`,
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log('Database connection - SUCCESS');

    console.log(
      '🚀 ~ file: connect.js ~ line 23 ~ .then ~ process.env.NODE_ENV',
      process.env.NODE_ENV
    );
    if (process.env.NODE_ENV === 'development') {
      URLsModel.remove({}, function () {
        console.log('Database cleanup - SUCCESS');

        URLsModel.insertMany(initialDBData, function (err) {
          if (err) return console.error(err);
          URLsModel.find(function (error) {
            if (error) return console.error(error);
          });
        });
      });
    }
  })
  .catch((error) => {
    console.error('Database connection - FAILURE', error);
    process.exit(1);
  });
