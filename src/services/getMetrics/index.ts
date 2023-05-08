import BadRequestError from "../../errors/BadRequestError";
import TooManyRequestError from "../../errors/TooManyRequest.error";
import getRetyText from "../helpers";
import metricsAdapter from "./adapter";
// https://data.messari.io/api/v1/assets/btc/metrics
const getMetrics = async (symbol: string) => {
  const resp = await fetch(
    `https://data.messari.io/api/v1/assets/${symbol.toLowerCase()}/metrics`,
    {
      headers: {
        "x-messari-api-key": "cT5hMJfocHOxPHedeLGYG2fgZ7gEFYHMcpnIrPTCeQ2f4j3X",
      },
    }
  );

  const res = await resp.json();

  if (resp.status !== 200) {
    throw new TooManyRequestError(
      `Due to limitation of your account, please consider upgrade your plan. Retry in ${getRetyText(
        res.status.error_message
      )} seconds`
    );
  }

  return metricsAdapter(res.data);
};

export default getMetrics;
