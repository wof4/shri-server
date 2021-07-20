import * as dotenv from 'dotenv';
dotenv.config();
import { apiRouter } from './routers';
import express from 'express';
import cors from 'cors';


const PORT = 3000;
const app = express();
app.use(cors({
  origin: "http://localhost:3001",
  methods: "GET,POST,DELETE",
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`server has been started on ${PORT} port...`);
});
