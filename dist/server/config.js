"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));
var _startsWith = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/starts-with"));
var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));
var _fs = require("fs");
var _logger = _interopRequireDefault(require("./logger"));
var _context, _context2;
let inputConfig = {};
if (process.env.ANAGINE_CONFIG_FILEPATH) {
  const configFilepath = process.env.ANAGINE_CONFIG_FILEPATH;
  inputConfig = JSON.parse((0, _fs.readFileSync)(configFilepath).toString());
  _logger.default.info('[config] read anagine config from', configFilepath, (0, _stringify.default)(inputConfig, null, 4));
}
const config = {
  esConfig: {
    host: 'localhost:9200',
    authFilterField: inputConfig.auth_filter_field || 'auth_resource_path'
  },
  guppyConfig: {
    host: 'localhost:3010'
  },
  ollamaConfig: {
    host: "localhost:11434",
    model: "llama3.2:1b"
  },
  port: 3000,
  path: '/graphql',
  arboristEndpoint: 'http://arborist-service',
  tierAccessLevel: 'private',
  tierAccessLimit: 1000,
  tierAccessSensitiveRecordExclusionField: inputConfig.tier_access_sensitive_record_exclusion_field,
  logLevel: inputConfig.log_level || 'INFO',
  enableEncryptWhiteList: typeof inputConfig.enable_encrypt_whitelist === 'undefined' ? false : inputConfig.enable_encrypt_whitelist,
  encryptWhitelist: inputConfig.encrypt_whitelist || ['__missing__', 'unknown', 'not reported', 'no data'],
  analyzedTextFieldSuffix: '.analyzed',
  matchedTextHighlightTagName: 'em',
  allowedMinimumSearchLen: 2
};
if (process.env.GEN3_ES_ENDPOINT) {
  config.esConfig.host = process.env.GEN3_ES_ENDPOINT;
}
if (!(0, _startsWith.default)(_context = config.esConfig.host).call(_context, 'http')) {
  config.esConfig.host = `http://${config.esConfig.host}`;
}
if (!(0, _startsWith.default)(_context2 = config.guppyConfig.host).call(_context2, 'http')) {
  config.guppyConfig.host = `http://${config.guppyConfig.host}`;
}
if (process.env.GEN3_ARBORIST_ENDPOINT) {
  config.arboristEndpoint = process.env.GEN3_ARBORIST_ENDPOINT;
}
if (process.env.ANAGINE_PORT) {
  config.port = process.env.ANAGINE_PORT;
}
const allowedTierAccessLevels = ['private', 'regular', 'libre'];
if (process.env.TIER_ACCESS_LEVEL) {
  if (!(0, _includes.default)(allowedTierAccessLevels).call(allowedTierAccessLevels, process.env.TIER_ACCESS_LEVEL)) {
    throw new Error(`Invalid TIER_ACCESS_LEVEL "${process.env.TIER_ACCESS_LEVEL}"`);
  }
  config.tierAccessLevel = process.env.TIER_ACCESS_LEVEL;
}
if (process.env.TIER_ACCESS_LIMIT) {
  config.tierAccessLimit = process.env.TIER_ACCESS_LIMIT;
}
if (process.env.INTERNAL_LOCAL_TEST) {
  config.internalLocalTest = process.env.INTERNAL_LOCAL_TEST;
}
if (process.env.LOG_LEVEL) {
  config.logLevel = process.env.LOG_LEVEL;
}
if (process.env.ANALYZED_TEXT_FIELD_SUFFIX) {
  config.analyzedTextFieldSuffix = process.env.ANALYZED_TEXT_FIELD_SUFFIX;
}

// Either all indices should have explicit index-scoped tiered-access values or
// the manifest should have a site-wide TIER_ACCESS_LEVEL value.
// This approach is backwards-compatible with commons configured for past versions of tiered-access.
let allIndicesHaveTierAccessSettings = true;

// If the indices all have settings, empty out the default
// site-wide TIER_ACCESS_LEVEL from the config.
if (allIndicesHaveTierAccessSettings) {
  delete config.tierAccessLevel;
}

// check whitelist is enabled
if (config.enableEncryptWhiteList) {
  if (typeof config.encryptWhitelist !== 'object') {
    config.encryptWhitelist = [config.encryptWhitelist];
  }
} else {
  config.encryptWhitelist = [];
}
_logger.default.setLogLevel(config.logLevel);
_logger.default.info('[config] starting server using config', (0, _stringify.default)(config, null, 4));
var _default = exports.default = config;