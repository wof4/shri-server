require('dotenv').config();
const express = require('express');
const cors = require('cors')
const { apiRouter } = require('./routers.js');
const manager = require('./manager.js');


const PORT = 3002;
const app = express();
app.use(cors({
  origin: "http://localhost:3002",
  methods: "GET,POST,DELETE",
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`BUILD SERVER has been started on ${PORT} port...`);
  manager()
});
