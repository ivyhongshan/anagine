import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import config from './config';
import log from './logger';
// import headerParser from './utils/headerParser';
// import getAuthHelperInstance from './auth/authHelper';
import graphQLProxy from './graphql';
import {statusProxy, versionProxy} from './endpoints';
import anagineRouter from './anagine';
import CodedError from './utils/error';

const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.json({ limit: '50mb' }));

const startServer = async () => {

    app.use('/anagine', anagineRouter, (req, res, err, next) => {
        if (err instanceof CodedError) {
            // deepcode ignore ServerLeak: no important information exists in error
            res.status(err.code).send(err.msg);
        } else {
            // deepcode ignore ServerLeak: no important information exists in error
            res.status(500).send(err);
        }
    });

    app.use('/graphql', graphQLProxy);

    // health check endpoint
    app.use('/_status', statusProxy);

    app.use('/_version', versionProxy);

    app.listen(config.port, () => {
        log.info(`[Server] anagine listening on port ${config.port}!`);
    });
};

startServer();
