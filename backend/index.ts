import Colors = require('colors.ts');
Colors.colors;
require('dotenv').config();
import express, { Application, json as JSONBody, urlencoded } from 'express';
// import routers = require('./routes/user.routes') // can use this syntax as well, but first see the export syntax.
import connectDB from './config/db';
import { userRoutes, docRoutes } from './routes';
import { errorHandler } from './middlewares/errorhandle';
import cors = require('cors');

const port = process.env.PORT ?? 5000;
const dbURL = process.env.DATABASE_URI ?? "mongodb://localhost:27017/FullStack";

const app: Application = express();

connectDB(dbURL);

app.use(cors());
app.use(JSONBody());
app.use(urlencoded({ extended: false }));

app.use(docRoutes);
app.use(userRoutes);

// The custom error handler middleware functions should be below to the router.
app.use(errorHandler);

app.listen(port, () =>
  console.log('Ctrl + left-click. visit =>'.underline.dim.bold, `http://localhost:${port}/`.green.underline)
);
