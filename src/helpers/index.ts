import { CryptoData } from "../types/CryptoTypes";

export const calculateAmount = (
  crypto: CryptoData.Bitcoin | CryptoData.Cardano | CryptoData.Ethereum,
  amount: number
): number => {
  if (amount <= 0) {
    throw new Error("bad request");
  }
  switch (crypto) {
    case CryptoData.Bitcoin:
      return amount * 0.05 * 12;
    case CryptoData.Ethereum:
      return amount * 0.042 * 12;
    case CryptoData.Cardano:
      return amount * 0.01 * 12;
    default:
      throw new Error("Not suported");
  }
};
