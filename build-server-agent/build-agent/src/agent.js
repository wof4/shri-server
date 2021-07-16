require('dotenv').config();
const express = require('express');
const cors = require('cors')
const { apiRouter } = require('./routers.js'); 
const postReady = require('./api/post.js/postReady.js');

const args = process.argv.slice(2);
const PORT = args[0] || 3005;
module.exports = PORT
const app = express();
// const PORT =  process.env.PORT

app.use(cors({
  origin: `http://localhost:${PORT}`,
  methods: "GET,POST,DELETE",
  allowedHeaders: ['Contente']
}));
app.use(express.json());
app.use('/', apiRouter);

app.listen(PORT, () => {

  console.log(`AGENT has been started on ${PORT} port...`);
  setTimeout(() => {
    postReady()
  }, 1000)
});
