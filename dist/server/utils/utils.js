"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.transferSlashStyleToDashStyle = exports.processNestedFieldNames = exports.isWhitelisted = exports.fromFieldsToSource = exports.firstLetterUpperCase = exports.filterFieldMapping = exports.buildNestedFieldMapping = exports.buildNestedField = exports.addTwoFilters = void 0;
var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));
var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));
var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));
var _values = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/values"));
var _lastIndexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/last-index-of"));
var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));
var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));
var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));
var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));
var _assign = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/assign"));
var _config = _interopRequireDefault(require("../config"));
var _logger = _interopRequireDefault(require("../logger"));
const firstLetterUpperCase = str => str.charAt(0).toUpperCase() + (0, _slice.default)(str).call(str, 1);

/**
 * transfer '/programs/DEV/projects/test' to 'DEV-test'
 */
exports.firstLetterUpperCase = firstLetterUpperCase;
const transferSlashStyleToDashStyle = str => {
  const reg = /^\/programs\/(.*)\/projects\/(.*)$/;
  const matchResult = str.match(reg);
  if (!matchResult) return null;
  if (matchResult.length !== 3 || matchResult[0] !== str) return null;
  const programName = matchResult[1];
  const projectName = matchResult[2];
  return `${programName}-${projectName}`;
};
exports.transferSlashStyleToDashStyle = transferSlashStyleToDashStyle;
const addTwoFilters = (filter1, filter2) => {
  if (!filter1 && !filter2) return {};
  if (!filter1) return filter2;
  if (!filter2) return filter1;
  const appliedFilter = {
    AND: [filter1, filter2]
  };
  return appliedFilter;
};
exports.addTwoFilters = addTwoFilters;
const isWhitelisted = key => {
  var _context;
  const lowerCasedWhitelist = (0, _map.default)(_context = _config.default.encryptWhitelist).call(_context, w => {
    if (typeof w === 'string') {
      return w.toLowerCase();
    }
    return w;
  });
  const lowerCasedKey = typeof key === 'string' ? key.toLowerCase() : key;
  return (0, _includes.default)(lowerCasedWhitelist).call(lowerCasedWhitelist, lowerCasedKey);
};

/**
 * Convert from fields of graphql query produced by graphql library to list of querying fields
 * This list will be put to _source fields of the ES query
 * @param parsedInfo: parsing information from graphql library
 * @returns: list of selected fields.
 */
exports.isWhitelisted = isWhitelisted;
const fromFieldsToSource = parsedInfo => {
  let stack = (0, _values.default)(parsedInfo.fieldsByTypeName[firstLetterUpperCase(parsedInfo.name)]);
  const levels = {
    0: stack.length
  };
  const fields = [];
  let curNodeName = '';
  let currentLevel = 0;
  while (stack.length > 0) {
    if (levels[currentLevel] === 0) {
      currentLevel -= 1;
      const lastPeriod = (0, _lastIndexOf.default)(curNodeName).call(curNodeName, '.');
      curNodeName = (0, _slice.default)(curNodeName).call(curNodeName, 0, lastPeriod !== -1 ? lastPeriod : 0);
    } else {
      var _context2;
      const cur = stack.pop();
      const newTypeName = cur.name;
      const fieldName = (0, _filter.default)(_context2 = [curNodeName, newTypeName]).call(_context2, s => s.length > 0).join('.');
      if (newTypeName in cur.fieldsByTypeName) {
        const children = (0, _values.default)(cur.fieldsByTypeName[newTypeName]);
        curNodeName = fieldName;
        levels[currentLevel] -= 1;
        currentLevel += 1;
        levels[currentLevel] = children.length;
        stack = (0, _concat.default)(stack).call(stack, children);
      } else {
        fields.push(fieldName);
        levels[currentLevel] -= 1;
      }
    }
  }
  return fields;
};
exports.fromFieldsToSource = fromFieldsToSource;
const buildNestedField = (key, value) => {
  let builtObj = {};
  if (value.type === 'nested') {
    var _context3;
    const nestedProps = [];
    (0, _forEach.default)(_context3 = (0, _keys.default)(value.properties)).call(_context3, propsKey => {
      nestedProps.push(buildNestedField(propsKey, value.properties[propsKey]));
    });
    builtObj = {
      name: key,
      type: value.type,
      nestedProps
    };
  } else {
    builtObj = {
      name: key,
      type: value.type
    };
  }
  return builtObj;
};

/**
 * This function takes a nested field object and parses names of each field
 * by concatenating `.` to parent and child field names recursively.
 * The returned object is a nested array, which will be deeply flattened later.
 * @param field: a nested field object (with `nestedProps`)
 */
exports.buildNestedField = buildNestedField;
const processNestedFieldNames = field => {
  var _context4;
  const resultArray = [];
  (0, _forEach.default)(_context4 = field.nestedProps).call(_context4, prop => {
    if (prop.nestedProps) {
      const newField = (0, _assign.default)({}, prop);
      newField.name = `${field.name}.${prop.name}`;
      resultArray.push(processNestedFieldNames(newField));
    } else {
      resultArray.push(`${field.name}.${prop.name}`);
    }
  });
  return resultArray;
};
exports.processNestedFieldNames = processNestedFieldNames;
const buildNestedFieldMapping = (field, parent) => {
  var _context5;
  if (!field.nestedProps) {
    return parent ? `${parent}.${field.name}` : field.name;
  }
  const newParent = parent ? `${parent}.${field.name}` : field.name;
  const resultArray = (0, _map.default)(_context5 = field.nestedProps).call(_context5, nestedFields => buildNestedFieldMapping(nestedFields, newParent));
  return resultArray;
};
exports.buildNestedFieldMapping = buildNestedFieldMapping;
const filterFieldMapping = fieldArray => (parent, args) => {
  const {
    searchInput
  } = args;
  const regEx = new RegExp(searchInput);
  _logger.default.debug('utils [filterFieldMapping] searchInput', searchInput);
  const resultArray = (0, _filter.default)(fieldArray).call(fieldArray, field => regEx.test(field));
  return resultArray;
};
exports.filterFieldMapping = filterFieldMapping;