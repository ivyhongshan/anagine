"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.queryGuppyForRawDataAndTotalCounts = exports.getGQLFilter = exports.getAllFieldsFromGuppy = exports.getAllFieldsFromFilterConfigs = exports.getAccessibleResources = exports.downloadDataFromGuppy = exports.askGuppyForTotalCounts = exports.askGuppyForSubAggregationData = exports.askGuppyForRawData = exports.askGuppyForAggregationData = exports.askGuppyAboutArrayTypes = void 0;var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));
var _conversion = require("./conversion");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _regeneratorRuntime() {"use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime = function _regeneratorRuntime() {return e;};var t,e = {},r = Object.prototype,n = r.hasOwnProperty,o = Object.defineProperty || function (t, e, r) {t[e] = r.value;},i = "function" == typeof Symbol ? Symbol : {},a = i.iterator || "@@iterator",c = i.asyncIterator || "@@asyncIterator",u = i.toStringTag || "@@toStringTag";function define(t, e, r) {return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e];}try {define({}, "");} catch (t) {define = function define(t, e, r) {return t[e] = r;};}function wrap(t, e, r, n) {var i = e && e.prototype instanceof Generator ? e : Generator,a = Object.create(i.prototype),c = new Context(n || []);return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;}function tryCatch(t, e, r) {try {return { type: "normal", arg: t.call(e, r) };} catch (t) {return { type: "throw", arg: t };}}e.wrap = wrap;var h = "suspendedStart",l = "suspendedYield",f = "executing",s = "completed",y = {};function Generator() {}function GeneratorFunction() {}function GeneratorFunctionPrototype() {}var p = {};define(p, a, function () {return this;});var d = Object.getPrototypeOf,v = d && d(d(values([])));v && v !== r && n.call(v, a) && (p = v);var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);function defineIteratorMethods(t) {["next", "throw", "return"].forEach(function (e) {define(t, e, function (t) {return this._invoke(e, t);});});}function AsyncIterator(t, e) {function invoke(r, o, i, a) {var c = tryCatch(t[r], t, o);if ("throw" !== c.type) {var u = c.arg,h = u.value;return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {invoke("next", t, i, a);}, function (t) {invoke("throw", t, i, a);}) : e.resolve(h).then(function (t) {u.value = t, i(u);}, function (t) {return invoke("throw", t, i, a);});}a(c.arg);}var r;o(this, "_invoke", { value: function value(t, n) {function callInvokeWithMethodAndArg() {return new e(function (e, r) {invoke(t, n, e, r);});}return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();} });}function makeInvokeMethod(e, r, n) {var o = h;return function (i, a) {if (o === f) throw Error("Generator is already running");if (o === s) {if ("throw" === i) throw a;return { value: t, done: !0 };}for (n.method = i, n.arg = a;;) {var c = n.delegate;if (c) {var u = maybeInvokeDelegate(c, n);if (u) {if (u === y) continue;return u;}}if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {if (o === h) throw o = s, n.arg;n.dispatchException(n.arg);} else "return" === n.method && n.abrupt("return", n.arg);o = f;var p = tryCatch(e, r, n);if ("normal" === p.type) {if (o = n.done ? s : l, p.arg === y) continue;return { value: p.arg, done: n.done };}"throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);}};}function maybeInvokeDelegate(e, r) {var n = r.method,o = e.iterator[n];if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;var i = tryCatch(o, e.iterator, r.arg);if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;var a = i.arg;return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);}function pushTryEntry(t) {var e = { tryLoc: t[0] };1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);}function resetTryEntry(t) {var e = t.completion || {};e.type = "normal", delete e.arg, t.completion = e;}function Context(t) {this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0);}function values(e) {if (e || "" === e) {var r = e[a];if (r) return r.call(e);if ("function" == typeof e.next) return e;if (!isNaN(e.length)) {var o = -1,i = function next() {for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;return next.value = t, next.done = !0, next;};return i.next = i;}}throw new TypeError(_typeof(e) + " is not iterable");}return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {var e = "function" == typeof t && t.constructor;return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));}, e.mark = function (t) {return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;}, e.awrap = function (t) {return { __await: t };}, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {return this;}), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {void 0 === i && (i = Promise);var a = new AsyncIterator(wrap(t, r, n, o), i);return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {return t.done ? t.value : a.next();});}, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {return this;}), define(g, "toString", function () {return "[object Generator]";}), e.keys = function (t) {var e = Object(t),r = [];for (var n in e) r.push(n);return r.reverse(), function next() {for (; r.length;) {var t = r.pop();if (t in e) return next.value = t, next.done = !1, next;}return next.done = !0, next;};}, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) {if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);}, stop: function stop() {this.done = !0;var t = this.tryEntries[0].completion;if ("throw" === t.type) throw t.arg;return this.rval;}, dispatchException: function dispatchException(e) {if (this.done) throw e;var r = this;function handle(n, o) {return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;}for (var o = this.tryEntries.length - 1; o >= 0; --o) {var i = this.tryEntries[o],a = i.completion;if ("root" === i.tryLoc) return handle("end");if (i.tryLoc <= this.prev) {var c = n.call(i, "catchLoc"),u = n.call(i, "finallyLoc");if (c && u) {if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);if (this.prev < i.finallyLoc) return handle(i.finallyLoc);} else if (c) {if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);} else {if (!u) throw Error("try statement without catch or finally");if (this.prev < i.finallyLoc) return handle(i.finallyLoc);}}}}, abrupt: function abrupt(t, e) {for (var r = this.tryEntries.length - 1; r >= 0; --r) {var o = this.tryEntries[r];if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {var i = o;break;}}i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);var a = i ? i.completion : {};return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);}, complete: function complete(t, e) {if ("throw" === t.type) throw t.arg;return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;}, finish: function finish(t) {for (var e = this.tryEntries.length - 1; e >= 0; --e) {var r = this.tryEntries[e];if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;}}, "catch": function _catch(t) {for (var e = this.tryEntries.length - 1; e >= 0; --e) {var r = this.tryEntries[e];if (r.tryLoc === t) {var n = r.completion;if ("throw" === n.type) {var o = n.arg;resetTryEntry(r);}return o;}}throw Error("illegal catch attempt");}, delegateYield: function delegateYield(e, r, n) {return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y;} }, e;}function asyncGeneratorStep(n, t, e, r, o, a, c) {try {var i = n[a](c),u = i.value;} catch (n) {return void e(n);}i.done ? t(u) : Promise.resolve(u).then(r, o);}function _asyncToGenerator(n) {return function () {var t = this,e = arguments;return new Promise(function (r, o) {var a = n.apply(t, e);function _next(n) {asyncGeneratorStep(a, r, o, _next, _throw, "next", n);}function _throw(n) {asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);}_next(void 0);});};}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}

var graphqlEndpoint = '/graphql';
var downloadEndpoint = '/download';
var statusEndpoint = '/_status';
var headers = {
  'Content-Type': 'application/json'
};

var _histogramQueryStrForEachField = function histogramQueryStrForEachField(field) {var isAsTextAgg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var splittedFieldArray = field.split('.');
  var splittedField = splittedFieldArray.shift();
  if (splittedFieldArray.length === 0) {
    return "\n    ".concat(
      splittedField, " {\n      ").concat(
      isAsTextAgg ? 'asTextHistogram' : 'histogram', " {\n        key\n        count\n      }\n    }");




  }
  return "\n  ".concat(
    splittedField, " {\n    ").concat(
    _histogramQueryStrForEachField(splittedFieldArray.join('.')), "\n  }");

};

var queryGuppyForAggs = function queryGuppyForAggs(path, type, regularAggFields, asTextAggFields, gqlFilter, acc) {var csrfToken = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';
  var accessibility = acc;
  if (accessibility !== 'all' && accessibility !== 'accessible' && accessibility !== 'unaccessible') {
    accessibility = 'all';
  }

  var queryBody = {};
  if (gqlFilter) {
    var queryWithFilter = "query ($filter: JSON) {\n      _aggregation {\n        ".concat(

      type, " (filter: $filter, filterSelf: false, accessibility: ").concat(accessibility, ") {\n          ").concat(
      regularAggFields.map(function (field) {return _histogramQueryStrForEachField(field, false);}), "\n          ").concat(
      asTextAggFields.map(function (field) {return _histogramQueryStrForEachField(field, true);}), "\n        }\n      }\n    }");



    queryBody.variables = { filter: gqlFilter };
    queryBody.query = queryWithFilter;
  } else {
    queryBody.query = "query {\n      _aggregation {\n        ".concat(

      type, " (accessibility: ").concat(accessibility, ") {\n          ").concat(
      regularAggFields.map(function (field) {return _histogramQueryStrForEachField(field, false);}), "\n          ").concat(
      asTextAggFields.map(function (field) {return _histogramQueryStrForEachField(field, true);}), "\n        }\n      }\n    }");



  }

  return (0, _isomorphicFetch["default"])("".concat(path).concat(graphqlEndpoint), {
    method: 'POST',
    headers: csrfToken ? _objectSpread(_objectSpread({}, headers), {}, { 'x-csrf-token': csrfToken }) : headers,
    body: JSON.stringify(queryBody)
  }).then(function (response) {return response.json();});
};

