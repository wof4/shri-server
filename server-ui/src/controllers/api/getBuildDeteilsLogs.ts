import axios from 'axios';
import config from './config';
import { Request, Response } from 'express';
import { getBuildsLogsType } from '../../types';

export const getBuildDeteilsLogs = async (req:Request, res: Response) => {
  try {
    const response = await axios.get<getBuildsLogsType>(
      `/build/log?buildId=${req.params.buildId}`,
      config
    );
    res.json(response.data);
  } catch (error) {
    res.send(error);
  }
};
