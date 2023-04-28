import { Request, Response } from "express";
import { ZodError } from "zod";
import BadRequestError from "./BadRequestError";

const errorRoute = (err: Error, req: Request, res: Response) => {
  console.log("first");
  if (err instanceof ZodError) {
    return res.status(400).json(err.message);
  }

  if (err instanceof BadRequestError) {
    return res.status(res.statusCode).json({ message: err.message });
  }

  return res.status(500).json({
    message: "An error have ocurred",
  });
};

export default errorRoute;
