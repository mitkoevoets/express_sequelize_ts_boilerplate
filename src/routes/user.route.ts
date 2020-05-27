import express from 'express';
import userController from '../controllers/user.controller';

const router = express.Router();

router.route('/')
  .get(userController.list)
  .post(userController.create)

router.route('/:userId')
  .get(userController.get)
  .post(userController.update)

router.param('userId', userController.load);

export default router;
