import checkError from '../check-error';
import { body } from 'express-validator';

const newProductCheck = () => {
  return [
    body('keyword').notEmpty().withMessage('keyword không được để trống'),
  ];
};

export default {
  newProduct: [newProductCheck(), checkError],
};
