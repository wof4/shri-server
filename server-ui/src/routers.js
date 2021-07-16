const { Router } = require('express');
const api = require('./controllers/api');
const apiRouter = new Router();

apiRouter.get('/settings', api.getSettings);
apiRouter.post('/settings', api.postSettings);
apiRouter.get('/builds', api.getBuildList);
apiRouter.get('/builds/:buildId', api.getBuildDeteils);
apiRouter.get('/builds/:buildId/logs', api.getBuildDeteilsLogs);
apiRouter.post('/builds/:commitHash', api.postBuildRequest);

exports.apiRouter = apiRouter;
