import express from 'express';

const router = express.Router();

/**
 *
 * GET /health-check - Check service health
 */
router.get('/', (req, res) => res.send('OK'));

export default router;
