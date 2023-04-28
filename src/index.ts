import express from "express";
import helmet from "helmet";
import cors from "cors";
import routes from "./routes/index";
import errorHandler from "./errors/errorRoute";
import http from "http";
import WebSocket from "ws";
import io from "socket.io";
import Server from "./models/Server";
// const server = http.createServer(app);

// let ws1 = new WebSocket("wss://stream.binance.com:9443/ws");

// ws1.on("message", (e) => console.log(JSON.parse(e as any)));

// ws1.on("error", (e) => console.log(e));

// let ws2 = new WebSocket.Server({ server });

// ws2.on("connection", (socket) => {
//   console.log("first");

//   socket.on("close", (e) => {
//     console.log(e);
//   });
// });

// app.use(helmet());

// app.use(cors({}));

// const PORT = process.env.PORT || 3000;

// // app.use("/api/v1", routes);
// // app.use(errorHandler);

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const server = Server.getInstance();

server.start(() => console.log("Server running on port "));
