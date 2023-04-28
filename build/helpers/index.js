"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAmount = void 0;
const CryptoTypes_1 = require("../types/CryptoTypes");
const calculateAmount = (crypto, amount) => {
    if (amount <= 0) {
        throw new Error("bad request");
    }
    switch (crypto) {
        case CryptoTypes_1.CryptoData.Bitcoin:
            return amount * 0.05 * 12;
        case CryptoTypes_1.CryptoData.Ethereum:
            return amount * 0.042 * 12;
        case CryptoTypes_1.CryptoData.Cardano:
            return amount * 0.01 * 12;
        default:
            throw new Error("Not suported");
    }
};
exports.calculateAmount = calculateAmount;
