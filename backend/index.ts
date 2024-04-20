import Colors = require('colors.ts');
import { config } from 'dotenv';
import express, { Application, json as JSONBody, urlencoded } from 'express';
// import routers from './routes/users'; // can use this syntax as well.
import connectDB from './config/db';
import routers = require('./routes/users');

config();
Colors.colors;

const port = process.env.PORT || 5000;
const dbURL = process.env.DATABASE_URI || "mongodb://localhost:27017/FullStack";

const app: Application = express();

connectDB(dbURL);

app.use(JSONBody());
app.use(urlencoded({ extended: false }));

app.use('/', routers);


app.listen(port, () =>
  console.log('Ctrl + left-click. visit =>'.underline.dim.bold, `http://localhost:${port}/`.green.underline)
);
