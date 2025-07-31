import express from 'express';
import { spawn } from 'child_process';
import log from './logger.js';
import config from './config.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { chatWithModel, generateText } from './utils/llm.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const anagineRouter = express.Router();

anagineRouter.get('/hello', (req, res) => {
  res.send({
    text: "Hello World",
    time: new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'long',
      timeZone: 'UTC'
    }),
    subject: [
      {
        patient: "Patient A",
        age: 30,
        hospital: {
          name: "General Hospital",
          location: "Indiana"
        }
      },
      {
        patient: "Patient B",
        age: 65,
        hospital: {
          name: "Another Hospital",
          location: "New York"
        }
      }
    ]
  });
});

anagineRouter.get('/pdf', (req, res) => {
  const filepath = "/home/exouser/Downloads/gen3.pdf";
  res.download(filepath);
});

anagineRouter.post('/R/lm', (req, res) => {
  const data = req.body || { x: [1, 2, 3], y: [3, 5, 7] };
  const inputJSON = JSON.stringify(data);
  const rScriptPath = path.join(__dirname, '../R/lm.R');
  log.info('rScriptPath:', rScriptPath);
  const rProcess = spawn('Rscript', [rScriptPath, inputJSON]);

  let output = '';
  let errorOutput = '';

  rProcess.stdout.on('data', (dataChunk) => {
    output += dataChunk.toString();
  });

  rProcess.stderr.on('data', (dataChunk) => {
    errorOutput += dataChunk.toString();
  });

  rProcess.on('close', (code) => {
    if (code !== 0) {
      console.error('R script error:', errorOutput);
      return res.status(500).send(`Error running R script: ${errorOutput}`);
    }

    try {
      const result = JSON.parse(output);
      result.time = new Date().toLocaleString('en-US', {
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

anagineRouter.get('/llm/chat', async (req, res) => {
  const { model = config.ollamaConfig.model, prompt, stream = false, ...options } = req.query;

  const messages = [
    {
      role: 'user',
      content: prompt || 'Hi, could you introduce yourself?'
    }
  ];

  try {
    const llm_response = await chatWithModel(model, messages, stream, options);
    res.send({ response: llm_response });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

anagineRouter.get('/llm/generate', async (req, res) => {
  const { model = config.ollamaConfig.model, prompt, stream = false, ...options } = req.query;

  const messages = [
    {
      role: 'user',
      content: prompt || 'Hi, could you introduce yourself?'
    }
  ];

  try {
    const llm_response = await generateText(model, messages, stream, options);
    res.send({ response: llm_response });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

export default anagineRouter;

