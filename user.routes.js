import { Router } from 'express';
import * as uc from '../module/user.controller.js';

const router = Router();

router.post('/signup', uc.signup);
router.put('/:id', uc.createOrUpdateUser);
router.get('/by-email', uc.findUserByEmail);
router.get('/:id', uc.getUserById);

export default router;