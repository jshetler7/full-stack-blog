import * as express from 'express';
import chirpsRouter from './blogRoute';
import authorsRouter from './authorsRoute';
import tagsRouter from './tagsRoute';
import blogtagsRouter from './blogtagsRoute';
import donateRouter from './donateRoute';

const router = express.Router();

router.use('/blogs', chirpsRouter);
router.use('/authors', authorsRouter);
router.use('/tags', tagsRouter);
router.use('/blogtags', blogtagsRouter);
router.use('/donate', donateRouter);

export default router;