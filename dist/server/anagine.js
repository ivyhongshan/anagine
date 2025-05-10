"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));
var _express = _interopRequireDefault(require("express"));
var _child_process = require("child_process");
var _logger = _interopRequireDefault(require("./logger"));
var _config = _interopRequireDefault(require("./config"));
const path = require('path');
const anagineRouter = _express.default.Router();
anagineRouter.get('/hello', (req, res) => {
  _logger.default.info('Hello World');
  _logger.default.info(new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'long',
    timeZone: 'UTC'
  }));
  res.send({
    text: "Hello World",
    time: new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'long',
      timeZone: 'UTC'
    }),
    subject: [{
      "patient": "Patient A",
      "age": 30,
      "hospital": {
        "name": "General Hospital",
        "location": "Indiana"
      }
    }, {
      "patient": "Patient B",
      "age": 65,
      "hospital": {
        "name": "Another Hospital",
        "location": "New York"
      }
    }]
  });
  return 0;
});
anagineRouter.get('/pdf', (req, res) => {
  // log.info(filepath);
  const filepath = "/home/exouser/Downloads/gen3.pdf";
  // res.contentType('application/pdf');
  res.download(filepath);
  return 0;
});
anagineRouter.get('/R/lm', (req, res) => {
  const data = {
    x: [1, 2, 3],
    y: [3, 5, 7]
  };
  const inputJSON = (0, _stringify.default)(data);
  const rScriptPath = path.join(__dirname, '../R/lm.R');
  _logger.default.info('rScriptPath:', rScriptPath);
  const rProcess = (0, _child_process.spawn)('Rscript', [rScriptPath, inputJSON]);
  let output = '';
  let errorOutput = '';

  // Collect data from stdout
  rProcess.stdout.on('data', dataChunk => {
    output += dataChunk.toString();
  });
  _logger.default.info('output:', output);

  // Collect errors from stderr
  rProcess.stderr.on('data', dataChunk => {
    errorOutput += dataChunk.toString();
  });

  // When the R script finishes
  rProcess.on('close', code => {
    if (code !== 0) {
      console.error('R script error:', errorOutput);
      return res.status(500).send(`Error running R script: ${errorOutput}`);
    }
    try {
      // Parse the JSON output from the R script
      const result = JSON.parse(output);
      result["time"] = new Date().toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'long',
        timeZone: 'UTC'
      });
      res.json(result);
    } catch (err) {
      console.error('Error parsing R script output:', err);
      res.status(500).send('Error parsing R script output.');
    }
  });
});
var _default = exports.default = anagineRouter;