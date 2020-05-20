import express from 'express';
import router from '../routes/index.route';
import helmet from 'helmet';
import bodyParser from 'body-parser';

export const app = express();

/**
 *
 * secure apps by setting various HTTP headers
 */
app.use(helmet());

app.use(bodyParser.json({limit: '5mb'}));

app.use('/', router);

/**
 *
 * Export express app.
 */
export default app;
