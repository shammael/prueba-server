export enum CryptoData {
  Bitcoin = "bitcoin",
  Ethereum = "ethereum",
  Cardano = "cardano",
}

export enum CryptoSymbol {
  BTC = "btc",
  ETH = "eth",
  ADA = "ada",
}

export type CryptoType =
  | CryptoData.Bitcoin
  | CryptoData.Cardano
  | CryptoData.Ethereum;
