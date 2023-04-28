import { Socket } from "socket.io";
import getCryptoServices from "../../services/getAllCrypto";
import { getStatsAdapter } from "../../services/getAllCrypto/adapter";
import getStatsCrypto from "../../services/getAllCrypto/getStats";
import { CryptoData } from "../../types/CryptoTypes";

import { EventEmitter } from "events";

const emitter = new EventEmitter();

export default emitter;

export const getDataMiddleware = async (client: Socket) => {
  setInterval(async () => {
    let arr = await getCryptoServices();

    const data = arr.filter(
      (da) =>
        da.slug === CryptoData.Bitcoin ||
        da.slug === CryptoData.Cardano ||
        da.slug === CryptoData.Ethereum
    );

    emitter.emit("data", data);
  }, 5000);

  console.log("connect");

  emitter.on("data", (da) => {
    client.emit("data", { data: da });
  });

  client.on("disconnect", (e) => {
    console.log("disconnect");
  });
};
