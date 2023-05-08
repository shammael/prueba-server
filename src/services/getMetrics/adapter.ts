import { MetricsAPIResponse, MetricsResponse } from "./interfaces";

const metricsAdapter = (resp: MetricsAPIResponse): MetricsResponse => ({
  id: resp.id,
  marketcapUSD: resp.marketcap.current_marketcap_usd,
  percentChangeUSD1h: resp.market_data.percent_change_usd_last_1_hour,
  percentChangeUSD24h: resp.market_data.percent_change_usd_last_24_hours,
  realVolume24h: resp.market_data.real_volume_last_24_hours,
  slug: resp.slug,
  symbol: resp.symbol,
});

export default metricsAdapter;
