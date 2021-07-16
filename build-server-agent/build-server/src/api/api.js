
const axios = require('axios').default;
const instance = axios.create({
  baseURL: 'http://localhost:3000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

module.exports = instance;
