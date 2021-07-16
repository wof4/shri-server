const { Router } = require('express');
const api = require('.');
const apiRouter = new Router();

apiRouter.post('/build', api.build);


exports.apiRouter = apiRouter;
