import express, { Express } from 'express';
import validations from './validations';
import handlers from '../handlers';

export default (e: Express) => {
  // Group
  const r = express.Router();
  e.use('/products', r);

  r.post('', ...validations.product.create.newProduct, handlers.product.create.newProduct);
};
