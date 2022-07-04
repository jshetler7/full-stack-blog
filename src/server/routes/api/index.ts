import * as express from 'express';
import contactRouter from './contactRouter';

const router = express.Router();

router.use('/contact', contactRouter);

export default router;