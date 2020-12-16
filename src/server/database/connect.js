import mongoose from 'mongoose';
import fetch from 'node-fetch';
const {
  BASE_URL,
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
    if (process.env.NODE_ENV === 'development') {
      fetch(`${BASE_URL}/api/clean-up-and-seed`);
    }
  })
  .catch((error) => {
    console.error('Database connection - FAILURE', error);
    process.exit(1);
  });
