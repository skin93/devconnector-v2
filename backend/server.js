import express from 'express';
import path from 'path';
import morgan from 'morgan';
import colors from 'colors';
import dotenv from 'dotenv';

import { errorHandler, notFound } from './middlewares/errorMiddleware.js';

import connectDB from './config/db.js';

import userRoutes from './routes/userRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import postRoutes from './routes/postRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

const environment = process.env.NODE_ENV;

if (environment === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/users', userRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`App running on port ${PORT} in ${environment} mode`.yellow.bold)
);
