import checkError from '../check-error';
import { query } from 'express-validator';

const searchCheck = () => {
  return [
    query('keyword').notEmpty().withMessage('keyword không được để trống'),
  ];
};

export default {
  search: [searchCheck(), checkError],
};
