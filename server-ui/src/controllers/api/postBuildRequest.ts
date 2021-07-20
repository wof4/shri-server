import { postBuildRequestType } from '../../types';
import axios from 'axios';
import config from './config';
const getCommitData = require('../../utils/getCommitData');
import { Request, Response } from 'express';



export const postBuildRequest = async (req:Request, res: Response) => {
  try {
    const requestBody = await getCommitData(req.params.commitHash);
    const response = await axios.post<postBuildRequestType>(`/build/request`, requestBody, config);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
