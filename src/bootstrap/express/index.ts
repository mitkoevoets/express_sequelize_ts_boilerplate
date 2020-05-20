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


//
// // enable detailed API logging in dev env
// if (config.env === 'development') {
//   expressWinston.requestWhitelist.push('body');
//   expressWinston.responseWhitelist.push('body');
//   app.use(expressWinston.logger({
//     winstonInstance,
//     meta: true, // optional: log meta data about request (defaults to true)
//     msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
//     colorStatus: true, // Color the status code (default green, 3XX cyan, 4XX yellow, 5XX red).
//   }));
// }
//
// /**
//  *
//  * Register routes.
//  */
// app.use('/', routes);
//
// /**
//  *
//  * Error handling.
//  */
// app.use(APIErrorHandler);
// app.use(fourOFourHandler);
// app.use(stackTraceHandler);
//
// /**
//  *
//  * Export express app.
//  */
// export default app;
//
//
// app.use('/', router);
//
// import express from 'express';
// import router from '../routes/index.route';
// import helmet from 'helmet';
// import bodyParser from 'body-parser';
//
// export const app = express();

//
