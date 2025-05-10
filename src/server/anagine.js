import express from 'express';
import { spawn } from 'child_process';
import log from './logger';
import config from './config';
import path from 'path';


const ollamaService = require('./utils/llm');

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
                "patient": "Patient A",
                "age": 30,
                "hospital": {
                    "name": "General Hospital",
                    "location": "Indiana"
                }
            },
            {
                "patient": "Patient B",
                "age": 65,
                "hospital": {
                    "name": "Another Hospital",
                    "location": "New York"
                }
            }
    ],
    });
    return 0;
});

anagineRouter.get('/pdf', (req, res) => {
    // log.info(filepath);
    const filepath = "/home/exouser/Downloads/gen3.pdf"
    // res.contentType('application/pdf');
    res.download(filepath);
    return 0;
});


anagineRouter.get('/R/lm', (req, res) => {
    const data = { x: [1, 2, 3], y: [3, 5, 7] };
    const inputJSON = JSON.stringify(data);
    const rScriptPath = path.join(__dirname, '../R/lm.R');
    log.info('rScriptPath:', rScriptPath);
    const rProcess = spawn('Rscript', [rScriptPath, inputJSON]);

    let output = '';
    let errorOutput = '';

    // Collect data from stdout
    rProcess.stdout.on('data', (dataChunk) => {
        output += dataChunk.toString();
    });
    log.info('output:', output);

    // Collect errors from stderr
    rProcess.stderr.on('data', (dataChunk) => {
        errorOutput += dataChunk.toString();
    });

    // When the R script finishes
    rProcess.on('close', (code) => {
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


anagineRouter.get('/llm/chat', async (req, res) => {

    const {model=config.ollamaConfig.model , prompt, stream=false, ...options } = req.query;

    const messages = [
        {
          role: 'user',
          content: prompt || 'Hi, could you introduce yourself?'
        }
      ];

    const llm_response = await ollamaService.chatWithModel(model, messages, stream, options);

    res.send({
        response: llm_response,
    });
    return 0;
});

anagineRouter.get('/llm/generate', async (req, res) => {

    const {model=config.ollamaConfig.model , prompt, stream=false, ...options } = req.query;

    const messages = [
        {
          role: 'user',
          content: prompt || 'Hi, could you introduce yourself?'
        }
      ];

    const llm_response = await ollamaService.generateText(model, messages, stream, options);

    res.send({
        response: llm_response,
    });
    return 0;
});

export default anagineRouter;
