"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const sockets_1 = require("../controllers/sockets");
const index_1 = __importDefault(require("../routes/index"));
const errorRoute_1 = __importDefault(require("../errors/errorRoute"));
const limiter = (0, express_rate_limit_1.default)({
    max: 400,
    windowMs: 60 * 60 * 1000,
    message: "Too many request from this IP, please try again later",
});
class Server {
    constructor() {
        this.port = parseInt(process.env.PORT) || 3000;
        this.app = (0, express_1.default)();
        this.server = http_1.default.createServer(this.app);
        this.io = new socket_io_1.default.Server(this.server, {
            cors: {
                origin: "*",
            },
        });
        this.middlewares();
        this.sockets();
        this.routes();
    }
    routes() {
        this.app.use("/api/v1", index_1.default);
        this.app.use(errorRoute_1.default);
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new this();
        }
        return this.instance;
    }
    sockets() {
        console.log("sd");
        this.io.of("/api/v1/stream").on("connection", sockets_1.getDataMiddleware);
    }
    middlewares() {
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)({
            origin: "*",
        }));
        this.app.use(limiter);
    }
    start(callback) {
        this.server.listen(this.port, callback);
    }
}
exports.default = Server;
