"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));
var _httpProxyMiddleware = require("http-proxy-middleware");
var _config = _interopRequireDefault(require("./config"));
const graphQLProxy = (0, _httpProxyMiddleware.createProxyMiddleware)({
  target: `${_config.default.guppyConfig.host}/graphql`,
  changeOrigin: true,
  on: {
    error: (err, req, res) => {
      res.status(500).send(err);
    },
    proxyReq: (proxyReq, req, res) => {
      if (req.body) {
        const bodyData = (0, _stringify.default)(req.body);
        proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
        proxyReq.write(bodyData);
      }
    },
    proxyRes: (proxyRes, req, res) => {},
    proxyReqWs: () => {},
    open: () => {},
    close: () => {}
  }
});
var _default = exports.default = graphQLProxy;