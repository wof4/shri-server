const config = {
  baseURL: 'https://shri.yandex/hw/api',
  headers: {
    "content-type": "application/json",
    Authorization: process.env.token,
  },
};

module.exports = config;
