"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allocatePortfolio = allocatePortfolio;
exports.getPerpetualsPortfolioSummary = getPerpetualsPortfolioSummary;
exports.listPerpetualsPositions = listPerpetualsPositions;
exports.getPerpertualsPosition = getPerpertualsPosition;
exports.getPortfolioBalances = getPortfolioBalances;
exports.optInOutMultiAssetCollateral = optInOutMultiAssetCollateral;
var constants_1 = require("../constants");
var request_types_1 = require("./types/request-types");
// [POST] Allocate Portfolio
// Official Documentation: https://docs.cdp.coinbase.com/advanced-trade/reference/retailbrokerageapi_allocateportfolio
function allocatePortfolio(requestParams) {
    return this.request({
        method: request_types_1.method.POST,
        endpoint: "".concat(constants_1.API_PREFIX, "/intx/allocate"),
        bodyParams: requestParams,
        isPublic: false,
    });
}
// [GET] Get Perpetuals Portfolio Summary
// Official Documentation: https://docs.cdp.coinbase.com/advanced-trade/reference/retailbrokerageapi_getintxportfoliosummary
function getPerpetualsPortfolioSummary(_a) {
    var portfolioUuid = _a.portfolioUuid;
    return this.request({
        method: request_types_1.method.GET,
        endpoint: "".concat(constants_1.API_PREFIX, "/intx/portfolio/").concat(portfolioUuid),
        isPublic: false,
    });
}
// [GET] List Perpetuals Positions
// Official Documentation: https://docs.cdp.coinbase.com/advanced-trade/reference/retailbrokerageapi_getintxpositions
function listPerpetualsPositions(_a) {
    var portfolioUuid = _a.portfolioUuid;
    return this.request({
        method: request_types_1.method.GET,
        endpoint: "".concat(constants_1.API_PREFIX, "/intx/positions/").concat(portfolioUuid),
        isPublic: false,
    });
}
// [GET] Get Perpetuals Position
// Official Documentation: https://docs.cdp.coinbase.com/advanced-trade/reference/retailbrokerageapi_getintxposition
function getPerpertualsPosition(_a) {
    var portfolioUuid = _a.portfolioUuid, symbol = _a.symbol;
    return this.request({
        method: request_types_1.method.GET,
        endpoint: "".concat(constants_1.API_PREFIX, "/intx/positions/").concat(portfolioUuid, "/").concat(symbol),
        isPublic: false,
    });
}
// [GET] Get Portfolio Balances
// Official Documentation: https://docs.cdp.coinbase.com/advanced-trade/reference/retailbrokerageapi_getintxbalances
function getPortfolioBalances(_a) {
    var portfolioUuid = _a.portfolioUuid;
    return this.request({
        method: request_types_1.method.GET,
        endpoint: "".concat(constants_1.API_PREFIX, "/intx/balances/").concat(portfolioUuid),
        isPublic: false,
    });
}
// [POST] Opt In or Out of Multi Asset Collateral
// Official Documentation: https://docs.cdp.coinbase.com/advanced-trade/reference/retailbrokerageapi_intxmultiassetcollateral
function optInOutMultiAssetCollateral(requestParams) {
    return this.request({
        method: request_types_1.method.POST,
        endpoint: "".concat(constants_1.API_PREFIX, "/intx/multi_asset_collateral"),
        bodyParams: requestParams,
        isPublic: false,
    });
}
