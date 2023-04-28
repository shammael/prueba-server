import { NextFunction, Response } from "express";
import { ZodError } from "zod";
import { CalculatorRequest } from "../interfaces/calculator";
import calculatorRequestSchema from "../schemas/requests/calculator";

const calculatorMiddleware = (
  req: CalculatorRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    calculatorRequestSchema.parse({
      crypto: req.query.crypto,
      amount: parseFloat(req.query.amount),
    });
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      return res.status(400).json({ message: error.message });
    }

    return res.status(500).json({ message: "An error have been occured" });
  }
  next();
};

export default calculatorMiddleware;
