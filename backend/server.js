import express from 'express';
import path from 'path';
import morgan from 'morgan';
import colors from 'colors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const environment = process.env.NODE_ENV;

if (environment === 'development') {
  app.use(morgan('dev'));
}

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () =>
  console.log(`App running on port ${PORT} in ${environment} mode`.yellow.bold)
);
