import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { listPatients, getPatient } from '../controllers/patient.controller.js';

const router = Router();
router.get('/', requireAuth, listPatients);
router.get('/:id', requireAuth, getPatient);

export default router;


