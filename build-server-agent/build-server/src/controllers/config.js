const config = {
  baseURL: 'https://shri.yandex/hw/api',
  headers: {
    Authorization: process.env.token,

    //в пустую строку нужно втавить кокен в формате 'Bearer хххххххххххх'
    // Authorization: '',
  },
};

module.exports = config;
