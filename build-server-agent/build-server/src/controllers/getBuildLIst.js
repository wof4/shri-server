
const axios = require('axios');
const config = require('./config');

module.exports = async () => {
  try {
    const offset = 0;
    const limit = 25;
    const response = await axios.get(`/build/list?offset=${offset}&limit=${limit}`,config);
    return response.data
  } catch (error) {
    console.log(error)
  }
};
