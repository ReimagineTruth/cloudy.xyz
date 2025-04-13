import express from 'express';
import { auth } from '../middleware/auth';
import { verifyAdReward } from '../controllers/rewards.controller';

const router = express.Router();

// Verify ad reward
router.post('/verify-ad', auth, verifyAdReward);

export default router; 