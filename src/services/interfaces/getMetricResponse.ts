interface GetCryptoResponse {
  Asset: {
    id: string;
    slug: string;
    symbol: string;
  };
  market_data: {
    price_usd: string;
  };
}

export default GetCryptoResponse;
