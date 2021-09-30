const config = {
  baseURL: 'https://shri.yandex/hw/api',
  headers: {
    "content-type": "application/json",
    Authorization: process.env.token,

    //в пустую строку нужно втавить кокен в формате 'Bearer хххххххххххх'
  },
};


export default config

