import express from 'express';
import userController from '../controllers/user.controller';

const router = express.Router();

router.route('/')
  .get(userController.list)

// router.route('/:userId')
//   .get(userController.get)
//
// router.param('userId', userController.load);

export default router;
