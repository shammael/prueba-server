"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatsAdapter = exports.getAllcryptosAdapter = void 0;
const getAllcryptosAdapter = (response) => {
    return response.map((res) => ({
        id: res.id,
        metrics: {
            marketData: {
                priceUSD: parseFloat(res.metrics.market_data.price_usd),
                percentChangeUSDLast1H: parseFloat(res.metrics.market_data.percent_change_usd_last_1_hour),
                percentChangeUSDLast24H: parseFloat(res.metrics.market_data.percent_change_usd_last_24_hours),
                realVolumeLast24h: parseFloat(res.metrics.market_data.real_volume_last_24_hours),
            },
            marketcap: {
                currentMarketcapUSD: parseFloat(res.metrics.marketcap.current_marketcap_usd),
            },
        },
        slug: res.slug,
        symbol: res.symbol,
    }));
};
exports.getAllcryptosAdapter = getAllcryptosAdapter;
const getStatsAdapter = (response) => {
    console.log(response);
    return {
        prices: response.prices,
    };
};
exports.getStatsAdapter = getStatsAdapter;
