"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.versionProxy = exports.statusProxy = void 0;
var _httpProxyMiddleware = require("http-proxy-middleware");
var _config = _interopRequireDefault(require("./config"));
const statusProxy = exports.statusProxy = (0, _httpProxyMiddleware.createProxyMiddleware)({
  target: `${_config.default.guppyConfig.host}/_status`,
  changeOrigin: true
});
const versionProxy = exports.versionProxy = (0, _httpProxyMiddleware.createProxyMiddleware)({
  target: `${_config.default.guppyConfig.host}/_version`,
  changeOrigin: true
});