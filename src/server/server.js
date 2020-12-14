import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import { APIRouter } from './router/APIRouter';
import { appRouter } from './router/appRouter';

require('dotenv').config({ path: '../../.env' });
require('./database/connect');

const app = express();
app.set('port', process.env.APP_PORT || 5555);
app.set('host', process.env.APP_HOST || 'localhost');

app.use(helmet.hidePoweredBy());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../dist')));

app.use('/api', APIRouter);

app.use('/', appRouter);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(app.get('port'), () =>
  console.log(`Listening http://${app.get('host')}on port ${app.get('port')}`)
);
