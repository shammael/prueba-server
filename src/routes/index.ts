import express from "express";
import { getAnualAmountController } from "../controllers";
import errorHandler from "../errors/errorHandler";
import calculatorMiddleware from "../middlewares/calculatorValidator";

const router = express.Router();

router.get(
  "/calculator",
  calculatorMiddleware,
  errorHandler(getAnualAmountController)
);

export default router;
