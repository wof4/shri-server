import axios from 'axios';
const clone = require('../../utils/cloneRepo');
import { Request, Response } from 'express';
import { postSettingType } from '../../types';

import config from './config';

export const postSettings = async (req:Request, res: Response) => {
  try {
    await clone(req.body.repoName);
    const response = await axios.post<postSettingType>('/conf', req.body, config);
    res.json(response.data);
  } catch (error) {
    //   console.log(error)
    res.send(error);
  }
};

