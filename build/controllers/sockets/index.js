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
exports.getDataMiddleware = void 0;
const getAllCrypto_1 = __importDefault(require("../../services/getAllCrypto"));
const CryptoTypes_1 = require("../../types/CryptoTypes");
const events_1 = require("events");
const emitter = new events_1.EventEmitter();
exports.default = emitter;
const getDataMiddleware = (client) => __awaiter(void 0, void 0, void 0, function* () {
    setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
        let arr = yield (0, getAllCrypto_1.default)();
        const data = arr.filter((da) => da.slug === CryptoTypes_1.CryptoData.Bitcoin ||
            da.slug === CryptoTypes_1.CryptoData.Cardano ||
            da.slug === CryptoTypes_1.CryptoData.Ethereum);
        emitter.emit("data", data);
    }), 5000);
    console.log("connect");
    emitter.on("data", (da) => {
        client.emit("data", { data: da });
    });
    client.on("disconnect", (e) => {
        console.log("disconnect");
    });
});
exports.getDataMiddleware = getDataMiddleware;
