import { Request, Response } from "express";

export type CalculatorRequest = Request<
  null,
  null,
  null,
  { crypto: string; amount: string }
>;

export type CalculatorResponse = Response<{
  anualAmount: number;
  percentage: number;
  cryptoPrice: number;
}>;
