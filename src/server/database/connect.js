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

    if (process.env.NODE_ENV !== 'production') {
      URLsModel.remove({}, function () {
        console.log('Database cleanup - SUCCESS');

        URLsModel.insertMany(initialDBData, function (err) {
          if (err) return console.error(err);
          URLsModel.find(function (err, urls) {
            if (err) return console.error(err);
            // console.log('urls', urls);
          });
        });
      });
    }
  })
  .catch((error) => {
    console.log('Database connection - FAILURE');
    console.error(error);
    process.exit(1);
  });
