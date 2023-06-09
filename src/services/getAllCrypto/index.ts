import TooManyRequestError from "../../errors/TooManyRequest.error";
import getRetyText from "../helpers";
import { getAllcryptosAdapter } from "./adapter";

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

  if (data.status === 429) {
    throw new TooManyRequestError(
      `Due to limitation of your account, please consider upgrade your plan. Retry in ${getRetyText(
        res.status.error_message
      )} seconds`
    );
  }

  return getAllcryptosAdapter(res.data);
};

export default getAllCryptoServices;
