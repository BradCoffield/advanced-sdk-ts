"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAPIKeyPermissions = getAPIKeyPermissions;
var constants_1 = require("../constants");
var request_types_1 = require("./types/request-types");
// [GET] Get API Key Permissions
// Official Documentation: https://docs.cdp.coinbase.com/advanced-trade/reference/retailbrokerageapi_getapikeypermissions
function getAPIKeyPermissions() {
    return this.request({
        method: request_types_1.method.GET,
        endpoint: "".concat(constants_1.API_PREFIX, "/key_permissions"),
        isPublic: false,
    });
}
