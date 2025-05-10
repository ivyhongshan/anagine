"use strict";function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _FilterGroup = _interopRequireDefault(require("@gen3/ui-component/dist/components/filters/FilterGroup"));
var _FilterList = _interopRequireDefault(require("@gen3/ui-component/dist/components/filters/FilterList"));
var _utils = require("./utils");



var _const = require("../Utils/const");
var _queries = require("../Utils/queries");




var _filters = require("../Utils/filters");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _toConsumableArray(r) {return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _iterableToArray(r) {if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);}function _arrayWithoutHoles(r) {if (Array.isArray(r)) return _arrayLikeToArray(r);}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}function _callSuper(t, o, e) {return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));}function _possibleConstructorReturn(t, e) {if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e) {if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct() {try {var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));} catch (t) {}return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {return !!t;})();}function _getPrototypeOf(t) {return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {return t.__proto__ || Object.getPrototypeOf(t);}, _getPrototypeOf(t);}function _inherits(t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);}function _setPrototypeOf(t, e) {return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {return t.__proto__ = e, t;}, _setPrototypeOf(t, e);} /* eslint react/forbid-prop-types: 0 */var







ConnectedFilter = /*#__PURE__*/function (_React$Component) {
  function ConnectedFilter(props) {var _this;_classCallCheck(this, ConnectedFilter);
    _this = _callSuper(this, ConnectedFilter, [props]);

    var filterConfigsFields = (0, _queries.getAllFieldsFromFilterConfigs)(props.filterConfig.tabs);
    var filterConfigsRegularAggFields = filterConfigsFields.fields || [];
    var filterConfigsAsTextAggFields = filterConfigsFields.asTextAggFields || [];
    var allRegularAggFields = props.accessibleFieldCheckList ?
    _lodash["default"].union(filterConfigsRegularAggFields, props.accessibleFieldCheckList) :
    filterConfigsRegularAggFields;
    // props.extraAggsFields are chart fields, use asTextAgg for all of them
    var allAsTextAggFields = _lodash["default"].union(filterConfigsAsTextAggFields, _this.props.extraAggsFields);

    _this.initialTabsOptions = {};
    var initialFilter = _this.props.adminAppliedPreFilters;
    var filterStatusArray = [];
    var filtersApplied = {};
    if (_this.props.userFilterFromURL && Object.keys(_this.props.userFilterFromURL).length > 0) {
      filterStatusArray = (0, _filters.buildFilterStatusForURLFilter)(
        _this.props.userFilterFromURL,
        _this.getTabsWithSearchFields()
      );
      filtersApplied = _this.props.userFilterFromURL;
      initialFilter = (0, _filters.mergeFilters)(_this.props.userFilterFromURL, _this.props.adminAppliedPreFilters);
    }

    _this.state = {
      allRegularAggFields: allRegularAggFields,
      allAsTextAggFields: allAsTextAggFields,
      initialAggsData: {},
      receivedAggsData: {},
      accessibility: _const.ENUM_ACCESSIBILITY.ALL,
      adminAppliedPreFilters: _objectSpread({}, _this.props.adminAppliedPreFilters),
      filter: _objectSpread({}, initialFilter),
      filtersApplied: filtersApplied,
      filterStatusArray: filterStatusArray
    };
    _this.filterGroupRef = /*#__PURE__*/_react["default"].createRef();
    _this.adminPreFiltersFrozen = JSON.stringify(_this.props.adminAppliedPreFilters).slice();
    _this.arrayFields = [];return _this;
  }_inherits(ConnectedFilter, _React$Component);return _createClass(ConnectedFilter, [{ key: "componentDidMount", value:

    function componentDidMount() {var _this2 = this;
      if (this.props.onUpdateAccessLevel) {
        this.props.onUpdateAccessLevel(this.state.accessibility);
      }
      if (this.props.onFilterChange) {
        this.props.onFilterChange(this.state.adminAppliedPreFilters, this.state.accessibility);
      }
      (0, _queries.askGuppyForAggregationData)(
        this.props.guppyConfig.path,
        this.props.guppyConfig.type,
        this.state.allRegularAggFields,
        this.state.allAsTextAggFields,
        this.state.filter,
        this.state.accessibility,
        this.props.csrfToken
      ).
      then(function (res) {
        if (!res.data) {
          var msg = "error querying guppy".concat(res.errors && res.errors.length > 0 ? ": ".concat(res.errors[0].message) : '');
          console.error(msg); // eslint-disable-line no-console
        }
        _this2.handleReceiveNewAggsData(
          res.data._aggregation[_this2.props.guppyConfig.type],
          _this2.state.adminAppliedPreFilters
        );
        _this2.saveInitialAggsData(res.data._aggregation[_this2.props.guppyConfig.type]);
      });

      (0, _queries.askGuppyAboutArrayTypes)(this.props.guppyConfig.path).then(function (res) {
        _this2.arrayFields = [];
        var keys = Object.keys(res);

        for (var i = 0; i < keys.length; i += 1) {
          if (res[keys[i]].arrayFields && res[keys[i]].arrayFields.length > 0) {
            _this2.arrayFields = _this2.arrayFields.concat(res[keys[i]].arrayFields);
          }
        }
      });
    } }, { key: "handleReceiveNewAggsData", value:

    function handleReceiveNewAggsData(receivedAggsData, filterResults) {
      this.setState({ receivedAggsData: receivedAggsData });
      if (this.props.onReceiveNewAggsData) {
        var resultAggsData = (0, _utils.excludeSelfFilterFromAggsData)(receivedAggsData, filterResults);
        this.props.onReceiveNewAggsData(resultAggsData);
      }
    }

    /**
     * Handler function that is called every time filter changes
     * What this function does:
     * 1. Ask guppy for aggregation data using (processed) filter
     * 2. After get aggregation response, call `handleReceiveNewAggsData` handler
     *    to process new received agg data
     * 3. If there's `onFilterChange` callback function from parent, call it
     * @param {object} filterResults
     */ }, { key: "handleFilterChange", value:
    function handleFilterChange(filterResults) {var _this3 = this;
      this.setState({ adminAppliedPreFilters: JSON.parse(this.adminPreFiltersFrozen) });
      var mergedFilterResults = (0, _filters.mergeFilters)(filterResults, JSON.parse(this.adminPreFiltersFrozen));

      var newFilterStatusArray = (0, _filters.buildFilterStatusForURLFilter)(
        mergedFilterResults,
        this.getTabsWithSearchFields()
      );

      this.setState({ filtersApplied: mergedFilterResults, filterStatusArray: newFilterStatusArray });
      (0, _queries.askGuppyForAggregationData)(
        this.props.guppyConfig.path,
        this.props.guppyConfig.type,
        this.state.allRegularAggFields,
        this.state.allAsTextAggFields,
        mergedFilterResults,
        this.state.accessibility,
        this.props.csrfToken
      ).
      then(function (res) {
        _this3.handleReceiveNewAggsData(
          res.data._aggregation[_this3.props.guppyConfig.type],
          mergedFilterResults
        );
      });

      if (this.props.onFilterChange) {
        this.props.onFilterChange(mergedFilterResults, this.state.accessibility);
      }
    } }, { key: "getTabsWithSearchFields", value:

    function getTabsWithSearchFields() {
      var newTabs = this.props.filterConfig.tabs.map(function (_ref)

      {var title = _ref.title,fields = _ref.fields,searchFields = _ref.searchFields,_ref$asTextAggFields = _ref.asTextAggFields,asTextAggFields = _ref$asTextAggFields === void 0 ? [] : _ref$asTextAggFields;
        if (searchFields) {
          return { title: title, fields: searchFields.concat(fields).concat(asTextAggFields) };
        }
        return { title: title, fields: fields.concat(asTextAggFields) };
      });
      return newTabs;
    }

    // eslint-disable-next-line react/no-unused-class-component-methods
  }, { key: "setFilter", value: function setFilter(filter) {
      if (this.filterGroupRef.current) {
        this.filterGroupRef.current.resetFilter();
      }
      this.handleFilterChange(filter);
    }

    /**
     * This function contains partial rendering logic for filter components.
     * It transfers aggregation data (`this.state.receivedAggsData`) to items inside filters.
     * But before that, the function first calls `this.props.onProcessFilterAggsData`, which is
     * a callback function passed by `ConnectedFilter`'s parent component, so that the parent
     * component could do some pre-processing modification about filter.
     */ }, { key: "getFilterTabs", value:
    function getFilterTabs() {var _this4 = this;
      var filtersToDisplay = this.state.filtersApplied;
      if (this.props.hidden) return null;
      var processedTabsOptions = this.props.onProcessFilterAggsData(this.state.receivedAggsData);

      // Get filter values
      var allFilterValues = this.props.filterConfig.tabs.reduce(
        function (accumulator, tab) {return [].concat(_toConsumableArray(accumulator), _toConsumableArray(tab.fields), _toConsumableArray(tab.asTextAggFields || []));},
        []
      );

      if (Object.keys(this.initialTabsOptions).length === 0) {
        this.initialTabsOptions = processedTabsOptions;
      }

      processedTabsOptions = (0, _filters.updateCountsInInitialTabsOptions)(
        this.initialTabsOptions,
        processedTabsOptions,
        filtersToDisplay,
        // for tiered access filters
        this.props.tierAccessLimit ? this.props.accessibleFieldCheckList : [],
        allFilterValues
      );

      if (Object.keys(filtersToDisplay).length) {
        // if has applied filters, sort tab options as selected/unselected separately
        var selectedTabsOptions = {};
        var unselectedTabsOptions = {};
        Object.keys(processedTabsOptions).forEach(function (opt) {
          if (!processedTabsOptions["".concat(opt)].histogram.length) {
            if (!unselectedTabsOptions["".concat(opt)]) {
              unselectedTabsOptions["".concat(opt)] = {};
            }
            unselectedTabsOptions["".concat(opt)].histogram = [];
            return;
          }
          processedTabsOptions["".concat(opt)].histogram.forEach(function (entry) {
            if (filtersToDisplay["".concat(opt)] &&
            filtersToDisplay["".concat(opt)].selectedValues &&
            filtersToDisplay["".concat(opt)].selectedValues.includes(entry.key)) {
              if (!selectedTabsOptions["".concat(opt)]) {
                selectedTabsOptions["".concat(opt)] = {};
              }
              if (!selectedTabsOptions["".concat(opt)].histogram) {
                selectedTabsOptions["".concat(opt)].histogram = [];
              }
              selectedTabsOptions["".concat(opt)].histogram.push({ key: entry.key, count: entry.count });
            } else {
              if (!unselectedTabsOptions["".concat(opt)]) {
                unselectedTabsOptions["".concat(opt)] = {};
              }
              if (typeof entry.key !== 'string') {// if it is a range filter, just copy and return
                unselectedTabsOptions["".concat(opt)].histogram = processedTabsOptions["".concat(opt)].histogram;
                return;
              }
              if (!unselectedTabsOptions["".concat(opt)].histogram) {
                unselectedTabsOptions["".concat(opt)].histogram = [];
              }
              unselectedTabsOptions["".concat(opt)].histogram.push({ key: entry.key, count: entry.count });
            }
          });
        });

        // For search filters: If there are any search filters present, include
        // the selected options in the `selectedTabsOptions` array.
        // ------
        var allSearchFields = [];
        this.props.filterConfig.tabs.forEach(function (tab) {
          allSearchFields = allSearchFields.concat(tab.searchFields);
        });
        allSearchFields.forEach(function (field) {
          if (filtersToDisplay["".concat(field)]) {
            var selectedValues = filtersToDisplay["".concat(field)].selectedValues;
            if (selectedValues) {
              filtersToDisplay["".concat(field)].selectedValues.forEach(function (val) {
                if (!selectedTabsOptions["".concat(field)]) {
                  selectedTabsOptions["".concat(field)] = {};
                }
                if (!selectedTabsOptions["".concat(field)].histogram) {
                  selectedTabsOptions["".concat(field)].histogram = [];
                }
                selectedTabsOptions["".concat(field)].histogram.push({ key: val });
              });
            }
          }
        });
        // -------
        processedTabsOptions = (0, _filters.mergeTabOptions)(
          (0, _filters.sortTabsOptions)(selectedTabsOptions),
          (0, _filters.sortTabsOptions)(unselectedTabsOptions)
        );
      } else {
        processedTabsOptions = (0, _filters.sortTabsOptions)(processedTabsOptions);
      }
      if (!processedTabsOptions || Object.keys(processedTabsOptions).length === 0) return null;
      var fieldMapping = this.props.fieldMapping;
      var tabs = this.props.filterConfig.tabs.map(function (_ref2, index) {var fields = _ref2.fields,searchFields = _ref2.searchFields,_ref2$asTextAggFields = _ref2.asTextAggFields,asTextAggFields = _ref2$asTextAggFields === void 0 ? [] : _ref2$asTextAggFields;
        var aggFields = _lodash["default"].union(fields, asTextAggFields);
        var sections = (0, _utils.getFilterSections)(
          aggFields,
          searchFields,
          fieldMapping,
          processedTabsOptions,
          _this4.state.initialAggsData,
          _this4.state.adminAppliedPreFilters,
          _this4.props.guppyConfig,
          _this4.arrayFields,
          _this4.props.filterValuesToHide,
          _this4.props.csrfToken
        );
        var filterStatus = _this4.state.filterStatusArray ?
        _this4.state.filterStatusArray[index] : null;
        return (/*#__PURE__*/
          _react["default"].createElement(_FilterList["default"], {
            key: index,
            sections: sections,
            hideEmptyFilterSection: _this4.props.hideEmptyFilterSection,
            tierAccessLimit: _this4.props.tierAccessLimit,
            lockedTooltipMessage: _this4.props.lockedTooltipMessage,
            disabledTooltipMessage: _this4.props.disabledTooltipMessage,
            arrayFields: _this4.arrayFields,
            filterStatusFromParent: filterStatus }
          ));

      });
      return tabs;
    }

    /**
     * Save initial aggregation data, especially for range slider
     * so that we still have min/max values for range slider
     * @param {object} aggsData
     */ }, { key: "saveInitialAggsData", value:
    function saveInitialAggsData(aggsData) {
      this.setState({ initialAggsData: aggsData });
    } }, { key: "render", value:

    function render() {var _this5 = this;
      if (this.props.hidden) return null;
      var filterTabs = this.getFilterTabs();
      if (!filterTabs || filterTabs.length === 0) {
        return null;
      }
      // If there are any search fields, insert them at the top of each tab's fields.
      var filterConfig = {
        tabs: this.getTabsWithSearchFields()
      };
      return (/*#__PURE__*/
        _react["default"].createElement(_FilterGroup["default"], {
          ref: this.filterGroupRef,
          className: this.props.className,
          tabs: filterTabs,
          filterConfig: filterConfig,
          onFilterChange: function onFilterChange(e) {return _this5.handleFilterChange(e);},
          hideZero: this.props.hideZero,
          filterStatusFromParent: this.state.filterStatusArray,
          filterResultsFromParent: this.state.filtersApplied }
        ));

    } }]);}(_react["default"].Component);


