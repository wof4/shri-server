import axios from 'axios';
import config from './config';
import { Request, Response } from 'express';
import { getBuildDeteilsType } from '../../types';



export const getBuildDeteils = async (req:Request, res: Response) => {
  try {
    const response = await axios.get<getBuildDeteilsType>(
      `/build/details?buildId=${req.params.buildId}`,
      config
    );
    res.json(response.data);
    console.log(response.data)
  } catch (error) {
    res.send(error);
  }
};
