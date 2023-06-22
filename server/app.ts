import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { router } from './routes';
import { serverError, notFound } from './controllers/errors';

export const app = express();

app.set('port', 8080);

app.use([
  cors(),
  compression(),
  cookieParser(),
  express.json(),
  express.urlencoded({ extended: false })
]);

app.use('/api/v1', router);
app.use(notFound);
app.use(serverError);
