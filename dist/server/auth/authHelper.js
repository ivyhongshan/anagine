"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AuthHelper = void 0;
var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));
var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));
var _lodash = _interopRequireDefault(require("lodash"));
var _utils = require("../utils/utils");
var _logger = _interopRequireDefault(require("../logger"));
var _utils2 = require("./utils");
var _config = _interopRequireDefault(require("../config"));
class AuthHelper {
  constructor(jwt) {
    this._jwt = jwt;
  }
  async initialize() {
    try {
      var _context;
      this._accessibleResourceList = await (0, _utils2.getAccessibleResourcesFromArboristasync)(this._jwt);
      _logger.default.debug('[AuthHelper] accessible resources:', this._accessibleResourceList);
      const promiseList = [];
      (0, _forEach.default)(_context = _config.default.esConfig.indices).call(_context, ({
        index,
        type
      }) => {
        const subListPromise = this.getOutOfScopeResourceList(index, type);
        promiseList.push(subListPromise);
      });
      const listResult = await _promise.default.all(promiseList);
      this._unaccessibleResourceList = [];
      (0, _forEach.default)(listResult).call(listResult, list => {
        this._unaccessibleResourceList = _lodash.default.union(this._unaccessibleResourceList, list);
      });
      _logger.default.debug('[AuthHelper] unaccessible resources:', this._unaccessibleResourceList);
    } catch (err) {
      _logger.default.error('[AuthHelper] error when initializing:', err);
    }
  }
  getAccessibleResources() {
    return this._accessibleResourceList;
  }
  getUnaccessibleResources() {
    return this._unaccessibleResourceList;
  }
  async getOutOfScopeResourceList(esIndex, esType, filter, filterSelf) {
    const requestResourceList = await (0, _utils2.getRequestResourceListFromFilter)(esIndex, esType, filter, filterSelf);
    _logger.default.debug('[AuthHelper] filter:', filter);
    _logger.default.debug(`[AuthHelper] request resource list: [${requestResourceList.join(', ')}]`);
    const outOfScopeResourceList = _lodash.default.difference(requestResourceList, this._accessibleResourceList);
    _logger.default.debug(`[AuthHelper] out-of-scope resource list: [${outOfScopeResourceList.join(', ')}]`);
    return outOfScopeResourceList;
  }
  applyAccessibleFilter(filter) {
    const accessiblePart = (0, _utils2.buildFilterWithResourceList)(this._accessibleResourceList);
    const appliedFilter = (0, _utils.addTwoFilters)(filter, accessiblePart);
    return appliedFilter;
  }
  applyUnaccessibleFilter(filter) {
    const unaccessiblePart = (0, _utils2.buildFilterWithResourceList)(this._unaccessibleResourceList);
    const appliedFilter = (0, _utils.addTwoFilters)(filter, unaccessiblePart);
    return appliedFilter;
  }
  getDefaultFilter(accessibility) {
    if (accessibility === 'all') {
      return {};
    }
    if (accessibility === 'accessible') {
      return this.applyAccessibleFilter();
    }
    if (accessibility === 'unaccessible') {
      return this.applyUnaccessibleFilter();
    }
    throw new Error(`Invalid accessibility argument: ${accessibility}`);
  }
}
exports.AuthHelper = AuthHelper;
const getAuthHelperInstance = async jwt => {
  const authHelper = new AuthHelper(jwt);
  await authHelper.initialize();
  return authHelper;
};
var _default = exports.default = getAuthHelperInstance;