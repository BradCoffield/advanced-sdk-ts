"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = generateToken;
var constants_1 = require("./constants");
var jwt = require("jsonwebtoken");
var crypto = require("crypto");
function generateToken(requestMethod, requestPath, apiKey, apiSecret) {
    var uri = "".concat(requestMethod, " ").concat(constants_1.BASE_URL).concat(requestPath);
    var payload = {
        iss: constants_1.JWT_ISSUER,
        nbf: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 120,
        sub: apiKey,
        uri: uri,
    };
    var header = {
        alg: constants_1.ALGORITHM,
        kid: apiKey,
        nonce: crypto.randomBytes(16).toString('hex'),
    };
    var options = {
        algorithm: constants_1.ALGORITHM,
        header: header,
    };
    return jwt.sign(payload, apiSecret, options);
}
