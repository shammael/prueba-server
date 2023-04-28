import BadRequestError from "../errors/BadRequestError";
import { calculateAmount } from "../helpers";
import {
  CalculatorRequest,
  CalculatorResponse,
} from "../interfaces/calculator";
import getCryptoService from "../services/getCrypto";
import { CryptoData, CryptoType } from "../types/CryptoTypes";

export const getAnualAmountController = async (
  req: CalculatorRequest,
  res: CalculatorResponse
): Promise<void> => {
  const { crypto, amount } = req.query;

  const result = calculateAmount(
    crypto as CryptoData,
    parseFloat(amount as string)
  );

  const resp = await getCryptoService(crypto as CryptoType);

  if (!resp) {
    throw new BadRequestError("Crypto not suported");
  }

  res.status(200).json({
    anualAmount: result,
    cryptoPrice: resp.metrics.marketData.priceUSD,
    percentage:
      crypto === CryptoData.Bitcoin
        ? 5
        : crypto === CryptoData.Ethereum
        ? 4.2
        : 1,
  });
};
