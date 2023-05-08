import { Server, Socket } from "socket.io";
import WebSocket from "ws";

const priceController = async (client: Socket, server: Server) => {
  client.on("symbol", (symbol) => {
    const room = server.of("/api/v1/stream/bi").adapter.rooms.has(symbol);

    if (room) {
      client.join(symbol);
    } else {
      client.join(symbol);

      let ws = new WebSocket(
        `wss://stream.binance.com:9443/ws/${symbol || "btc"}usdt@trade`
      );

      ws.on("message", (e) => {
        const data = JSON.parse(e as any);

        server
          .of("/api/v1/stream/bi")
          .to(symbol)
          .emit(`${symbol}-metrics`, data);
      });
    }
  });

  client.on("disconnect", (e) => {
    console.log("disconnect");
  });
};

export default priceController;
