export enum CryptoData {
  Bitcoin = "bitcoin",
  Ethereum = "ethereum",
  Cardano = "cardano",
}

export type CryptoType =
  | CryptoData.Bitcoin
  | CryptoData.Cardano
  | CryptoData.Ethereum;
