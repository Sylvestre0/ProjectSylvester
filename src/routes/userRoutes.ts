import { Router } from 'express';
import { addUser } from '../controllers/userController';
import { pageLogin } from '../controllers/pagesController';

const router = Router();

router.get('/', pageLogin);
router.post('/users', addUser);

export default router;