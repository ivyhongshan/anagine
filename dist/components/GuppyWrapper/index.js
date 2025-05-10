"use strict";function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _queries = require("../Utils/queries");







var _const = require("../Utils/const");
var _filters = require("../Utils/filters");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}function _callSuper(t, o, e) {return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));}function _possibleConstructorReturn(t, e) {if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e) {if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct() {try {var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));} catch (t) {}return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {return !!t;})();}function _getPrototypeOf(t) {return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {return t.__proto__ || Object.getPrototypeOf(t);}, _getPrototypeOf(t);}function _inherits(t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);}function _setPrototypeOf(t, e) {return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {return t.__proto__ = e, t;}, _setPrototypeOf(t, e);} /* eslint-disable react/jsx-fragments */ /* eslint react/forbid-prop-types: 0 */

/**
 * Wrapper that connects to Guppy server,
 * and pass filter, aggs, and data to children components
 * Input props:
 *   - filterConfig: configuration for ConnectedFilter component
 *   - guppyConfig: Guppy server config
 *   - onFilterChange: callback that takes filter as argument, will be
 * called every time filter changes
 *   - onReceiveNewAggsData: callback that takes aggregation results
 * as argument, will be called every time aggregation results updated
 *
 * This wrapper will pass following data (filters, aggs, configs) to children components via prop:
 *   - aggsData: the aggregation results, format:
 *         {
 *             // for text aggregation
 *            [field]: { histogram: [{key: 'v1', count: 42}, {key: 'v2', count: 19}, ...] },
 *             // for numeric aggregation
 *            [field]: { histogram: [{key: [1, 83], count: 100}] },
 *            ...
 *         }
 *   - filter: the filters, format:
 *         {
 *            [field]: { selectedValues: ['v1', 'v2', ...] },  // for text filter
 *            [field]: { upperBound: 1, lowerBound: 83 },  // for range filter
 *            ...
 *         }
 *   - filterConfig: configuration for ConnectedFilter component
 *   - rawData: raw data records filtered (with offset, size, and sort applied)
 *   - totalCount: total count of raw data records
 *
 */var
