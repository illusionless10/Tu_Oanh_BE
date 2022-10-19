import { Response } from 'express';
import { Request } from 'express-jwt';
import response from "../../../utilities/response";
import services from "../../services";

const newProduct = (req: Request, res: Response) => {
  const err = services.product.create.newProduct();
  if (err) {
    return response.r400(res, {}, err.message);
  }
  return response.r200(res, {});
}

export default {
  newProduct,
}