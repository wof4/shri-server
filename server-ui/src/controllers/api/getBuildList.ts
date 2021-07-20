import axios from 'axios';
import config from './config';
import { Request, Response } from 'express';
import { getBuildsListType } from '../../types';

export const getBuildList = async (req:Request, res: Response) => {

  if (req.query.params) {
    res.json(data);
  } else {
    try {

      const offset = req.query.offset || 0;
      const limit = req.query.limit || 25;
      const response = await axios.get<getBuildsListType>(
        `/build/list?offset=${offset}&limit=${limit}`,
        config
      );
      res.json(response.data);
    } catch (error) {
      res.send(error);
    }
  }
};


const data = {
  statusText: 'OK',
  data: [
    {
      authorName: "a.adamov",
      branchName: "* master\n",
      buildNumber: 111,
      commitHash: "069dd2e2770277feb3373abe3d7ef52c03f7278a",
      commitMessage: "first",
      configurationId: "61f1f766-7b8e-4d13-8774-8e0e8302aad1",
      id: "02a4187c-21ef-4b5f-bd3d-9be976928bbb",
      status: "Waiting"
    }, {
      authorName: "a.adamov",
      branchName: "* master\n",
      buildNumber: 110,
      commitHash: "069dd2e2770277feb3373abe3d7ef52c03f7278a",
      commitMessage: "first",
      configurationId: "61f1f766-7b8e-4d13-8774-8e0e8302aad1",
      id: "a4b5c021-7182-4443-b1d6-e884c79452a7",
      status: "Waiting",
    },
    {
      authorName: "a.adamov",
      branchName: "* master\n",
      buildNumber: 109,
      commitHash: "069dd2e2770277feb3373abe3d7ef52c03f7278a",
      commitMessage: "first",
      configurationId: "61f1f766-7b8e-4d13-8774-8e0e8302aad1",
      id: "61ec96ab-feb1-4927-8269-4017815f7ec8",
      status: "Waiting",
    },
    {
      authorName: "a.adamov",
      branchName: "* master\n",
      buildNumber: 108,
      commitHash: "069dd2e2770277feb3373abe3d7ef52c03f7278a",
      commitMessage: "first",
      configurationId: "61f1f766-7b8e-4d13-8774-8e0e8302aad1",
      id: "8841aa70-6d14-40ce-b7ed-8487041d4ab4",
      status: "Waiting",
    },
    {
      authorName: "a.adamov",
      branchName: "* master\n",
      buildNumber: 107,
      commitHash: "069dd2e2770277feb3373abe3d7ef52c03f7278a",
      commitMessage: "first",
      configurationId: "61f1f766-7b8e-4d13-8774-8e0e8302aad1",
      id: "3ae2ea1a-9f3e-4506-b5c3-4aeb3078bb4e",
      status: "Waiting",
    },
    {
      authorName: "a.adamov",
      branchName: "* master\n",
      buildNumber: 106,
      commitHash: "069dd2e2770277feb3373abe3d7ef52c03f7278a",
      commitMessage: "first",
      configurationId: "61f1f766-7b8e-4d13-8774-8e0e8302aad1",
      id: "b4302791-ad8c-4bbc-bf82-c1d2e05e67b6",
      status: "Waiting",
    }]

}