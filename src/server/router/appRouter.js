import { Router } from 'express';
import path from 'path';
import { redirectMiddleware } from '../middleware/redirectMiddleware';
import { ignoreFavicon } from '../middleware/ignoreFavicon';

const appRouter = Router();

appRouter.get('/:shortURLCode', ignoreFavicon, redirectMiddleware);

appRouter.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

module.exports = {
  appRouter,
};
