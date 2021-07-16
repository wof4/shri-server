const { Router } = require('express');
const api = require('./controllers');
const apiRouter = new Router();

apiRouter.post('/notify_agent', api.notify);
apiRouter.post('/notify-build-result', api.notifyBuildResult);

exports.apiRouter = apiRouter;
