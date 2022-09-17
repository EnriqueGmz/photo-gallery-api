import express from 'express';
import morgan from 'morgan';

const app = express();

import indexRoutes from './routes/index';
import path from 'path';

// settings
app.set('port', process.env.port || 4000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api', indexRoutes);

// this folder for this aplication will be uyse to store public files
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;
