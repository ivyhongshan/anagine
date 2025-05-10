"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const parseJWT = req => {
  const authHeader = req.headers.authorization || null;
  let jwt = null;
  if (authHeader != null) {
    const parts = authHeader.split(' ');
    if (parts.length === 2) {
      if (parts[0].toLowerCase() === 'bearer') {
        jwt = parts[1]; // eslint-disable-line
      }
    }
  }
  return jwt;
};
var _default = exports.default = {
  parseJWT
};