"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cryptoAdapter = (res) => {
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
exports.default = cryptoAdapter;
