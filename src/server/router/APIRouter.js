import { Router } from 'express';
import { URLShortenerMiddleware } from '../middleware/URLShortenerMiddleware';
import { mostVisitedURLsMiddleware } from '../middleware/mostVisitedURLsMiddleware';

const APIRouter = Router();

APIRouter.post('/make-me-short', URLShortenerMiddleware);
APIRouter.get('/most-visited', mostVisitedURLsMiddleware);

module.exports = {
  APIRouter,
};
