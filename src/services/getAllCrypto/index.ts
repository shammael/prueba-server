import { getAllcryptosAdapter, GetAllCryptosResponse } from "./adapter";

const getAllCryptoServices = async () => {
  const data = await fetch(
    "https://data.messari.io/api/v2/assets?fields=id,slug,symbol,metrics",
    {
      headers: {
        "x-messari-api-key": "cT5hMJfocHOxPHedeLGYG2fgZ7gEFYHMcpnIrPTCeQ2f4j3X",
      },
    }
  );

  const res = await data.json();

  return getAllcryptosAdapter(res.data);
};

export default getAllCryptoServices;
