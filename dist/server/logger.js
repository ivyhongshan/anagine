"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));
var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));
var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));
var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));
var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));
var _loglevel = _interopRequireDefault(require("loglevel"));
const originalFactory = _loglevel.default.methodFactory;
_loglevel.default.methodFactory = (methodName, logLevel, loggerName) => {
  const rawMethod = originalFactory(methodName, logLevel, loggerName);
  return (message, ...args) => {
    let timeStr = new Date().toTimeString();
    timeStr = timeStr.substring(0, (0, _indexOf.default)(timeStr).call(timeStr, ' '));
    const combinedMsg = (0, _reduce.default)(args).call(args, (acc, cur) => {
      if (typeof cur === 'string') {
        return `${acc} ${cur}`;
      }
      return `${acc} ${(0, _stringify.default)(cur, null, 4)}`;
    }, message);
    rawMethod(`[${timeStr}] ${methodName.toUpperCase()}: ${combinedMsg}`);
  };
};
const numLevels = {
  0: 'TRACE',
  1: 'DEBUG',
  2: 'INFO',
  3: 'WARN',
  4: 'ERROR',
  5: 'SILENT'
};
_loglevel.default.levelEnums = {
  TRACE: 0,
  DEBUG: 1,
  INFO: 2,
  WARN: 3,
  ERROR: 4,
  SILENT: 5
};
_loglevel.default.setLevel('INFO');
_loglevel.default.setLogLevel = level => {
  var _context, _context2;
  if (!(0, _includes.default)(_context = (0, _keys.default)(numLevels)).call(_context, level) && !(0, _includes.default)(_context2 = (0, _keys.default)(_loglevel.default.levelEnums)).call(_context2, level)) {
    throw new Error(`Invalid log level ${level}`);
  }
  _loglevel.default.setLevel(level);
  _loglevel.default.info('log level set to', numLevels[_loglevel.default.getLevel()]);
};
_loglevel.default.rawOutput = (level, msg) => {
  let parsedLevel = level;
  if (typeof level === 'string') {
    var _context3;
    if (!(0, _includes.default)(_context3 = (0, _keys.default)(_loglevel.default.levelEnums)).call(_context3, level)) {
      throw new Error(`Invalid log level ${level}`);
    }
    parsedLevel = _loglevel.default.levelEnums[level];
  }
  if (parsedLevel >= _loglevel.default.getLevel()) {
    console.log(msg); // eslint-disable-line no-console
  }
};
var _default = exports.default = _loglevel.default;