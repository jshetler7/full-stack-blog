import * as express from 'express';
import * as jwt from 'jsonwebtoken';

import blogsRouter from './blogRoute';
import authorsRouter from './authorsRoute';
import tagsRouter from './tagsRoute';
import blogtagsRouter from './blogtagsRoute';
import donateRouter from './donateRoute';
import contactRouter from './contactRouter';
import { jwt_config } from '../../config';
import { Payload } from '../../types';
import { isAdmin } from '../../middlewares';

const router = express.Router();

router.get("/pizzas", isAdmin, async (req, res) => {
    try {
        const pizzas = ["cheese", "pepperoni", "Supreme"];
        res.json(pizzas);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Yikes, that aint it chief.', error: error.message });
    }
})

router.use('/blogs', blogsRouter);
router.use('/authors', authorsRouter);
router.use('/tags', tagsRouter);
router.use('/blogtags', blogtagsRouter);
router.use('/donate', donateRouter);
router.use('/contact', contactRouter);

export default router;