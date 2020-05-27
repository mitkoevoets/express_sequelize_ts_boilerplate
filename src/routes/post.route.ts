import express from 'express';
import postController from '../controllers/post.controller';

const router = express.Router();

router.route('/')
  .get(postController.list)
  .post(postController.create)

router.route('/:postId')
  .get(postController.get)
  .post(postController.update)

router.param('postId', postController.load);
export default router;
