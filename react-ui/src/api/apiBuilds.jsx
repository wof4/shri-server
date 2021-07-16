import instance, { qweryParams } from './api';

const buildsApi = {
  async getBuildsList() {
    try {
      const response = await instance.get(`builds?params=${qweryParams ? '?params=1' : ''}`).then((res) => res);
      return response;
    } catch {
      return 'ошибка';
    }
  },
  async getBuildsLogs(id) {
    try {
      const response = await instance.get(`builds/${id}/logs`).then((res) => res);
      return response;
    } catch {
      return 'ошибка';
    }
  },

  async postNewBuild(commitHash) {
    try {
      return await instance.post(`builds/${commitHash.commitHash}?params=${qweryParams ? '?params=1' : ''}`).then((res) => res);
    } catch {
      return 'ошибка';
    }
  },

};

export default buildsApi;
