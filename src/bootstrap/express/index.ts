import express from 'express';
import router from '../../routes/index.route';
import config from '../../config';
import helmet from 'helmet';

export const app = express();

// secure apps by setting various HTTP headers
/**
 *
 */
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// enable detailed API logging in dev env
if (config.env === 'development') {
  expressWinston.requestWhitelist.push('body');
  expressWinston.responseWhitelist.push('body');
  app.use(expressWinston.logger({
    winstonInstance,
    meta: true, // optional: log meta data about request (defaults to true)
    msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
    colorStatus: true, // Color the status code (default green, 3XX cyan, 4XX yellow, 5XX red).
  }));
}

/**
 *
 * Register routes.
 */
app.use('/', routes);

/**
 *
 * Error handling.
 */
app.use(APIErrorHandler);
app.use(fourOFourHandler);
app.use(stackTraceHandler);

/**
 *
 * Export express app.
 */
export default app;


app.use('/', router);
