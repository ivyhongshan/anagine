"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _helmet = _interopRequireDefault(require("helmet"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _config = _interopRequireDefault(require("./config"));
var _logger = _interopRequireDefault(require("./logger"));
var _graphql = _interopRequireDefault(require("./graphql"));
var _endpoints = require("./endpoints");
var _anagine = _interopRequireDefault(require("./anagine"));
var _error = _interopRequireDefault(require("./utils/error"));
// import headerParser from './utils/headerParser';
// import getAuthHelperInstance from './auth/authHelper';

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use((0, _helmet.default)());
app.use(_bodyParser.default.json({
  limit: '50mb'
}));
const startServer = async () => {
  app.use('/anagine', _anagine.default, (req, res, err, next) => {
    if (err instanceof _error.default) {
      // deepcode ignore ServerLeak: no important information exists in error
      res.status(err.code).send(err.msg);
    } else {
      // deepcode ignore ServerLeak: no important information exists in error
      res.status(500).send(err);
    }
  });
  app.use('/graphql', _graphql.default);

  // health check endpoint
  app.use('/_status', _endpoints.statusProxy);
  app.use('/_version', _endpoints.versionProxy);
  app.listen(_config.default.port, () => {
    _logger.default.info(`[Server] anagine listening on port ${_config.default.port}!`);
  });
};
startServer();