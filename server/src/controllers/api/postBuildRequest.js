const axios = require('axios');
const getCommitData = require('../../utils/getCommitData');

const config = require('./config');
module.exports = async (req, res) => {
  // console.log(req.params)
  try {
    const requestBody = await getCommitData(req.params.commitHash);
    const response = await axios.post(`/build/request`, requestBody, config);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
