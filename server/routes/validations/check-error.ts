import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import response from "../../../utilities/response";

export default (req: Request, res: Response, next: NextFunction) => {
  const errs = validationResult(req);
  if (!errs.isEmpty()) {
    return response.r400(res, {}, errs.array()[0].msg);
  }
  next();
};
