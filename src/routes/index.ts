import express from "express";
import {
  getAnualAmountController,
  getMetricsDataController,
} from "../controllers";
import errorHandler from "../errors/errorHandler";
import calculatorMiddleware from "../middlewares/calculatorValidator";
import metricsMiddleware from "../middlewares/metrics.middleware";

const router = express.Router();

router.get(
  "/calculator",
  calculatorMiddleware,
  errorHandler(getAnualAmountController)
);

router.get(
  "/metrics",
  metricsMiddleware,
  errorHandler(getMetricsDataController)
);

export default router;