GuppyWrapper = /*#__PURE__*/function (_React$Component) {
  function GuppyWrapper(props) {var _this;_classCallCheck(this, GuppyWrapper);
    _this = _callSuper(this, GuppyWrapper, [props]);
    var initialFilter = _this.props.adminAppliedPreFilters;
    if (Object.keys(_this.props.initialFilterFromURL).length > 0) {
      initialFilter = (0, _filters.mergeFilters)(
        _this.props.initialFilterFromURL,
        _this.props.adminAppliedPreFilters
      );
    }
    // to avoid asynchronizations, we store another filter as private var
    _this.filter = _objectSpread({}, initialFilter);
    _this.adminPreFiltersFrozen = JSON.stringify(_this.props.adminAppliedPreFilters).slice();
    _this.state = {
      gettingDataFromGuppy: false,
      aggsData: {},
      filter: _objectSpread({}, initialFilter),
      rawData: [],
      totalCount: 0,
      allRegularAggFields: [],
      allAsTextAggFields: [],
      rawDataFields: [],
      accessibleFieldObject: undefined,
      unaccessibleFieldObject: undefined,
      accessibility: _const.ENUM_ACCESSIBILITY.ALL,
      adminAppliedPreFilters: _objectSpread({}, _this.props.adminAppliedPreFilters),
      userFilterFromURL: _objectSpread({}, _this.props.initialFilterFromURL)
    };return _this;
  }_inherits(GuppyWrapper, _React$Component);return _createClass(GuppyWrapper, [{ key: "componentDidMount", value:

    function componentDidMount() {var _this2 = this;
      (0, _queries.getAllFieldsFromGuppy)(
        this.props.guppyConfig.path,
        this.props.guppyConfig.type,
        this.props.csrfToken
      ).then(function (fields) {
        var rawDataFields = _this2.props.rawDataFields && _this2.props.rawDataFields.length > 0 ?
        _this2.props.rawDataFields : fields;
        _this2.setState({
          allRegularAggFields: fields,
          rawDataFields: rawDataFields
        }, function () {
          _this2.getDataFromGuppy(_this2.state.rawDataFields, undefined, true);
        });
      });
      if (typeof this.props.accessibleFieldCheckList !== 'undefined') {
        (0, _queries.getAccessibleResources)(
          this.props.guppyConfig.path,
          this.props.guppyConfig.type,
          this.props.accessibleFieldCheckList,
          this.props.csrfToken
        ).then(function (_ref) {var accessibleFieldObject = _ref.accessibleFieldObject,unaccessibleFieldObject = _ref.unaccessibleFieldObject;
          _this2.setState({
            accessibleFieldObject: accessibleFieldObject,
            unaccessibleFieldObject: unaccessibleFieldObject
          });
        });
      }
    } }, { key: "handleReceiveNewAggsData", value:

    function handleReceiveNewAggsData(aggsData) {
      if (this.props.onReceiveNewAggsData) {
        this.props.onReceiveNewAggsData(aggsData, this.filter);
      }
      this.setState({ aggsData: aggsData });
    } }, { key: "handleFilterChange", value:

    function handleFilterChange(userFilterFromUserInput, accessibility) {var _this3 = this;
      var userFilter = userFilterFromUserInput;

      // Apply user filters from URL on page load. Empty out state to avoid reapplying used filters.
      if (Object.keys(userFilter).length === 0 &&
      Object.keys(this.state.userFilterFromURL).length > 0) {
        userFilter = JSON.parse(JSON.stringify(this.state.userFilterFromURL));
        this.setState({ userFilterFromURL: {} });
      }

      this.setState({ adminAppliedPreFilters: JSON.parse(this.adminPreFiltersFrozen) });
      var filter = _objectSpread({}, userFilter);
      if (Object.keys(this.state.adminAppliedPreFilters).length > 0) {
        filter = (0, _filters.mergeFilters)(userFilter, this.state.adminAppliedPreFilters);
      }
      if (this.props.onFilterChange) {
        this.props.onFilterChange(filter);
      }
      this.filter = filter;
      this.setState({
        filter: filter,
        accessibility: accessibility
      }, function () {
        _this3.getDataFromGuppy(_this3.state.rawDataFields, undefined, true);
      });
    }

    /**
     * Fetch data from Guppy server.
     * This function will update this.state.rawData and this.state.totalCount
     */ }, { key: "handleFetchAndUpdateRawData", value:
    function handleFetchAndUpdateRawData(_ref2) {var _ref2$offset = _ref2.offset,offset = _ref2$offset === void 0 ? 0 : _ref2$offset,_ref2$size = _ref2.size,size = _ref2$size === void 0 ? 20 : _ref2$size,_ref2$sort = _ref2.sort,sort = _ref2$sort === void 0 ? [] : _ref2$sort;
      return this.getDataFromGuppy(this.state.rawDataFields, sort, true, offset, size);
    }

    /**
     * Download all data from Guppy server and return raw data
     * This function uses current filter argument
     */ }, { key: "handleDownloadRawData", value:
    function handleDownloadRawData(_ref3) {var sort = _ref3.sort,format = _ref3.format;
      // error handling for misconfigured format types
      if (format && !(format.toUpperCase() in _const.FILE_FORMATS)) {
        // eslint-disable-next-line no-console
        console.error("Invalid value ".concat(format, " found for arg format!"));
      }
      return (0, _queries.downloadDataFromGuppy)(
        this.props.guppyConfig.path,
        this.props.guppyConfig.type,
        this.state.totalCount,
        {
          fields: this.state.rawDataFields,
          sort: sort || [],
          filter: this.state.filter,
          accessibility: this.state.accessibility,
          format: format
        },
        this.props.csrfToken
      );
    }

    /**
     * Download all data from Guppy server and return raw data
     * For only given fields
     * This function uses current filter argument
     */ }, { key: "handleDownloadRawDataByFields", value:
    function handleDownloadRawDataByFields(_ref4) {var fields = _ref4.fields,_ref4$sort = _ref4.sort,sort = _ref4$sort === void 0 ? [] : _ref4$sort;
      var targetFields = fields;
      if (typeof fields === 'undefined') {
        targetFields = this.state.rawDataFields;
      }
      return (0, _queries.downloadDataFromGuppy)(
        this.props.guppyConfig.path,
        this.props.guppyConfig.type,
        this.state.totalCount,
        {
          fields: targetFields,
          sort: sort,
          filter: this.state.filter,
          accessibility: this.state.accessibility
        },
        this.props.csrfToken
      );
    }

    /**
     * Get total count from other es type, with filter
     * @param {string} type
     * @param {object} filter
     */ }, { key: "handleAskGuppyForTotalCounts", value:
    function handleAskGuppyForTotalCounts(type, filter) {
      return (0, _queries.askGuppyForTotalCounts)(
        this.props.guppyConfig.path,
        type,
        filter,
        this.state.accessibility,
        this.props.csrfToken
      );
    }

    /**
     * Get raw data from other es type, with filter
     * @param {string} type
     * @param {object} filter
     * @param {string[]} fields
     */ }, { key: "handleDownloadRawDataByTypeAndFilter", value:
    function handleDownloadRawDataByTypeAndFilter(type, filter, fields) {var _this4 = this;
      return (0, _queries.askGuppyForTotalCounts)(
        this.props.guppyConfig.path,
        type,
        filter,
        this.state.accessibility,
        this.props.csrfToken
      ).
      then(function (count) {return (0, _queries.downloadDataFromGuppy)(
          _this4.props.guppyConfig.path,
          type,
          count,
          {
            fields: fields,
            filter: filter
          },
          _this4.props.csrfToken
        );});
    } }, { key: "handleAccessLevelUpdate", value:

    function handleAccessLevelUpdate(accessLevel) {
      this.setState({ accessibility: accessLevel });
    }

    /**
     * This function get data with current filter (if any),
     * and update this.state.rawData and this.state.totalCount
     * @param {string[]} fields
     * @param {object} sort
     * @param {bool} updateDataWhenReceive
     * @param {number} offset
     * @param {number} size
     */ }, { key: "getDataFromGuppy", value:
    function getDataFromGuppy(fields, sort, updateDataWhenReceive, offset, size) {var _this5 = this;
      this.setState({ gettingDataFromGuppy: true });
      if (!fields || fields.length === 0) {
        this.setState({ gettingDataFromGuppy: false });
        return Promise.resolve({ data: [], totalCount: 0 });
      }

      // sub aggregations -- for DAT
      if (this.props.guppyConfig.mainField) {
        var numericAggregation = this.props.guppyConfig.mainFieldIsNumeric;
        return (0, _queries.askGuppyForSubAggregationData)(
          this.props.guppyConfig.path,
          this.props.guppyConfig.type,
          this.props.guppyConfig.mainField,
          numericAggregation,
          this.props.guppyConfig.aggFields,
          [],
          this.filter,
          this.state.accessibility,
          this.props.csrfToken
        ).then(function (res) {
          if (!res || !res.data) {
            throw new Error("Error getting raw ".concat(_this5.props.guppyConfig.type, " data from Guppy server ").concat(_this5.props.guppyConfig.path, "."));
          }
          var data = res.data._aggregation[_this5.props.guppyConfig.type];
          var field = numericAggregation ? 'asTextHistogram' : 'histogram';
          var parsedData = data[_this5.props.guppyConfig.mainField][field];
          if (updateDataWhenReceive) {
            _this5.setState({
              rawData: parsedData
            });
          }
          _this5.setState({ gettingDataFromGuppy: false });
          return {
            data: res.data
          };
        });
      }

      // non-nested aggregation
      return (0, _queries.askGuppyForRawData)(
        this.props.guppyConfig.path,
        this.props.guppyConfig.type,
        fields,
        this.filter,
        sort,
        undefined,
        offset,
        size,
        this.state.accessibility,
        this.props.csrfToken
      ).then(function (res) {
        if (!res || !res.data) {
          throw new Error("Error getting raw ".concat(_this5.props.guppyConfig.type, " data from Guppy server ").concat(_this5.props.guppyConfig.path, "."));
        }
        var parsedData = res.data[_this5.props.guppyConfig.type];
        var totalCount = res.data._aggregation[_this5.props.guppyConfig.type]._totalCount;
        if (updateDataWhenReceive) {
          _this5.setState({
            rawData: parsedData,
            totalCount: totalCount
          });
        }
        _this5.setState({ gettingDataFromGuppy: false });
        return {
          data: parsedData,
          totalCount: totalCount
        };
      });
    } }, { key: "render", value:

    function render() {var _this6 = this;
      return (/*#__PURE__*/
        _react["default"].createElement(_react["default"].Fragment, null,

        _react["default"].Children.map(this.props.children, function (child) {return /*#__PURE__*/_react["default"].cloneElement(child, {
            // pass data to children
            aggsData: _this6.state.aggsData,
            aggsDataIsLoading: _this6.state.gettingDataFromGuppy,
            filter: _this6.state.filter,
            filterConfig: _this6.props.filterConfig,
            rawData: _this6.state.rawData, // raw data (with current filter applied)
            totalCount: _this6.state.totalCount, // total count of raw data (current filter applied)
            fetchAndUpdateRawData: _this6.handleFetchAndUpdateRawData.bind(_this6),
            downloadRawData: _this6.handleDownloadRawData.bind(_this6),
            downloadRawDataByFields: _this6.handleDownloadRawDataByFields.bind(_this6),
            allRegularAggFields: _this6.state.allRegularAggFields,
            allAsTextAggFields: _this6.state.allAsTextAggFields,
            accessibleFieldObject: _this6.state.accessibleFieldObject,
            unaccessibleFieldObject: _this6.state.unaccessibleFieldObject,

            // a callback function which return total counts for any type, with any filter
            getTotalCountsByTypeAndFilter: _this6.handleAskGuppyForTotalCounts.bind(_this6),
            downloadRawDataByTypeAndFilter: _this6.handleDownloadRawDataByTypeAndFilter.bind(_this6),

            // below are just for ConnectedFilter component
            onReceiveNewAggsData: _this6.handleReceiveNewAggsData.bind(_this6),
            onFilterChange: _this6.handleFilterChange.bind(_this6),
            guppyConfig: _this6.props.guppyConfig,
            onUpdateAccessLevel: _this6.handleAccessLevelUpdate.bind(_this6),
            adminAppliedPreFilters: _this6.props.adminAppliedPreFilters,
            accessibleFieldCheckList: _this6.props.accessibleFieldCheckList,
            csrfToken: _this6.props.csrfToken
          });})

        ));

    } }]);}(_react["default"].Component);


