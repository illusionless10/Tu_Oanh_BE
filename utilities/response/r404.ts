import { Response } from 'express';

export default (
  res: Response,
  data: any = {},
  message: string = 'dữ liệu không tìm thấy'
) => {
  return res.status(404).json({ data, message });
};
