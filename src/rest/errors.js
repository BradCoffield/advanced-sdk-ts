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
exports.handleException = handleException;
var CoinbaseError = /** @class */ (function (_super) {
    __extends(CoinbaseError, _super);
    function CoinbaseError(message, statusCode, response) {
        var _this = _super.call(this, message) || this;
        _this.name = 'CoinbaseError';
        _this.statusCode = statusCode;
        _this.response = response;
        return _this;
    }
    return CoinbaseError;
}(Error));
function handleException(response, responseText, reason) {
    var message;
    if ((400 <= response.status && response.status <= 499) ||
        (500 <= response.status && response.status <= 599)) {
        if (response.status == 403 &&
            responseText.includes('"error_details":"Missing required scopes"')) {
            message = "".concat(response.status, " Coinbase Error: Missing Required Scopes. Please verify your API keys include the necessary permissions.");
        }
        else
            message = "".concat(response.status, " Coinbase Error: ").concat(reason, " ").concat(responseText);
        throw new CoinbaseError(message, response.status, response);
    }
}
