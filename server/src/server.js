require('dotenv').config();
const express = require('express');
const cors = require('cors')
const { apiRouter } = require('./routers.js');

const PORT = 3000;
const app = express();
app.use(cors({
  origin: "http://localhost:3001",
  methods: "GET,POST,DELETE",
  allowedHeaders:['Content-Type']
}));
app.use(express.json());
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`server has been started on ${PORT} port...`);
});
