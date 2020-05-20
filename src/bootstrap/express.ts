import express from 'express';
import router from '../routes/index.route';

export const app = express();

// app.use(bodyParser.urlencoded({extended: true}));
//
// // middleware for json body parsing
// app.use(bodyParser.json({limit: '5mb'}));
//
// // enable corse for all origins
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Expose-Headers", "x-total-count");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
//   res.header("Access-Control-Allow-Headers", "Content-Type,authorization");
//
//   next();
// });
//
// app.use('/movies', movies);
// app.use('/actors', actors);
//
// app.use(errorhandler({
//   debug: process.env.ENV !== 'prod',
//   log: true,
// }));

app.use('/', router);
