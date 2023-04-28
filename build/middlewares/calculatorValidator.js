"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const calculator_1 = __importDefault(require("../schemas/requests/calculator"));
const calculatorMiddleware = (req, res, next) => {
    try {
        calculator_1.default.parse({
            crypto: req.query.crypto,
            amount: parseFloat(req.query.amount),
        });
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            return res.status(400).json({ message: error.message });
        }
        return res.status(500).json({ message: "An error have been occured" });
    }
    next();
};
exports.default = calculatorMiddleware;
