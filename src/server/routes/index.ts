import * as express from 'express';
import chirpsRouter from './blogRoute';
import authorsRouter from './authorsRoute';
import tagsRouter from './tagsRoute';
import blogtagsRouter from './blogtagsRoute';
import donateRouter from './donateRoute';
import contactRouter from './api/contactRouter';

const router = express.Router();

router.use('/blogs', chirpsRouter);
router.use('/authors', authorsRouter);
router.use('/tags', tagsRouter);
router.use('/blogtags', blogtagsRouter);
router.use('/donate', donateRouter);
router.use('/contact', contactRouter);

export default router;