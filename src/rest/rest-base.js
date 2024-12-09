"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESTBase = void 0;
var jwt_generator_1 = require("../jwt-generator");
var node_fetch_1 = require("node-fetch");
var constants_1 = require("../constants");
var errors_1 = require("./errors");
var RESTBase = /** @class */ (function () {
    function RESTBase(key, secret) {
        if (!key || !secret) {
            console.log('Could not authenticate. Only public endpoints accessible.');
        }
        this.apiKey = key;
        this.apiSecret = secret;
    }
    RESTBase.prototype.request = function (options) {
        var method = options.method, endpoint = options.endpoint, isPublic = options.isPublic;
        var queryParams = options.queryParams, bodyParams = options.bodyParams;
        queryParams = queryParams ? this.filterParams(queryParams) : {};
        if (bodyParams !== undefined)
            bodyParams = bodyParams ? this.filterParams(bodyParams) : {};
        return this.prepareRequest(method, endpoint, queryParams, bodyParams, isPublic);
    };
    RESTBase.prototype.prepareRequest = function (httpMethod, urlPath, queryParams, bodyParams, isPublic) {
        var headers = this.setHeaders(httpMethod, urlPath, isPublic);
        var requestOptions = {
            method: httpMethod,
            headers: headers,
            body: JSON.stringify(bodyParams),
        };
        var queryString = this.buildQueryString(queryParams);
        var url = "https://".concat(constants_1.BASE_URL).concat(urlPath).concat(queryString);
        return this.sendRequest(headers, requestOptions, url);
    };
    RESTBase.prototype.sendRequest = function (headers, requestOptions, url) {
        return __awaiter(this, void 0, void 0, function () {
            var response, responseText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)(url, requestOptions)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 2:
                        responseText = _a.sent();
                        (0, errors_1.handleException)(response, responseText, response.statusText);
                        return [2 /*return*/, responseText];
                }
            });
        });
    };
    RESTBase.prototype.setHeaders = function (httpMethod, urlPath, isPublic) {
        var headers = new node_fetch_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('User-Agent', constants_1.USER_AGENT);
        if (this.apiKey !== undefined && this.apiSecret !== undefined)
            headers.append('Authorization', "Bearer ".concat((0, jwt_generator_1.generateToken)(httpMethod, urlPath, this.apiKey, this.apiSecret)));
        else if (isPublic == undefined || isPublic == false)
            throw new Error('Attempting to access authenticated endpoint with invalid API_KEY or API_SECRET.');
        return headers;
    };
    RESTBase.prototype.filterParams = function (data) {
        var filteredParams = {};
        for (var key in data) {
            if (data[key] !== undefined) {
                filteredParams[key] = data[key];
            }
        }
        return filteredParams;
    };
    RESTBase.prototype.buildQueryString = function (queryParams) {
        if (!queryParams || Object.keys(queryParams).length === 0) {
            return '';
        }
        var queryString = Object.entries(queryParams)
            .flatMap(function (_a) {
            var key = _a[0], value = _a[1];
            if (Array.isArray(value)) {
                return value.map(function (item) { return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(item)); });
            }
            else {
                return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value));
            }
        })
            .join('&');
        return "?".concat(queryString);
    };
    return RESTBase;
}());
exports.RESTBase = RESTBase;
