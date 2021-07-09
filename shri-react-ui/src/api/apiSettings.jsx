import instance, { qweryParams } from './api';

const settingConf = {
  async setSettingConf(settings) {
    try {
      return await instance
        .post(`settings?params=${qweryParams ? '?params=1' : ''}`, settings)
        .then((res) => res.data === '');
    } catch {
      return 'ошибка';
    }
  },

  async getSettingConf() {
    try {
      return await instance
        .get(`/settings${qweryParams ? '?params=1' : ''}`)
        .then((res) => res);
    } catch {
      return 'ошибка';
    }
  },
};

export default settingConf;
