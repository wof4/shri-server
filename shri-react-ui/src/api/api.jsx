import Axios from 'axios';

const params = window.location.href.toString().includes('test=1');

// eslint-disable-next-line import/no-mutable-exports
export let qweryParams = '';
if (params === true) {
  qweryParams = 'test';
} else {
  qweryParams = '';
}
const instance = Axios.create({
  baseURL: 'http://localhost:3000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
