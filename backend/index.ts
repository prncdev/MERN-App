import Colors = require('colors.ts');
Colors.colors;
require('dotenv').config();
import express, { Application, json as JSONBody, urlencoded } from 'express';
// import routers = require('./routes/user.routes') // can use this syntax as well, but first see the export syntax.
import connectDB from './config/db';
import routers from './routes/user.routes';
import { errorHandler } from './middlewares/errorhandle';

const port = process.env.PORT || 5000;
const dbURL = process.env.DATABASE_URI || "mongodb://localhost:27017/FullStack";

const app: Application = express();

connectDB(dbURL);

app.use(JSONBody());
app.use(urlencoded({ extended: false }));

app.use(routers);

// The custom error handler middleware functions should be below to the router.
app.use(errorHandler);


app.listen(port, () =>
  console.log('Ctrl + left-click. visit =>'.underline.dim.bold, `http://localhost:${port}/`.green.underline)
);
