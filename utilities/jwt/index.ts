import jwt from 'jsonwebtoken';
import {expressjwt, Request} from 'express-jwt';
import { IJwtUser } from "./interface";
import {NextFunction, Response} from "express";
import dao from "../../server/dao";
import response from "../response";
import config from '../../config';

const verify = (token: string, secret: string): IJwtUser | null => {
  try {
    const data = jwt.verify(token, secret);
    const decoded = data as IJwtUser;
    return {
      id: decoded._id || decoded.id,
    };
  } catch (err) {
    return null;
  }
};

const sign = (payload: IJwtUser, secret: string): string => {
  return jwt.sign(payload, secret);
};

const middleware = async () => {
  const cfg = config.get();
  return [
    expressjwt({
      secret: cfg.common.jwtSecret || '',
      algorithms: ['HS256'],
    }),
    permission,
  ]
}

const permission = async (req: Request, res: Response, next: NextFunction) => {
  const foundUser = await dao.user.find.oneById(req.auth?.id);
  if (!foundUser) {
    response.r401(res);
  }
  next();
}

export default {
  verify,
  sign,
  middleware,
};
