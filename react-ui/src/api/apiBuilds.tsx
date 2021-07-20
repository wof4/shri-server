import {  getBuildsListType, getBuildsLogsType, postBuildRequestType } from '../types';
import instance, { qweryParams } from './api';

const buildsApi = {
  async getBuildsList() {
    try {
      const response = await instance.get<getBuildsListType>(`builds?params=${qweryParams ? '?params=1' : ''}`).then((res) => res);
      return response;
    } catch (err){
      return err
    }
  },
  async getBuildsLogs(id:string) {
    try {
      const response = await instance.get<getBuildsLogsType>(`builds/${id}/logs`).then((res) => res);
      return response;
    } catch (err){
      return err
    }
  },

  async postNewBuild(commitHash:{commitHash:string}) {
    try {
      return await instance.post<postBuildRequestType>(`builds/${commitHash.commitHash}?params=${qweryParams ? '?params=1' : ''}`).then((res) => res);
    } catch(err) {
      return err;
    }
  },

};

export default buildsApi;