var queryGuppyForStatus = function queryGuppyForStatus(path) {return (0, _isomorphicFetch["default"])("".concat(path).concat(statusEndpoint), {
    method: 'GET',
    headers: headers
  }).then(function (response) {return response.json();});};

var nestedHistogramQueryStrForEachField = function nestedHistogramQueryStrForEachField(mainField, numericAggAsText) {return "\n  ".concat(
    mainField, " {\n    ").concat(
    numericAggAsText ? 'asTextHistogram' : 'histogram', " {\n      key\n      count\n      missingFields {\n        field\n        count\n      }\n      termsFields {\n        field\n        count\n        terms {\n          key\n          count\n        }\n      }\n    }\n  }");};

















var queryGuppyForSubAgg = function queryGuppyForSubAgg(
path,
type,
mainField,
termsFields,
missingFields,
gqlFilter,
acc)


{var numericAggAsText = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;var csrfToken = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : '';
  var accessibility = acc;
  if (accessibility !== 'all' && accessibility !== 'accessible' && accessibility !== 'unaccessible') {
    accessibility = 'all';
  }

  var nestedAggFields = {};
  if (termsFields) {
    nestedAggFields.termsFields = termsFields;
  }
  if (missingFields) {
    nestedAggFields.missingFields = missingFields;
  }

  var query = "query ($nestedAggFields: JSON) {\n    _aggregation {\n      ".concat(

    type, " (nestedAggFields: $nestedAggFields, accessibility: ").concat(accessibility, ") {\n        ").concat(
    nestedHistogramQueryStrForEachField(mainField, numericAggAsText), "\n      }\n    }\n  }");



  var queryBody = { query: query };
  queryBody.variables = { nestedAggFields: nestedAggFields };
  if (gqlFilter) {
    var queryWithFilter = "query ($filter: JSON, $nestedAggFields: JSON) {\n      _aggregation {\n        ".concat(

      type, " (filter: $filter, filterSelf: false, nestedAggFields: $nestedAggFields, accessibility: ").concat(accessibility, ") {\n          ").concat(
      nestedHistogramQueryStrForEachField(mainField, numericAggAsText), "\n        }\n      }\n    }");



    queryBody.variables = { filter: gqlFilter, nestedAggFields: nestedAggFields };
    queryBody.query = queryWithFilter;
  }
  return (0, _isomorphicFetch["default"])("".concat(path).concat(graphqlEndpoint), {
    method: 'POST',
    headers: csrfToken ? _objectSpread(_objectSpread({}, headers), {}, { 'x-csrf-token': csrfToken }) : headers,
    body: JSON.stringify(queryBody)
  }).then(function (response) {return response.json();})["catch"](
    function (err) {
      throw new Error("Error during queryGuppyForSubAgg ".concat(err));
    });
};

var _rawDataQueryStrForEachField = function rawDataQueryStrForEachField(field) {
  var splittedFieldArray = field.split('.');
  var splittedField = splittedFieldArray.shift();
  if (splittedFieldArray.length === 0) {
    return "\n    ".concat(
      splittedField, "\n    ");

  }
  return "\n  ".concat(
    splittedField, " {\n    ").concat(
    _rawDataQueryStrForEachField(splittedFieldArray.join('.')), "\n  }");

};

var queryGuppyForRawDataAndTotalCounts = exports.queryGuppyForRawDataAndTotalCounts = function queryGuppyForRawDataAndTotalCounts(
path,
type,
fields,
gqlFilter,
sort,
format)




{var offset = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;var size = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 20;var accessibility = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 'all';var csrfToken = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : '';
  var queryLine = 'query {';
  if (gqlFilter || sort || format) {
    queryLine = "query (".concat(sort ? '$sort: JSON,' : '').concat(gqlFilter ? '$filter: JSON,' : '').concat(format ? '$format: Format' : '', ") {");
  }
  var dataTypeLine = "".concat(type, " (accessibility: ").concat(accessibility, ", offset: ").concat(offset, ", first: ").concat(size, ", format: $format) {");
  if (gqlFilter || sort || format) {
    dataTypeLine = "".concat(type, " (accessibility: ").concat(accessibility, ", offset: ").concat(offset, ", first: ").concat(size, ", ").concat(format ? 'format: $format, ' : '', ", ").concat(sort ? 'sort: $sort, ' : '').concat(gqlFilter ? 'filter: $filter,' : '', ") {");
  }
  var typeAggsLine = "".concat(type, " accessibility: ").concat(accessibility, " {");
  if (gqlFilter) {
    typeAggsLine = "".concat(type, " (filter: $filter, accessibility: ").concat(accessibility, ") {");
  }
  var processedFields = fields.map(function (field) {return _rawDataQueryStrForEachField(field);});
  var query = "".concat(queryLine, "\n    ").concat(
    dataTypeLine, "\n      ").concat(
    processedFields.join('\n'), "\n    }\n    _aggregation {\n      ").concat(


    typeAggsLine, "\n        _totalCount\n      }\n    }\n  }");




  var queryBody = { query: query };
  queryBody.variables = {};
  if (format) queryBody.variables.format = format;
  if (gqlFilter) queryBody.variables.filter = gqlFilter;
  if (sort) queryBody.variables.sort = sort;
  return (0, _isomorphicFetch["default"])("".concat(path).concat(graphqlEndpoint), {
    method: 'POST',
    headers: csrfToken ? _objectSpread(_objectSpread({}, headers), {}, { 'x-csrf-token': csrfToken }) : headers,
    body: JSON.stringify(queryBody)
  }).then(function (response) {return response.json();})["catch"](
    function (err) {
      throw new Error("Error during queryGuppyForRawDataAndTotalCounts ".concat(err));
    });
};

var getGQLFilter = exports.getGQLFilter = function getGQLFilter(filterObj) {
  var facetsList = [];
  Object.keys(filterObj).forEach(function (field) {
    var filterValues = filterObj[field];
    var fieldSplitted = field.split('.');
    var fieldName = fieldSplitted[fieldSplitted.length - 1];
    // The combine mode defaults to OR when not set.
    var combineMode = filterValues.__combineMode ? filterValues.__combineMode : 'OR';

    var hasSelectedValues = filterValues.selectedValues && filterValues.selectedValues.length > 0;
    var hasRangeFilter = typeof filterValues.lowerBound !== 'undefined' && typeof filterValues.upperBound !== 'undefined';

    var facetsPiece = {};
    if (hasSelectedValues && combineMode === 'OR') {
      facetsPiece = {
        IN: _defineProperty({},
        fieldName, filterValues.selectedValues)

      };
    } else if (hasSelectedValues && combineMode === 'AND') {
      facetsPiece = { AND: [] };
      for (var i = 0; i < filterValues.selectedValues.length; i += 1) {
        facetsPiece.AND.push({
          IN: _defineProperty({},
          fieldName, [filterValues.selectedValues[i]])

        });
      }
    } else if (hasRangeFilter) {
      facetsPiece = {
        AND: [
        { '>=': _defineProperty({}, fieldName, filterValues.lowerBound) },
        { '<=': _defineProperty({}, fieldName, filterValues.upperBound) }]

      };
    } else if (filterValues.__combineMode && !hasSelectedValues && !hasRangeFilter) {
      // This filter only has a combine setting so far. We can ignore it.
      return;
    } else if (hasSelectedValues) {
      // filter has selected values but we don't know how to process it
      // eslint-disable-next-line no-console
      console.error(filterValues);
      throw new Error('Invalid filter object');
    }
    if (fieldSplitted.length > 1) {// nested field
      fieldSplitted.pop();
      facetsPiece = {
        nested: _objectSpread({
          path: fieldSplitted.join('.') },
        facetsPiece)

      };
    }
    facetsList.push(facetsPiece);
  });
  var gqlFilter = {
    AND: facetsList
  };
  return gqlFilter;
};

// eslint-disable-next-line max-len
var askGuppyAboutArrayTypes = exports.askGuppyAboutArrayTypes = function askGuppyAboutArrayTypes(path) {return queryGuppyForStatus(path).then(function (res) {return res.indices;});};

var askGuppyForAggregationData = exports.askGuppyForAggregationData = function askGuppyForAggregationData(
path,
type,
regularAggFields,
asTextAggFields,
filter,
accessibility)

{var csrfToken = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';
  var gqlFilter = getGQLFilter(filter);
  return queryGuppyForAggs(path, type, regularAggFields, asTextAggFields, gqlFilter, accessibility, csrfToken);
};

var askGuppyForSubAggregationData = exports.askGuppyForSubAggregationData = function askGuppyForSubAggregationData(
path,
type,
mainField,
numericAggAsText,
termsNestedFields,
missedNestedFields,
filter,
accessibility,
csrfToken)
{
  var gqlFilter = getGQLFilter(filter);
  return queryGuppyForSubAgg(
    path,
    type,
    mainField,
    termsNestedFields,
    missedNestedFields,
    gqlFilter,
    accessibility,
    numericAggAsText,
    csrfToken
  );
};

var askGuppyForRawData = exports.askGuppyForRawData = function askGuppyForRawData(
path,
type,
fields,
filter,
sort,
format)




