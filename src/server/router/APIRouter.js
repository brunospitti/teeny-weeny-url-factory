const { Router } = require('express');

const { URLShortenerMiddleware } = require('../middleware/URLShortenerMiddleware');
const { mostVisitedURLsMiddleware } = require('../middleware/mostVisitedURLsMiddleware');

const APIRouter = Router();

APIRouter.post('/make-me-short', URLShortenerMiddleware);
APIRouter.get('/most-visited', mostVisitedURLsMiddleware);

module.exports = {
  APIRouter,
};
