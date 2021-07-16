const axios = require('axios');
const config = require('./config');

module.exports = async (req, res) => {
  try {
    const response = await axios.get(
      `/build/log?buildId=${req.params.buildId}`,
      config
    );
    res.json(response.data);
  } catch (error) {
    res.send(error);
  }
};
