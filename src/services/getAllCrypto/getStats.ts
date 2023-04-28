import { CryptoData } from "../../types/CryptoTypes";

const getStatsCrypto = async (label: CryptoData) => {
  const coinGeckoAPI = await fetch(
    `https://api.coingecko.com/api/v3/coins/${label}/market_chart?vs_currency=usd&days=7&interval=daily`
  );

  const resp = await coinGeckoAPI.json();

  return resp;
};

export default getStatsCrypto;
