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
Object.defineProperty(exports, "__esModule", { value: true });
const getStatsCrypto = (label) => __awaiter(void 0, void 0, void 0, function* () {
    const coinGeckoAPI = yield fetch(`https://api.coingecko.com/api/v3/coins/${label}/market_chart?vs_currency=usd&days=7&interval=daily`);
    const resp = yield coinGeckoAPI.json();
    return resp;
});
exports.default = getStatsCrypto;
