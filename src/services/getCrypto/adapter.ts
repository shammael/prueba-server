import CryptoMetrics from "../interfaces/crypto";
import GetCryptoResponse from "../interfaces/getMetricResponse";

const cryptoAdapter = (res: GetCryptoResponse): CryptoMetrics => {
  return {
    id: res.Asset.id,
    metrics: {
      marketData: {
        priceUSD: parseFloat(res.market_data.price_usd),
      },
    },
    slug: res.Asset.slug,
    symbol: res.Asset.symbol,
  };
};

export default cryptoAdapter;