{var offset = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;var size = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 20;var accessibility = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 'all';var csrfToken = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : '';
  var gqlFilter = getGQLFilter(filter);
  return queryGuppyForRawDataAndTotalCounts(
    path,
    type,
    fields,
    gqlFilter,
    sort,
    format,
    offset,
    size,
    accessibility,
    csrfToken
  );
};

var getAllFieldsFromFilterConfigs = exports.getAllFieldsFromFilterConfigs = function getAllFieldsFromFilterConfigs(filterTabConfigs) {return filterTabConfigs.reduce(function (acc, cur) {
    Object.keys(cur).
    filter(function (key) {return key === 'fields' || key === 'asTextAggFields';}).
    forEach(function (key) {acc[key] = acc[key].concat(cur[key], []);});
    return acc;
  }, { fields: [], asTextAggFields: [] });};

/**
 * Download all data from guppy using fields, filter, and sort args.
 * If total count is less than 10000 this will use normal graphql endpoint
 * If greater than 10000, use /download endpoint
 */
var downloadDataFromGuppy = exports.downloadDataFromGuppy = function downloadDataFromGuppy(
path,
type,
totalCount, _ref)








{var fields = _ref.fields,filter = _ref.filter,sort = _ref.sort,accessibility = _ref.accessibility,format = _ref.format;var csrfToken = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  var SCROLL_SIZE = 10000;
  var JSON_FORMAT = format === 'json' || format === undefined;
  if (totalCount > SCROLL_SIZE) {
    var queryBody = { type: type };
    if (fields) queryBody.fields = fields;
    if (filter) queryBody.filter = getGQLFilter(filter);
    if (sort) queryBody.sort = sort;
    if (typeof accessibility !== 'undefined') queryBody.accessibility = accessibility;
    return (0, _isomorphicFetch["default"])("".concat(path).concat(downloadEndpoint), {
      method: 'POST',
      headers: csrfToken ? _objectSpread(_objectSpread({}, headers), {}, { 'x-csrf-token': csrfToken }) : headers,
      body: JSON.stringify(queryBody)
    }).
    then(function (r) {return r.json();}).
    then(function (res) {return JSON_FORMAT ? res : (0, _conversion.jsonToFormat)(res, format);});
  }
  return askGuppyForRawData(path, type, fields, filter, sort, format, 0, totalCount, accessibility, csrfToken).
  then(function (res) {
    if (res && res.data && res.data[type]) {
      return JSON_FORMAT ? res.data[type] : (0, _conversion.jsonToFormat)(res.data[type], format);
    }
    throw Error('Error downloading data from Guppy');
  });
};

var askGuppyForTotalCounts = exports.askGuppyForTotalCounts = function askGuppyForTotalCounts(
path,
type,
filter)


{var accessibility = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'all';var csrfToken = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  var gqlFilter = getGQLFilter(filter);
  var queryLine = "query ".concat(gqlFilter ? '($filter: JSON)' : '', "{");
  var typeAggsLine = "".concat(type, " ").concat(gqlFilter ? '(filter: $filter, ' : '(', " accessibility: ").concat(accessibility, ") {");
  var query = "".concat(queryLine, "\n    _aggregation {\n      ").concat(

    typeAggsLine, "\n        _totalCount\n      }\n    }\n  }");




  var queryBody = { query: query };
  queryBody.variables = {};
  if (gqlFilter) queryBody.variables.filter = gqlFilter;

  return (0, _isomorphicFetch["default"])("".concat(path).concat(graphqlEndpoint), {
    method: 'POST',
    headers: csrfToken ? _objectSpread(_objectSpread({}, headers), {}, { 'x-csrf-token': csrfToken }) : headers,
    body: JSON.stringify(queryBody)
  }).then(function (response) {return response.json();}).
  then(function (response) {
    if (response.errors) {
      throw new Error("Error during download ".concat(response.errors));
    }
    return response.data._aggregation[type]._totalCount;
  })["catch"](
    function (err) {
      throw new Error("Error during download ".concat(err));
    });
};

var getAllFieldsFromGuppy = exports.getAllFieldsFromGuppy = function getAllFieldsFromGuppy(
path,
type)

{var csrfToken = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var query = "{\n    _mapping {\n      ".concat(

    type, "\n    }\n  }");


  var queryBody = { query: query };
  return (0, _isomorphicFetch["default"])("".concat(path).concat(graphqlEndpoint), {
    method: 'POST',
    headers: csrfToken ? _objectSpread(_objectSpread({}, headers), {}, { 'x-csrf-token': csrfToken }) : headers,
    body: JSON.stringify(queryBody)
  }).then(function (response) {return response.json();}).
  then(function (response) {return response.data._mapping[type];})["catch"](
    function (err) {
      console.log(err);
      throw new Error("Error when getting fields from guppy: ".concat(err));
    });
};

