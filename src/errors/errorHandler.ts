import { NextFunction, Request, Response } from "express";

const errorHandler =
  <Request, Response>(
    fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
  ) =>
  (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);
export default errorHandler;