GuppyWrapper.propTypes = {
  guppyConfig: _propTypes["default"].shape({
    path: _propTypes["default"].string,
    type: _propTypes["default"].string,
    mainField: _propTypes["default"].string,
    mainFieldIsNumeric: _propTypes["default"].bool,
    aggFields: _propTypes["default"].array
  }).isRequired,
  children: _propTypes["default"].oneOfType([
  _propTypes["default"].arrayOf(_propTypes["default"].node),
  _propTypes["default"].node]
  ).isRequired,
  filterConfig: _propTypes["default"].shape({
    tabs: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      title: _propTypes["default"].string,
      fields: _propTypes["default"].arrayOf(_propTypes["default"].string),
      searchFields: _propTypes["default"].arrayOf(_propTypes["default"].string)
    }))
  }).isRequired,
  rawDataFields: _propTypes["default"].arrayOf(_propTypes["default"].string),
  onReceiveNewAggsData: _propTypes["default"].func,
  onFilterChange: _propTypes["default"].func,
  accessibleFieldCheckList: _propTypes["default"].arrayOf(_propTypes["default"].string),
  adminAppliedPreFilters: _propTypes["default"].object,
  initialFilterFromURL: _propTypes["default"].object,
  csrfToken: _propTypes["default"].string
};

GuppyWrapper.defaultProps = {
  onReceiveNewAggsData: function onReceiveNewAggsData() {},
  onFilterChange: function onFilterChange() {},
  rawDataFields: [],
  accessibleFieldCheckList: undefined,
  adminAppliedPreFilters: {},
  initialFilterFromURL: {},
  csrfToken: ''
};var _default = exports["default"] =

GuppyWrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9wcm9wVHlwZXMiLCJfcXVlcmllcyIsIl9jb25zdCIsIl9maWx0ZXJzIiwiZSIsIl9fZXNNb2R1bGUiLCJvd25LZXlzIiwiciIsInQiLCJPYmplY3QiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsInZhbHVlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJhIiwibiIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG90eXBlIiwiaSIsIl90b1ByaW1pdGl2ZSIsIl90eXBlb2YiLCJTeW1ib2wiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJTdHJpbmciLCJOdW1iZXIiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwiQm9vbGVhbiIsInZhbHVlT2YiLCJzZXRQcm90b3R5cGVPZiIsImdldFByb3RvdHlwZU9mIiwiYmluZCIsIl9fcHJvdG9fXyIsIl9pbmhlcml0cyIsImNyZWF0ZSIsIl9zZXRQcm90b3R5cGVPZiIsIkd1cHB5V3JhcHBlciIsIl9SZWFjdCRDb21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiaW5pdGlhbEZpbHRlciIsImFkbWluQXBwbGllZFByZUZpbHRlcnMiLCJpbml0aWFsRmlsdGVyRnJvbVVSTCIsIm1lcmdlRmlsdGVycyIsImFkbWluUHJlRmlsdGVyc0Zyb3plbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJzbGljZSIsInN0YXRlIiwiZ2V0dGluZ0RhdGFGcm9tR3VwcHkiLCJhZ2dzRGF0YSIsInJhd0RhdGEiLCJ0b3RhbENvdW50IiwiYWxsUmVndWxhckFnZ0ZpZWxkcyIsImFsbEFzVGV4dEFnZ0ZpZWxkcyIsInJhd0RhdGFGaWVsZHMiLCJhY2Nlc3NpYmxlRmllbGRPYmplY3QiLCJ1bmRlZmluZWQiLCJ1bmFjY2Vzc2libGVGaWVsZE9iamVjdCIsImFjY2Vzc2liaWxpdHkiLCJFTlVNX0FDQ0VTU0lCSUxJVFkiLCJBTEwiLCJ1c2VyRmlsdGVyRnJvbVVSTCIsImNvbXBvbmVudERpZE1vdW50IiwiX3RoaXMyIiwiZ2V0QWxsRmllbGRzRnJvbUd1cHB5IiwiZ3VwcHlDb25maWciLCJwYXRoIiwidHlwZSIsImNzcmZUb2tlbiIsInRoZW4iLCJmaWVsZHMiLCJzZXRTdGF0ZSIsImdldERhdGFGcm9tR3VwcHkiLCJhY2Nlc3NpYmxlRmllbGRDaGVja0xpc3QiLCJnZXRBY2Nlc3NpYmxlUmVzb3VyY2VzIiwiX3JlZiIsImhhbmRsZVJlY2VpdmVOZXdBZ2dzRGF0YSIsIm9uUmVjZWl2ZU5ld0FnZ3NEYXRhIiwiaGFuZGxlRmlsdGVyQ2hhbmdlIiwidXNlckZpbHRlckZyb21Vc2VySW5wdXQiLCJfdGhpczMiLCJ1c2VyRmlsdGVyIiwicGFyc2UiLCJvbkZpbHRlckNoYW5nZSIsImhhbmRsZUZldGNoQW5kVXBkYXRlUmF3RGF0YSIsIl9yZWYyIiwiX3JlZjIkb2Zmc2V0Iiwib2Zmc2V0IiwiX3JlZjIkc2l6ZSIsInNpemUiLCJfcmVmMiRzb3J0Iiwic29ydCIsImhhbmRsZURvd25sb2FkUmF3RGF0YSIsIl9yZWYzIiwiZm9ybWF0IiwidG9VcHBlckNhc2UiLCJGSUxFX0ZPUk1BVFMiLCJjb25zb2xlIiwiZXJyb3IiLCJjb25jYXQiLCJkb3dubG9hZERhdGFGcm9tR3VwcHkiLCJoYW5kbGVEb3dubG9hZFJhd0RhdGFCeUZpZWxkcyIsIl9yZWY0IiwiX3JlZjQkc29ydCIsInRhcmdldEZpZWxkcyIsImhhbmRsZUFza0d1cHB5Rm9yVG90YWxDb3VudHMiLCJhc2tHdXBweUZvclRvdGFsQ291bnRzIiwiaGFuZGxlRG93bmxvYWRSYXdEYXRhQnlUeXBlQW5kRmlsdGVyIiwiX3RoaXM0IiwiY291bnQiLCJoYW5kbGVBY2Nlc3NMZXZlbFVwZGF0ZSIsImFjY2Vzc0xldmVsIiwidXBkYXRlRGF0YVdoZW5SZWNlaXZlIiwiX3RoaXM1IiwiUHJvbWlzZSIsInJlc29sdmUiLCJkYXRhIiwibWFpbkZpZWxkIiwibnVtZXJpY0FnZ3JlZ2F0aW9uIiwibWFpbkZpZWxkSXNOdW1lcmljIiwiYXNrR3VwcHlGb3JTdWJBZ2dyZWdhdGlvbkRhdGEiLCJhZ2dGaWVsZHMiLCJyZXMiLCJFcnJvciIsIl9hZ2dyZWdhdGlvbiIsImZpZWxkIiwicGFyc2VkRGF0YSIsImFza0d1cHB5Rm9yUmF3RGF0YSIsIl90b3RhbENvdW50IiwicmVuZGVyIiwiX3RoaXM2IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiUmVhY3QiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkcmVuIiwiY2hpbGQiLCJjbG9uZUVsZW1lbnQiLCJhZ2dzRGF0YUlzTG9hZGluZyIsImZpbHRlckNvbmZpZyIsImZldGNoQW5kVXBkYXRlUmF3RGF0YSIsImRvd25sb2FkUmF3RGF0YSIsImRvd25sb2FkUmF3RGF0YUJ5RmllbGRzIiwiZ2V0VG90YWxDb3VudHNCeVR5cGVBbmRGaWx0ZXIiLCJkb3dubG9hZFJhd0RhdGFCeVR5cGVBbmRGaWx0ZXIiLCJvblVwZGF0ZUFjY2Vzc0xldmVsIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJzdHJpbmciLCJib29sIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsIm5vZGUiLCJ0YWJzIiwidGl0bGUiLCJzZWFyY2hGaWVsZHMiLCJmdW5jIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwiX2RlZmF1bHQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvR3VwcHlXcmFwcGVyL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZnJhZ21lbnRzICovXG4vKiBlc2xpbnQgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgYXNrR3VwcHlGb3JSYXdEYXRhLFxuICBkb3dubG9hZERhdGFGcm9tR3VwcHksXG4gIGFza0d1cHB5Rm9yVG90YWxDb3VudHMsXG4gIGdldEFsbEZpZWxkc0Zyb21HdXBweSxcbiAgZ2V0QWNjZXNzaWJsZVJlc291cmNlcyxcbiAgYXNrR3VwcHlGb3JTdWJBZ2dyZWdhdGlvbkRhdGEsXG59IGZyb20gJy4uL1V0aWxzL3F1ZXJpZXMnO1xuaW1wb3J0IHsgRU5VTV9BQ0NFU1NJQklMSVRZLCBGSUxFX0ZPUk1BVFMgfSBmcm9tICcuLi9VdGlscy9jb25zdCc7XG5pbXBvcnQgeyBtZXJnZUZpbHRlcnMgfSBmcm9tICcuLi9VdGlscy9maWx0ZXJzJztcblxuLyoqXG4gKiBXcmFwcGVyIHRoYXQgY29ubmVjdHMgdG8gR3VwcHkgc2VydmVyLFxuICogYW5kIHBhc3MgZmlsdGVyLCBhZ2dzLCBhbmQgZGF0YSB0byBjaGlsZHJlbiBjb21wb25lbnRzXG4gKiBJbnB1dCBwcm9wczpcbiAqICAgLSBmaWx0ZXJDb25maWc6IGNvbmZpZ3VyYXRpb24gZm9yIENvbm5lY3RlZEZpbHRlciBjb21wb25lbnRcbiAqICAgLSBndXBweUNvbmZpZzogR3VwcHkgc2VydmVyIGNvbmZpZ1xuICogICAtIG9uRmlsdGVyQ2hhbmdlOiBjYWxsYmFjayB0aGF0IHRha2VzIGZpbHRlciBhcyBhcmd1bWVudCwgd2lsbCBiZVxuICogY2FsbGVkIGV2ZXJ5IHRpbWUgZmlsdGVyIGNoYW5nZXNcbiAqICAgLSBvblJlY2VpdmVOZXdBZ2dzRGF0YTogY2FsbGJhY2sgdGhhdCB0YWtlcyBhZ2dyZWdhdGlvbiByZXN1bHRzXG4gKiBhcyBhcmd1bWVudCwgd2lsbCBiZSBjYWxsZWQgZXZlcnkgdGltZSBhZ2dyZWdhdGlvbiByZXN1bHRzIHVwZGF0ZWRcbiAqXG4gKiBUaGlzIHdyYXBwZXIgd2lsbCBwYXNzIGZvbGxvd2luZyBkYXRhIChmaWx0ZXJzLCBhZ2dzLCBjb25maWdzKSB0byBjaGlsZHJlbiBjb21wb25lbnRzIHZpYSBwcm9wOlxuICogICAtIGFnZ3NEYXRhOiB0aGUgYWdncmVnYXRpb24gcmVzdWx0cywgZm9ybWF0OlxuICogICAgICAgICB7XG4gKiAgICAgICAgICAgICAvLyBmb3IgdGV4dCBhZ2dyZWdhdGlvblxuICogICAgICAgICAgICBbZmllbGRdOiB7IGhpc3RvZ3JhbTogW3trZXk6ICd2MScsIGNvdW50OiA0Mn0sIHtrZXk6ICd2MicsIGNvdW50OiAxOX0sIC4uLl0gfSxcbiAqICAgICAgICAgICAgIC8vIGZvciBudW1lcmljIGFnZ3JlZ2F0aW9uXG4gKiAgICAgICAgICAgIFtmaWVsZF06IHsgaGlzdG9ncmFtOiBbe2tleTogWzEsIDgzXSwgY291bnQ6IDEwMH1dIH0sXG4gKiAgICAgICAgICAgIC4uLlxuICogICAgICAgICB9XG4gKiAgIC0gZmlsdGVyOiB0aGUgZmlsdGVycywgZm9ybWF0OlxuICogICAgICAgICB7XG4gKiAgICAgICAgICAgIFtmaWVsZF06IHsgc2VsZWN0ZWRWYWx1ZXM6IFsndjEnLCAndjInLCAuLi5dIH0sICAvLyBmb3IgdGV4dCBmaWx0ZXJcbiAqICAgICAgICAgICAgW2ZpZWxkXTogeyB1cHBlckJvdW5kOiAxLCBsb3dlckJvdW5kOiA4MyB9LCAgLy8gZm9yIHJhbmdlIGZpbHRlclxuICogICAgICAgICAgICAuLi5cbiAqICAgICAgICAgfVxuICogICAtIGZpbHRlckNvbmZpZzogY29uZmlndXJhdGlvbiBmb3IgQ29ubmVjdGVkRmlsdGVyIGNvbXBvbmVudFxuICogICAtIHJhd0RhdGE6IHJhdyBkYXRhIHJlY29yZHMgZmlsdGVyZWQgKHdpdGggb2Zmc2V0LCBzaXplLCBhbmQgc29ydCBhcHBsaWVkKVxuICogICAtIHRvdGFsQ291bnQ6IHRvdGFsIGNvdW50IG9mIHJhdyBkYXRhIHJlY29yZHNcbiAqXG4gKi9cbmNsYXNzIEd1cHB5V3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGxldCBpbml0aWFsRmlsdGVyID0gdGhpcy5wcm9wcy5hZG1pbkFwcGxpZWRQcmVGaWx0ZXJzO1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnByb3BzLmluaXRpYWxGaWx0ZXJGcm9tVVJMKS5sZW5ndGggPiAwKSB7XG4gICAgICBpbml0aWFsRmlsdGVyID0gbWVyZ2VGaWx0ZXJzKFxuICAgICAgICB0aGlzLnByb3BzLmluaXRpYWxGaWx0ZXJGcm9tVVJMLFxuICAgICAgICB0aGlzLnByb3BzLmFkbWluQXBwbGllZFByZUZpbHRlcnMsXG4gICAgICApO1xuICAgIH1cbiAgICAvLyB0byBhdm9pZCBhc3luY2hyb25pemF0aW9ucywgd2Ugc3RvcmUgYW5vdGhlciBmaWx0ZXIgYXMgcHJpdmF0ZSB2YXJcbiAgICB0aGlzLmZpbHRlciA9IHsgLi4uaW5pdGlhbEZpbHRlciB9O1xuICAgIHRoaXMuYWRtaW5QcmVGaWx0ZXJzRnJvemVuID0gSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5hZG1pbkFwcGxpZWRQcmVGaWx0ZXJzKS5zbGljZSgpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBnZXR0aW5nRGF0YUZyb21HdXBweTogZmFsc2UsXG4gICAgICBhZ2dzRGF0YToge30sXG4gICAgICBmaWx0ZXI6IHsgLi4uaW5pdGlhbEZpbHRlciB9LFxuICAgICAgcmF3RGF0YTogW10sXG4gICAgICB0b3RhbENvdW50OiAwLFxuICAgICAgYWxsUmVndWxhckFnZ0ZpZWxkczogW10sXG4gICAgICBhbGxBc1RleHRBZ2dGaWVsZHM6IFtdLFxuICAgICAgcmF3RGF0YUZpZWxkczogW10sXG4gICAgICBhY2Nlc3NpYmxlRmllbGRPYmplY3Q6IHVuZGVmaW5lZCxcbiAgICAgIHVuYWNjZXNzaWJsZUZpZWxkT2JqZWN0OiB1bmRlZmluZWQsXG4gICAgICBhY2Nlc3NpYmlsaXR5OiBFTlVNX0FDQ0VTU0lCSUxJVFkuQUxMLFxuICAgICAgYWRtaW5BcHBsaWVkUHJlRmlsdGVyczogeyAuLi50aGlzLnByb3BzLmFkbWluQXBwbGllZFByZUZpbHRlcnMgfSxcbiAgICAgIHVzZXJGaWx0ZXJGcm9tVVJMOiB7IC4uLnRoaXMucHJvcHMuaW5pdGlhbEZpbHRlckZyb21VUkwgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZ2V0QWxsRmllbGRzRnJvbUd1cHB5KFxuICAgICAgdGhpcy5wcm9wcy5ndXBweUNvbmZpZy5wYXRoLFxuICAgICAgdGhpcy5wcm9wcy5ndXBweUNvbmZpZy50eXBlLFxuICAgICAgdGhpcy5wcm9wcy5jc3JmVG9rZW4sXG4gICAgKS50aGVuKChmaWVsZHMpID0+IHtcbiAgICAgIGNvbnN0IHJhd0RhdGFGaWVsZHMgPSAodGhpcy5wcm9wcy5yYXdEYXRhRmllbGRzICYmIHRoaXMucHJvcHMucmF3RGF0YUZpZWxkcy5sZW5ndGggPiAwKVxuICAgICAgICA/IHRoaXMucHJvcHMucmF3RGF0YUZpZWxkcyA6IGZpZWxkcztcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhbGxSZWd1bGFyQWdnRmllbGRzOiBmaWVsZHMsXG4gICAgICAgIHJhd0RhdGFGaWVsZHMsXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0RGF0YUZyb21HdXBweSh0aGlzLnN0YXRlLnJhd0RhdGFGaWVsZHMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuYWNjZXNzaWJsZUZpZWxkQ2hlY2tMaXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZ2V0QWNjZXNzaWJsZVJlc291cmNlcyhcbiAgICAgICAgdGhpcy5wcm9wcy5ndXBweUNvbmZpZy5wYXRoLFxuICAgICAgICB0aGlzLnByb3BzLmd1cHB5Q29uZmlnLnR5cGUsXG4gICAgICAgIHRoaXMucHJvcHMuYWNjZXNzaWJsZUZpZWxkQ2hlY2tMaXN0LFxuICAgICAgICB0aGlzLnByb3BzLmNzcmZUb2tlbixcbiAgICAgICkudGhlbigoeyBhY2Nlc3NpYmxlRmllbGRPYmplY3QsIHVuYWNjZXNzaWJsZUZpZWxkT2JqZWN0IH0pID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYWNjZXNzaWJsZUZpZWxkT2JqZWN0LFxuICAgICAgICAgIHVuYWNjZXNzaWJsZUZpZWxkT2JqZWN0LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJlY2VpdmVOZXdBZ2dzRGF0YShhZ2dzRGF0YSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uUmVjZWl2ZU5ld0FnZ3NEYXRhKSB7XG4gICAgICB0aGlzLnByb3BzLm9uUmVjZWl2ZU5ld0FnZ3NEYXRhKGFnZ3NEYXRhLCB0aGlzLmZpbHRlcik7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBhZ2dzRGF0YSB9KTtcbiAgfVxuXG4gIGhhbmRsZUZpbHRlckNoYW5nZSh1c2VyRmlsdGVyRnJvbVVzZXJJbnB1dCwgYWNjZXNzaWJpbGl0eSkge1xuICAgIGxldCB1c2VyRmlsdGVyID0gdXNlckZpbHRlckZyb21Vc2VySW5wdXQ7XG5cbiAgICAvLyBBcHBseSB1c2VyIGZpbHRlcnMgZnJvbSBVUkwgb24gcGFnZSBsb2FkLiBFbXB0eSBvdXQgc3RhdGUgdG8gYXZvaWQgcmVhcHBseWluZyB1c2VkIGZpbHRlcnMuXG4gICAgaWYgKE9iamVjdC5rZXlzKHVzZXJGaWx0ZXIpLmxlbmd0aCA9PT0gMFxuICAgICAgJiYgT2JqZWN0LmtleXModGhpcy5zdGF0ZS51c2VyRmlsdGVyRnJvbVVSTCkubGVuZ3RoID4gMCkge1xuICAgICAgdXNlckZpbHRlciA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS51c2VyRmlsdGVyRnJvbVVSTCkpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJGaWx0ZXJGcm9tVVJMOiB7fSB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgYWRtaW5BcHBsaWVkUHJlRmlsdGVyczogSlNPTi5wYXJzZSh0aGlzLmFkbWluUHJlRmlsdGVyc0Zyb3plbikgfSk7XG4gICAgbGV0IGZpbHRlciA9IHsgLi4udXNlckZpbHRlciB9O1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmFkbWluQXBwbGllZFByZUZpbHRlcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgIGZpbHRlciA9IG1lcmdlRmlsdGVycyh1c2VyRmlsdGVyLCB0aGlzLnN0YXRlLmFkbWluQXBwbGllZFByZUZpbHRlcnMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShmaWx0ZXIpO1xuICAgIH1cbiAgICB0aGlzLmZpbHRlciA9IGZpbHRlcjtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZpbHRlcixcbiAgICAgIGFjY2Vzc2liaWxpdHksXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5nZXREYXRhRnJvbUd1cHB5KHRoaXMuc3RhdGUucmF3RGF0YUZpZWxkcywgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaCBkYXRhIGZyb20gR3VwcHkgc2VydmVyLlxuICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgdXBkYXRlIHRoaXMuc3RhdGUucmF3RGF0YSBhbmQgdGhpcy5zdGF0ZS50b3RhbENvdW50XG4gICAqL1xuICBoYW5kbGVGZXRjaEFuZFVwZGF0ZVJhd0RhdGEoeyBvZmZzZXQgPSAwLCBzaXplID0gMjAsIHNvcnQgPSBbXSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF0YUZyb21HdXBweSh0aGlzLnN0YXRlLnJhd0RhdGFGaWVsZHMsIHNvcnQsIHRydWUsIG9mZnNldCwgc2l6ZSk7XG4gIH1cblxuICAvKipcbiAgICogRG93bmxvYWQgYWxsIGRhdGEgZnJvbSBHdXBweSBzZXJ2ZXIgYW5kIHJldHVybiByYXcgZGF0YVxuICAgKiBUaGlzIGZ1bmN0aW9uIHVzZXMgY3VycmVudCBmaWx0ZXIgYXJndW1lbnRcbiAgICovXG4gIGhhbmRsZURvd25sb2FkUmF3RGF0YSh7IHNvcnQsIGZvcm1hdCB9KSB7XG4gICAgLy8gZXJyb3IgaGFuZGxpbmcgZm9yIG1pc2NvbmZpZ3VyZWQgZm9ybWF0IHR5cGVzXG4gICAgaWYgKGZvcm1hdCAmJiAhKGZvcm1hdC50b1VwcGVyQ2FzZSgpIGluIEZJTEVfRk9STUFUUykpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIHZhbHVlICR7Zm9ybWF0fSBmb3VuZCBmb3IgYXJnIGZvcm1hdCFgKTtcbiAgICB9XG4gICAgcmV0dXJuIGRvd25sb2FkRGF0YUZyb21HdXBweShcbiAgICAgIHRoaXMucHJvcHMuZ3VwcHlDb25maWcucGF0aCxcbiAgICAgIHRoaXMucHJvcHMuZ3VwcHlDb25maWcudHlwZSxcbiAgICAgIHRoaXMuc3RhdGUudG90YWxDb3VudCxcbiAgICAgIHtcbiAgICAgICAgZmllbGRzOiB0aGlzLnN0YXRlLnJhd0RhdGFGaWVsZHMsXG4gICAgICAgIHNvcnQ6IHNvcnQgfHwgW10sXG4gICAgICAgIGZpbHRlcjogdGhpcy5zdGF0ZS5maWx0ZXIsXG4gICAgICAgIGFjY2Vzc2liaWxpdHk6IHRoaXMuc3RhdGUuYWNjZXNzaWJpbGl0eSxcbiAgICAgICAgZm9ybWF0LFxuICAgICAgfSxcbiAgICAgIHRoaXMucHJvcHMuY3NyZlRva2VuLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRG93bmxvYWQgYWxsIGRhdGEgZnJvbSBHdXBweSBzZXJ2ZXIgYW5kIHJldHVybiByYXcgZGF0YVxuICAgKiBGb3Igb25seSBnaXZlbiBmaWVsZHNcbiAgICogVGhpcyBmdW5jdGlvbiB1c2VzIGN1cnJlbnQgZmlsdGVyIGFyZ3VtZW50XG4gICAqL1xuICBoYW5kbGVEb3dubG9hZFJhd0RhdGFCeUZpZWxkcyh7IGZpZWxkcywgc29ydCA9IFtdIH0pIHtcbiAgICBsZXQgdGFyZ2V0RmllbGRzID0gZmllbGRzO1xuICAgIGlmICh0eXBlb2YgZmllbGRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGFyZ2V0RmllbGRzID0gdGhpcy5zdGF0ZS5yYXdEYXRhRmllbGRzO1xuICAgIH1cbiAgICByZXR1cm4gZG93bmxvYWREYXRhRnJvbUd1cHB5KFxuICAgICAgdGhpcy5wcm9wcy5ndXBweUNvbmZpZy5wYXRoLFxuICAgICAgdGhpcy5wcm9wcy5ndXBweUNvbmZpZy50eXBlLFxuICAgICAgdGhpcy5zdGF0ZS50b3RhbENvdW50LFxuICAgICAge1xuICAgICAgICBmaWVsZHM6IHRhcmdldEZpZWxkcyxcbiAgICAgICAgc29ydCxcbiAgICAgICAgZmlsdGVyOiB0aGlzLnN0YXRlLmZpbHRlcixcbiAgICAgICAgYWNjZXNzaWJpbGl0eTogdGhpcy5zdGF0ZS5hY2Nlc3NpYmlsaXR5LFxuICAgICAgfSxcbiAgICAgIHRoaXMucHJvcHMuY3NyZlRva2VuLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRvdGFsIGNvdW50IGZyb20gb3RoZXIgZXMgdHlwZSwgd2l0aCBmaWx0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHtvYmplY3R9IGZpbHRlclxuICAgKi9cbiAgaGFuZGxlQXNrR3VwcHlGb3JUb3RhbENvdW50cyh0eXBlLCBmaWx0ZXIpIHtcbiAgICByZXR1cm4gYXNrR3VwcHlGb3JUb3RhbENvdW50cyhcbiAgICAgIHRoaXMucHJvcHMuZ3VwcHlDb25maWcucGF0aCxcbiAgICAgIHR5cGUsXG4gICAgICBmaWx0ZXIsXG4gICAgICB0aGlzLnN0YXRlLmFjY2Vzc2liaWxpdHksXG4gICAgICB0aGlzLnByb3BzLmNzcmZUb2tlbixcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCByYXcgZGF0YSBmcm9tIG90aGVyIGVzIHR5cGUsIHdpdGggZmlsdGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBmaWx0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gZmllbGRzXG4gICAqL1xuICBoYW5kbGVEb3dubG9hZFJhd0RhdGFCeVR5cGVBbmRGaWx0ZXIodHlwZSwgZmlsdGVyLCBmaWVsZHMpIHtcbiAgICByZXR1cm4gYXNrR3VwcHlGb3JUb3RhbENvdW50cyhcbiAgICAgIHRoaXMucHJvcHMuZ3VwcHlDb25maWcucGF0aCxcbiAgICAgIHR5cGUsXG4gICAgICBmaWx0ZXIsXG4gICAgICB0aGlzLnN0YXRlLmFjY2Vzc2liaWxpdHksXG4gICAgICB0aGlzLnByb3BzLmNzcmZUb2tlbixcbiAgICApXG4gICAgICAudGhlbigoY291bnQpID0+IGRvd25sb2FkRGF0YUZyb21HdXBweShcbiAgICAgICAgdGhpcy5wcm9wcy5ndXBweUNvbmZpZy5wYXRoLFxuICAgICAgICB0eXBlLFxuICAgICAgICBjb3VudCxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkcyxcbiAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMucHJvcHMuY3NyZlRva2VuLFxuICAgICAgKSk7XG4gIH1cblxuICBoYW5kbGVBY2Nlc3NMZXZlbFVwZGF0ZShhY2Nlc3NMZXZlbCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhY2Nlc3NpYmlsaXR5OiBhY2Nlc3NMZXZlbCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGdldCBkYXRhIHdpdGggY3VycmVudCBmaWx0ZXIgKGlmIGFueSksXG4gICAqIGFuZCB1cGRhdGUgdGhpcy5zdGF0ZS5yYXdEYXRhIGFuZCB0aGlzLnN0YXRlLnRvdGFsQ291bnRcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gZmllbGRzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzb3J0XG4gICAqIEBwYXJhbSB7Ym9vbH0gdXBkYXRlRGF0YVdoZW5SZWNlaXZlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAgICovXG4gIGdldERhdGFGcm9tR3VwcHkoZmllbGRzLCBzb3J0LCB1cGRhdGVEYXRhV2hlblJlY2VpdmUsIG9mZnNldCwgc2l6ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBnZXR0aW5nRGF0YUZyb21HdXBweTogdHJ1ZSB9KTtcbiAgICBpZiAoIWZpZWxkcyB8fCBmaWVsZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZ2V0dGluZ0RhdGFGcm9tR3VwcHk6IGZhbHNlIH0pO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7IGRhdGE6IFtdLCB0b3RhbENvdW50OiAwIH0pO1xuICAgIH1cblxuICAgIC8vIHN1YiBhZ2dyZWdhdGlvbnMgLS0gZm9yIERBVFxuICAgIGlmICh0aGlzLnByb3BzLmd1cHB5Q29uZmlnLm1haW5GaWVsZCkge1xuICAgICAgY29uc3QgbnVtZXJpY0FnZ3JlZ2F0aW9uID0gdGhpcy5wcm9wcy5ndXBweUNvbmZpZy5tYWluRmllbGRJc051bWVyaWM7XG4gICAgICByZXR1cm4gYXNrR3VwcHlGb3JTdWJBZ2dyZWdhdGlvbkRhdGEoXG4gICAgICAgIHRoaXMucHJvcHMuZ3VwcHlDb25maWcucGF0aCxcbiAgICAgICAgdGhpcy5wcm9wcy5ndXBweUNvbmZpZy50eXBlLFxuICAgICAgICB0aGlzLnByb3BzLmd1cHB5Q29uZmlnLm1haW5GaWVsZCxcbiAgICAgICAgbnVtZXJpY0FnZ3JlZ2F0aW9uLFxuICAgICAgICB0aGlzLnByb3BzLmd1cHB5Q29uZmlnLmFnZ0ZpZWxkcyxcbiAgICAgICAgW10sXG4gICAgICAgIHRoaXMuZmlsdGVyLFxuICAgICAgICB0aGlzLnN0YXRlLmFjY2Vzc2liaWxpdHksXG4gICAgICAgIHRoaXMucHJvcHMuY3NyZlRva2VuLFxuICAgICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgaWYgKCFyZXMgfHwgIXJlcy5kYXRhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBnZXR0aW5nIHJhdyAke3RoaXMucHJvcHMuZ3VwcHlDb25maWcudHlwZX0gZGF0YSBmcm9tIEd1cHB5IHNlcnZlciAke3RoaXMucHJvcHMuZ3VwcHlDb25maWcucGF0aH0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhLl9hZ2dyZWdhdGlvblt0aGlzLnByb3BzLmd1cHB5Q29uZmlnLnR5cGVdO1xuICAgICAgICBjb25zdCBmaWVsZCA9IG51bWVyaWNBZ2dyZWdhdGlvbiA/ICdhc1RleHRIaXN0b2dyYW0nIDogJ2hpc3RvZ3JhbSc7XG4gICAgICAgIGNvbnN0IHBhcnNlZERhdGEgPSBkYXRhW3RoaXMucHJvcHMuZ3VwcHlDb25maWcubWFpbkZpZWxkXVtmaWVsZF07XG4gICAgICAgIGlmICh1cGRhdGVEYXRhV2hlblJlY2VpdmUpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJhd0RhdGE6IHBhcnNlZERhdGEsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdldHRpbmdEYXRhRnJvbUd1cHB5OiBmYWxzZSB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRhOiByZXMuZGF0YSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIG5vbi1uZXN0ZWQgYWdncmVnYXRpb25cbiAgICByZXR1cm4gYXNrR3VwcHlGb3JSYXdEYXRhKFxuICAgICAgdGhpcy5wcm9wcy5ndXBweUNvbmZpZy5wYXRoLFxuICAgICAgdGhpcy5wcm9wcy5ndXBweUNvbmZpZy50eXBlLFxuICAgICAgZmllbGRzLFxuICAgICAgdGhpcy5maWx0ZXIsXG4gICAgICBzb3J0LFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgb2Zmc2V0LFxuICAgICAgc2l6ZSxcbiAgICAgIHRoaXMuc3RhdGUuYWNjZXNzaWJpbGl0eSxcbiAgICAgIHRoaXMucHJvcHMuY3NyZlRva2VuLFxuICAgICkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcyB8fCAhcmVzLmRhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBnZXR0aW5nIHJhdyAke3RoaXMucHJvcHMuZ3VwcHlDb25maWcudHlwZX0gZGF0YSBmcm9tIEd1cHB5IHNlcnZlciAke3RoaXMucHJvcHMuZ3VwcHlDb25maWcucGF0aH0uYCk7XG4gICAgICB9XG4gICAgICBjb25zdCBwYXJzZWREYXRhID0gcmVzLmRhdGFbdGhpcy5wcm9wcy5ndXBweUNvbmZpZy50eXBlXTtcbiAgICAgIGNvbnN0IHRvdGFsQ291bnQgPSByZXMuZGF0YS5fYWdncmVnYXRpb25bdGhpcy5wcm9wcy5ndXBweUNvbmZpZy50eXBlXS5fdG90YWxDb3VudDtcbiAgICAgIGlmICh1cGRhdGVEYXRhV2hlblJlY2VpdmUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcmF3RGF0YTogcGFyc2VkRGF0YSxcbiAgICAgICAgICB0b3RhbENvdW50LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBnZXR0aW5nRGF0YUZyb21HdXBweTogZmFsc2UgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRhOiBwYXJzZWREYXRhLFxuICAgICAgICB0b3RhbENvdW50LFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge1xuICAgICAgICAgIFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCAoY2hpbGQpID0+IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgLy8gcGFzcyBkYXRhIHRvIGNoaWxkcmVuXG4gICAgICAgICAgICBhZ2dzRGF0YTogdGhpcy5zdGF0ZS5hZ2dzRGF0YSxcbiAgICAgICAgICAgIGFnZ3NEYXRhSXNMb2FkaW5nOiB0aGlzLnN0YXRlLmdldHRpbmdEYXRhRnJvbUd1cHB5LFxuICAgICAgICAgICAgZmlsdGVyOiB0aGlzLnN0YXRlLmZpbHRlcixcbiAgICAgICAgICAgIGZpbHRlckNvbmZpZzogdGhpcy5wcm9wcy5maWx0ZXJDb25maWcsXG4gICAgICAgICAgICByYXdEYXRhOiB0aGlzLnN0YXRlLnJhd0RhdGEsIC8vIHJhdyBkYXRhICh3aXRoIGN1cnJlbnQgZmlsdGVyIGFwcGxpZWQpXG4gICAgICAgICAgICB0b3RhbENvdW50OiB0aGlzLnN0YXRlLnRvdGFsQ291bnQsIC8vIHRvdGFsIGNvdW50IG9mIHJhdyBkYXRhIChjdXJyZW50IGZpbHRlciBhcHBsaWVkKVxuICAgICAgICAgICAgZmV0Y2hBbmRVcGRhdGVSYXdEYXRhOiB0aGlzLmhhbmRsZUZldGNoQW5kVXBkYXRlUmF3RGF0YS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZG93bmxvYWRSYXdEYXRhOiB0aGlzLmhhbmRsZURvd25sb2FkUmF3RGF0YS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZG93bmxvYWRSYXdEYXRhQnlGaWVsZHM6IHRoaXMuaGFuZGxlRG93bmxvYWRSYXdEYXRhQnlGaWVsZHMuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGFsbFJlZ3VsYXJBZ2dGaWVsZHM6IHRoaXMuc3RhdGUuYWxsUmVndWxhckFnZ0ZpZWxkcyxcbiAgICAgICAgICAgIGFsbEFzVGV4dEFnZ0ZpZWxkczogdGhpcy5zdGF0ZS5hbGxBc1RleHRBZ2dGaWVsZHMsXG4gICAgICAgICAgICBhY2Nlc3NpYmxlRmllbGRPYmplY3Q6IHRoaXMuc3RhdGUuYWNjZXNzaWJsZUZpZWxkT2JqZWN0LFxuICAgICAgICAgICAgdW5hY2Nlc3NpYmxlRmllbGRPYmplY3Q6IHRoaXMuc3RhdGUudW5hY2Nlc3NpYmxlRmllbGRPYmplY3QsXG5cbiAgICAgICAgICAgIC8vIGEgY2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggcmV0dXJuIHRvdGFsIGNvdW50cyBmb3IgYW55IHR5cGUsIHdpdGggYW55IGZpbHRlclxuICAgICAgICAgICAgZ2V0VG90YWxDb3VudHNCeVR5cGVBbmRGaWx0ZXI6IHRoaXMuaGFuZGxlQXNrR3VwcHlGb3JUb3RhbENvdW50cy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZG93bmxvYWRSYXdEYXRhQnlUeXBlQW5kRmlsdGVyOiB0aGlzLmhhbmRsZURvd25sb2FkUmF3RGF0YUJ5VHlwZUFuZEZpbHRlci5iaW5kKHRoaXMpLFxuXG4gICAgICAgICAgICAvLyBiZWxvdyBhcmUganVzdCBmb3IgQ29ubmVjdGVkRmlsdGVyIGNvbXBvbmVudFxuICAgICAgICAgICAgb25SZWNlaXZlTmV3QWdnc0RhdGE6IHRoaXMuaGFuZGxlUmVjZWl2ZU5ld0FnZ3NEYXRhLmJpbmQodGhpcyksXG4gICAgICAgICAgICBvbkZpbHRlckNoYW5nZTogdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGd1cHB5Q29uZmlnOiB0aGlzLnByb3BzLmd1cHB5Q29uZmlnLFxuICAgICAgICAgICAgb25VcGRhdGVBY2Nlc3NMZXZlbDogdGhpcy5oYW5kbGVBY2Nlc3NMZXZlbFVwZGF0ZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgYWRtaW5BcHBsaWVkUHJlRmlsdGVyczogdGhpcy5wcm9wcy5hZG1pbkFwcGxpZWRQcmVGaWx0ZXJzLFxuICAgICAgICAgICAgYWNjZXNzaWJsZUZpZWxkQ2hlY2tMaXN0OiB0aGlzLnByb3BzLmFjY2Vzc2libGVGaWVsZENoZWNrTGlzdCxcbiAgICAgICAgICAgIGNzcmZUb2tlbjogdGhpcy5wcm9wcy5jc3JmVG9rZW4sXG4gICAgICAgICAgfSkpXG4gICAgICAgIH1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuR3VwcHlXcmFwcGVyLnByb3BUeXBlcyA9IHtcbiAgZ3VwcHlDb25maWc6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1haW5GaWVsZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtYWluRmllbGRJc051bWVyaWM6IFByb3BUeXBlcy5ib29sLFxuICAgIGFnZ0ZpZWxkczogUHJvcFR5cGVzLmFycmF5LFxuICB9KS5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLFxuICAgIFByb3BUeXBlcy5ub2RlLFxuICBdKS5pc1JlcXVpcmVkLFxuICBmaWx0ZXJDb25maWc6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgdGFiczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZmllbGRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICAgIHNlYXJjaEZpZWxkczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgfSkpLFxuICB9KS5pc1JlcXVpcmVkLFxuICByYXdEYXRhRmllbGRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgb25SZWNlaXZlTmV3QWdnc0RhdGE6IFByb3BUeXBlcy5mdW5jLFxuICBvbkZpbHRlckNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGFjY2Vzc2libGVGaWVsZENoZWNrTGlzdDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIGFkbWluQXBwbGllZFByZUZpbHRlcnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGluaXRpYWxGaWx0ZXJGcm9tVVJMOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjc3JmVG9rZW46IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5HdXBweVdyYXBwZXIuZGVmYXVsdFByb3BzID0ge1xuICBvblJlY2VpdmVOZXdBZ2dzRGF0YTogKCkgPT4ge30sXG4gIG9uRmlsdGVyQ2hhbmdlOiAoKSA9PiB7fSxcbiAgcmF3RGF0YUZpZWxkczogW10sXG4gIGFjY2Vzc2libGVGaWVsZENoZWNrTGlzdDogdW5kZWZpbmVkLFxuICBhZG1pbkFwcGxpZWRQcmVGaWx0ZXJzOiB7fSxcbiAgaW5pdGlhbEZpbHRlckZyb21VUkw6IHt9LFxuICBjc3JmVG9rZW46ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgR3VwcHlXcmFwcGVyO1xuIl0sIm1hcHBpbmdzIjoiOztBQUVBLElBQUFBLE1BQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLFVBQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTs7Ozs7Ozs7QUFRQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7QUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUEscUJBQWdELFNBQUFELHVCQUFBTSxDQUFBLFVBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsZ0JBQUFBLENBQUEsYUFBQUUsUUFBQUYsQ0FBQSxFQUFBRyxDQUFBLE9BQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxJQUFBLENBQUFOLENBQUEsTUFBQUssTUFBQSxDQUFBRSxxQkFBQSxPQUFBQyxDQUFBLEdBQUFILE1BQUEsQ0FBQUUscUJBQUEsQ0FBQVAsQ0FBQSxFQUFBRyxDQUFBLEtB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