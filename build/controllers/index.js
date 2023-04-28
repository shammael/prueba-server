"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnualAmountController = void 0;
const BadRequestError_1 = __importDefault(require("../errors/BadRequestError"));
const helpers_1 = require("../helpers");
const getCrypto_1 = __importDefault(require("../services/getCrypto"));
const CryptoTypes_1 = require("../types/CryptoTypes");
const getAnualAmountController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { crypto, amount } = req.query;
    const result = (0, helpers_1.calculateAmount)(crypto, parseFloat(amount));
    const resp = yield (0, getCrypto_1.default)(crypto);
    if (!resp) {
        throw new BadRequestError_1.default("Crypto not suported");
    }
    res.status(200).json({
        anualAmount: result,
        cryptoPrice: resp.metrics.marketData.priceUSD,
        percentage: crypto === CryptoTypes_1.CryptoData.Bitcoin
            ? 5
            : crypto === CryptoTypes_1.CryptoData.Ethereum
                ? 4.2
                : 1,
    });
});
exports.getAnualAmountController = getAnualAmountController;