ConnectedFilter.propTypes = {
  filterConfig: _propTypes["default"].shape({
    tabs: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      title: _propTypes["default"].string,
      fields: _propTypes["default"].arrayOf(_propTypes["default"].string),
      asTextAggFields: _propTypes["default"].arrayOf(_propTypes["default"].string),
      searchFields: _propTypes["default"].arrayOf(_propTypes["default"].string)
    }))
  }).isRequired,
  extraAggsFields: _propTypes["default"].arrayOf(_propTypes["default"].string),
  guppyConfig: _propTypes["default"].shape({
    path: _propTypes["default"].string.isRequired,
    type: _propTypes["default"].string.isRequired
  }).isRequired,
  onFilterChange: _propTypes["default"].func,
  onReceiveNewAggsData: _propTypes["default"].func,
  className: _propTypes["default"].string,
  fieldMapping: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    field: _propTypes["default"].string,
    name: _propTypes["default"].string
  })),
  tierAccessLimit: _propTypes["default"].number,
  onProcessFilterAggsData: _propTypes["default"].func,
  onUpdateAccessLevel: _propTypes["default"].func,
  adminAppliedPreFilters: _propTypes["default"].object,
  lockedTooltipMessage: _propTypes["default"].string,
  disabledTooltipMessage: _propTypes["default"].string,
  accessibleFieldCheckList: _propTypes["default"].arrayOf(_propTypes["default"].string),
  hideZero: _propTypes["default"].bool,
  hidden: _propTypes["default"].bool,
  userFilterFromURL: _propTypes["default"].object,
  hideEmptyFilterSection: _propTypes["default"].bool,
  filterValuesToHide: _propTypes["default"].arrayOf(_propTypes["default"].string),
  csrfToken: _propTypes["default"].string
};

