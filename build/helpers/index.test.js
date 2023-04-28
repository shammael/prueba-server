"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const _1 = require(".");
const CryptoTypes_1 = require("../types/CryptoTypes");
(0, vitest_1.describe)("calculateAmount", () => {
    (0, vitest_1.it)("should return the exact value", () => {
        const result = (0, _1.calculateAmount)(CryptoTypes_1.CryptoData.Bitcoin, 500);
        (0, vitest_1.expect)(result).toBe(300);
    });
});
