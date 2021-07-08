const axios = require('axios');
const clone = require('../../utils/cloneRepo');

const config = require('./config');

module.exports = async (req, res) => {
//  console.log('post settings')
  try {
    await clone(req.body.repoName);
    const response = await axios.post('/conf', req.body, config);
    res.json(response.data);
  } catch (error) {
 //   console.log(error)
    res.send(error);
  }
};