var getAccessibleResources = exports.getAccessibleResources = /*#__PURE__*/function () {var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(
  path,
  type,
  accessibleFieldCheckList) {var csrfToken,accessiblePromiseList,unaccessiblePromiseList,accessibleFieldObject,accessibleFieldResult,unaccessibleFieldObject,unaccessibleFieldResult,_args = arguments;return _regeneratorRuntime().wrap(function _callee$(_context) {while (1) switch (_context.prev = _context.next) {case 0:
          csrfToken = _args.length > 3 && _args[3] !== undefined ? _args[3] : '';

          accessiblePromiseList = [];
          unaccessiblePromiseList = [];
          accessibleFieldCheckList.forEach(function (accessibleField) {
            var fetchRequestPromise = function fetchRequestPromise(accessible) {
              var query = "query {\n        _aggregation {\n          ".concat(

                type, " (accessibility: ").concat(accessible ? 'accessible' : 'unaccessible', ") {\n            ").concat(
                accessibleField, " {\n              histogram {\n                key\n                count\n              }\n            }\n          }\n        }\n      }");








              var queryBody = { query: query };

              return (0, _isomorphicFetch["default"])("".concat(path).concat(graphqlEndpoint), {
                method: 'POST',
                headers: csrfToken ? _objectSpread(_objectSpread({}, headers), {}, { 'x-csrf-token': csrfToken }) : headers,
                body: JSON.stringify(queryBody)
              }).
              then(function (response) {return response.json();}).
              then(
                function (response) {return {
                    field: accessibleField,
                    list: response.data._aggregation[type][accessibleField].
                    histogram.map(function (item) {return item.key;})
                  };}
              )["catch"](
                function (err) {
                  throw new Error("Error when getting fields from guppy: ".concat(err));
                });
            };
            accessiblePromiseList.push(fetchRequestPromise(true));
            unaccessiblePromiseList.push(fetchRequestPromise(false));
          });

          accessibleFieldObject = {};_context.next = 7;return (
            Promise.all(accessiblePromiseList));case 7:accessibleFieldResult = _context.sent;
          accessibleFieldResult.forEach(function (res) {
            accessibleFieldObject[res.field] = res.list;
          });
          unaccessibleFieldObject = {};_context.next = 12;return (
            Promise.all(unaccessiblePromiseList));case 12:unaccessibleFieldResult = _context.sent;
          unaccessibleFieldResult.forEach(function (res) {
            unaccessibleFieldObject[res.field] = res.list;
          });return _context.abrupt("return",
          { accessibleFieldObject: accessibleFieldObject, unaccessibleFieldObject: unaccessibleFieldObject });case 15:case "end":return _context.stop();}}, _callee);}));return function getAccessibleResources(_x, _x2, _x3) {return _ref2.apply(this, arguments);};}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaXNvbW9ycGhpY0ZldGNoIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfY29udmVyc2lvbiIsImUiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsIm8iLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsInQiLCJyIiwiT2JqZWN0IiwibiIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJhIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93Iiwib3duS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJncmFwaHFsRW5kcG9pbnQiLCJkb3dubG9hZEVuZHBvaW50Iiwic3RhdHVzRW5kcG9pbnQiLCJoZWFkZXJzIiwiaGlzdG9ncmFtUXVlcnlTdHJGb3JFYWNoRmllbGQiLCJmaWVsZCIsImlzQXNUZXh0QWdnIiwidW5kZWZpbmVkIiwic3BsaXR0ZWRGaWVsZEFycmF5Iiwic3BsaXQiLCJzcGxpdHRlZEZpZWxkIiwic2hpZnQiLCJjb25jYXQiLCJqb2luIiwicXVlcnlHdXBweUZvckFnZ3MiLCJwYXRoIiwicmVndWxhckFnZ0ZpZWxkcyIsImFzVGV4dEFnZ0ZpZWxkcyIsImdxbEZpbHRlciIsImFjYyIsImNzcmZUb2tlbiIsImFjY2Vzc2liaWxpdHkiLCJxdWVyeUJvZHkiLCJxdWVyeVdpdGhGaWx0ZXIiLCJtYXAiLCJ2YXJpYWJsZXMiLCJxdWVyeSIsImZldGNoIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJxdWVyeUd1cHB5Rm9yU3RhdHVzIiwibmVzdGVkSGlzdG9ncmFtUXVlcnlTdHJGb3JFYWNoRmllbGQiLCJtYWluRmllbGQiLCJudW1lcmljQWdnQXNUZXh0IiwicXVlcnlHdXBweUZvclN1YkFnZyIsInRlcm1zRmllbGRzIiwibWlzc2luZ0ZpZWxkcyIsIm5lc3RlZEFnZ0ZpZWxkcyIsImVyciIsInJhd0RhdGFRdWVyeVN0ckZvckVhY2hGaWVsZCIsInF1ZXJ5R3VwcHlGb3JSYXdEYXRhQW5kVG90YWxDb3VudHMiLCJleHBvcnRzIiwiZmllbGRzIiwic29ydCIsImZvcm1hdCIsIm9mZnNldCIsInNpemUiLCJxdWVyeUxpbmUiLCJkYXRhVHlwZUxpbmUiLCJ0eXBlQWdnc0xpbmUiLCJwcm9jZXNzZWRGaWVsZHMiLCJnZXRHUUxGaWx0ZXIiLCJmaWx0ZXJPYmoiLCJmYWNldHNMaXN0IiwiZmlsdGVyVmFsdWVzIiwiZmllbGRTcGxpdHRlZCIsImZpZWxkTmFtZSIsImNvbWJpbmVNb2RlIiwiX19jb21iaW5lTW9kZSIsImhhc1NlbGVjdGVkVmFsdWVzIiwic2VsZWN0ZWRWYWx1ZXMiLCJoYXNSYW5nZUZpbHRlciIsImxvd2VyQm91bmQiLCJ1cHBlckJvdW5kIiwiZmFjZXRzUGllY2UiLCJJTiIsIkFORCIsImNvbnNvbGUiLCJlcnJvciIsIm5lc3RlZCIsImFza0d1cHB5QWJvdXRBcnJheVR5cGVzIiwicmVzIiwiaW5kaWNlcyIsImFza0d1cHB5Rm9yQWdncmVnYXRpb25EYXRhIiwiYXNrR3VwcHlGb3JTdWJBZ2dyZWdhdGlvbkRhdGEiLCJ0ZXJtc05lc3RlZEZpZWxkcyIsIm1pc3NlZE5lc3RlZEZpZWxkcyIsImFza0d1cHB5Rm9yUmF3RGF0YSIsImdldEFsbEZpZWxkc0Zyb21GaWx0ZXJDb25maWdzIiwiZmlsdGVyVGFiQ29uZmlncyIsInJlZHVjZSIsImN1ciIsImtleSIsImRvd25sb2FkRGF0YUZyb21HdXBweSIsInRvdGFsQ291bnQiLCJfcmVmIiwiU0NST0xMX1NJWkUiLCJKU09OX0ZPUk1BVCIsImpzb25Ub0Zvcm1hdCIsImRhdGEiLCJhc2tHdXBweUZvclRvdGFsQ291bnRzIiwiZXJyb3JzIiwiX2FnZ3JlZ2F0aW9uIiwiX3RvdGFsQ291bnQiLCJnZXRBbGxGaWVsZHNGcm9tR3VwcHkiLCJfbWFwcGluZyIsImxvZyIsImdldEFjY2Vzc2libGVSZXNvdXJjZXMiLCJfcmVmMiIsIl9jYWxsZWUiLCJhY2Nlc3NpYmxlRmllbGRDaGVja0xpc3QiLCJhY2Nlc3NpYmxlUHJvbWlzZUxpc3QiLCJ1bmFjY2Vzc2libGVQcm9taXNlTGlzdCIsImFjY2Vzc2libGVGaWVsZE9iamVjdCIsImFjY2Vzc2libGVGaWVsZFJlc3VsdCIsInVuYWNjZXNzaWJsZUZpZWxkT2JqZWN0IiwidW5hY2Nlc3NpYmxlRmllbGRSZXN1bHQiLCJfYXJncyIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJhY2Nlc3NpYmxlRmllbGQiLCJmZXRjaFJlcXVlc3RQcm9taXNlIiwiYWNjZXNzaWJsZSIsImxpc3QiLCJoaXN0b2dyYW0iLCJpdGVtIiwiYWxsIiwiX3giLCJfeDIiLCJfeDMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9VdGlscy9xdWVyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCB7IGpzb25Ub0Zvcm1hdCB9IGZyb20gJy4vY29udmVyc2lvbic7XG5cbmNvbnN0IGdyYXBocWxFbmRwb2ludCA9ICcvZ3JhcGhxbCc7XG5jb25zdCBkb3dubG9hZEVuZHBvaW50ID0gJy9kb3dubG9hZCc7XG5jb25zdCBzdGF0dXNFbmRwb2ludCA9ICcvX3N0YXR1cyc7XG5jb25zdCBoZWFkZXJzID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxufTtcblxuY29uc3QgaGlzdG9ncmFtUXVlcnlTdHJGb3JFYWNoRmllbGQgPSAoZmllbGQsIGlzQXNUZXh0QWdnID0gZmFsc2UpID0+IHtcbiAgY29uc3Qgc3BsaXR0ZWRGaWVsZEFycmF5ID0gZmllbGQuc3BsaXQoJy4nKTtcbiAgY29uc3Qgc3BsaXR0ZWRGaWVsZCA9IHNwbGl0dGVkRmllbGRBcnJheS5zaGlmdCgpO1xuICBpZiAoc3BsaXR0ZWRGaWVsZEFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoYFxuICAgICR7c3BsaXR0ZWRGaWVsZH0ge1xuICAgICAgJHsoaXNBc1RleHRBZ2cpID8gJ2FzVGV4dEhpc3RvZ3JhbScgOiAnaGlzdG9ncmFtJ30ge1xuICAgICAgICBrZXlcbiAgICAgICAgY291bnRcbiAgICAgIH1cbiAgICB9YCk7XG4gIH1cbiAgcmV0dXJuIChgXG4gICR7c3BsaXR0ZWRGaWVsZH0ge1xuICAgICR7aGlzdG9ncmFtUXVlcnlTdHJGb3JFYWNoRmllbGQoc3BsaXR0ZWRGaWVsZEFycmF5LmpvaW4oJy4nKSl9XG4gIH1gKTtcbn07XG5cbmNvbnN0IHF1ZXJ5R3VwcHlGb3JBZ2dzID0gKHBhdGgsIHR5cGUsIHJlZ3VsYXJBZ2dGaWVsZHMsIGFzVGV4dEFnZ0ZpZWxkcywgZ3FsRmlsdGVyLCBhY2MsIGNzcmZUb2tlbiA9ICcnKSA9PiB7XG4gIGxldCBhY2Nlc3NpYmlsaXR5ID0gYWNjO1xuICBpZiAoYWNjZXNzaWJpbGl0eSAhPT0gJ2FsbCcgJiYgYWNjZXNzaWJpbGl0eSAhPT0gJ2FjY2Vzc2libGUnICYmIGFjY2Vzc2liaWxpdHkgIT09ICd1bmFjY2Vzc2libGUnKSB7XG4gICAgYWNjZXNzaWJpbGl0eSA9ICdhbGwnO1xuICB9XG5cbiAgY29uc3QgcXVlcnlCb2R5ID0ge307XG4gIGlmIChncWxGaWx0ZXIpIHtcbiAgICBjb25zdCBxdWVyeVdpdGhGaWx0ZXIgPSBgcXVlcnkgKCRmaWx0ZXI6IEpTT04pIHtcbiAgICAgIF9hZ2dyZWdhdGlvbiB7XG4gICAgICAgICR7dHlwZX0gKGZpbHRlcjogJGZpbHRlciwgZmlsdGVyU2VsZjogZmFsc2UsIGFjY2Vzc2liaWxpdHk6ICR7YWNjZXNzaWJpbGl0eX0pIHtcbiAgICAgICAgICAke3JlZ3VsYXJBZ2dGaWVsZHMubWFwKChmaWVsZCkgPT4gaGlzdG9ncmFtUXVlcnlTdHJGb3JFYWNoRmllbGQoZmllbGQsIGZhbHNlKSl9XG4gICAgICAgICAgJHthc1RleHRBZ2dGaWVsZHMubWFwKChmaWVsZCkgPT4gaGlzdG9ncmFtUXVlcnlTdHJGb3JFYWNoRmllbGQoZmllbGQsIHRydWUpKX1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1gO1xuICAgIHF1ZXJ5Qm9keS52YXJpYWJsZXMgPSB7IGZpbHRlcjogZ3FsRmlsdGVyIH07XG4gICAgcXVlcnlCb2R5LnF1ZXJ5ID0gcXVlcnlXaXRoRmlsdGVyO1xuICB9IGVsc2Uge1xuICAgIHF1ZXJ5Qm9keS5xdWVyeSA9IGBxdWVyeSB7XG4gICAgICBfYWdncmVnYXRpb24ge1xuICAgICAgICAke3R5cGV9IChhY2Nlc3NpYmlsaXR5OiAke2FjY2Vzc2liaWxpdHl9KSB7XG4gICAgICAgICAgJHtyZWd1bGFyQWdnRmllbGRzLm1hcCgoZmllbGQpID0+IGhpc3RvZ3JhbVF1ZXJ5U3RyRm9yRWFjaEZpZWxkKGZpZWxkLCBmYWxzZSkpfVxuICAgICAgICAgICR7YXNUZXh0QWdnRmllbGRzLm1hcCgoZmllbGQpID0+IGhpc3RvZ3JhbVF1ZXJ5U3RyRm9yRWFjaEZpZWxkKGZpZWxkLCB0cnVlKSl9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9YDtcbiAgfVxuXG4gIHJldHVybiBmZXRjaChgJHtwYXRofSR7Z3JhcGhxbEVuZHBvaW50fWAsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiBjc3JmVG9rZW4gPyB7IC4uLmhlYWRlcnMsICd4LWNzcmYtdG9rZW4nOiBjc3JmVG9rZW4gfSA6IGhlYWRlcnMsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocXVlcnlCb2R5KSxcbiAgfSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG59O1xuXG5jb25zdCBxdWVyeUd1cHB5Rm9yU3RhdHVzID0gKHBhdGgpID0+IGZldGNoKGAke3BhdGh9JHtzdGF0dXNFbmRwb2ludH1gLCB7XG4gIG1ldGhvZDogJ0dFVCcsXG4gIGhlYWRlcnMsXG59KS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcblxuY29uc3QgbmVzdGVkSGlzdG9ncmFtUXVlcnlTdHJGb3JFYWNoRmllbGQgPSAobWFpbkZpZWxkLCBudW1lcmljQWdnQXNUZXh0KSA9PiAoYFxuICAke21haW5GaWVsZH0ge1xuICAgICR7bnVtZXJpY0FnZ0FzVGV4dCA/ICdhc1RleHRIaXN0b2dyYW0nIDogJ2hpc3RvZ3JhbSd9IHtcbiAgICAgIGtleVxuICAgICAgY291bnRcbiAgICAgIG1pc3NpbmdGaWVsZHMge1xuICAgICAgICBmaWVsZFxuICAgICAgICBjb3VudFxuICAgICAgfVxuICAgICAgdGVybXNGaWVsZHMge1xuICAgICAgICBmaWVsZFxuICAgICAgICBjb3VudFxuICAgICAgICB0ZXJtcyB7XG4gICAgICAgICAga2V5XG4gICAgICAgICAgY291bnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfWApO1xuXG5jb25zdCBxdWVyeUd1cHB5Rm9yU3ViQWdnID0gKFxuICBwYXRoLFxuICB0eXBlLFxuICBtYWluRmllbGQsXG4gIHRlcm1zRmllbGRzLFxuICBtaXNzaW5nRmllbGRzLFxuICBncWxGaWx0ZXIsXG4gIGFjYyxcbiAgbnVtZXJpY0FnZ0FzVGV4dCA9IGZhbHNlLFxuICBjc3JmVG9rZW4gPSAnJyxcbikgPT4ge1xuICBsZXQgYWNjZXNzaWJpbGl0eSA9IGFjYztcbiAgaWYgKGFjY2Vzc2liaWxpdHkgIT09ICdhbGwnICYmIGFjY2Vzc2liaWxpdHkgIT09ICdhY2Nlc3NpYmxlJyAmJiBhY2Nlc3NpYmlsaXR5ICE9PSAndW5hY2Nlc3NpYmxlJykge1xuICAgIGFjY2Vzc2liaWxpdHkgPSAnYWxsJztcbiAgfVxuXG4gIGNvbnN0IG5lc3RlZEFnZ0ZpZWxkcyA9IHt9O1xuICBpZiAodGVybXNGaWVsZHMpIHtcbiAgICBuZXN0ZWRBZ2dGaWVsZHMudGVybXNGaWVsZHMgPSB0ZXJtc0ZpZWxkcztcbiAgfVxuICBpZiAobWlzc2luZ0ZpZWxkcykge1xuICAgIG5lc3RlZEFnZ0ZpZWxkcy5taXNzaW5nRmllbGRzID0gbWlzc2luZ0ZpZWxkcztcbiAgfVxuXG4gIGNvbnN0IHF1ZXJ5ID0gYHF1ZXJ5ICgkbmVzdGVkQWdnRmllbGRzOiBKU09OKSB7XG4gICAgX2FnZ3JlZ2F0aW9uIHtcbiAgICAgICR7dHlwZX0gKG5lc3RlZEFnZ0ZpZWxkczogJG5lc3RlZEFnZ0ZpZWxkcywgYWNjZXNzaWJpbGl0eTogJHthY2Nlc3NpYmlsaXR5fSkge1xuICAgICAgICAke25lc3RlZEhpc3RvZ3JhbVF1ZXJ5U3RyRm9yRWFjaEZpZWxkKG1haW5GaWVsZCwgbnVtZXJpY0FnZ0FzVGV4dCl9XG4gICAgICB9XG4gICAgfVxuICB9YDtcbiAgY29uc3QgcXVlcnlCb2R5ID0geyBxdWVyeSB9O1xuICBxdWVyeUJvZHkudmFyaWFibGVzID0geyBuZXN0ZWRBZ2dGaWVsZHMgfTtcbiAgaWYgKGdxbEZpbHRlcikge1xuICAgIGNvbnN0IHF1ZXJ5V2l0aEZpbHRlciA9IGBxdWVyeSAoJGZpbHRlcjogSlNPTiwgJG5lc3RlZEFnZ0ZpZWxkczogSlNPTikge1xuICAgICAgX2FnZ3JlZ2F0aW9uIHtcbiAgICAgICAgJHt0eXBlfSAoZmlsdGVyOiAkZmlsdGVyLCBmaWx0ZXJTZWxmOiBmYWxzZSwgbmVzdGVkQWdnRmllbGRzOiAkbmVzdGVkQWdnRmllbGRzLCBhY2Nlc3NpYmlsaXR5OiAke2FjY2Vzc2liaWxpdHl9KSB7XG4gICAgICAgICAgJHtuZXN0ZWRIaXN0b2dyYW1RdWVyeVN0ckZvckVhY2hGaWVsZChtYWluRmllbGQsIG51bWVyaWNBZ2dBc1RleHQpfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfWA7XG4gICAgcXVlcnlCb2R5LnZhcmlhYmxlcyA9IHsgZmlsdGVyOiBncWxGaWx0ZXIsIG5lc3RlZEFnZ0ZpZWxkcyB9O1xuICAgIHF1ZXJ5Qm9keS5xdWVyeSA9IHF1ZXJ5V2l0aEZpbHRlcjtcbiAgfVxuICByZXR1cm4gZmV0Y2goYCR7cGF0aH0ke2dyYXBocWxFbmRwb2ludH1gLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczogY3NyZlRva2VuID8geyAuLi5oZWFkZXJzLCAneC1jc3JmLXRva2VuJzogY3NyZlRva2VuIH0gOiBoZWFkZXJzLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHF1ZXJ5Qm9keSksXG4gIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgZHVyaW5nIHF1ZXJ5R3VwcHlGb3JTdWJBZ2cgJHtlcnJ9YCk7XG4gICAgfSk7XG59O1xuXG5jb25zdCByYXdEYXRhUXVlcnlTdHJGb3JFYWNoRmllbGQgPSAoZmllbGQpID0+IHtcbiAgY29uc3Qgc3BsaXR0ZWRGaWVsZEFycmF5ID0gZmllbGQuc3BsaXQoJy4nKTtcbiAgY29uc3Qgc3BsaXR0ZWRGaWVsZCA9IHNwbGl0dGVkRmllbGRBcnJheS5zaGlmdCgpO1xuICBpZiAoc3BsaXR0ZWRGaWVsZEFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoYFxuICAgICR7c3BsaXR0ZWRGaWVsZH1cbiAgICBgKTtcbiAgfVxuICByZXR1cm4gKGBcbiAgJHtzcGxpdHRlZEZpZWxkfSB7XG4gICAgJHtyYXdEYXRhUXVlcnlTdHJGb3JFYWNoRmllbGQoc3BsaXR0ZWRGaWVsZEFycmF5LmpvaW4oJy4nKSl9XG4gIH1gKTtcbn07XG5cbmV4cG9ydCBjb25zdCBxdWVyeUd1cHB5Rm9yUmF3RGF0YUFuZFRvdGFsQ291bnRzID0gKFxuICBwYXRoLFxuICB0eXBlLFxuICBmaWVsZHMsXG4gIGdxbEZpbHRlcixcbiAgc29ydCxcbiAgZm9ybWF0LFxuICBvZmZzZXQgPSAwLFxuICBzaXplID0gMjAsXG4gIGFjY2Vzc2liaWxpdHkgPSAnYWxsJyxcbiAgY3NyZlRva2VuID0gJycsXG4pID0+IHtcbiAgbGV0IHF1ZXJ5TGluZSA9ICdxdWVyeSB7JztcbiAgaWYgKGdxbEZpbHRlciB8fCBzb3J0IHx8IGZvcm1hdCkge1xuICAgIHF1ZXJ5TGluZSA9IGBxdWVyeSAoJHtzb3J0ID8gJyRzb3J0OiBKU09OLCcgOiAnJ30ke2dxbEZpbHRlciA/ICckZmlsdGVyOiBKU09OLCcgOiAnJ30ke2Zvcm1hdCA/ICckZm9ybWF0OiBGb3JtYXQnIDogJyd9KSB7YDtcbiAgfVxuICBsZXQgZGF0YVR5cGVMaW5lID0gYCR7dHlwZX0gKGFjY2Vzc2liaWxpdHk6ICR7YWNjZXNzaWJpbGl0eX0sIG9mZnNldDogJHtvZmZzZXR9LCBmaXJzdDogJHtzaXplfSwgZm9ybWF0OiAkZm9ybWF0KSB7YDtcbiAgaWYgKGdxbEZpbHRlciB8fCBzb3J0IHx8IGZvcm1hdCkge1xuICAgIGRhdGFUeXBlTGluZSA9IGAke3R5cGV9IChhY2Nlc3NpYmlsaXR5OiAke2FjY2Vzc2liaWxpdHl9LCBvZmZzZXQ6ICR7b2Zmc2V0fSwgZmlyc3Q6ICR7c2l6ZX0sICR7Zm9ybWF0ID8gJ2Zvcm1hdDogJGZvcm1hdCwgJyA6ICcnfSwgJHtzb3J0ID8gJ3NvcnQ6ICRzb3J0LCAnIDogJyd9JHtncWxGaWx0ZXIgPyAnZmlsdGVyOiAkZmlsdGVyLCcgOiAnJ30pIHtgO1xuICB9XG4gIGxldCB0eXBlQWdnc0xpbmUgPSBgJHt0eXBlfSBhY2Nlc3NpYmlsaXR5OiAke2FjY2Vzc2liaWxpdHl9IHtgO1xuICBpZiAoZ3FsRmlsdGVyKSB7XG4gICAgdHlwZUFnZ3NMaW5lID0gYCR7dHlwZX0gKGZpbHRlcjogJGZpbHRlciwgYWNjZXNzaWJpbGl0eTogJHthY2Nlc3NpYmlsaXR5fSkge2A7XG4gIH1cbiAgY29uc3QgcHJvY2Vzc2VkRmllbGRzID0gZmllbGRzLm1hcCgoZmllbGQpID0+IHJhd0RhdGFRdWVyeVN0ckZvckVhY2hGaWVsZChmaWVsZCkpO1xuICBjb25zdCBxdWVyeSA9IGAke3F1ZXJ5TGluZX1cbiAgICAke2RhdGFUeXBlTGluZX1cbiAgICAgICR7cHJvY2Vzc2VkRmllbGRzLmpvaW4oJ1xcbicpfVxuICAgIH1cbiAgICBfYWdncmVnYXRpb24ge1xuICAgICAgJHt0eXBlQWdnc0xpbmV9XG4gICAgICAgIF90b3RhbENvdW50XG4gICAgICB9XG4gICAgfVxuICB9YDtcbiAgY29uc3QgcXVlcnlCb2R5ID0geyBxdWVyeSB9O1xuICBxdWVyeUJvZHkudmFyaWFibGVzID0ge307XG4gIGlmIChmb3JtYXQpIHF1ZXJ5Qm9keS52YXJpYWJsZXMuZm9ybWF0ID0gZm9ybWF0O1xuICBpZiAoZ3FsRmlsdGVyKSBxdWVyeUJvZHkudmFyaWFibGVzLmZpbHRlciA9IGdxbEZpbHRlcjtcbiAgaWYgKHNvcnQpIHF1ZXJ5Qm9keS52YXJpYWJsZXMuc29ydCA9IHNvcnQ7XG4gIHJldHVybiBmZXRjaChgJHtwYXRofSR7Z3JhcGhxbEVuZHBvaW50fWAsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiBjc3JmVG9rZW4gPyB7IC4uLmhlYWRlcnMsICd4LWNzcmYtdG9rZW4nOiBjc3JmVG9rZW4gfSA6IGhlYWRlcnMsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocXVlcnlCb2R5KSxcbiAgfSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBkdXJpbmcgcXVlcnlHdXBweUZvclJhd0RhdGFBbmRUb3RhbENvdW50cyAke2Vycn1gKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRHUUxGaWx0ZXIgPSAoZmlsdGVyT2JqKSA9PiB7XG4gIGNvbnN0IGZhY2V0c0xpc3QgPSBbXTtcbiAgT2JqZWN0LmtleXMoZmlsdGVyT2JqKS5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlcyA9IGZpbHRlck9ialtmaWVsZF07XG4gICAgY29uc3QgZmllbGRTcGxpdHRlZCA9IGZpZWxkLnNwbGl0KCcuJyk7XG4gICAgY29uc3QgZmllbGROYW1lID0gZmllbGRTcGxpdHRlZFtmaWVsZFNwbGl0dGVkLmxlbmd0aCAtIDFdO1xuICAgIC8vIFRoZSBjb21iaW5lIG1vZGUgZGVmYXVsdHMgdG8gT1Igd2hlbiBub3Qgc2V0LlxuICAgIGNvbnN0IGNvbWJpbmVNb2RlID0gZmlsdGVyVmFsdWVzLl9fY29tYmluZU1vZGUgPyBmaWx0ZXJWYWx1ZXMuX19jb21iaW5lTW9kZSA6ICdPUic7XG5cbiAgICBjb25zdCBoYXNTZWxlY3RlZFZhbHVlcyA9IGZpbHRlclZhbHVlcy5zZWxlY3RlZFZhbHVlcyAmJiBmaWx0ZXJWYWx1ZXMuc2VsZWN0ZWRWYWx1ZXMubGVuZ3RoID4gMDtcbiAgICBjb25zdCBoYXNSYW5nZUZpbHRlciA9IHR5cGVvZiBmaWx0ZXJWYWx1ZXMubG93ZXJCb3VuZCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGZpbHRlclZhbHVlcy51cHBlckJvdW5kICE9PSAndW5kZWZpbmVkJztcblxuICAgIGxldCBmYWNldHNQaWVjZSA9IHt9O1xuICAgIGlmIChoYXNTZWxlY3RlZFZhbHVlcyAmJiBjb21iaW5lTW9kZSA9PT0gJ09SJykge1xuICAgICAgZmFjZXRzUGllY2UgPSB7XG4gICAgICAgIElOOiB7XG4gICAgICAgICAgW2ZpZWxkTmFtZV06IGZpbHRlclZhbHVlcy5zZWxlY3RlZFZhbHVlcyxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChoYXNTZWxlY3RlZFZhbHVlcyAmJiBjb21iaW5lTW9kZSA9PT0gJ0FORCcpIHtcbiAgICAgIGZhY2V0c1BpZWNlID0geyBBTkQ6IFtdIH07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlclZhbHVlcy5zZWxlY3RlZFZhbHVlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBmYWNldHNQaWVjZS5BTkQucHVzaCh7XG4gICAgICAgICAgSU46IHtcbiAgICAgICAgICAgIFtmaWVsZE5hbWVdOiBbZmlsdGVyVmFsdWVzLnNlbGVjdGVkVmFsdWVzW2ldXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGhhc1JhbmdlRmlsdGVyKSB7XG4gICAgICBmYWNldHNQaWVjZSA9IHtcbiAgICAgICAgQU5EOiBbXG4gICAgICAgICAgeyAnPj0nOiB7IFtmaWVsZE5hbWVdOiBmaWx0ZXJWYWx1ZXMubG93ZXJCb3VuZCB9IH0sXG4gICAgICAgICAgeyAnPD0nOiB7IFtmaWVsZE5hbWVdOiBmaWx0ZXJWYWx1ZXMudXBwZXJCb3VuZCB9IH0sXG4gICAgICAgIF0sXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoZmlsdGVyVmFsdWVzLl9fY29tYmluZU1vZGUgJiYgIWhhc1NlbGVjdGVkVmFsdWVzICYmICFoYXNSYW5nZUZpbHRlcikge1xuICAgICAgLy8gVGhpcyBmaWx0ZXIgb25seSBoYXMgYSBjb21iaW5lIHNldHRpbmcgc28gZmFyLiBXZSBjYW4gaWdub3JlIGl0LlxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoaGFzU2VsZWN0ZWRWYWx1ZXMpIHtcbiAgICAgIC8vIGZpbHRlciBoYXMgc2VsZWN0ZWQgdmFsdWVzIGJ1dCB3ZSBkb24ndCBrbm93IGhvdyB0byBwcm9jZXNzIGl0XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcihmaWx0ZXJWYWx1ZXMpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGZpbHRlciBvYmplY3QnKTtcbiAgICB9XG4gICAgaWYgKGZpZWxkU3BsaXR0ZWQubGVuZ3RoID4gMSkgeyAvLyBuZXN0ZWQgZmllbGRcbiAgICAgIGZpZWxkU3BsaXR0ZWQucG9wKCk7XG4gICAgICBmYWNldHNQaWVjZSA9IHtcbiAgICAgICAgbmVzdGVkOiB7XG4gICAgICAgICAgcGF0aDogZmllbGRTcGxpdHRlZC5qb2luKCcuJyksIC8vIHBhcmVudCBwYXRoXG4gICAgICAgICAgLi4uZmFjZXRzUGllY2UsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBmYWNldHNMaXN0LnB1c2goZmFjZXRzUGllY2UpO1xuICB9KTtcbiAgY29uc3QgZ3FsRmlsdGVyID0ge1xuICAgIEFORDogZmFjZXRzTGlzdCxcbiAgfTtcbiAgcmV0dXJuIGdxbEZpbHRlcjtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG5leHBvcnQgY29uc3QgYXNrR3VwcHlBYm91dEFycmF5VHlwZXMgPSAocGF0aCkgPT4gcXVlcnlHdXBweUZvclN0YXR1cyhwYXRoKS50aGVuKChyZXMpID0+IHJlcy5pbmRpY2VzKTtcblxuZXhwb3J0IGNvbnN0IGFza0d1cHB5Rm9yQWdncmVnYXRpb25EYXRhID0gKFxuICBwYXRoLFxuICB0eXBlLFxuICByZWd1bGFyQWdnRmllbGRzLFxuICBhc1RleHRBZ2dGaWVsZHMsXG4gIGZpbHRlcixcbiAgYWNjZXNzaWJpbGl0eSxcbiAgY3NyZlRva2VuID0gJycsXG4pID0+IHtcbiAgY29uc3QgZ3FsRmlsdGVyID0gZ2V0R1FMRmlsdGVyKGZpbHRlcik7XG4gIHJldHVybiBxdWVyeUd1cHB5Rm9yQWdncyhwYXRoLCB0eXBlLCByZWd1bGFyQWdnRmllbGRzLCBhc1RleHRBZ2dGaWVsZHMsIGdxbEZpbHRlciwgYWNjZXNzaWJpbGl0eSwgY3NyZlRva2VuKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhc2tHdXBweUZvclN1YkFnZ3JlZ2F0aW9uRGF0YSA9IChcbiAgcGF0aCxcbiAgdHlwZSxcbiAgbWFpbkZpZWxkLFxuICBudW1lcmljQWdnQXNUZXh0LFxuICB0ZXJtc05lc3RlZEZpZWxkcyxcbiAgbWlzc2VkTmVzdGVkRmllbGRzLFxuICBmaWx0ZXIsXG4gIGFjY2Vzc2liaWxpdHksXG4gIGNzcmZUb2tlbixcbikgPT4ge1xuICBjb25zdCBncWxGaWx0ZXIgPSBnZXRHUUxGaWx0ZXIoZmlsdGVyKTtcbiAgcmV0dXJuIHF1ZXJ5R3VwcHlGb3JTdWJBZ2coXG4gICAgcGF0aCxcbiAgICB0eXBlLFxuICAgIG1haW5GaWVsZCxcbiAgICB0ZXJtc05lc3RlZEZpZWxkcyxcbiAgICBtaXNzZWROZXN0ZWRGaWVsZHMsXG4gICAgZ3FsRmlsdGVyLFxuICAgIGFjY2Vzc2liaWxpdHksXG4gICAgbnVtZXJpY0FnZ0FzVGV4dCxcbiAgICBjc3JmVG9rZW4sXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgYXNrR3VwcHlGb3JSYXdEYXRhID0gKFxuICBwYXRoLFxuICB0eXBlLFxuICBmaWVsZHMsXG4gIGZpbHRlcixcbiAgc29ydCxcbiAgZm9ybWF0LFxuICBvZmZzZXQgPSAwLFxuICBzaXplID0gMjAsXG4gIGFjY2Vzc2liaWxpdHkgPSAnYWxsJyxcbiAgY3NyZlRva2VuID0gJycsXG4pID0+IHtcbiAgY29uc3QgZ3FsRmlsdGVyID0gZ2V0R1FMRmlsdGVyKGZpbHRlcik7XG4gIHJldHVybiBxdWVyeUd1cHB5Rm9yUmF3RGF0YUFuZFRvdGFsQ291bnRzKFxuICAgIHBhdGgsXG4gICAgdHlwZSxcbiAgICBmaWVsZHMsXG4gICAgZ3FsRmlsdGVyLFxuICAgIHNvcnQsXG4gICAgZm9ybWF0LFxuICAgIG9mZnNldCxcbiAgICBzaXplLFxuICAgIGFjY2Vzc2liaWxpdHksXG4gICAgY3NyZlRva2VuLFxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbEZpZWxkc0Zyb21GaWx0ZXJDb25maWdzID0gKGZpbHRlclRhYkNvbmZpZ3MpID0+IGZpbHRlclRhYkNvbmZpZ3MucmVkdWNlKChhY2MsIGN1cikgPT4ge1xuICBPYmplY3Qua2V5cyhjdXIpXG4gICAgLmZpbHRlcigoa2V5KSA9PiBrZXkgPT09ICdmaWVsZHMnIHx8IGtleSA9PT0gJ2FzVGV4dEFnZ0ZpZWxkcycpXG4gICAgLmZvckVhY2goKGtleSkgPT4geyBhY2Nba2V5XSA9IGFjY1trZXldLmNvbmNhdChjdXJba2V5XSwgW10pOyB9KTtcbiAgcmV0dXJuIGFjYztcbn0sIHsgZmllbGRzOiBbXSwgYXNUZXh0QWdnRmllbGRzOiBbXSB9KTtcblxuLyoqXG4gKiBEb3dubG9hZCBhbGwgZGF0YSBmcm9tIGd1cHB5IHVzaW5nIGZpZWxkcywgZmlsdGVyLCBhbmQgc29ydCBhcmdzLlxuICogSWYgdG90YWwgY291bnQgaXMgbGVzcyB0aGFuIDEwMDAwIHRoaXMgd2lsbCB1c2Ugbm9ybWFsIGdyYXBocWwgZW5kcG9pbnRcbiAqIElmIGdyZWF0ZXIgdGhhbiAxMDAwMCwgdXNlIC9kb3dubG9hZCBlbmRwb2ludFxuICovXG5leHBvcnQgY29uc3QgZG93bmxvYWREYXRhRnJvbUd1cHB5ID0gKFxuICBwYXRoLFxuICB0eXBlLFxuICB0b3RhbENvdW50LFxuICB7XG4gICAgZmllbGRzLFxuICAgIGZpbHRlcixcbiAgICBzb3J0LFxuICAgIGFjY2Vzc2liaWxpdHksXG4gICAgZm9ybWF0LFxuICB9LFxuICBjc3JmVG9rZW4gPSAnJyxcbikgPT4ge1xuICBjb25zdCBTQ1JPTExfU0laRSA9IDEwMDAwO1xuICBjb25zdCBKU09OX0ZPUk1BVCA9IChmb3JtYXQgPT09ICdqc29uJyB8fCBmb3JtYXQgPT09IHVuZGVmaW5lZCk7XG4gIGlmICh0b3RhbENvdW50ID4gU0NST0xMX1NJWkUpIHtcbiAgICBjb25zdCBxdWVyeUJvZHkgPSB7IHR5cGUgfTtcbiAgICBpZiAoZmllbGRzKSBxdWVyeUJvZHkuZmllbGRzID0gZmllbGRzO1xuICAgIGlmIChmaWx0ZXIpIHF1ZXJ5Qm9keS5maWx0ZXIgPSBnZXRHUUxGaWx0ZXIoZmlsdGVyKTtcbiAgICBpZiAoc29ydCkgcXVlcnlCb2R5LnNvcnQgPSBzb3J0O1xuICAgIGlmICh0eXBlb2YgYWNjZXNzaWJpbGl0eSAhPT0gJ3VuZGVmaW5lZCcpIHF1ZXJ5Qm9keS5hY2Nlc3NpYmlsaXR5ID0gYWNjZXNzaWJpbGl0eTtcbiAgICByZXR1cm4gZmV0Y2goYCR7cGF0aH0ke2Rvd25sb2FkRW5kcG9pbnR9YCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiBjc3JmVG9rZW4gPyB7IC4uLmhlYWRlcnMsICd4LWNzcmYtdG9rZW4nOiBjc3JmVG9rZW4gfSA6IGhlYWRlcnMsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShxdWVyeUJvZHkpLFxuICAgIH0pXG4gICAgICAudGhlbigocikgPT4gci5qc29uKCkpXG4gICAgICAudGhlbigocmVzKSA9PiAoSlNPTl9GT1JNQVQgPyByZXMgOiBqc29uVG9Gb3JtYXQocmVzLCBmb3JtYXQpKSk7XG4gIH1cbiAgcmV0dXJuIGFza0d1cHB5Rm9yUmF3RGF0YShwYXRoLCB0eXBlLCBmaWVsZHMsIGZpbHRlciwgc29ydCwgZm9ybWF0LCAwLCB0b3RhbENvdW50LCBhY2Nlc3NpYmlsaXR5LCBjc3JmVG9rZW4pXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcyAmJiByZXMuZGF0YSAmJiByZXMuZGF0YVt0eXBlXSkge1xuICAgICAgICByZXR1cm4gSlNPTl9GT1JNQVQgPyByZXMuZGF0YVt0eXBlXSA6IGpzb25Ub0Zvcm1hdChyZXMuZGF0YVt0eXBlXSwgZm9ybWF0KTtcbiAgICAgIH1cbiAgICAgIHRocm93IEVycm9yKCdFcnJvciBkb3dubG9hZGluZyBkYXRhIGZyb20gR3VwcHknKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhc2tHdXBweUZvclRvdGFsQ291bnRzID0gKFxuICBwYXRoLFxuICB0eXBlLFxuICBmaWx0ZXIsXG4gIGFjY2Vzc2liaWxpdHkgPSAnYWxsJyxcbiAgY3NyZlRva2VuID0gJycsXG4pID0+IHtcbiAgY29uc3QgZ3FsRmlsdGVyID0gZ2V0R1FMRmlsdGVyKGZpbHRlcik7XG4gIGNvbnN0IHF1ZXJ5TGluZSA9IGBxdWVyeSAke2dxbEZpbHRlciA/ICcoJGZpbHRlcjogSlNPTiknIDogJyd9e2A7XG4gIGNvbnN0IHR5cGVBZ2dzTGluZSA9IGAke3R5cGV9ICR7Z3FsRmlsdGVyID8gJyhmaWx0ZXI6ICRmaWx0ZXIsICcgOiAnKCd9IGFjY2Vzc2liaWxpdHk6ICR7YWNjZXNzaWJpbGl0eX0pIHtgO1xuICBjb25zdCBxdWVyeSA9IGAke3F1ZXJ5TGluZX1cbiAgICBfYWdncmVnYXRpb24ge1xuICAgICAgJHt0eXBlQWdnc0xpbmV9XG4gICAgICAgIF90b3RhbENvdW50XG4gICAgICB9XG4gICAgfVxuICB9YDtcbiAgY29uc3QgcXVlcnlCb2R5ID0geyBxdWVyeSB9O1xuICBxdWVyeUJvZHkudmFyaWFibGVzID0ge307XG4gIGlmIChncWxGaWx0ZXIpIHF1ZXJ5Qm9keS52YXJpYWJsZXMuZmlsdGVyID0gZ3FsRmlsdGVyO1xuXG4gIHJldHVybiBmZXRjaChgJHtwYXRofSR7Z3JhcGhxbEVuZHBvaW50fWAsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiBjc3JmVG9rZW4gPyB7IC4uLmhlYWRlcnMsICd4LWNzcmYtdG9rZW4nOiBjc3JmVG9rZW4gfSA6IGhlYWRlcnMsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocXVlcnlCb2R5KSxcbiAgfSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5lcnJvcnMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBkdXJpbmcgZG93bmxvYWQgJHtyZXNwb25zZS5lcnJvcnN9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5fYWdncmVnYXRpb25bdHlwZV0uX3RvdGFsQ291bnQ7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBkdXJpbmcgZG93bmxvYWQgJHtlcnJ9YCk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsRmllbGRzRnJvbUd1cHB5ID0gKFxuICBwYXRoLFxuICB0eXBlLFxuICBjc3JmVG9rZW4gPSAnJyxcbikgPT4ge1xuICBjb25zdCBxdWVyeSA9IGB7XG4gICAgX21hcHBpbmcge1xuICAgICAgJHt0eXBlfVxuICAgIH1cbiAgfWA7XG4gIGNvbnN0IHF1ZXJ5Qm9keSA9IHsgcXVlcnkgfTtcbiAgcmV0dXJuIGZldGNoKGAke3BhdGh9JHtncmFwaHFsRW5kcG9pbnR9YCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IGNzcmZUb2tlbiA/IHsgLi4uaGVhZGVycywgJ3gtY3NyZi10b2tlbic6IGNzcmZUb2tlbiB9IDogaGVhZGVycyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShxdWVyeUJvZHkpLFxuICB9KS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuZGF0YS5fbWFwcGluZ1t0eXBlXSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3Igd2hlbiBnZXR0aW5nIGZpZWxkcyBmcm9tIGd1cHB5OiAke2Vycn1gKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBY2Nlc3NpYmxlUmVzb3VyY2VzID0gYXN5bmMgKFxuICBwYXRoLFxuICB0eXBlLFxuICBhY2Nlc3NpYmxlRmllbGRDaGVja0xpc3QsXG4gIGNzcmZUb2tlbiA9ICcnLFxuKSA9PiB7XG4gIGNvbnN0IGFjY2Vzc2libGVQcm9taXNlTGlzdCA9IFtdO1xuICBjb25zdCB1bmFjY2Vzc2libGVQcm9taXNlTGlzdCA9IFtdO1xuICBhY2Nlc3NpYmxlRmllbGRDaGVja0xpc3QuZm9yRWFjaCgoYWNjZXNzaWJsZUZpZWxkKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hSZXF1ZXN0UHJvbWlzZSA9IChhY2Nlc3NpYmxlKSA9PiB7XG4gICAgICBjb25zdCBxdWVyeSA9IGBxdWVyeSB7XG4gICAgICAgIF9hZ2dyZWdhdGlvbiB7XG4gICAgICAgICAgJHt0eXBlfSAoYWNjZXNzaWJpbGl0eTogJHthY2Nlc3NpYmxlID8gJ2FjY2Vzc2libGUnIDogJ3VuYWNjZXNzaWJsZSd9KSB7XG4gICAgICAgICAgICAke2FjY2Vzc2libGVGaWVsZH0ge1xuICAgICAgICAgICAgICBoaXN0b2dyYW0ge1xuICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1gO1xuICAgICAgY29uc3QgcXVlcnlCb2R5ID0geyBxdWVyeSB9O1xuXG4gICAgICByZXR1cm4gZmV0Y2goYCR7cGF0aH0ke2dyYXBocWxFbmRwb2ludH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiBjc3JmVG9rZW4gPyB7IC4uLmhlYWRlcnMsICd4LWNzcmYtdG9rZW4nOiBjc3JmVG9rZW4gfSA6IGhlYWRlcnMsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHF1ZXJ5Qm9keSksXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKHJlc3BvbnNlKSA9PiAoe1xuICAgICAgICAgICAgZmllbGQ6IGFjY2Vzc2libGVGaWVsZCxcbiAgICAgICAgICAgIGxpc3Q6IChyZXNwb25zZS5kYXRhLl9hZ2dyZWdhdGlvblt0eXBlXVthY2Nlc3NpYmxlRmllbGRdXG4gICAgICAgICAgICAgIC5oaXN0b2dyYW0ubWFwKChpdGVtKSA9PiBpdGVtLmtleSkpLFxuICAgICAgICAgIH0pLFxuICAgICAgICApXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciB3aGVuIGdldHRpbmcgZmllbGRzIGZyb20gZ3VwcHk6ICR7ZXJyfWApO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGFjY2Vzc2libGVQcm9taXNlTGlzdC5wdXNoKGZldGNoUmVxdWVzdFByb21pc2UodHJ1ZSkpO1xuICAgIHVuYWNjZXNzaWJsZVByb21pc2VMaXN0LnB1c2goZmV0Y2hSZXF1ZXN0UHJvbWlzZShmYWxzZSkpO1xuICB9KTtcblxuICBjb25zdCBhY2Nlc3NpYmxlRmllbGRPYmplY3QgPSB7fTtcbiAgY29uc3QgYWNjZXNzaWJsZUZpZWxkUmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5hbGwoYWNjZXNzaWJsZVByb21pc2VMaXN0KTtcbiAgYWNjZXNzaWJsZUZpZWxkUmVzdWx0LmZvckVhY2goKHJlcykgPT4ge1xuICAgIGFjY2Vzc2libGVGaWVsZE9iamVjdFtyZXMuZmllbGRdID0gcmVzLmxpc3Q7XG4gIH0pO1xuICBjb25zdCB1bmFjY2Vzc2libGVGaWVsZE9iamVjdCA9IHt9O1xuICBjb25zdCB1bmFjY2Vzc2libGVGaWVsZFJlc3VsdCA9IGF3YWl0IFByb21pc2UuYWxsKHVuYWNjZXNzaWJsZVByb21pc2VMaXN0KTtcbiAgdW5hY2Nlc3NpYmxlRmllbGRSZXN1bHQuZm9yRWFjaCgocmVzKSA9PiB7XG4gICAgdW5hY2Nlc3NpYmxlRmllbGRPYmplY3RbcmVzLmZpZWxkXSA9IHJlcy5saXN0O1xuICB9KTtcbiAgcmV0dXJuIHsgYWNjZXNzaWJsZUZpZWxkT2JqZWN0LCB1bmFjY2Vzc2libGVGaWVsZE9iamVjdCB9O1xufTtcbiJdLCJtYXBwaW5ncyI6IjRjQUFBLElBQUFBLGdCQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxXQUFBLEdBQUFELE9BQUEsaUJBQTRDLFNBQUFELHVCQUFBRyxDQUFBLFVBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsZ0JBQUFBLENBQUEsYUFBQUUsUUFBQUMsQ0FBQSxvQ0FBQUQsT0FBQSx3QkFBQUUsTUFBQSx1QkFBQUEsTUFBQSxDQUFBQyxRQUFBLGFBQUFGLENBQUEsaUJBQUFBLENBQUEsZUFBQUEsQ0FBQSxVQUFBQSxDQUFBLHlC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