ConnectedFilter.defaultProps = {
  extraAggsFields: [],
  onFilterChange: function onFilterChange() {},
  onReceiveNewAggsData: function onReceiveNewAggsData() {},
  className: '',
  fieldMapping: [],
  tierAccessLimit: undefined,
  onProcessFilterAggsData: function onProcessFilterAggsData(data) {return data;},
  onUpdateAccessLevel: function onUpdateAccessLevel() {},
  adminAppliedPreFilters: {},
  lockedTooltipMessage: '',
  disabledTooltipMessage: '',
  accessibleFieldCheckList: undefined,
  hideZero: false,
  hidden: false,
  userFilterFromURL: {},
  hideEmptyFilterSection: false,
  filterValuesToHide: [],
  csrfToken: ''
};var _default = exports["default"] =

ConnectedFilter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbG9kYXNoIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcmVhY3QiLCJfcHJvcFR5cGVzIiwiX0ZpbHRlckdyb3VwIiwiX0ZpbHRlckxpc3QiLCJfdXRpbHMiLCJfY29uc3QiLCJfcXVlcmllcyIsIl9maWx0ZXJzIiwiZSIsIl9fZXNNb2R1bGUiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJyIiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIlR5cGVFcnJvciIsImEiLCJfYXJyYXlMaWtlVG9BcnJheSIsInQiLCJ0b1N0cmluZyIsImNhbGwiLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJTeW1ib2wiLCJpdGVyYXRvciIsImlzQXJyYXkiLCJsZW5ndGgiLCJuIiwib3duS2V5cyIsIk9iamVjdCIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJvIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJmb3JFYWNoIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5IiwidmFsdWUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9jbGFzc0NhbGxDaGVjayIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG90eXBlIiwiaSIsIl90b1ByaW1pdGl2ZSIsIl90eXBlb2YiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsIk51bWJlciIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwiQm9vbGVhbiIsInZhbHVlT2YiLCJzZXRQcm90b3R5cGVPZiIsImdldFByb3RvdHlwZU9mIiwiYmluZCIsIl9fcHJvdG9fXyIsIl9pbmhlcml0cyIsImNyZWF0ZSIsIl9zZXRQcm90b3R5cGVPZiIsIkNvbm5lY3RlZEZpbHRlciIsIl9SZWFjdCRDb21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiZmlsdGVyQ29uZmlnc0ZpZWxkcyIsImdldEFsbEZpZWxkc0Zyb21GaWx0ZXJDb25maWdzIiwiZmlsdGVyQ29uZmlnIiwidGFicyIsImZpbHRlckNvbmZpZ3NSZWd1bGFyQWdnRmllbGRzIiwiZmllbGRzIiwiZmlsdGVyQ29uZmlnc0FzVGV4dEFnZ0ZpZWxkcyIsImFzVGV4dEFnZ0ZpZWxkcyIsImFsbFJlZ3VsYXJBZ2dGaWVsZHMiLCJhY2Nlc3NpYmxlRmllbGRDaGVja0xpc3QiLCJfIiwidW5pb24iLCJhbGxBc1RleHRBZ2dGaWVsZHMiLCJleHRyYUFnZ3NGaWVsZHMiLCJpbml0aWFsVGFic09wdGlvbnMiLCJpbml0aWFsRmlsdGVyIiwiYWRtaW5BcHBsaWVkUHJlRmlsdGVycyIsImZpbHRlclN0YXR1c0FycmF5IiwiZmlsdGVyc0FwcGxpZWQiLCJ1c2VyRmlsdGVyRnJvbVVSTCIsImJ1aWxkRmlsdGVyU3RhdHVzRm9yVVJMRmlsdGVyIiwiZ2V0VGFic1dpdGhTZWFyY2hGaWVsZHMiLCJtZXJnZUZpbHRlcnMiLCJzdGF0ZSIsImluaXRpYWxBZ2dzRGF0YSIsInJlY2VpdmVkQWdnc0RhdGEiLCJhY2Nlc3NpYmlsaXR5IiwiRU5VTV9BQ0NFU1NJQklMSVRZIiwiQUxMIiwiZmlsdGVyR3JvdXBSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImFkbWluUHJlRmlsdGVyc0Zyb3plbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJhcnJheUZpZWxkcyIsImNvbXBvbmVudERpZE1vdW50IiwiX3RoaXMyIiwib25VcGRhdGVBY2Nlc3NMZXZlbCIsIm9uRmlsdGVyQ2hhbmdlIiwiYXNrR3VwcHlGb3JBZ2dyZWdhdGlvbkRhdGEiLCJndXBweUNvbmZpZyIsInBhdGgiLCJ0eXBlIiwiY3NyZlRva2VuIiwidGhlbiIsInJlcyIsImRhdGEiLCJtc2ciLCJjb25jYXQiLCJlcnJvcnMiLCJtZXNzYWdlIiwiY29uc29sZSIsImVycm9yIiwiaGFuZGxlUmVjZWl2ZU5ld0FnZ3NEYXRhIiwiX2FnZ3JlZ2F0aW9uIiwic2F2ZUluaXRpYWxBZ2dzRGF0YSIsImFza0d1cHB5QWJvdXRBcnJheVR5cGVzIiwiZmlsdGVyUmVzdWx0cyIsInNldFN0YXRlIiwib25SZWNlaXZlTmV3QWdnc0RhdGEiLCJyZXN1bHRBZ2dzRGF0YSIsImV4Y2x1ZGVTZWxmRmlsdGVyRnJvbUFnZ3NEYXRhIiwiaGFuZGxlRmlsdGVyQ2hhbmdlIiwiX3RoaXMzIiwicGFyc2UiLCJtZXJnZWRGaWx0ZXJSZXN1bHRzIiwibmV3RmlsdGVyU3RhdHVzQXJyYXkiLCJuZXdUYWJzIiwibWFwIiwiX3JlZiIsInRpdGxlIiwic2VhcmNoRmllbGRzIiwiX3JlZiRhc1RleHRBZ2dGaWVsZHMiLCJzZXRGaWx0ZXIiLCJjdXJyZW50IiwicmVzZXRGaWx0ZXIiLCJnZXRGaWx0ZXJUYWJzIiwiX3RoaXM0IiwiZmlsdGVyc1RvRGlzcGxheSIsImhpZGRlbiIsInByb2Nlc3NlZFRhYnNPcHRpb25zIiwib25Qcm9jZXNzRmlsdGVyQWdnc0RhdGEiLCJhbGxGaWx0ZXJWYWx1ZXMiLCJyZWR1Y2UiLCJhY2N1bXVsYXRvciIsInRhYiIsInVwZGF0ZUNvdW50c0luSW5pdGlhbFRhYnNPcHRpb25zIiwidGllckFjY2Vzc0xpbWl0Iiwic2VsZWN0ZWRUYWJzT3B0aW9ucyIsInVuc2VsZWN0ZWRUYWJzT3B0aW9ucyIsIm9wdCIsImhpc3RvZ3JhbSIsImVudHJ5Iiwic2VsZWN0ZWRWYWx1ZXMiLCJpbmNsdWRlcyIsImNvdW50IiwiYWxsU2VhcmNoRmllbGRzIiwiZmllbGQiLCJ2YWwiLCJtZXJnZVRhYk9wdGlvbnMiLCJzb3J0VGFic09wdGlvbnMiLCJmaWVsZE1hcHBpbmciLCJfcmVmMiIsImluZGV4IiwiX3JlZjIkYXNUZXh0QWdnRmllbGRzIiwiYWdnRmllbGRzIiwic2VjdGlvbnMiLCJnZXRGaWx0ZXJTZWN0aW9ucyIsImZpbHRlclZhbHVlc1RvSGlkZSIsImZpbHRlclN0YXR1cyIsImNyZWF0ZUVsZW1lbnQiLCJoaWRlRW1wdHlGaWx0ZXJTZWN0aW9uIiwibG9ja2VkVG9vbHRpcE1lc3NhZ2UiLCJkaXNhYmxlZFRvb2x0aXBNZXNzYWdlIiwiZmlsdGVyU3RhdHVzRnJvbVBhcmVudCIsImFnZ3NEYXRhIiwicmVuZGVyIiwiX3RoaXM1IiwiZmlsdGVyVGFicyIsInJlZiIsImNsYXNzTmFtZSIsImhpZGVaZXJvIiwiZmlsdGVyUmVzdWx0c0Zyb21QYXJlbnQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsImFycmF5T2YiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZnVuYyIsIm51bWJlciIsIm9iamVjdCIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJfZGVmYXVsdCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Db25uZWN0ZWRGaWx0ZXIvaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCByZWFjdC9mb3JiaWQtcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEZpbHRlckdyb3VwIGZyb20gJ0BnZW4zL3VpLWNvbXBvbmVudC9kaXN0L2NvbXBvbmVudHMvZmlsdGVycy9GaWx0ZXJHcm91cCc7XG5pbXBvcnQgRmlsdGVyTGlzdCBmcm9tICdAZ2VuMy91aS1jb21wb25lbnQvZGlzdC9jb21wb25lbnRzL2ZpbHRlcnMvRmlsdGVyTGlzdCc7XG5pbXBvcnQge1xuICBnZXRGaWx0ZXJTZWN0aW9ucyxcbiAgZXhjbHVkZVNlbGZGaWx0ZXJGcm9tQWdnc0RhdGEsXG59IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgRU5VTV9BQ0NFU1NJQklMSVRZIH0gZnJvbSAnLi4vVXRpbHMvY29uc3QnO1xuaW1wb3J0IHtcbiAgYXNrR3VwcHlBYm91dEFycmF5VHlwZXMsXG4gIGFza0d1cHB5Rm9yQWdncmVnYXRpb25EYXRhLFxuICBnZXRBbGxGaWVsZHNGcm9tRmlsdGVyQ29uZmlncyxcbn0gZnJvbSAnLi4vVXRpbHMvcXVlcmllcyc7XG5pbXBvcnQge1xuICBtZXJnZUZpbHRlcnMsXG4gIHVwZGF0ZUNvdW50c0luSW5pdGlhbFRhYnNPcHRpb25zLFxuICBzb3J0VGFic09wdGlvbnMsXG4gIG1lcmdlVGFiT3B0aW9ucyxcbiAgYnVpbGRGaWx0ZXJTdGF0dXNGb3JVUkxGaWx0ZXIsXG59IGZyb20gJy4uL1V0aWxzL2ZpbHRlcnMnO1xuXG5jbGFzcyBDb25uZWN0ZWRGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IGZpbHRlckNvbmZpZ3NGaWVsZHMgPSBnZXRBbGxGaWVsZHNGcm9tRmlsdGVyQ29uZmlncyhwcm9wcy5maWx0ZXJDb25maWcudGFicyk7XG4gICAgY29uc3QgZmlsdGVyQ29uZmlnc1JlZ3VsYXJBZ2dGaWVsZHMgPSBmaWx0ZXJDb25maWdzRmllbGRzLmZpZWxkcyB8fCBbXTtcbiAgICBjb25zdCBmaWx0ZXJDb25maWdzQXNUZXh0QWdnRmllbGRzID0gZmlsdGVyQ29uZmlnc0ZpZWxkcy5hc1RleHRBZ2dGaWVsZHMgfHwgW107XG4gICAgY29uc3QgYWxsUmVndWxhckFnZ0ZpZWxkcyA9IHByb3BzLmFjY2Vzc2libGVGaWVsZENoZWNrTGlzdFxuICAgICAgPyBfLnVuaW9uKGZpbHRlckNvbmZpZ3NSZWd1bGFyQWdnRmllbGRzLCBwcm9wcy5hY2Nlc3NpYmxlRmllbGRDaGVja0xpc3QpXG4gICAgICA6IGZpbHRlckNvbmZpZ3NSZWd1bGFyQWdnRmllbGRzO1xuICAgIC8vIHByb3BzLmV4dHJhQWdnc0ZpZWxkcyBhcmUgY2hhcnQgZmllbGRzLCB1c2UgYXNUZXh0QWdnIGZvciBhbGwgb2YgdGhlbVxuICAgIGNvbnN0IGFsbEFzVGV4dEFnZ0ZpZWxkcyA9IF8udW5pb24oZmlsdGVyQ29uZmlnc0FzVGV4dEFnZ0ZpZWxkcywgdGhpcy5wcm9wcy5leHRyYUFnZ3NGaWVsZHMpO1xuXG4gICAgdGhpcy5pbml0aWFsVGFic09wdGlvbnMgPSB7fTtcbiAgICBsZXQgaW5pdGlhbEZpbHRlciA9IHRoaXMucHJvcHMuYWRtaW5BcHBsaWVkUHJlRmlsdGVycztcbiAgICBsZXQgZmlsdGVyU3RhdHVzQXJyYXkgPSBbXTtcbiAgICBsZXQgZmlsdGVyc0FwcGxpZWQgPSB7fTtcbiAgICBpZiAodGhpcy5wcm9wcy51c2VyRmlsdGVyRnJvbVVSTCAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnVzZXJGaWx0ZXJGcm9tVVJMKS5sZW5ndGggPiAwKSB7XG4gICAgICBmaWx0ZXJTdGF0dXNBcnJheSA9IGJ1aWxkRmlsdGVyU3RhdHVzRm9yVVJMRmlsdGVyKFxuICAgICAgICB0aGlzLnByb3BzLnVzZXJGaWx0ZXJGcm9tVVJMLFxuICAgICAgICB0aGlzLmdldFRhYnNXaXRoU2VhcmNoRmllbGRzKCksXG4gICAgICApO1xuICAgICAgZmlsdGVyc0FwcGxpZWQgPSB0aGlzLnByb3BzLnVzZXJGaWx0ZXJGcm9tVVJMO1xuICAgICAgaW5pdGlhbEZpbHRlciA9IG1lcmdlRmlsdGVycyh0aGlzLnByb3BzLnVzZXJGaWx0ZXJGcm9tVVJMLCB0aGlzLnByb3BzLmFkbWluQXBwbGllZFByZUZpbHRlcnMpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhbGxSZWd1bGFyQWdnRmllbGRzLFxuICAgICAgYWxsQXNUZXh0QWdnRmllbGRzLFxuICAgICAgaW5pdGlhbEFnZ3NEYXRhOiB7fSxcbiAgICAgIHJlY2VpdmVkQWdnc0RhdGE6IHt9LFxuICAgICAgYWNjZXNzaWJpbGl0eTogRU5VTV9BQ0NFU1NJQklMSVRZLkFMTCxcbiAgICAgIGFkbWluQXBwbGllZFByZUZpbHRlcnM6IHsgLi4udGhpcy5wcm9wcy5hZG1pbkFwcGxpZWRQcmVGaWx0ZXJzIH0sXG4gICAgICBmaWx0ZXI6IHsgLi4uaW5pdGlhbEZpbHRlciB9LFxuICAgICAgZmlsdGVyc0FwcGxpZWQsXG4gICAgICBmaWx0ZXJTdGF0dXNBcnJheSxcbiAgICB9O1xuICAgIHRoaXMuZmlsdGVyR3JvdXBSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB0aGlzLmFkbWluUHJlRmlsdGVyc0Zyb3plbiA9IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuYWRtaW5BcHBsaWVkUHJlRmlsdGVycykuc2xpY2UoKTtcbiAgICB0aGlzLmFycmF5RmllbGRzID0gW107XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblVwZGF0ZUFjY2Vzc0xldmVsKSB7XG4gICAgICB0aGlzLnByb3BzLm9uVXBkYXRlQWNjZXNzTGV2ZWwodGhpcy5zdGF0ZS5hY2Nlc3NpYmlsaXR5KTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UodGhpcy5zdGF0ZS5hZG1pbkFwcGxpZWRQcmVGaWx0ZXJzLCB0aGlzLnN0YXRlLmFjY2Vzc2liaWxpdHkpO1xuICAgIH1cbiAgICBhc2tHdXBweUZvckFnZ3JlZ2F0aW9uRGF0YShcbiAgICAgIHRoaXMucHJvcHMuZ3VwcHlDb25maWcucGF0aCxcbiAgICAgIHRoaXMucHJvcHMuZ3VwcHlDb25maWcudHlwZSxcbiAgICAgIHRoaXMuc3RhdGUuYWxsUmVndWxhckFnZ0ZpZWxkcyxcbiAgICAgIHRoaXMuc3RhdGUuYWxsQXNUZXh0QWdnRmllbGRzLFxuICAgICAgdGhpcy5zdGF0ZS5maWx0ZXIsXG4gICAgICB0aGlzLnN0YXRlLmFjY2Vzc2liaWxpdHksXG4gICAgICB0aGlzLnByb3BzLmNzcmZUb2tlbixcbiAgICApXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmICghcmVzLmRhdGEpIHtcbiAgICAgICAgICBjb25zdCBtc2cgPSBgZXJyb3IgcXVlcnlpbmcgZ3VwcHkke3Jlcy5lcnJvcnMgJiYgcmVzLmVycm9ycy5sZW5ndGggPiAwID8gYDogJHtyZXMuZXJyb3JzWzBdLm1lc3NhZ2V9YCA6ICcnfWA7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihtc2cpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZVJlY2VpdmVOZXdBZ2dzRGF0YShcbiAgICAgICAgICByZXMuZGF0YS5fYWdncmVnYXRpb25bdGhpcy5wcm9wcy5ndXBweUNvbmZpZy50eXBlXSxcbiAgICAgICAgICB0aGlzLnN0YXRlLmFkbWluQXBwbGllZFByZUZpbHRlcnMsXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2F2ZUluaXRpYWxBZ2dzRGF0YShyZXMuZGF0YS5fYWdncmVnYXRpb25bdGhpcy5wcm9wcy5ndXBweUNvbmZpZy50eXBlXSk7XG4gICAgICB9KTtcblxuICAgIGFza0d1cHB5QWJvdXRBcnJheVR5cGVzKHRoaXMucHJvcHMuZ3VwcHlDb25maWcucGF0aCkudGhlbigocmVzKSA9PiB7XG4gICAgICB0aGlzLmFycmF5RmllbGRzID0gW107XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVzKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChyZXNba2V5c1tpXV0uYXJyYXlGaWVsZHMgJiYgcmVzW2tleXNbaV1dLmFycmF5RmllbGRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLmFycmF5RmllbGRzID0gdGhpcy5hcnJheUZpZWxkcy5jb25jYXQocmVzW2tleXNbaV1dLmFycmF5RmllbGRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlUmVjZWl2ZU5ld0FnZ3NEYXRhKHJlY2VpdmVkQWdnc0RhdGEsIGZpbHRlclJlc3VsdHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVjZWl2ZWRBZ2dzRGF0YSB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblJlY2VpdmVOZXdBZ2dzRGF0YSkge1xuICAgICAgY29uc3QgcmVzdWx0QWdnc0RhdGEgPSBleGNsdWRlU2VsZkZpbHRlckZyb21BZ2dzRGF0YShyZWNlaXZlZEFnZ3NEYXRhLCBmaWx0ZXJSZXN1bHRzKTtcbiAgICAgIHRoaXMucHJvcHMub25SZWNlaXZlTmV3QWdnc0RhdGEocmVzdWx0QWdnc0RhdGEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVyIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIGV2ZXJ5IHRpbWUgZmlsdGVyIGNoYW5nZXNcbiAgICogV2hhdCB0aGlzIGZ1bmN0aW9uIGRvZXM6XG4gICAqIDEuIEFzayBndXBweSBmb3IgYWdncmVnYXRpb24gZGF0YSB1c2luZyAocHJvY2Vzc2VkKSBmaWx0ZXJcbiAgICogMi4gQWZ0ZXIgZ2V0IGFnZ3JlZ2F0aW9uIHJlc3BvbnNlLCBjYWxsIGBoYW5kbGVSZWNlaXZlTmV3QWdnc0RhdGFgIGhhbmRsZXJcbiAgICogICAgdG8gcHJvY2VzcyBuZXcgcmVjZWl2ZWQgYWdnIGRhdGFcbiAgICogMy4gSWYgdGhlcmUncyBgb25GaWx0ZXJDaGFuZ2VgIGNhbGxiYWNrIGZ1bmN0aW9uIGZyb20gcGFyZW50LCBjYWxsIGl0XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBmaWx0ZXJSZXN1bHRzXG4gICAqL1xuICBoYW5kbGVGaWx0ZXJDaGFuZ2UoZmlsdGVyUmVzdWx0cykge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhZG1pbkFwcGxpZWRQcmVGaWx0ZXJzOiBKU09OLnBhcnNlKHRoaXMuYWRtaW5QcmVGaWx0ZXJzRnJvemVuKSB9KTtcbiAgICBjb25zdCBtZXJnZWRGaWx0ZXJSZXN1bHRzID0gbWVyZ2VGaWx0ZXJzKGZpbHRlclJlc3VsdHMsIEpTT04ucGFyc2UodGhpcy5hZG1pblByZUZpbHRlcnNGcm96ZW4pKTtcblxuICAgIGNvbnN0IG5ld0ZpbHRlclN0YXR1c0FycmF5ID0gYnVpbGRGaWx0ZXJTdGF0dXNGb3JVUkxGaWx0ZXIoXG4gICAgICBtZXJnZWRGaWx0ZXJSZXN1bHRzLFxuICAgICAgdGhpcy5nZXRUYWJzV2l0aFNlYXJjaEZpZWxkcygpLFxuICAgICk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgZmlsdGVyc0FwcGxpZWQ6IG1lcmdlZEZpbHRlclJlc3VsdHMsIGZpbHRlclN0YXR1c0FycmF5OiBuZXdGaWx0ZXJTdGF0dXNBcnJheSB9KTtcbiAgICBhc2tHdXBweUZvckFnZ3JlZ2F0aW9uRGF0YShcbiAgICAgIHRoaXMucHJvcHMuZ3VwcHlDb25maWcucGF0aCxcbiAgICAgIHRoaXMucHJvcHMuZ3VwcHlDb25maWcudHlwZSxcbiAgICAgIHRoaXMuc3RhdGUuYWxsUmVndWxhckFnZ0ZpZWxkcyxcbiAgICAgIHRoaXMuc3RhdGUuYWxsQXNUZXh0QWdnRmllbGRzLFxuICAgICAgbWVyZ2VkRmlsdGVyUmVzdWx0cyxcbiAgICAgIHRoaXMuc3RhdGUuYWNjZXNzaWJpbGl0eSxcbiAgICAgIHRoaXMucHJvcHMuY3NyZlRva2VuLFxuICAgIClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWNlaXZlTmV3QWdnc0RhdGEoXG4gICAgICAgICAgcmVzLmRhdGEuX2FnZ3JlZ2F0aW9uW3RoaXMucHJvcHMuZ3VwcHlDb25maWcudHlwZV0sXG4gICAgICAgICAgbWVyZ2VkRmlsdGVyUmVzdWx0cyxcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UobWVyZ2VkRmlsdGVyUmVzdWx0cywgdGhpcy5zdGF0ZS5hY2Nlc3NpYmlsaXR5KTtcbiAgICB9XG4gIH1cblxuICBnZXRUYWJzV2l0aFNlYXJjaEZpZWxkcygpIHtcbiAgICBjb25zdCBuZXdUYWJzID0gdGhpcy5wcm9wcy5maWx0ZXJDb25maWcudGFicy5tYXAoKHtcbiAgICAgIHRpdGxlLCBmaWVsZHMsIHNlYXJjaEZpZWxkcywgYXNUZXh0QWdnRmllbGRzID0gW10sXG4gICAgfSkgPT4ge1xuICAgICAgaWYgKHNlYXJjaEZpZWxkcykge1xuICAgICAgICByZXR1cm4geyB0aXRsZSwgZmllbGRzOiBzZWFyY2hGaWVsZHMuY29uY2F0KGZpZWxkcykuY29uY2F0KGFzVGV4dEFnZ0ZpZWxkcykgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IHRpdGxlLCBmaWVsZHM6IGZpZWxkcy5jb25jYXQoYXNUZXh0QWdnRmllbGRzKSB9O1xuICAgIH0pO1xuICAgIHJldHVybiBuZXdUYWJzO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLXVudXNlZC1jbGFzcy1jb21wb25lbnQtbWV0aG9kc1xuICBzZXRGaWx0ZXIoZmlsdGVyKSB7XG4gICAgaWYgKHRoaXMuZmlsdGVyR3JvdXBSZWYuY3VycmVudCkge1xuICAgICAgdGhpcy5maWx0ZXJHcm91cFJlZi5jdXJyZW50LnJlc2V0RmlsdGVyKCk7XG4gICAgfVxuICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlKGZpbHRlcik7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBjb250YWlucyBwYXJ0aWFsIHJlbmRlcmluZyBsb2dpYyBmb3IgZmlsdGVyIGNvbXBvbmVudHMuXG4gICAqIEl0IHRyYW5zZmVycyBhZ2dyZWdhdGlvbiBkYXRhIChgdGhpcy5zdGF0ZS5yZWNlaXZlZEFnZ3NEYXRhYCkgdG8gaXRlbXMgaW5zaWRlIGZpbHRlcnMuXG4gICAqIEJ1dCBiZWZvcmUgdGhhdCwgdGhlIGZ1bmN0aW9uIGZpcnN0IGNhbGxzIGB0aGlzLnByb3BzLm9uUHJvY2Vzc0ZpbHRlckFnZ3NEYXRhYCwgd2hpY2ggaXNcbiAgICogYSBjYWxsYmFjayBmdW5jdGlvbiBwYXNzZWQgYnkgYENvbm5lY3RlZEZpbHRlcmAncyBwYXJlbnQgY29tcG9uZW50LCBzbyB0aGF0IHRoZSBwYXJlbnRcbiAgICogY29tcG9uZW50IGNvdWxkIGRvIHNvbWUgcHJlLXByb2Nlc3NpbmcgbW9kaWZpY2F0aW9uIGFib3V0IGZpbHRlci5cbiAgICovXG4gIGdldEZpbHRlclRhYnMoKSB7XG4gICAgY29uc3QgZmlsdGVyc1RvRGlzcGxheSA9IHRoaXMuc3RhdGUuZmlsdGVyc0FwcGxpZWQ7XG4gICAgaWYgKHRoaXMucHJvcHMuaGlkZGVuKSByZXR1cm4gbnVsbDtcbiAgICBsZXQgcHJvY2Vzc2VkVGFic09wdGlvbnMgPSB0aGlzLnByb3BzLm9uUHJvY2Vzc0ZpbHRlckFnZ3NEYXRhKHRoaXMuc3RhdGUucmVjZWl2ZWRBZ2dzRGF0YSk7XG5cbiAgICAvLyBHZXQgZmlsdGVyIHZhbHVlc1xuICAgIGNvbnN0IGFsbEZpbHRlclZhbHVlcyA9IHRoaXMucHJvcHMuZmlsdGVyQ29uZmlnLnRhYnMucmVkdWNlKFxuICAgICAgKGFjY3VtdWxhdG9yLCB0YWIpID0+IChbLi4uYWNjdW11bGF0b3IsIC4uLnRhYi5maWVsZHMsIC4uLnRhYi5hc1RleHRBZ2dGaWVsZHMgfHwgW11dKSxcbiAgICAgIFtdLFxuICAgICk7XG5cbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5pbml0aWFsVGFic09wdGlvbnMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5pbml0aWFsVGFic09wdGlvbnMgPSBwcm9jZXNzZWRUYWJzT3B0aW9ucztcbiAgICB9XG5cbiAgICBwcm9jZXNzZWRUYWJzT3B0aW9ucyA9IHVwZGF0ZUNvdW50c0luSW5pdGlhbFRhYnNPcHRpb25zKFxuICAgICAgdGhpcy5pbml0aWFsVGFic09wdGlvbnMsXG4gICAgICBwcm9jZXNzZWRUYWJzT3B0aW9ucyxcbiAgICAgIGZpbHRlcnNUb0Rpc3BsYXksXG4gICAgICAvLyBmb3IgdGllcmVkIGFjY2VzcyBmaWx0ZXJzXG4gICAgICB0aGlzLnByb3BzLnRpZXJBY2Nlc3NMaW1pdCA/IHRoaXMucHJvcHMuYWNjZXNzaWJsZUZpZWxkQ2hlY2tMaXN0IDogW10sXG4gICAgICBhbGxGaWx0ZXJWYWx1ZXMsXG4gICAgKTtcblxuICAgIGlmIChPYmplY3Qua2V5cyhmaWx0ZXJzVG9EaXNwbGF5KS5sZW5ndGgpIHtcbiAgICAgIC8vIGlmIGhhcyBhcHBsaWVkIGZpbHRlcnMsIHNvcnQgdGFiIG9wdGlvbnMgYXMgc2VsZWN0ZWQvdW5zZWxlY3RlZCBzZXBhcmF0ZWx5XG4gICAgICBjb25zdCBzZWxlY3RlZFRhYnNPcHRpb25zID0ge307XG4gICAgICBjb25zdCB1bnNlbGVjdGVkVGFic09wdGlvbnMgPSB7fTtcbiAgICAgIE9iamVjdC5rZXlzKHByb2Nlc3NlZFRhYnNPcHRpb25zKS5mb3JFYWNoKChvcHQpID0+IHtcbiAgICAgICAgaWYgKCFwcm9jZXNzZWRUYWJzT3B0aW9uc1tgJHtvcHR9YF0uaGlzdG9ncmFtLmxlbmd0aCkge1xuICAgICAgICAgIGlmICghdW5zZWxlY3RlZFRhYnNPcHRpb25zW2Ake29wdH1gXSkge1xuICAgICAgICAgICAgdW5zZWxlY3RlZFRhYnNPcHRpb25zW2Ake29wdH1gXSA9IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bnNlbGVjdGVkVGFic09wdGlvbnNbYCR7b3B0fWBdLmhpc3RvZ3JhbSA9IFtdO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwcm9jZXNzZWRUYWJzT3B0aW9uc1tgJHtvcHR9YF0uaGlzdG9ncmFtLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgaWYgKGZpbHRlcnNUb0Rpc3BsYXlbYCR7b3B0fWBdXG4gICAgICAgICAgJiYgZmlsdGVyc1RvRGlzcGxheVtgJHtvcHR9YF0uc2VsZWN0ZWRWYWx1ZXNcbiAgICAgICAgICAmJiBmaWx0ZXJzVG9EaXNwbGF5W2Ake29wdH1gXS5zZWxlY3RlZFZhbHVlcy5pbmNsdWRlcyhlbnRyeS5rZXkpKSB7XG4gICAgICAgICAgICBpZiAoIXNlbGVjdGVkVGFic09wdGlvbnNbYCR7b3B0fWBdKSB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkVGFic09wdGlvbnNbYCR7b3B0fWBdID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNlbGVjdGVkVGFic09wdGlvbnNbYCR7b3B0fWBdLmhpc3RvZ3JhbSkge1xuICAgICAgICAgICAgICBzZWxlY3RlZFRhYnNPcHRpb25zW2Ake29wdH1gXS5oaXN0b2dyYW0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGVjdGVkVGFic09wdGlvbnNbYCR7b3B0fWBdLmhpc3RvZ3JhbS5wdXNoKHsga2V5OiBlbnRyeS5rZXksIGNvdW50OiBlbnRyeS5jb3VudCB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF1bnNlbGVjdGVkVGFic09wdGlvbnNbYCR7b3B0fWBdKSB7XG4gICAgICAgICAgICAgIHVuc2VsZWN0ZWRUYWJzT3B0aW9uc1tgJHtvcHR9YF0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgKGVudHJ5LmtleSkgIT09ICdzdHJpbmcnKSB7IC8vIGlmIGl0IGlzIGEgcmFuZ2UgZmlsdGVyLCBqdXN0IGNvcHkgYW5kIHJldHVyblxuICAgICAgICAgICAgICB1bnNlbGVjdGVkVGFic09wdGlvbnNbYCR7b3B0fWBdLmhpc3RvZ3JhbSA9IHByb2Nlc3NlZFRhYnNPcHRpb25zW2Ake29wdH1gXS5oaXN0b2dyYW07XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdW5zZWxlY3RlZFRhYnNPcHRpb25zW2Ake29wdH1gXS5oaXN0b2dyYW0pIHtcbiAgICAgICAgICAgICAgdW5zZWxlY3RlZFRhYnNPcHRpb25zW2Ake29wdH1gXS5oaXN0b2dyYW0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVuc2VsZWN0ZWRUYWJzT3B0aW9uc1tgJHtvcHR9YF0uaGlzdG9ncmFtLnB1c2goeyBrZXk6IGVudHJ5LmtleSwgY291bnQ6IGVudHJ5LmNvdW50IH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gRm9yIHNlYXJjaCBmaWx0ZXJzOiBJZiB0aGVyZSBhcmUgYW55IHNlYXJjaCBmaWx0ZXJzIHByZXNlbnQsIGluY2x1ZGVcbiAgICAgIC8vIHRoZSBzZWxlY3RlZCBvcHRpb25zIGluIHRoZSBgc2VsZWN0ZWRUYWJzT3B0aW9uc2AgYXJyYXkuXG4gICAgICAvLyAtLS0tLS1cbiAgICAgIGxldCBhbGxTZWFyY2hGaWVsZHMgPSBbXTtcbiAgICAgIHRoaXMucHJvcHMuZmlsdGVyQ29uZmlnLnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgIGFsbFNlYXJjaEZpZWxkcyA9IGFsbFNlYXJjaEZpZWxkcy5jb25jYXQodGFiLnNlYXJjaEZpZWxkcyk7XG4gICAgICB9KTtcbiAgICAgIGFsbFNlYXJjaEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICBpZiAoZmlsdGVyc1RvRGlzcGxheVtgJHtmaWVsZH1gXSkge1xuICAgICAgICAgIGNvbnN0IHsgc2VsZWN0ZWRWYWx1ZXMgfSA9IGZpbHRlcnNUb0Rpc3BsYXlbYCR7ZmllbGR9YF07XG4gICAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWVzKSB7XG4gICAgICAgICAgICBmaWx0ZXJzVG9EaXNwbGF5W2Ake2ZpZWxkfWBdLnNlbGVjdGVkVmFsdWVzLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXNlbGVjdGVkVGFic09wdGlvbnNbYCR7ZmllbGR9YF0pIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRhYnNPcHRpb25zW2Ake2ZpZWxkfWBdID0ge307XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKCFzZWxlY3RlZFRhYnNPcHRpb25zW2Ake2ZpZWxkfWBdLmhpc3RvZ3JhbSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkVGFic09wdGlvbnNbYCR7ZmllbGR9YF0uaGlzdG9ncmFtID0gW107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2VsZWN0ZWRUYWJzT3B0aW9uc1tgJHtmaWVsZH1gXS5oaXN0b2dyYW0ucHVzaCh7IGtleTogdmFsIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIC0tLS0tLS1cbiAgICAgIHByb2Nlc3NlZFRhYnNPcHRpb25zID0gbWVyZ2VUYWJPcHRpb25zKFxuICAgICAgICBzb3J0VGFic09wdGlvbnMoc2VsZWN0ZWRUYWJzT3B0aW9ucyksXG4gICAgICAgIHNvcnRUYWJzT3B0aW9ucyh1bnNlbGVjdGVkVGFic09wdGlvbnMpLFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvY2Vzc2VkVGFic09wdGlvbnMgPSBzb3J0VGFic09wdGlvbnMocHJvY2Vzc2VkVGFic09wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoIXByb2Nlc3NlZFRhYnNPcHRpb25zIHx8IE9iamVjdC5rZXlzKHByb2Nlc3NlZFRhYnNPcHRpb25zKS5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHsgZmllbGRNYXBwaW5nIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnByb3BzLmZpbHRlckNvbmZpZy50YWJzLm1hcCgoeyBmaWVsZHMsIHNlYXJjaEZpZWxkcywgYXNUZXh0QWdnRmllbGRzID0gW10gfSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGFnZ0ZpZWxkcyA9IF8udW5pb24oZmllbGRzLCBhc1RleHRBZ2dGaWVsZHMpO1xuICAgICAgY29uc3Qgc2VjdGlvbnMgPSBnZXRGaWx0ZXJTZWN0aW9ucyhcbiAgICAgICAgYWdnRmllbGRzLFxuICAgICAgICBzZWFyY2hGaWVsZHMsXG4gICAgICAgIGZpZWxkTWFwcGluZyxcbiAgICAgICAgcHJvY2Vzc2VkVGFic09wdGlvbnMsXG4gICAgICAgIHRoaXMuc3RhdGUuaW5pdGlhbEFnZ3NEYXRhLFxuICAgICAgICB0aGlzLnN0YXRlLmFkbWluQXBwbGllZFByZUZpbHRlcnMsXG4gICAgICAgIHRoaXMucHJvcHMuZ3VwcHlDb25maWcsXG4gICAgICAgIHRoaXMuYXJyYXlGaWVsZHMsXG4gICAgICAgIHRoaXMucHJvcHMuZmlsdGVyVmFsdWVzVG9IaWRlLFxuICAgICAgICB0aGlzLnByb3BzLmNzcmZUb2tlbixcbiAgICAgICk7XG4gICAgICBjb25zdCBmaWx0ZXJTdGF0dXMgPSB0aGlzLnN0YXRlLmZpbHRlclN0YXR1c0FycmF5XG4gICAgICAgID8gdGhpcy5zdGF0ZS5maWx0ZXJTdGF0dXNBcnJheVtpbmRleF0gOiBudWxsO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZpbHRlckxpc3RcbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIHNlY3Rpb25zPXtzZWN0aW9uc31cbiAgICAgICAgICBoaWRlRW1wdHlGaWx0ZXJTZWN0aW9uPXt0aGlzLnByb3BzLmhpZGVFbXB0eUZpbHRlclNlY3Rpb259XG4gICAgICAgICAgdGllckFjY2Vzc0xpbWl0PXt0aGlzLnByb3BzLnRpZXJBY2Nlc3NMaW1pdH1cbiAgICAgICAgICBsb2NrZWRUb29sdGlwTWVzc2FnZT17dGhpcy5wcm9wcy5sb2NrZWRUb29sdGlwTWVzc2FnZX1cbiAgICAgICAgICBkaXNhYmxlZFRvb2x0aXBNZXNzYWdlPXt0aGlzLnByb3BzLmRpc2FibGVkVG9vbHRpcE1lc3NhZ2V9XG4gICAgICAgICAgYXJyYXlGaWVsZHM9e3RoaXMuYXJyYXlGaWVsZHN9XG4gICAgICAgICAgZmlsdGVyU3RhdHVzRnJvbVBhcmVudD17ZmlsdGVyU3RhdHVzfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGFicztcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIGluaXRpYWwgYWdncmVnYXRpb24gZGF0YSwgZXNwZWNpYWxseSBmb3IgcmFuZ2Ugc2xpZGVyXG4gICAqIHNvIHRoYXQgd2Ugc3RpbGwgaGF2ZSBtaW4vbWF4IHZhbHVlcyBmb3IgcmFuZ2Ugc2xpZGVyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBhZ2dzRGF0YVxuICAgKi9cbiAgc2F2ZUluaXRpYWxBZ2dzRGF0YShhZ2dzRGF0YSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbml0aWFsQWdnc0RhdGE6IGFnZ3NEYXRhIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmhpZGRlbikgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgZmlsdGVyVGFicyA9IHRoaXMuZ2V0RmlsdGVyVGFicygpO1xuICAgIGlmICghZmlsdGVyVGFicyB8fCBmaWx0ZXJUYWJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8vIElmIHRoZXJlIGFyZSBhbnkgc2VhcmNoIGZpZWxkcywgaW5zZXJ0IHRoZW0gYXQgdGhlIHRvcCBvZiBlYWNoIHRhYidzIGZpZWxkcy5cbiAgICBjb25zdCBmaWx0ZXJDb25maWcgPSB7XG4gICAgICB0YWJzOiB0aGlzLmdldFRhYnNXaXRoU2VhcmNoRmllbGRzKCksXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPEZpbHRlckdyb3VwXG4gICAgICAgIHJlZj17dGhpcy5maWx0ZXJHcm91cFJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgdGFicz17ZmlsdGVyVGFic31cbiAgICAgICAgZmlsdGVyQ29uZmlnPXtmaWx0ZXJDb25maWd9XG4gICAgICAgIG9uRmlsdGVyQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoZSl9XG4gICAgICAgIGhpZGVaZXJvPXt0aGlzLnByb3BzLmhpZGVaZXJvfVxuICAgICAgICBmaWx0ZXJTdGF0dXNGcm9tUGFyZW50PXt0aGlzLnN0YXRlLmZpbHRlclN0YXR1c0FycmF5fVxuICAgICAgICBmaWx0ZXJSZXN1bHRzRnJvbVBhcmVudD17dGhpcy5zdGF0ZS5maWx0ZXJzQXBwbGllZH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5Db25uZWN0ZWRGaWx0ZXIucHJvcFR5cGVzID0ge1xuICBmaWx0ZXJDb25maWc6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgdGFiczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZmllbGRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICAgIGFzVGV4dEFnZ0ZpZWxkczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgICBzZWFyY2hGaWVsZHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICAgIH0pKSxcbiAgfSkuaXNSZXF1aXJlZCxcbiAgZXh0cmFBZ2dzRmllbGRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgZ3VwcHlDb25maWc6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSkuaXNSZXF1aXJlZCxcbiAgb25GaWx0ZXJDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblJlY2VpdmVOZXdBZ2dzRGF0YTogUHJvcFR5cGVzLmZ1bmMsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmllbGRNYXBwaW5nOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH0pKSxcbiAgdGllckFjY2Vzc0xpbWl0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBvblByb2Nlc3NGaWx0ZXJBZ2dzRGF0YTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVXBkYXRlQWNjZXNzTGV2ZWw6IFByb3BUeXBlcy5mdW5jLFxuICBhZG1pbkFwcGxpZWRQcmVGaWx0ZXJzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBsb2NrZWRUb29sdGlwTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGlzYWJsZWRUb29sdGlwTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWNjZXNzaWJsZUZpZWxkQ2hlY2tMaXN0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgaGlkZVplcm86IFByb3BUeXBlcy5ib29sLFxuICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICB1c2VyRmlsdGVyRnJvbVVSTDogUHJvcFR5cGVzLm9iamVjdCxcbiAgaGlkZUVtcHR5RmlsdGVyU2VjdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIGZpbHRlclZhbHVlc1RvSGlkZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIGNzcmZUb2tlbjogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkNvbm5lY3RlZEZpbHRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGV4dHJhQWdnc0ZpZWxkczogW10sXG4gIG9uRmlsdGVyQ2hhbmdlOiAoKSA9PiB7fSxcbiAgb25SZWNlaXZlTmV3QWdnc0RhdGE6ICgpID0+IHt9LFxuICBjbGFzc05hbWU6ICcnLFxuICBmaWVsZE1hcHBpbmc6IFtdLFxuICB0aWVyQWNjZXNzTGltaXQ6IHVuZGVmaW5lZCxcbiAgb25Qcm9jZXNzRmlsdGVyQWdnc0RhdGE6IChkYXRhKSA9PiAoZGF0YSksXG4gIG9uVXBkYXRlQWNjZXNzTGV2ZWw6ICgpID0+IHt9LFxuICBhZG1pbkFwcGxpZWRQcmVGaWx0ZXJzOiB7fSxcbiAgbG9ja2VkVG9vbHRpcE1lc3NhZ2U6ICcnLFxuICBkaXNhYmxlZFRvb2x0aXBNZXNzYWdlOiAnJyxcbiAgYWNjZXNzaWJsZUZpZWxkQ2hlY2tMaXN0OiB1bmRlZmluZWQsXG4gIGhpZGVaZXJvOiBmYWxzZSxcbiAgaGlkZGVuOiBmYWxzZSxcbiAgdXNlckZpbHRlckZyb21VUkw6IHt9LFxuICBoaWRlRW1wdHlGaWx0ZXJTZWN0aW9uOiBmYWxzZSxcbiAgZmlsdGVyVmFsdWVzVG9IaWRlOiBbXSxcbiAgY3NyZlRva2VuOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RlZEZpbHRlcjtcbiJdLCJtYXBwaW5ncyI6IjtBQUNBLElBQUFBLE9BQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLE1BQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFFLFVBQUEsR0FBQUgsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFHLFlBQUEsR0FBQUosc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFJLFdBQUEsR0FBQUwsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFLLE1BQUEsR0FBQUwsT0FBQTs7OztBQUlBLElBQUFNLE1BQUEsR0FBQU4sT0FBQTtBQUNBLElBQUFPLFFBQUEsR0FBQVAsT0FBQTs7Ozs7QUFLQSxJQUFBUSxRQUFBLEdBQUFSLE9BQUEscUJBTTBCLFNBQUFELHVCQUFBVSxDQUFBLFVBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsZ0JBQUFBLENBQUEsYUFBQUUsbUJBQUFDLENBQUEsVUFBQUMsa0JBQUEsQ0FBQUQsQ0FBQSxLQUFBRSxnQkFBQSxDQUFBRixDQUFBLEtBQUFHLDJCQUFBLENBQUFILENBQUEsS0FBQUksa0JBQUEsYUFBQUEsbUJBQUEsYUFBQUMsU0FBQSxtSkFBQUYsNEJBQUFILENBQUEsRUFBQU0s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