
const axios = require('axios');
const config = require('./config');

module.exports = async () => {
  try {
    const response = await axios.get('/conf', config);
    console.log('BUILD SERVER --- успешная загрузка настроек настроек ')
    return response.data.data
  } catch (error) {
    console.log('BUILD SERVER --- ошибка загрузки настроек ')
  }
};
