import { CryptoData } from "../../types/CryptoTypes";
import cryptoAdapter from "./adapter";

const hashedMap = {
  bitcoin: "btc",
  ethereum: "eth",
  cardano: "ada",
};

const getCryptoService = async (
  value: CryptoData.Bitcoin | CryptoData.Cardano | CryptoData.Ethereum
) => {
  try {
    const resp = await fetch(
      `https://data.messari.io/api/v1/assets/${hashedMap[value]}/metrics/market-data`
    );
    const res = await resp.json();
    return cryptoAdapter(res.data);
  } catch (error) {
    throw new Error("An error have been occured");
  }
};

export default getCryptoService;
