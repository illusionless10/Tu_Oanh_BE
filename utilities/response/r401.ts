import { Response } from 'express';

export default (
  res: Response,
  data: any = {},
  message: string = 'bạn không có quyền thực hiện hành động này'
) => {
  return res.status(401).json({ data, message });
};
