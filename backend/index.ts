import express, { Application } from 'express';
import colors from 'colors';
import { config } from 'dotenv';
import routers from './routes/users';
config();

const port = process.env.PORT || 5000;
const app: Application = express();

app.use('/', routers);

app.listen(port, () =>
  console.log(`Server running on => http://localhost:${port}/`)
);
