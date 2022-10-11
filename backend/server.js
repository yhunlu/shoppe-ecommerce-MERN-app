import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';

import connectDB from './config/connectDB.js';
import products from './data/products.js';

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.get('/api/products', (req, res) => {
  res.send(products);
  //   res.send('API is running...');
});

const PORT = process.env.PORT || 3001;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
