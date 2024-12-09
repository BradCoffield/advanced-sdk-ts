"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESTClient = void 0;
var rest_base_1 = require("./rest-base");
var Accounts = require("./accounts");
var Converts = require("./converts");
var DataAPI = require("./dataAPI");
var Fees = require("./fees");
var Futures = require("./futures");
var Orders = require("./orders");
var Payments = require("./payments");
var Perpetuals = require("./perpetuals");
var Portfolios = require("./portfolios");
var Products = require("./products");
var Public = require("./public");
var RESTClient = /** @class */ (function (_super) {
    __extends(RESTClient, _super);
    function RESTClient(key, secret) {
        var _this = _super.call(this, key, secret) || this;
        // =============== ACCOUNTS endpoints ===============
        _this.getAccount = Accounts.getAccount.bind(_this);
        _this.listAccounts = Accounts.listAccounts.bind(_this);
        // =============== CONVERTS endpoints ===============
        _this.createConvertQuote = Converts.createConvertQuote.bind(_this);
        _this.commitConvertTrade = Converts.commitConvertTrade.bind(_this);
        _this.getConvertTrade = Converts.getConvertTrade.bind(_this);
        // =============== DATA API endpoints ===============
        _this.getAPIKeyPermissions = DataAPI.getAPIKeyPermissions.bind(_this);
        // =============== FEES endpoints ===============
        _this.getTransactionSummary = Fees.getTransactionSummary.bind(_this);
        // =============== FUTURES endpoints ===============
        _this.getFuturesBalanceSummary = Futures.getFuturesBalanceSummary.bind(_this);
        _this.getIntradayMarginSetting = Futures.getIntradayMarginSetting.bind(_this);
        _this.setIntradayMarginSetting = Futures.setIntradayMarginSetting.bind(_this);
        _this.getCurrentMarginWindow = Futures.getCurrentMarginWindow.bind(_this);
        _this.listFuturesPositions = Futures.listFuturesPositions.bind(_this);
        _this.getFuturesPosition = Futures.getFuturesPosition.bind(_this);
        _this.scheduleFuturesSweep = Futures.scheduleFuturesSweep.bind(_this);
        _this.listFuturesSweeps = Futures.listFuturesSweeps.bind(_this);
        _this.cancelPendingFuturesSweep = Futures.cancelPendingFuturesSweep.bind(_this);
        // =============== ORDERS endpoints ===============
        _this.createOrder = Orders.createOrder.bind(_this);
        _this.cancelOrders = Orders.cancelOrders.bind(_this);
        _this.editOrder = Orders.editOrder.bind(_this);
        _this.editOrderPreview = Orders.editOrderPreview.bind(_this);
        _this.listOrders = Orders.listOrders.bind(_this);
        _this.listFills = Orders.listFills.bind(_this);
        _this.getOrder = Orders.getOrder.bind(_this);
        _this.previewOrder = Orders.previewOrder.bind(_this);
        _this.closePosition = Orders.closePosition.bind(_this);
        // =============== PAYMENTS endpoints ===============
        _this.listPaymentMethods = Payments.listPaymentMethods.bind(_this);
        _this.getPaymentMethod = Payments.getPaymentMethod.bind(_this);
        // =============== PERPETUALS endpoints ===============
        _this.allocatePortfolio = Perpetuals.allocatePortfolio.bind(_this);
        _this.getPerpetualsPortfolioSummary = Perpetuals.getPerpetualsPortfolioSummary.bind(_this);
        _this.listPerpetualsPositions = Perpetuals.listPerpetualsPositions.bind(_this);
        _this.getPerpetualsPosition = Perpetuals.getPerpertualsPosition.bind(_this);
        _this.getPortfolioBalances = Perpetuals.getPortfolioBalances.bind(_this);
        _this.optInOutMultiAssetCollateral = Perpetuals.optInOutMultiAssetCollateral.bind(_this);
        // =============== PORTFOLIOS endpoints ===============
        _this.listPortfolios = Portfolios.listPortfolios.bind(_this);
        _this.createPortfolio = Portfolios.createPortfolio.bind(_this);
        _this.deletePortfolio = Portfolios.deletePortfolio.bind(_this);
        _this.editPortfolio = Portfolios.editPortfolio.bind(_this);
        _this.movePortfolioFunds = Portfolios.movePortfolioFunds.bind(_this);
        _this.getPortfolioBreakdown = Portfolios.getPortfolioBreakdown.bind(_this);
        // =============== PRODUCTS endpoints ===============
        _this.getBestBidAsk = Products.getBestBidAsk.bind(_this);
        _this.getProductBook = Products.getProductBook.bind(_this);
        _this.listProducts = Products.listProducts.bind(_this);
        _this.getProduct = Products.getProduct.bind(_this);
        _this.getProductCandles = Products.getProductCandles.bind(_this);
        _this.getMarketTrades = Products.getMarketTrades.bind(_this);
        // =============== PUBLIC endpoints ===============
        _this.getServerTime = Public.getServerTime.bind(_this);
        _this.getPublicProductBook = Public.getPublicProductBook.bind(_this);
        _this.listPublicProducts = Public.listPublicProducts.bind(_this);
        _this.getPublicProduct = Public.getPublicProduct.bind(_this);
        _this.getPublicProductCandles = Public.getPublicProductCandles.bind(_this);
        _this.getPublicMarketTrades = Public.getPublicMarketTrades.bind(_this);
        return _this;
    }
    return RESTClient;
}(rest_base_1.RESTBase));
exports.RESTClient = RESTClient;
