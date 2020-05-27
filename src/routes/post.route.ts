import express from 'express';
import postController from '../controllers/post.controller';

const router = express.Router();

router.route('/')
  .get(postController.list)

export default router;
