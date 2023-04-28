import express, { Application } from "express";
import socketIO from "socket.io";
import http from "http";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { getDataMiddleware } from "../controllers/sockets";
import calculatorRoute from "../routes/index";
import errorRoute from "../errors/errorRoute";

const limiter = rateLimit({
  max: 400,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP, please try again later",
});

class Server {
  private app: Application;
  readonly port: number = parseInt(process.env.PORT!) || 3000;
  private server: http.Server;
  private io: socketIO.Server;
  private static instance: Server;

  private constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.io = new socketIO.Server(this.server, {
      cors: {
        origin: "*",
      },
    });
    this.middlewares();
    this.sockets();
    this.routes();
  }

  private routes() {
    this.app.use("/api/v1", calculatorRoute);
    this.app.use(errorRoute);
  }

  static getInstance(): Server {
    if (!this.instance) {
      this.instance = new this();
    }

    return this.instance;
  }

  private sockets() {
    console.log("sd");
    this.io.of("/api/v1/stream").on("connection", getDataMiddleware);
  }

  private middlewares() {
    this.app.use(helmet());
    this.app.use(
      cors({
        origin: "*",
      })
    );
    this.app.use(limiter);
  }

  public start(callback: () => void) {
    this.server.listen(this.port, callback);
  }
}

export default Server;
