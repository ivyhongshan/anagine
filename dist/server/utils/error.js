"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class CodedError extends Error {
  constructor(code, msg) {
    super(msg);
    this.code = code;
    this.msg = msg;
  }
}
var _default = exports.default = CodedError;