import express from 'express';
import router from '../../routes/index.route';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cors from 'cors';

export const app = express();


/**
 *
 * Middlewares
 */
app.use(helmet());
app.use(cors());
app.use(bodyParser.json({limit: '5mb'}));

/**
 *
 * Register routes.
 */
app.use('/', router);

/**
 *
 * Export express app.
 */
export default app;
