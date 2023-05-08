import { Socket } from "socket.io";
import { CryptoData } from "../../types/CryptoTypes";
import { EventEmitter } from "events";
import getCryptoServices from "../../services/getAllCrypto";

const emitter = new EventEmitter();

const getDataMiddleware = async (client: Socket) => {
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

  emitter.on("data", (da) => {
    client.emit("data", { data: da });
  });

  client.on("disconnect", (e) => {
    console.log("disconnect");
  });
};

export default getDataMiddleware;
