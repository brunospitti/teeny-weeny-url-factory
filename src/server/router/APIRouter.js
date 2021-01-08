import { Router } from 'express';
import { cleanUpAndSeedMiddleware } from '../middleware/cleanUpAndSeedMiddleware';
import { URLShortenerMiddleware } from '../middleware/URLShortenerMiddleware';
import { mostVisitedURLsMiddleware } from '../middleware/mostVisitedURLsMiddleware';
import { totalCreationsMiddleware } from '../middleware/totalCreationsMiddleware';

const APIRouter = Router();

APIRouter.post('/make-me-short', URLShortenerMiddleware);
APIRouter.get('/most-visited', mostVisitedURLsMiddleware);
APIRouter.get('/total-creations', totalCreationsMiddleware);
APIRouter.get('/clean-up-and-seed', cleanUpAndSeedMiddleware);

module.exports = {
  APIRouter,
};
