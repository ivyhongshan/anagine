"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));
var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));
var _some = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/some"));
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
var _config = _interopRequireDefault(require("../config"));
var _logger = _interopRequireDefault(require("../logger"));
var _error = _interopRequireDefault(require("../utils/error"));
class ArboristClient {
  constructor(arboristEndpoint) {
    this.baseEndpoint = arboristEndpoint;
  }
  listAuthorizedResources(jwt) {
    // Make request to arborist for list of resources with access
    const resourcesEndpoint = `${this.baseEndpoint}/auth/mapping`;
    _logger.default.debug('[ArboristClient] listAuthorizedResources jwt: ', jwt);
    const headers = jwt ? {
      Authorization: `bearer ${jwt}`
    } : {};
    return (0, _nodeFetch.default)(resourcesEndpoint, {
      method: 'GET',
      headers
    }).then(response => response.json()).then(result => {
      var _context;
      const data = {
        resources: []
      };
      (0, _forEach.default)(_context = (0, _keys.default)(result)).call(_context, key => {
        var _context2;
        // logic: you have access to a project if you have the following access:
        // method 'read' (or '*' - all methods) to service 'guppy' (or '*' - all services)
        // on the project resource.
        if (result[key] && (0, _some.default)(_context2 = result[key]).call(_context2, x => (x.method === 'read' || x.method === '*') && (x.service === 'guppy' || x.service === '*'))) {
          data.resources.push(key);
        }
      });
      _logger.default.debug('[ArboristClient] data: ', data);
      return data;
    }, err => {
      _logger.default.error(err);
      throw new _error.default(500, err);
    });
  }
}
var _default = exports.default = new ArboristClient(_config.default.arboristEndpoint);