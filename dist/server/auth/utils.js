"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.getAccessibleResourcesFromArboristasync = exports.buildFilterWithResourceList = void 0;
var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));
var _lodash = _interopRequireDefault(require("lodash"));
var _logger = _interopRequireDefault(require("../logger"));
var _arboristClient = _interopRequireDefault(require("./arboristClient"));
var _error = _interopRequireDefault(require("../utils/error"));
var _config = _interopRequireDefault(require("../config"));
const getAccessibleResourcesFromArboristasync = async jwt => {
  let data;
  if (_config.default.internalLocalTest) {
    data = {
      resources: [
      // these are just for testing
      '/programs/DEV/projects/test', '/programs/jnkns/projects/jenkins']
    };
  } else {
    data = await _arboristClient.default.listAuthorizedResources(jwt);
  }
  _logger.default.debug('[authMiddleware] list resources: ', (0, _stringify.default)(data, null, 4));
  if (data && data.error) {
    // if user is not in arborist db, assume has no access to any
    if (data.error.code === 404) {
      return [];
    }
    throw new _error.default(data.error.code, data.error.message);
  }
  const resources = data.resources ? _lodash.default.uniq(data.resources) : [];
  return resources;
};
exports.getAccessibleResourcesFromArboristasync = getAccessibleResourcesFromArboristasync;
const buildFilterWithResourceList = (resourceList = []) => {
  const filter = {
    IN: {
      [_config.default.esConfig.authFilterField]: [...resourceList]
    }
  };
  return filter;
};
exports.buildFilterWithResourceList = buildFilterWithResourceList;