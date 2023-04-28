"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const errorHandler_1 = __importDefault(require("../errors/errorHandler"));
const calculatorValidator_1 = __importDefault(require("../middlewares/calculatorValidator"));
const router = express_1.default.Router();
router.get("/calculator", calculatorValidator_1.default, (0, errorHandler_1.default)(controllers_1.getAnualAmountController));
exports.default = router;
