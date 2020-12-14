const { Router } = require('express');
const path = require('path');
const { redirectMiddleware } = require('../middleware/redirectMiddleware');
const { ignoreFavicon } = require('../middleware/ignoreFavicon');

console.log('appRouter');
const appRouter = Router();

appRouter.get('/:shortURLCode', ignoreFavicon, redirectMiddleware);

appRouter.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

module.exports = {
  appRouter,
};
