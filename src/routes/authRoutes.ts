import { Router } from 'express';
import { pageLogin } from '../controllers/pagesController';
import { register} from '../controllers/authController';

const router = Router();

router.get('/users', pageLogin);
// router.get('/login', login)
router.post('/register',register)


export default router;