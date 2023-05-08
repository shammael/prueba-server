import { NextFunction, Request, Response } from "express";

const metricsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.query.symbol) {
      throw new Error("The symbol is required");
    }

    const symbol = req.query.symbol as string;

    if (!["btc", "eth", "ada"].includes(symbol.toLowerCase())) {
      throw new Error("Invalid symol");
    }
    next();
  } catch (error: any) {
    console.log(error);
    return res.status(400).json(error.message);
  }
};

export default metricsMiddleware;
