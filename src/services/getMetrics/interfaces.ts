export interface MetricsAPIResponse {
  id: string;
  symbol: string;
  slug: string;
  market_data: {
    real_volume_last_24_hours: number;
    percent_change_usd_last_1_hour: number;
    percent_change_usd_last_24_hours: number;
  };
  marketcap: {
    current_marketcap_usd: number;
  };
}

export interface MetricsResponse {
  id: string;
  symbol: string;
  slug: string;
  realVolume24h: number;
  percentChangeUSD24h: number;
  percentChangeUSD1h: number;
  marketcapUSD: number;
}
