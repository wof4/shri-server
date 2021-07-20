import { Router } from "express";
const api = require('./controllers/api');
export const apiRouter = Router();

apiRouter.get('/settings', api.getSettings);
apiRouter.post('/settings', api.postSettings);
apiRouter.get('/builds', api.getBuildList);
apiRouter.get('/builds/:buildId/logs', api.getBuildDeteilsLogs);
apiRouter.post('/builds/:commitHash', api.postBuildRequest);


apiRouter.get('/builds/:buildId', api.getBuildDeteils);

exports.apiRouter = apiRouter;
