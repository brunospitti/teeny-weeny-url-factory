import mongoose from 'mongoose';
import fetch from 'node-fetch';
const {
  BASE_URL,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_URL,
  DATABASE_COLLECTION,
} = process.env;
console.log('🚀 ~ file: connect.js ~ line 10 ~ BASE_URL', BASE_URL);
console.log('🚀 ~ file: connect.js ~ line 10 ~ DATABASE_COLLECTION', DATABASE_COLLECTION);
console.log('🚀 ~ file: connect.js ~ line 10 ~ DATABASE_URL', DATABASE_URL);
console.log('🚀 ~ file: connect.js ~ line 10 ~ DATABASE_PASSWORD', DATABASE_PASSWORD);
console.log('🚀 ~ file: connect.js ~ line 10 ~ DATABASE_USERNAME', DATABASE_USERNAME);

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
