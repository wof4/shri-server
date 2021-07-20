
import { getSettingConfType, settingType } from '../types';
import instance, { qweryParams } from './api';


const settingConf = {
  async setSettingConf(settings: settingType) {
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
        .get<getSettingConfType>(`/settings${qweryParams ? '?params=1' : ''}`)
        .then((res) => res);
    } catch (err) {
      return err;
    }
  },
};

export default settingConf;




