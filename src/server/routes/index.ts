import * as express from 'express';
import chirpsRouter from './chirpsRoute';
import usersRouter from './usersRoute'

const router = express.Router();

router.use('/chirps', chirpsRouter);
router.use('/users', usersRouter);

export default router;