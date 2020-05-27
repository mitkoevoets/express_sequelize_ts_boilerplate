import express from 'express';
import userRoutes from './user.route';

const router = express.Router();

/**
 *
 * GET /health-check - Check service health
 */
router.get('/', (req, res) => res.send('OK'));

/**
 *
 * Model routes
 */
router.use('/user', userRoutes);

export default router;
