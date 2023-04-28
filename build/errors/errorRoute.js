"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const BadRequestError_1 = __importDefault(require("./BadRequestError"));
const errorRoute = (err, req, res) => {
    console.log("first");
    if (err instanceof zod_1.ZodError) {
        return res.status(400).json(err.message);
    }
    if (err instanceof BadRequestError_1.default) {
        return res.status(res.statusCode).json({ message: err.message });
    }
    return res.status(500).json({
        message: "An error have ocurred",
    });
};
exports.default = errorRoute;
