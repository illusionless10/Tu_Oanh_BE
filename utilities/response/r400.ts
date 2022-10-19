import { Response } from 'express';

export default (
  res: Response,
  data: any = {},
  message: string = 'dữ liệu không hợp lệ'
) => {
  return res.status(400).json({ data, message });
};
