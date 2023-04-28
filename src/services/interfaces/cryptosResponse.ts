interface GetAllCryptoResponse {
  id: string;
  slug: string;
  symbol: string;
  metrics: {
    market_data: {
      price_usd: string;
      real_volume_last_24_hours: string;
      percent_change_usd_last_1_hour: string;
      percent_change_usd_last_24_hours: string;
    };
    marketcap: {
      current_marketcap_usd: string;
    };
  };
}

export default GetAllCryptoResponse;
