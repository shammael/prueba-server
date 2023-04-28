interface Crypto {
  id: string;
  slug: string;
  symbol: string;
  metrics: {
    marketData: {
      priceUSD: number;
    };
  };
}

export default Crypto;
