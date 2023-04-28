"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const CryptoTypes_1 = require("../../types/CryptoTypes");
const calculatorRequestSchema = zod_1.z.object({
    crypto: zod_1.z.enum([CryptoTypes_1.CryptoData.Bitcoin, CryptoTypes_1.CryptoData.Ethereum, CryptoTypes_1.CryptoData.Cardano]),
    amount: zod_1.z.number().gt(0),
});
exports.default = calculatorRequestSchema;
