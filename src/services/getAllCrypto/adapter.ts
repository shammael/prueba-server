import GetAllCryptoResponse from "../interfaces/cryptosResponse";

export interface GetAllCryptosResponse {
  id: string;
  metrics: {
    marketData: {
      priceUSD: number;
      realVolumeLast24h: number;
      percentChangeUSDLast1H: number;
      percentChangeUSDLast24H: number;
    };
    marketcap: {
      currentMarketcapUSD: number;
    };
  };
  slug: string;
  symbol: string;
}

interface CoinGeckoResponse {
  prices: [number, number];
}

export const getAllcryptosAdapter = (
  response: GetAllCryptoResponse[]
): GetAllCryptosResponse[] => {
  return response.map((res) => ({
    id: res.id,
    metrics: {
      marketData: {
        priceUSD: parseFloat(res.metrics.market_data.price_usd),
        percentChangeUSDLast1H: parseFloat(
          res.metrics.market_data.percent_change_usd_last_1_hour
        ),
        percentChangeUSDLast24H: parseFloat(
          res.metrics.market_data.percent_change_usd_last_24_hours
        ),
        realVolumeLast24h: parseFloat(
          res.metrics.market_data.real_volume_last_24_hours
        ),
      },
      marketcap: {
        currentMarketcapUSD: parseFloat(
          res.metrics.marketcap.current_marketcap_usd
        ),
      },
    },
    slug: res.slug,
    symbol: res.symbol,
  }));
};

export const getStatsAdapter = (
  response: CoinGeckoResponse
): CoinGeckoResponse => {
  console.log(response);
  return {
    prices: response.prices,
  };
};
