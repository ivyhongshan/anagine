"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
var _utils = require("../utils");
var _utils2 = _interopRequireDefault(require("../__mockData__/utils.data"));
describe('Parse fields from GraphQL query to fields in ES query', () => {
  test('could parse fields in GraphQL query correctly', async () => {
    expect((0, _utils.fromFieldsToSource)(_utils2.default.parsedInfo)).toEqual(_utils2.default.fields);
  });
});