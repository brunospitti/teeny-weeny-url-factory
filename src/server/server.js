import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import { APIRouter } from './router/APIRouter';
import { appRouter } from './router/appRouter';
import { paths } from '../../config/paths';

require('dotenv').config();
require('./database/connect');

const app = express();

app.set('port', process.env.PORT || 5555);
app.set('host', process.env.APP_HOST || 'localhost');

app.use(helmet.hidePoweredBy());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(paths.dist));

app.use('/api', APIRouter);
app.use('/', appRouter);

app.listen(app.get('port'), () =>
  console.log(`Listening to ${app.get('host')} on port ${app.get('port')}`)
);
