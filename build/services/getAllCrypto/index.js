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
const adapter_1 = require("./adapter");
const getAllCryptoServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://data.messari.io/api/v2/assets?fields=id,slug,symbol,metrics", {
        headers: {
            "x-messari-api-key": "cT5hMJfocHOxPHedeLGYG2fgZ7gEFYHMcpnIrPTCeQ2f4j3X",
        },
    });
    const res = yield data.json();
    return (0, adapter_1.getAllcryptosAdapter)(res.data);
});
exports.default = getAllCryptoServices;
