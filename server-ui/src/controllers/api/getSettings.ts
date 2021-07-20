import axios from 'axios';
import config from './config';
import { Request, Response } from 'express';
import { getSettingConfType } from '../../types';

const data = {
  data: {
    buildCommand: "run build",
    id: "61f1f766-7b8e-4d13-8774-8e0e8302aad1",
    mainBranch: "master |master",
    period: 10,
    repoName: "wof4/tableData",
  }
}

export const getSettings = async (req:Request, res: Response) => {

  if (req.query && req.query.params) {
    res.json(data);
  } else {
    try {
      const response = await axios.get<getSettingConfType>('/conf', config);
      res.json(response.data) 
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }

};
