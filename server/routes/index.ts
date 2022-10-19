import express, { Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import product from "./product";

export default (e: Express) => {
  // Middleware
  e.use(cors());
  e.use(express.json());
  e.use(morgan('dev'));

  // Components
  product(e);
};